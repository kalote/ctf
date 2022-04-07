const jwtSimple = require('jwt-simple');
const fs = require('fs');

const k = fs.readFileSync('./key.pem');

console.log(jwtSimple.encode({auth: 'admin'}, k, 'HS256'));
