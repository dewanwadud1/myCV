function downloadPDF() {
    
    // Prevent default action if any
    if (event) {
        event.preventDefault();
    }
    
    // Hide the sidebar before generating the PDF
    document.getElementById('bottomnav').classList.add('hidden-in-pdf');

    // Add 'hidden-in-pdf' class to the download button
    document.querySelector('.download-button').classList.add('hidden-in-pdf');

    var element = document.body;
    var opt = {
        margin:       0.5,
        filename:     'AbdulWadud_CV.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 3 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Generate PDF and save
    html2pdf().from(element).set(opt).toPdf().get('pdf').then(function (pdf) {
        // Remove 'hidden-in-pdf' class after PDF is generated
        document.querySelector('.download-button').classList.remove('hidden-in-pdf');
    }).save();
}

document.addEventListener('DOMContentLoaded', function () {
    const lastUpdatedElement = document.getElementById('last-updated');
    const lastUpdatedDate = document.lastModified; // Gets the last modified date of the document
    lastUpdatedElement.textContent = `Last updated: ${lastUpdatedDate}`;
});
