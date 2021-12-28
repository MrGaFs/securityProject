export class Rsa {
    constructor() {
        this.primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,];
        this.getPublicKey = () => {
            let ret = 2;
            while (true) {
                if (this.gcd(ret, this.phi) === 1)
                    break;
                ret++;
            }
            return ret;
        };
        this.pow = (base, exp) => {
            let mod = this.n;
            base %= mod, exp %= mod;
            if (exp === 0)
                return 1;
            let ret = this.pow(base, exp / 2);
            ret %= mod;
            ret *= ret;
            ret %= mod;
            if (exp & 1)
                ret *= base;
            return ret % mod;
        };
        this.getPrivateKey = () => {
            let ret = 1;
            while (true) {
                if ((ret * this.publicKey) % this.phi === 1)
                    break;
                ret++;
            }
            return ret;
        };
        this.gcd = (a, b) => {
            if (!b) {
                return a;
            }
            return this.gcd(b, a % b);
        };
        this.setMassage = (massage) => {
            this.massage = massage;
        };
        this.p = this.primeNumbers[Math.floor(Math.random() * this.primeNumbers.length)];
        this.q = this.primeNumbers[Math.floor(Math.random() * this.primeNumbers.length)];
        this.massage = 0;
        this.n = this.p * this.q;
        this.phi = (this.p - 1) * (this.q - 1);
        this.publicKey = this.getPublicKey();
        this.privateKey = this.getPrivateKey();
        console.log(this.toString());
    }
    toString() {
        return `p = ${this.p}
		q = ${this.q}
		privateKey = ${this.privateKey}
		publicKey = ${this.publicKey}
		n = ${this.n}
		`;
    }
    encrypt() {
        let ret = this.pow(this.massage, this.publicKey);
        return String(ret).toString();
    }
    decrypt() {
        let ret = this.pow(this.massage, this.privateKey);
        console.log(this.massage, this.privateKey, this.n, this.pow(this.massage, this.privateKey));
        return String(ret).toString();
    }
}
console.log(new Rsa().pow(2, 10));
