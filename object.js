console.log('KAMPUS UNIMAL');
const mahasiswa = {
    namaMahasiswa: 'Muliana',
    nim: '200001990',
    prodi: 'sistem informasi',
    angkatan: '20', 
};

const fakultas = [
    { jumlahFakultas: '6', namaFakultas: 'teknik, ekonomi, fisip, kedoktoran, hukum, pertanian'},
    { jumlahGedung: '25', namakantin: 'kantin teknik, kantin fisip'},
];


const perpustkaan = {
    jumlahPerpus: 5,
    letak: 'bukit indah, reuleut',
    jumlahpegawai: 20,
    warnaGedung: 'kuning, hijau, putih',
    jarak: ['112km' , '200km']
};

const makananKantin = {
    namaMakanan: ['mie goreng', 'ayam geprek', 'bakso', 'mie ayam'],
    harga: 8000,
    hitungPembayaran: function (nilai) {
        console.log('dari sebuah object', nilai)
        return nilai;
    },
    pemilik: {
        nama: 'buk ati',
        alamat: 'blang pulo',
        lamaJualan: '6 tahun',
    }
};

const jurusan = {
    jumlahJurusan: 26,
    jurusanTertua: 'manajemen',
    lamaberdiri: '15 tahun',
    jurusanBaru: 10,
    namaJurusan: ['ekonomi', 'teknik eletro', 'teknik sipil', 'ilkom', 'teknik mesin', 'dll'],
}

console.log(mahasiswa);
console.log(fakultas[0].jumlahFakultas);
console.log(perpustkaan.jarak[1]);
console.log(makananKantin.namaMakanan[0]);
console.log(jurusan.namaJurusan[2]);


