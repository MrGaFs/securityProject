import { Cypher } from "./Cypher.js";
import { Encryption } from "./Encryption.js";
export abstract class TwoStringEncryptyion extends Encryption implements Cypher{
	protected sKey: string = '';
	protected TwoStringEnc = (): string => {
		let sRet = new String();
		for (let i = 0; i < this.massage.length; ++i) {
			const nValue = this.sKey.charCodeAt(i);
			sRet += this.charChange(this.massage[i], nValue);
		}
		return sRet.toString();
	}
	protected abstract genrateKey(): void;

}