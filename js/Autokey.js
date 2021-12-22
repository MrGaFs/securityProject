import { TwoStringEncryptyion } from './TwoString.js';
export class AutoKey extends TwoStringEncryptyion {
    constructor() {
        super(...arguments);
        this.encrypt = () => {
            this.genrateKey();
            return this.TwoStringEnc();
        };
        this.decrypt = () => {
            this.sKey = this.key;
            let sRet = new String();
            for (let i = 0; i < this.massage.length; ++i) {
                const nValue = this.sKey.charCodeAt(i);
                const cChar = this.charChange(this.massage[i], -nValue);
                sRet += cChar;
                this.sKey += cChar;
            }
            return sRet.toString();
        };
    }
    genrateKey() {
        this.sKey = this.key;
        this.sKey += this.massage;
        console.log(this.key);
    }
}
