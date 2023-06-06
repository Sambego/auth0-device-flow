import './style.css';
import {getDeviceCode} from './authentication';
import {createQRCode} from './qr';

const startElement = document.querySelector('#start');
const loginButtonElement = document.querySelector('#login');

const codesElement = document.querySelector('#codes');
const canvasElement = document.querySelector('#qr-canvas');
const userCodeElement = document.querySelector('#user-code');

let codesResponse;

async function handleRequestCodes() {
    try {
        codesResponse = await getDeviceCode();
        
        await createQRCode(canvasElement, codesResponse['verification_uri_complete']);
        userCodeElement.innerHTML = codesResponse['user_code'];
        
        startElement.classList.toggle('hidden');
        codesElement.classList.toggle('hidden');
    } catch (error) {
        console.error(error);
    }
}

loginButtonElement.addEventListener('click', handleRequestCodes);
