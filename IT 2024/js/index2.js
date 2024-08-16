  // Slider function here
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
  }

  const pdfList = document.getElementById('pdf-list');
  const downloadBtn = document.getElementById('download-btn');

  // PDF file data
  const pdfFiles = [
    { name: 'CSC 307', file: 'pdfFiles/csc_307.pdf' },
    { name: 'CSC 303', file: 'pdf/annual_report_2023.pdf'  },
    { name: 'CSC 311', file: 'example3.pdf' }
  ];

  // Populate the PDF dropdown list
  pdfFiles.forEach(pdf => {
    const option = document.createElement('option');
    option.value = pdf.file;
    option.text = pdf.name;
    pdfList.add(option);
  });

  pdfList.addEventListener('change', function() {
    const selectedPdf = this.value;
    downloadBtn.href = selectedPdf;
  });