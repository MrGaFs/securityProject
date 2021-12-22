export abstract class Encryption {
	protected massage: string;
	protected key: string;

	constructor(massage: string, key: string) {
		this.massage = massage;
		this.key = key;
	}

	protected changeUpperCase = (charValue: number, ChangeValue: number):number => {
		ChangeValue %= 65;
		charValue -= 65;
		charValue = (charValue + ChangeValue) % 26;
		charValue = charValue < 0 ? charValue + 26 : charValue;
		charValue += 65;
		return charValue;
	}

	protected changeLowerCase = (nCharValue: number, nChangeValue: number): number => {
		nChangeValue %= 97;
		nCharValue -= 97;
		nCharValue = (nCharValue + nChangeValue) % 26;
		nCharValue = nCharValue < 0 ? nCharValue + 26 : nCharValue;
		nCharValue += 97;
		return nCharValue;
	}

	protected charChange = (char: string, value: number): string => {
		let charAscii: number = char.charCodeAt(0);
		if (charAscii >= 97) charAscii = this.changeLowerCase(charAscii, value);
		else charAscii = this.changeUpperCase(charAscii, value);
		return String.fromCharCode(charAscii);
	}
	
	protected isSpecialChar = (char: string): boolean => {
		return char.charCodeAt(0) < 65 || char.charCodeAt(0) > 122;
	}

	abstract encrypt(): string;
	abstract decrypt(): string;
}
