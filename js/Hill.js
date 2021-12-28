export class Hill {
    constructor(massage, key) {
        this.split = () => {
            for (let i = 0; i < this.massage.length; i += 2) {
                let tmp = new Array();
                tmp.push(this.massage[i]);
                tmp.push(this.massage[i + 1]);
                this.splited.push(tmp);
            }
        };
        this.cypher = (char) => {
            let value;
            value = [char[0].charCodeAt(0) - 97, char[1].charCodeAt(0) - 97];
            let tmp = value[0];
            value[0] = (Number(tmp * this.key[0][0]) + Number(value[1] * this.key[0][1]));
            value[1] = (Number(tmp * this.key[1][0]) + Number(value[1] * this.key[1][1]));
            value[0] %= 26;
            value[1] %= 26;
            console.log(value);
            return String.fromCharCode(value[0] + 97) + String.fromCharCode(value[1] + 97);
        };
        this.encrypt = () => {
            let ret = '';
            for (let i = 0; i < this.splited.length; i++) {
                ret += this.cypher(this.splited[i]);
            }
            return ret;
        };
        this.massage = massage;
        if (this.massage.length & 1) {
            this.massage += 'x';
        }
        this.key = key;
        this.massage.toLowerCase();
        this.splited = new Array();
        this.split();
    }
    decrypt() {
        return '';
    }
}
