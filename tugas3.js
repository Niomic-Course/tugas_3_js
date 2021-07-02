function data(nama) {
    console.log(`Nama: ${nama}`);
    nama = `${nama} husein`;
    return nama;
}

const anggota = data('saddam');
console.log(`Nama lengkap: ${anggota}`);