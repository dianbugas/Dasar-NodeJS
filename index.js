// const nama = 'namas';
// const cetakNama = (nama) => `hai nama ${nama}`;
// console.log(cetakNama(nama));

// console.log(window);

// const cetakNama = require('./coba')

// console.log('dian');


// const fs = require('fs'); //core modul
// const cetakNama = require('./coba'); //local module
// const moment = require('moment'); //third party module


// const cetakNama = require('./coba'); //local module

const coba = require('./coba');

// console.log(cetakNama('DAIN'));
console.log(coba.cetakNama('DAIN'), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());

