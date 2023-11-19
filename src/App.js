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
