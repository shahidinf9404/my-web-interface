// List of PDFs in your repository (replace these with your actual PDF file names and links)
const pdfDocuments = [
    { name: 'Document 1: Introduction to Git', url: 'https://github.com/username/my-repository/raw/main/doc1.pdf' },
    { name: 'Document 2: How to Use GitHub', url: 'https://github.com/username/my-repository/raw/main/doc2.pdf' },
    { name: 'Document 3: Advanced Git Techniques', url: 'https://github.com/username/my-repository/raw/main/doc3.pdf' }
];

// Function to search for documents
function searchDocuments() {
    const searchQuery = document.getElementById('searchBox').value.toLowerCase();
    const filteredDocs = pdfDocuments.filter(doc => doc.name.toLowerCase().includes(searchQuery));
    
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (filteredDocs.length === 0) {
        resultsContainer.innerHTML = 'No documents found.';
    } else {
        filteredDocs.forEach(doc => {
            const resultLink = document.createElement('a');
            resultLink.href = doc.url;
            resultLink.target = "_blank";  // Open the PDF in a new tab
            resultLink.textContent = doc.name;
            resultsContainer.appendChild(resultLink);
        });
    }
}
