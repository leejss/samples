import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useRef } from "react";

interface ScannerProps {
  onScan: (resultValue: string) => void;
  onError: (errorText: string) => void;
}
const config = { fps: 10, qrbox: { width: 500, height: 500 } };
const Scanner = ({ onScan, onError }: ScannerProps) => {
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    if (scannerRef.current !== null) return;
    scannerRef.current = new Html5Qrcode("qr-reader");

    // ! Start scan on mount
    const startScanning = async () => {
      if (scannerRef.current === null) return;
      await scannerRef.current.start(
        { facingMode: "environment" },
        config,
        (resultText: string) => {
          if (resultText) {
            onScan(resultText);
          }
        },
        (errorText: string) => {
          onError(errorText);
        },
      );
    };

    startScanning().catch((error) => {
      console.error("Failed to start scanning", error);
    });
  }, [onError, onScan]);

  return (
    <div>
      <div
        style={{
          width: 500,
        }}
        id="qr-reader"
      ></div>
    </div>
  );
};

export default Scanner;
