import './style.css';
import {getDeviceCode, pollForTokens} from './authentication';
import {createQRCode} from './qr';

const startElement = document.querySelector('#start');
const loginButtonElement = document.querySelector('#login');

const codesElement = document.querySelector('#codes');
const canvasElement = document.querySelector('#qr-canvas');
const userCodeElement = document.querySelector('#user-code');

let codesResponse;
let tokensResponse;

async function handlePollForTokens() {
    const pollInterval = setInterval(async () => {
        const response = await pollForTokens(codesResponse['device_code']);
        if (response.responseStatus === 200) {
            tokensResponse = response;
            clearInterval(pollInterval);
        } 
    }, codesResponse.interval * 1000);
};

async function handleRequestCodes() {
    try {
        codesResponse = await getDeviceCode();
        
        await createQRCode(canvasElement, codesResponse['verification_uri_complete']);
        userCodeElement.innerHTML = codesResponse['user_code'];
        
        startElement.classList.toggle('hidden');
        codesElement.classList.toggle('hidden');

        handlePollForTokens();
    } catch (error) {
        console.error(error);
    }
};

loginButtonElement.addEventListener('click', handleRequestCodes);
