const pdfs = [
    { title: "BORANG TEMPAHAN KENDERAAN BDHA 2024(Hanizam)", file: "pdfs/BORANG%20TEMPAHAN%20KENDERAAN%20BDHA%202024%28Hanizam%29.pdf" },
    { title: "Panduan Pengguna Perkhidmatan PCN Wifi", file: "pdfs/Panduan%20Pengguna%20Perkhidmatan%20PCN%20Wifi.pdf" },
    { title: "COUNTRIES_THAT_REQUIRE_VISA_and_DO_NOT_REQUIRE_VISA", file: "pdfs/COUNTRIES%20THAT%20REQUIRE%20VISA%20and%20DO%20NOT%20REQUIRE%20VISA.pdf" }
];

// Function to display the search results
function displaySearchResults(filteredPDFs) {
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = '';

    if (filteredPDFs.length === 0) {
        searchResultsDiv.style.display = 'none';
        return;
    }

    searchResultsDiv.style.display = 'block';

    filteredPDFs.forEach(pdf => {
        const pdfItem = document.createElement('div');
        pdfItem.classList.add('search-result-item');
        pdfItem.innerHTML = `<h3>${pdf.title}</h3>`;
        pdfItem.onclick = () => showPDF(pdf);
        searchResultsDiv.appendChild(pdfItem);
    });
}

function searchDocuments() {
    const searchQuery = document.getElementById('searchBox').value.toLowerCase().trim();
    const searchResultsDiv = document.getElementById('searchResults');

    if (searchQuery === "") {
        searchResultsDiv.innerHTML = ''; // Kosongkan hasil pencarian
        searchResultsDiv.style.display = 'none'; // Sembunyikan daftar
        return;
    }

    const filteredPDFs = pdfs.filter(pdf => pdf.title.toLowerCase().includes(searchQuery));
    displaySearchResults(filteredPDFs);
}

function showPDF(pdf) {
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('pdfPreview').style.display = 'block';
    document.getElementById('pdfViewer').src = pdf.file;
}

function closePdfViewer() {
    document.getElementById('pdfPreview').style.display = 'none';
    document.getElementById('pdfViewer').src = '';
}

// Hide search results by default when page loads
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('searchResults').style.display = 'none';
});
