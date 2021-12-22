import { TwoStringEncryptyion } from "./TwoString.js";
export class Vigenere extends TwoStringEncryptyion {
    constructor(massage, key) {
        super(massage, key);
        this.encrypt = () => {
            return this.TwoStringEnc();
        };
        this.genrateKey();
    }
    genrateKey() {
        for (let i = 0; i < this.massage.length; ++i)
            this.sKey += this.key[i % this.key.length];
    }
    decrypt() {
        let sRet = new String();
        for (let i = 0; i < this.massage.length; ++i) {
            const value = this.sKey.charCodeAt(i);
            const cChar = this.charChange(this.massage[i], -value);
            sRet += cChar;
        }
        return sRet.toString();
    }
}
