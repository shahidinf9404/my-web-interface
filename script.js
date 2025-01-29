// Function to filter documents based on search input
function filterDocuments() {
    let input = document.getElementById('search-box').value.toLowerCase();
    let listItems = document.querySelectorAll('#document-list li');
    listItems.forEach(item => {
        let text = item.textContent.toLowerCase();
        if (text.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

// Function to display the selected document
function viewDocument(docName) {
    let pdfUrl;
    let downloadUrl;

    switch(docName) {
        case 'BORANG TEMPAHAN KENDERAAN BDHA 2024 (Hanizam)':
            pdfUrl = 'https://github.com/shahidinf9404/my-web-interface/raw/main/New%20folder/BORANG%20TEMPAHAN%20KENDERAAN%20BDHA%202024%28Hanizam%29.pdf';
            downloadUrl = 'https://github.com/shahidinf9404/my-web-interface/raw/main/New%20folder/BORANG%20TEMPAHAN%20KENDERAAN%20BDHA%202024%28Hanizam%29.pdf';
            break;
        case 'COUNTRIES_THAT_REQUIRE VISA&DO_NOT_REQUIRE_VISA':
            pdfUrl = 'https://github.com/shahidinf9404/my-web-interface/raw/main/New%20folder/COUNTRIES_THAT_REQUIRE%20VISA%26DO_NOT_REQUIRE%20VISA.pdf';
            downloadUrl = 'https://github.com/shahidinf9404/my-web-interface/raw/main/New%20folder/COUNTRIES_THAT_REQUIRE%20VISA%26DO_NOT_REQUIRE%20VISA.pdf';
            break;
        case 'Panduan Pengguna Perkhidmatan PCN Wifi':
            pdfUrl = 'https://github.com/shahidinf9404/my-web-interface/raw/main/New%20folder/Panduan%20Pengguna%20Perkhidmatan%20PCN%20Wifi.pdf';
            downloadUrl = 'https://github.com/shahidinf9404/my-web-interface/raw/main/New%20folder/Panduan%20Pengguna%20Perkhidmatan%20PCN%20Wifi.pdf';
            break;
        default:
            return;
    }

    // Update the viewer and show it
    document.getElementById('document-title').textContent = docName;
    document.getElementById('document-title').style.display = 'block';
    document.getElementById('pdf-viewer').style.display = 'block';
    document.getElementById('pdf-viewer').src = pdfUrl;

    // Enable download button
    document.getElementById('download-btn').style.display = 'inline-block';
    document.getElementById('download-btn').onclick = function() {
        window.location.href = downloadUrl;
    };
}
