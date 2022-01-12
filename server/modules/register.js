const database = require('./database.js');

const crypto = require('crypto');

function registerUser(nickname, password) {
  const user = { nick: nickname, pass: password };
  database.write('users', user);
}

function verifyCredentials(nickname, password) {
  const user = database.get('users', 'nick', nickname);
  if (user) return password == user.pass;
  registerUser(nickname, password);
  return true;
}

module.exports.register = function (request, response) {
  const body = request.query;
  const { nick, pass } = body;

  let responseStatusCode = 200;
  let responseBody = {};

  const encrypytedPass = crypto.createHash('md5').update(pass).digest('hex');
  if (!verifyCredentials(nick, encrypytedPass)) {
    responseStatusCode = 400;
    responseBody = { error: 'User registered with a different password' };
  }

  response.writeHead(responseStatusCode);
  response.write(JSON.stringify(responseBody));
  response.end();
};
