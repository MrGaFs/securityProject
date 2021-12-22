import { TwoStringEncryptyion } from "./TwoString.js";
export class Vigenere extends TwoStringEncryptyion {
	constructor(massage: string, key: string) {
		super(massage, key)
		this.genrateKey();
	}
	protected genrateKey(): void {
		for (let i = 0; i < this.massage.length; ++i)
			this.sKey += this.key[i % this.key.length];
	}
	encrypt = (): string => {
		return this.TwoStringEnc();
	}
	decrypt(): string {
		let sRet = new String();
		for (let i = 0; i < this.massage.length; ++i) {
			const value = this.sKey.charCodeAt(i);
			const cChar = this.charChange(this.massage[i], - value);
			sRet += cChar;
		}
		return sRet.toString();
	}
}