// Senarai fail PDF yang terdapat dalam repositori GitHub (gantikan dengan URL sebenar)
const pdfDocuments = [
    { name: 'BORANG TEMPAHAN KENDERAAN BDHA 2024 (Hanizam)', url: 'https://github.com/username/my-repository/raw/main/BORANG%20TEMPAHAN%20KENDERAAN%20BDHA%202024%20(Hanizam).pdf' },
    { name: 'Panduan Pengguna Perkhidmatan PCN Wifi', url: 'https://github.com/username/my-repository/raw/main/Panduan%20Pengguna%20Perkhidmatan%20PCN%20Wifi.pdf' },
    { name: 'COUNTRIES THAT REQUIRE VISA & DO NOT REQUIRE VISA', url: 'https://github.com/username/my-repository/raw/main/COUNTRIES_THAT_REQUIRE%20VISA&DO_NOT_REQUIRE_VISA.pdf' }
];

// Fungsi untuk mencari dokumen PDF
function searchDocuments() {
    const searchQuery = document.getElementById('searchBox').value.toLowerCase();
    const filteredDocs = pdfDocuments.filter(doc => doc.name.toLowerCase().includes(searchQuery));
    
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Kosongkan hasil carian yang lama

    if (filteredDocs.length === 0) {
        resultsContainer.innerHTML = 'Tiada dokumen ditemui.';
    } else {
        filteredDocs.forEach(doc => {
            const resultLink = document.createElement('a');
            resultLink.href = doc.url;
            resultLink.target = "_blank";  // Buka PDF dalam tab baru
            resultLink.textContent = doc.name;
            resultsContainer.appendChild(resultLink);
        });
    }
}
