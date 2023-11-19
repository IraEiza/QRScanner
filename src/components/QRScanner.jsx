import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRCodeScanner = ({ onScanSuccess, onScanError }) => {
  const qrScannerRef = useRef(null);

  useEffect(() => {
    // Configura el lector de QR
    const html5QrcodeScanner = new Html5QrcodeScanner(
      "qr-reader",
      { fps: 10, qrbox: 250 },
      false
    );

    // Inicia el escáner
    html5QrcodeScanner.render(onScanSuccess, onScanError);

    // Limpieza al desmontar el componente
    return () => {
      html5QrcodeScanner.clear();
    };
  }, [onScanSuccess, onScanError]);

  return <div id="qr-reader" ref={qrScannerRef} />;
};

export default QRCodeScanner;
