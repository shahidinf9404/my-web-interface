const pdfs = [
    { title: "BORANG TEMPAHAN KENDERAAN BDHA 2024(Hanizam)", file: "pdfs/BORANG%20TEMPAHAN%20KENDERAAN%20BDHA%202024%28Hanizam%29.pdf" },
    { title: "Panduan Pengguna Perkhidmatan PCN Wifi", file: "pdfs/Panduan%20Pengguna%20Perkhidmatan%20PCN%20Wifi.pdf" },
    { title: "COUNTRIES_THAT_REQUIRE_VISA_and_DO_NOT_REQUIRE_VISA", file: "pdfs/COUNTRIES_THAT_REQUIRE_VISA_and_DO_NOT_REQUIRE_VISA.pdf" }
];

let selectedPDF = '';

// Function to display the search results
function displaySearchResults(filteredPDFs) {
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = ''; // Clear previous results

    // If there are no results, hide the search results div
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
        pdfItem.onclick = () => showPDF(pdf);
        searchResultsDiv.appendChild(pdfItem);
    });
}

// Function to handle the search box input
function searchDocuments() {
    const searchQuery = document.getElementById('searchBox').value.toLowerCase();
    const searchResultsDiv = document.getElementById('searchResults');

    // If search query is empty, hide results and reset the content
    if (searchQuery.trim() === '') {
        searchResultsDiv.style.display = 'none'; // Hide the results
        searchResultsDiv.innerHTML = ''; // Clear the results
        return;
    }

    // Filter PDFs based on the search query
    const filteredPDFs = pdfs.filter(pdf => pdf.title.toLowerCase().includes(searchQuery));
    
    displaySearchResults(filteredPDFs); // Display the filtered PDFs
}

// Function to show the PDF directly in the page below the search box
function showPDF(pdf) {
    selectedPDF = pdf;
    const pdfPreview = document.getElementById('pdfPreview');
    const pdfViewer = document.getElementById('pdfViewer');

    // Log the file path to check it's correct
    console.log("Opening PDF: ", pdf.file);

    // Set the PDF source to the selected document
    pdfPreview.src = pdf.file;

    // Show the PDF viewer and the embedded PDF
    pdfViewer.style.display = 'block';
}

// Initialize by hiding the results and showing only the search box
document.getElementById('searchResults').style.display = 'none';
