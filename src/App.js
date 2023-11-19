import logo from './logo.svg';
import './App.css';
import QRComponent from './components/QRCode';
import QRScanner from './components/QRScanner'

function App() {

  const handleScanSuccess = (data) => {
    console.log('Scanned data:', data);
  };

  const handleScanError = (error) => {
    console.error('Scan error:', error);
  };

  return (
    <div className="App">
      <h1>Escáner de Códigos QR</h1>
      <div className='scanner'>
        <QRScanner
          className="pad"
          onScanSuccess={handleScanSuccess}
          onScanError={handleScanError}
        />
      </div>
     
      <br></br>
      <QRComponent/>ç
    </div>
  );
}

export default App;
