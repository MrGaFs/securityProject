import { Encryption } from "./Encryption.js";
export class Ceaser extends Encryption {
    constructor() {
        super(...arguments);
        this.isNumber = () => {
            if (isNaN(Number(this.key)))
                throw new Error('Key Not a Number');
            else
                return null;
        };
        this.encrypt = () => {
            this.isNumber();
            let sRet = new String();
            for (let i = 0; i < this.massage.length; ++i) {
                if (!this.isSpecialChar(this.massage[i]))
                    sRet += this.charChange(this.massage[i], +(Number(this.key)));
                else
                    sRet += this.massage[i];
            }
            return sRet.toString();
        };
        this.decrypt = () => {
            this.isNumber();
            let sRet = new String();
            for (let i = 0; i < this.massage.length; ++i) {
                if (!this.isSpecialChar(this.massage[i]))
                    sRet += this.charChange(this.massage[i], -(Number(this.key)));
                else
                    sRet += this.massage[i];
            }
            return sRet.toString();
        };
    }
}
