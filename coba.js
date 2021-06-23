// console.log('Hello word');
function cetakNama(nama) {
    return `hello ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama: 'DIAN BUGAS',
    umur: 20,
    cetakMhs() {
        return `nama saya ${this.nama} dan umur ${this.umur}`;
    },
};

class Orang {
    constructor () {
        console.log('objek sya telah di buat!!')
    }
}

// module.exports.ctknama = cetakNama;
// module.exports.pi = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang,
// };

module.exports = {
    cetakNama, PI, mahasiswa, Orang,
};
