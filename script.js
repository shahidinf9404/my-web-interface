// Function to view the selected document
function viewDocument(docName) {
    let pdfUrl;
    let downloadUrl;

    // Define the URLs for each document (ensure the link is raw)
    switch(docName) {
        case 'BORANG TEMPAHAN KENDERAAN BDHA 2024 (Hanizam)':
            pdfUrl = 'https://raw.githubusercontent.com/shahidinf9404/my-web-interface/main/New%20folder/BORANG%20TEMPAHAN%20KENDERAAN%20BDHA%202024%28Hanizam%29.pdf';
            downloadUrl = pdfUrl;
            break;
        case 'COUNTRIES_THAT_REQUIRE VISA&DO_NOT_REQUIRE_VISA':
            pdfUrl = 'https://raw.githubusercontent.com/shahidinf9404/my-web-interface/main/New%20folder/COUNTRIES_THAT_REQUIRE%20VISA%26DO_NOT_REQUIRE%20VISA.pdf';
            downloadUrl = pdfUrl;
            break;
        case 'Panduan Pengguna Perkhidmatan PCN Wifi':
            pdfUrl = 'https://raw.githubusercontent.com/shahidinf9404/my-web-interface/main/New%20folder/Panduan%20Pengguna%20Perkhidmatan%20PCN%20Wifi.pdf';
            downloadUrl = pdfUrl;
            break;
        default:
            return;
    }

    // Display the title of the document
    document.getElementById('document-title').textContent = docName;
    document.getElementById('document-title').style.display = 'block';

    // Load the PDF into the canvas using PDF.js
    const canvas = document.getElementById('pdf-canvas');
    const context = canvas.getContext('2d');

    // Clear any previous canvas content
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Fetch the PDF document from the raw URL
    pdfjsLib.getDocument(pdfUrl).promise.then(function(pdf) {
        console.log('PDF loaded');
        pdf.getPage(1).then(function(page) {
            console.log('Page loaded');

            var scale = 1.5;
            var viewport = page.getViewport({ scale: scale });

            canvas.height = viewport.height;
            canvas.width = viewport.width;

            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext);
        });
    }).catch(function(error) {
        console.error('Error loading PDF:', error);
        alert('There was an error loading the PDF. Please try again later.');
    });

    // Show the viewer and the download button
    document.getElementById('pdf-viewer').style.display = 'block';
    document.getElementById('download-btn').style.display = 'inline-block';
    document.getElementById('download-btn').onclick = function() {
        window.location.href = downloadUrl;
    };
}
