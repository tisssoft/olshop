let produkList = [];

function tambahProduk() {
    const nama = document.getElementById("nama").value;
    const kategori = document.getElementById("kategori").value;
    const harga = document.getElementById("harga").value;
    const deskripsi = document.getElementById("deskripsi").value;
    const gambarInput = document.getElementById("gambar");

    if (!nama || !kategori || !harga || !deskripsi) {
        alert("Harap isi semua data!");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        const produk = {
            nama,
            kategori,
            harga,
            deskripsi,
            gambar: e.target.result
        };

        produkList.push(produk);
        tampilkanProduk();
    };

    if (gambarInput.files[0]) {
        reader.readAsDataURL(gambarInput.files[0]);
    }
}

function tampilkanProduk() {
    const container = document.getElementById("produk-list");
    container.innerHTML = "";

    produkList.forEach(p => {
        container.innerHTML += `
            <div class="produk">
                <img src="${p.gambar}" alt="gambar">
                <h3>${p.nama}</h3>
                <p><b>Kategori:</b> ${p.kategori}</p>
                <p>${p.deskripsi}</p>
                <p><b>Rp ${p.harga}</b></p>
            </div>
        `;
    });
}
