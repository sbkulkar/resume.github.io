document.getElementById('pdf').addEventListener('click', function() {
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
    var pdfUrl = 'resume.pdf';

    // Open the PDF in a new window or tab
    window.open(pdfUrl, '_blank');
});
