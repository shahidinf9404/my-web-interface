// Example array of documents to search through
const documents = [
    'Document 1: Introduction to Git',
    'Document 2: How to Use GitHub',
    'Document 3: Advanced Git Techniques',
    'Document 4: Git for Beginners',
    'Document 5: Git Commands Cheat Sheet'
];

// Function to handle search and display results
function searchDocuments() {
    const query = document.getElementById('search').value.toLowerCase();
    const results = documents.filter(doc => doc.toLowerCase().includes(query));
    
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultsContainer.innerHTML = 'No documents found.';
    } else {
        results.forEach(result => {
            const resultElement = document.createElement('p');
            resultElement.textContent = result;
            resultsContainer.appendChild(resultElement);
        });
    }
}
