window.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-input');
    
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      const allowedExtensions = /(\.pdf|\.jpg)$/i;
      
      if (!allowedExtensions.exec(file.name)) {
        alert('Invalid file type. Please select a PDF or JPG file.');
        fileInput.value = '';
        return false;
      }
    });
  });