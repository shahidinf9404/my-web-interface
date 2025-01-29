const pdfs = [
    { title: "BORANG TEMPAHAN KENDERAAN BDHA 2024(Hanizam)", file: "pdfs/BORANG%20TEMPAHAN%20KENDERAAN%20BDHA%202024%28Hanizam%29.pdf" },
    { title: "Panduan Pengguna Perkhidmatan PCN Wifi", file: "pdfs/Panduan%20Pengguna%20Perkhidmatan%20PCN%20Wifi.pdf" },
    { title: "COUNTRIES_THAT_REQUIRE_VISA_and_DO_NOT_REQUIRE_VISA", file: "pdfs/COUNTRIES_THAT_REQUIRE_VISA_and_DO_NOT_REQUIRE_VISA.pdf" }
];

let selectedPDF = '';

function displayPDFList(filteredPDFs) {
    const pdfListDiv = document.getElementById('pdfList');
    pdfListDiv.innerHTML = '';
    
    filteredPDFs.forEach(pdf => {
        const pdfItem = document.createElement('div');
        pdfItem.classList.add('pdf-item');
        pdfItem.innerHTML = `
            <h3>${pdf.title}</h3>
            <p>Click to view or download</p>
        `;
        pdfItem.onclick = () => previewPDF(pdf);
        pdfListDiv.appendChild(pdfItem);
    });
}

function searchDocuments() {
    const searchQuery = document.getElementById('searchBox').value.toLowerCase();
    const filteredPDFs = pdfs.filter(pdf => pdf.title.toLowerCase().includes(searchQuery));
    displayPDFList(filteredPDFs);
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

// Initial display of all PDFs
displayPDFList(pdfs);
