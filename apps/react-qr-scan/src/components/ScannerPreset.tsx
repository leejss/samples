import { useEffect, useState } from "react";
import { Html5QrcodeScanner, type Html5QrcodeResult } from "html5-qrcode";

const Scanner = () => {
  const [uri, setUri] = useState("");
  const onSuccess = (decodedText: string, decodedResult: Html5QrcodeResult) => {
    console.log(`Code matched = ${decodedText}`, decodedResult);

    setUri(decodedText);
  };
  const onFailure = (errorText: string) => {
    console.warn(`Code scan error = ${errorText}`);
  };

  useEffect(() => {
    const html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: { width: 250, height: 250 } }, false);
    html5QrcodeScanner.render(onSuccess, onFailure);
  }, []);
  return (
    <div>
      <div id="reader" />
      {uri ? <p>{JSON.stringify(uri, null, 2)}</p> : <></>}
    </div>
  );
};

export default Scanner;
