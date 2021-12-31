export class Rsa {
    constructor() {
        this.primeNumbers = [23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
            127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251,
            257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397,
            401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557,
            563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
            709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863,
            877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
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
        return `	p = ${this.p}
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
