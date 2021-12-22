export class Encryption {
    constructor(massage, key) {
        this.changeUpperCase = (charValue, ChangeValue) => {
            ChangeValue %= 65;
            charValue -= 65;
            charValue = (charValue + ChangeValue) % 26;
            charValue = charValue < 0 ? charValue + 26 : charValue;
            charValue += 65;
            return charValue;
        };
        this.changeLowerCase = (nCharValue, nChangeValue) => {
            nChangeValue %= 97;
            nCharValue -= 97;
            nCharValue = (nCharValue + nChangeValue) % 26;
            nCharValue = nCharValue < 0 ? nCharValue + 26 : nCharValue;
            nCharValue += 97;
            return nCharValue;
        };
        this.charChange = (char, value) => {
            let charAscii = char.charCodeAt(0);
            if (charAscii >= 97)
                charAscii = this.changeLowerCase(charAscii, value);
            else
                charAscii = this.changeUpperCase(charAscii, value);
            return String.fromCharCode(charAscii);
        };
        this.isSpecialChar = (char) => {
            return char.charCodeAt(0) < 65 || char.charCodeAt(0) > 122;
        };
        this.massage = massage;
        this.key = key;
    }
}
