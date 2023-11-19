import logo from './logo.svg';
import './App.css';
import QRComponent from './components/QRCode';
import QRScanner from './components/QRScanner';
import { useState } from 'react';

function App() {

  let [success, setSuccess] = useState(null);

  const handleScanSuccess = (data) => {
    setSuccess('DETECTED!!!!!')
    console.log('Scanned data:', data);
  };

  const handleScanError = (error) => {
    // console.error('Scan error:', error);
  };

  return (
    <div className="App">
      { success && <h1>SUCCESS!!!!!</h1> }
      <h1>Escáner de Códigos QR</h1>
      <div className='scanner'>
        <QRScanner
          onScanSuccess={handleScanSuccess}
          onScanError={handleScanError}
        />
      </div>
     
      <br></br>
      <QRComponent/>
    </div>
  );
}

export default App;
