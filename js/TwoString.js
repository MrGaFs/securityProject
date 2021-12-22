import { Encryption } from "./Encryption.js";
export class TwoStringEncryptyion extends Encryption {
    constructor() {
        super(...arguments);
        this.sKey = '';
        this.TwoStringEnc = () => {
            let sRet = new String();
            for (let i = 0; i < this.massage.length; ++i) {
                const nValue = this.sKey.charCodeAt(i);
                sRet += this.charChange(this.massage[i], nValue);
            }
            return sRet.toString();
        };
    }
}
