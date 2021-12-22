import { Encryption } from "./Encryption.js";

export class PlayFair extends Encryption {


	apper = {} as { [key: string]: boolean };
	square: Array<Array<string>> = new Array<Array<string>>(5);
	striped = new Array<Array<string>>();



	constructor(massage: string, key: string) {
		super(massage.toLowerCase(), key);
		this.decorateMassage();
		console.log('this is the massage after decorate: ' + this.massage);
		for(let i = 0; i < 5; ++i)
			this.square[i] = new Array<string>(5);
		this.fillApper();
		this.createTheSqure();
		this.oMakeStrip();
	}

	private decorateMassage(): void {
		this.massage = this.massage.replace(/j/g, 'i');
		this.massage.toLowerCase();
		this.key = this.key.replace(/j/g, 'i');
		this.key.toLowerCase();
	}

	private fillApper = () => {
		for (let i = 0; i < 26; ++i) {
			this.apper[String.fromCharCode(97 + i)] = false;
		}
	}


	private createTheSqure = (): void => {
		const SZ = this.key.length;
		console.table(this.apper);
		let nDistinct = 0;
		for (let i = 0; i < SZ; ++i) {
			const cChar: string = this.key[i];
			if (!this.apper[cChar]) {
				this.apper[cChar] = true;
				this.square[Math.floor(nDistinct / 5)][nDistinct % 5] = cChar;
				nDistinct++;
			}
		}
		for (let i = 0; i < 26; ++i) {
			const cChar = String.fromCharCode(i + 97);
			if (!this.apper[cChar] && cChar != 'j') {
				this.apper[cChar] = true;
				this.square[Math.floor(nDistinct / 5)][nDistinct % 5] = cChar;
				nDistinct++;
			}
		}
		console.table(this.square);
	}


	private oMakeStrip = () => {
		for (let i = 0; i < this.massage.length; ++i) {
			let oTmp: Array<string> = new Array<string>(2);
			if (this.massage[i + 1] == this.massage[i])
				oTmp = [this.massage[i], 'x'];
			else if (i + 1 == this.massage.length)
				oTmp = [this.massage[i], 'z'];
			else {
				oTmp = [this.massage[i], this.massage[i + 1]];
				i++;
			}
			this.striped.push(oTmp);
		}
	}


	private charSearch = (char: string): Array<number> => {
		for (let i = 0; i < 5; ++i)
			for (let j = 0; j < 5; ++j)
				if (char == this.square[i][j])
					return [i, j];
		return [-1, -1];
	}



	private encryptTwo = (twoChar: Array<string>): string => {
		let sRet = new String;
		const [cFirst, cSecond] = twoChar;
		let [nXFirst, nYFirst] = this.charSearch(cFirst);
		let [nXSecond, nYSecond] = this.charSearch(cSecond);
		if (nXFirst == nXSecond) {
			nYFirst = (nYFirst == 4) ? 0 : nYFirst + 1;
			nYSecond = (nYSecond == 4) ? 0 : nYSecond + 1;
		}


		else if (nYFirst == nYSecond) {
			nXFirst = (nXFirst == 4) ? 0 : nXFirst + 1;
			nXSecond = (nXSecond == 4) ? 0 : nXSecond + 1;
		}
		else {
			[nYFirst, nYSecond] = [nYSecond, nYFirst];
		}
		sRet = this.square[nXFirst][nYFirst] + this.square[nXSecond][nYSecond];
		return sRet.toString();
	}



	private decryptTwo = (twoChar: Array<string>): string => {
		let sRet = new String;
		const [cFirst, cSecond] = twoChar;
		let [nXFirst, nYFirst] = this.charSearch(cFirst);
		let [nXSecond, nYSecond] = this.charSearch(cSecond);
		if (nXFirst == nXSecond) {
			nYFirst = (nYFirst == 0) ? 4 : nYFirst - 1;
			nYSecond = (nYSecond == 0) ? 4 : nYSecond - 1;
		}
		else if (nYFirst == nYSecond) {
			nXFirst = (nXFirst == 0) ? 4 : nXFirst - 1;
			nXSecond = (nXSecond == 0) ? 4 : nXSecond - 1;
		}
		else {
			[nYFirst, nYSecond] = [nYSecond, nYFirst];
		}
		sRet = this.square[nXFirst][nYFirst] + this.square[nXSecond][nYSecond];
		return sRet.toString();
	}



	encrypt = (): string => {
		let sRet = new String();
		for (let i = 0; i < this.striped.length; ++i) {
			sRet += this.encryptTwo(this.striped[i]);
		}
		return sRet.toString();
	}


	decrypt = (): string => {
		let sRet = new String();
		for (let i = 0; i < this.striped.length; ++i) {
			sRet += this.decryptTwo(this.striped[i]);
		}
		return sRet.toString();
	}
}