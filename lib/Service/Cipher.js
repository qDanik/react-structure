import Base64 from 'base-64';
import encBas64 from 'crypto-js/enc-base64';
import encUtf8 from 'crypto-js/enc-utf8';
import AES from 'crypto-js/aes';

const CIPHER_KEY = (process.env.APP_KEY || '').replace('base64:', '');

export class Cipher {
  _key = null;

  constructor() {
    this.setKey(CIPHER_KEY);
  }

  getIV = encrypted => ({ iv: encBas64.parse(encrypted.iv) });

  setKey(key) {
    this._key = encBas64.parse(key);
  }

  getKey = () => this._key;

  toString = decrypted => decrypted.toString(encUtf8);

  decrypt(data) {
    const encrypted = JSON.parse(Base64.decode(data));
    const decrypted = AES.decrypt(encrypted.value, this.getKey(), this.getIV(encrypted));

    return this.toString(decrypted);
  }
}
