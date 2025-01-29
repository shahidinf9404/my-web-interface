const pdfs = [
    { title: "BORANG TEMPAHAN KENDERAAN BDHA 2024(Hanizam)", file: "pdfs/BORANG%20TEMPAHAN%20KENDERAAN%20BDHA%202024%28Hanizam%29.pdf" },
    { title: "Panduan Pengguna Perkhidmatan PCN Wifi", file: "pdfs/Panduan%20Pengguna%20Perkhidmatan%20PCN%20Wifi.pdf" },
    { title: "COUNTRIES_THAT_REQUIRE_VISA_and_DO_NOT_REQUIRE_VISA", file: "pdfs/COUNTRIES_THAT_REQUIRE_VISA_and_DO_NOT_REQUIRE_VISA.pdf" }
];

let selectedPDF = '';

function displaySearchResults(filteredPDFs) {
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = ''; // Clear previous results

    // Hide results if no matching PDFs
    if (filteredPDFs.length === 0) {
        searchResultsDiv.style.display = 'none';
        return;
    }

    // Show search results if there are matches
    searchResultsDiv.style.display = 'block';

    filteredPDFs.forEach(pdf => {
        const pdfItem = document.createElement('div');
        pdfItem.classList.add('search-result-item');
        pdfItem.innerHTML = `<h3>${pdf.title}</h3>`;
        pdfItem.onclick = () => previewPDF(pdf);
        searchResultsDiv.appendChild(pdfItem);
    });
}

function searchDocuments() {
    const searchQuery = document.getElementById('searchBox').value.toLowerCase();
    
    // If search query is empty, hide the results
    if (searchQuery.trim() === '') {
        document.getElementById('searchResults').style.display = 'none';
        return;  // Exit early if there's no search query
    }

    // Filter PDFs based on the search query
    const filteredPDFs = pdfs.filter(pdf => pdf.title.toLowerCase().includes(searchQuery));
    
    displaySearchResults(filteredPDFs); // Display the matching PDFs
}

function previewPDF(pdf) {
    selectedPDF = pdf;
    const pdfPreview = document.getElementById('pdfPreview');
    pdfPreview.src = selectedPDF.file;
    document.getElementById('pdfPreviewModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('pdfPreviewModal').style.display = 'none';
}

function downloadPDF() {
    if (selectedPDF) {
        window.location.href = selectedPDF.file;
    }
}

// Initialize with no search results shown
document.getElementById('searchResults').style.display = 'none';
