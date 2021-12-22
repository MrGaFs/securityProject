import { TwoStringEncryptyion } from './TwoString.js';

export class AutoKey extends TwoStringEncryptyion {
	protected genrateKey(): void{
		this.sKey = this.key;
		this.sKey += this.massage;
		console.log(this.key);
	}

	encrypt = () :string=> {
		this.genrateKey();
		return this.TwoStringEnc();
	}

	decrypt = ():string => {
		this.sKey = this.key;
		let sRet = new String();
		for (let i = 0; i < this.massage.length; ++i) {
			const nValue = this.sKey.charCodeAt(i);
			const cChar = this.charChange(this.massage[i], -nValue);
			sRet += cChar;
			this.sKey += cChar;
		}
		return sRet.toString();
	}
}