import React from 'react'
import { QRCode } from 'react-qr-code'

const QRComponent = () => {
  return (
    <div>
      <h1>Prueba a escanear el código QR con la cámara!</h1>
      <QRCode 
        value="https://reboot.academy/"
        size={256} // Tamaño del código QR
        bgColor={"#ffffff"} // Color de fondo
        fgColor={"#000000"} // Color del código QR
        level={"Q"} // Nivel de error (L, M, Q, H)
      />
    </div>
    
  )
}

export default QRComponent