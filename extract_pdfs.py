#!/usr/bin/env python3
import os
import PyPDF2
import sys

def extract_pdf_text(pdf_path, output_path):
    """Extract text from PDF and save to file"""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            text = ""
            
            print(f"Extracting {os.path.basename(pdf_path)} - {len(pdf_reader.pages)} pages")
            
            for page_num, page in enumerate(pdf_reader.pages):
                text += f"\n--- Seite {page_num + 1} ---\n"
                text += page.extract_text()
                
                if (page_num + 1) % 10 == 0:
                    print(f"  Processed {page_num + 1}/{len(pdf_reader.pages)} pages...")
            
            with open(output_path, 'w', encoding='utf-8') as out_file:
                out_file.write(text)
            
            print(f"✓ Saved to {os.path.basename(output_path)}")
            return True
            
    except Exception as e:
        print(f"Error processing {pdf_path}: {e}")
        return False

def main():
    pdf_dir = "Literatur Propädeutikum"
    
    # PDFs to process (exclude already processed pdf1)
    pdfs = [
        ("55100-02-S#1-2002103.pdf", "pdf2_full.txt"),
        ("55100-03-S#1-0000000.pdf", "pdf3_full.txt"),
        ("55100-04-S#1-000000.pdf", "pdf4_full.txt"),
        ("55100-05-S#1-2001418.pdf", "pdf5_full.txt")
    ]
    
    for pdf_file, output_file in pdfs:
        pdf_path = os.path.join(pdf_dir, pdf_file)
        output_path = os.path.join(pdf_dir, output_file)
        
        if os.path.exists(pdf_path):
            extract_pdf_text(pdf_path, output_path)
        else:
            print(f"PDF not found: {pdf_path}")

if __name__ == "__main__":
    main()