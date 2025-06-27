import React, { useState } from 'react';
import { useZxing } from 'react-zxing';
import { XMarkIcon, CameraIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

interface BarcodeScannerProps {
  onScan: (barcode: string) => void;
  onClose: () => void;
}

const BarcodeScanner: React.FC<BarcodeScannerProps> = ({ onScan, onClose }) => {
  const [error, setError] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(true);
  const [mode, setMode] = useState<'camera' | 'manual'>('camera');
  const [manualBarcode, setManualBarcode] = useState('');

  const { ref } = useZxing({
    onDecodeResult(result) {
      const barcode = result.getText();
      if (barcode && isScanning && mode === 'camera') {
        setIsScanning(false);
        onScan(barcode);
      }
    },
    onError(error) {
      console.error('Barcode scanner error:', error);
      if (mode === 'camera') {
        setError('Fehler beim Scannen. Bitte versuchen Sie es erneut.');
      }
    },
  });

  const handleManualSubmit = () => {
    if (manualBarcode.length >= 8) {
      onScan(manualBarcode);
    } else {
      setError('Bitte geben Sie einen gültigen Barcode ein (mindestens 8 Ziffern).');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col">
      {/* Header */}
      <div className="bg-white p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Barcode erfassen</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        
        {/* Mode Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => {
              setMode('camera');
              setError(null);
              setIsScanning(true);
            }}
            className={`flex-1 px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 ${
              mode === 'camera'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <CameraIcon className="w-5 h-5" />
            Kamera
          </button>
          <button
            onClick={() => {
              setMode('manual');
              setError(null);
            }}
            className={`flex-1 px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 ${
              mode === 'manual'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <PencilSquareIcon className="w-5 h-5" />
            Manuell
          </button>
        </div>
      </div>

      {/* Scanner/Input Area */}
      <div className="flex-1 relative flex items-center justify-center p-4">
        {mode === 'camera' ? (
          <div className="relative w-full max-w-md aspect-[4/3]">
            <video
              ref={ref}
              className="w-full h-full object-cover rounded-lg"
            />
            
            {/* Scanning Frame Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-32 border-2 border-white rounded-lg relative">
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-blue-500 rounded-tl-lg"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-blue-500 rounded-tr-lg"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-blue-500 rounded-bl-lg"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-blue-500 rounded-br-lg"></div>
              </div>
            </div>

            {/* Scanning Animation */}
            {isScanning && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-px bg-red-500 animate-pulse"></div>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full max-w-md bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Barcode manuell eingeben</h3>
            <input
              type="text"
              value={manualBarcode}
              onChange={(e) => {
                setManualBarcode(e.target.value.replace(/[^0-9]/g, ''));
                setError(null);
              }}
              placeholder="z.B. 4104420033863"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg font-mono"
              maxLength={13}
              autoFocus
            />
            <p className="text-sm text-gray-500 mt-2">
              Geben Sie den Barcode ein, der unter dem Strichcode steht
            </p>
            <button
              onClick={handleManualSubmit}
              disabled={manualBarcode.length < 8}
              className="w-full mt-4 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
            >
              Barcode suchen
            </button>
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="bg-white p-4">
        <div className="text-center">
          {error ? (
            <p className="text-red-600 mb-2">{error}</p>
          ) : mode === 'camera' ? (
            <>
              <CameraIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">
                Richten Sie die Kamera auf den Barcode
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Der Barcode wird automatisch erkannt
              </p>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-600">
                Die Barcode-Nummer finden Sie unter dem Strichcode auf der Verpackung
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BarcodeScanner;