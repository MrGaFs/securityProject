import { PlayFair } from "./PlayFair.js";
import { Vigenere } from "./Vignere.js";
import { Ceaser } from "./Ceaser.js";
import { AutoKey } from "./Autokey.js";
import { Encryption } from "./Encryption.js";
import {Hill} from "./Hill.js";

const vSetOutput = (sMassage: string): void => {
	const element = document.querySelector('#outputValue');
	if (element == null)
		throw new Error('Output is null');
	if (sMassage != undefined)
		element.innerHTML = sMassage;
	else
		element.innerHTML = '';
}

/**
 * 
 */
const encryptionHeart = (): Encryption|Hill => {
	const massageInput: HTMLInputElement | null = document.querySelector('#massage');
	const keyInput: HTMLInputElement | null = document.querySelector('#key');
	const typeSelect: HTMLSelectElement | null = document.querySelector('#cypher');
	if (massageInput == null || keyInput == null || typeSelect == null)
		throw new Error('Input is null');
	let type = typeSelect.selectedIndex;
	let massage = massageInput.value;
	let key = keyInput.value;
	let enc: Encryption|Hill;
	if (type === 0) {
		enc = new Ceaser(massage, key);
	}
	else if (type === 1) {
		enc = new Vigenere(massage, key);
	}
	else if (type === 2) {
		enc = new AutoKey(massage, key);
	}
	else if (type === 3) {
		enc = new PlayFair(massage, key);
	}
	else if(type === 4){
		let tKey= key.split(',').map(Number);
		let hKey: [[number, number], [number, number]] =
			[[tKey[0], tKey[1]], [tKey[2], tKey[3]]];
		enc = new Hill(massage, hKey);
	}
	else {
		throw new Error('Type is not found');
	}
	return enc;
}

let encrypt = (): void => {
	let massage = encryptionHeart().encrypt();
	vSetOutput(massage);
}
let decrypt = (): void => {
	let massage = (encryptionHeart() as Encryption).decrypt();
	vSetOutput(massage);
}

let encryptBtn: HTMLElement | null = document.getElementById('encryptBtn');
let decryptBtn: HTMLElement | null = document.getElementById('decryptBtn');
if (encryptBtn == null || decryptBtn == null)
	throw new Error('Button is null');
encryptBtn.addEventListener('click', encrypt);
decryptBtn.addEventListener('click', decrypt);
let typeSelect:HTMLSelectElement|null = document.querySelector('#cypher');
if (typeSelect == null)
	throw new Error('Type is null');
typeSelect.addEventListener('change', () => {
if (typeSelect == null)
	throw new Error('Type is null');
	if (decryptBtn == null)
		throw new Error('Key is null');
	if (typeSelect.selectedIndex === 4) {
		decryptBtn.style.display = 'none';
	}
	else
	decryptBtn.style.display = 'inline';
}
);