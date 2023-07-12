import { Html5Qrcode } from "html5-qrcode";
import { useCallback, useEffect, useState } from "react";

const config = { fps: 10, qrbox: { width: 500, height: 500 } };
const useScanner = () => {
  const [scanner, setScanner] = useState<Html5Qrcode | null>(null);
  const [resultText, setResultText] = useState("");
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    const html5Qrcode = new Html5Qrcode("qr-reader");
    setScanner(html5Qrcode);
  }, []);

  const startScanning = useCallback(async () => {
    if (scanner === null) return;
    await scanner.start(
      { facingMode: "environment" },
      config,
      (resultText) => {
        setResultText(resultText);
      },
      (errorText) => {
        setErrorText(errorText);
      },
    );
  }, [scanner]);

  const stopScanning = useCallback(async () => {
    if (scanner === null) return;
    await scanner.stop();
  }, [scanner]);

  return {
    scanner,
    startScanning,
    stopScanning,
    resultText,
    errorText,
  };
};

export default useScanner;
