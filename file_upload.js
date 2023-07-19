 window.addEventListener('DOMContentLoaded', () => {
      const fileInput = document.getElementById('file-input');
      const dropzone = document.getElementById('dropzone');
      const fileInfo = document.getElementById('file-info');
      
      fileInput.addEventListener('change', handleFileSelect);
      dropzone.addEventListener('dragover', handleDragOver);
      dropzone.addEventListener('dragleave', handleDragLeave);
      dropzone.addEventListener('drop', handleFileDrop);
      
      function handleFileSelect(event) {
        const file = event.target.files[0];
        processFile(file);
      }
      
      function handleDragOver(event) {
        event.preventDefault();
        dropzone.classList.add('dragover');
      }
      
      function handleDragLeave(event) {
        event.preventDefault();
        dropzone.classList.remove('dragover');
      }
      
      function handleFileDrop(event) {
        event.preventDefault();
        dropzone.classList.remove('dragover');
        const file = event.dataTransfer.files[0];
        processFile(file);
      }
      
      function processFile(file) {
        const allowedExtensions = /(\.pdf|\.jpg)$/i;
        
        if (!allowedExtensions.exec(file.name)) {
          alert('Invalid file type. Please select a PDF or JPG file.');
          fileInput.value = '';
          return false;
        }
        
        fileInfo.textContent = `Selected file: ${file.name}`;
        
        // You can perform additional operations with the file here
        // For example, you can upload the file to a server using AJAX or perform client-side processing.
      }
    });
