import QRCode from 'qrcode';

export function createQRCode(canvasElement, url) {
    return QRCode.toCanvas(canvasElement, url, {
        width: 400,
        margin: 0
    });    
}