const { exec } = require('shelljs');
console.log('[Executor de Código Universal]');

// const requestJS = 'console.log(10 + 5)';
// var codigoJS = exec(`node -p "${request}"`, { silent: true }).stdout;
const requestPython = 'print("oi"))';
const codigoPython = exec(`echo '${requestPython}' > arquivo.py && python arquivo.py`, { silent: true });
console.log(codigoPython.stdout);
console.log(codigoPython.stderr);

// const response = 'Resultado:' + eval(request);
// console.log(response);