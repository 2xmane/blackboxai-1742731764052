document.getElementById('createCollage').addEventListener('click', function() {
    const files = document.getElementById('imageUpload').files;
    const collageDisplay = document.getElementById('collageDisplay');
    collageDisplay.innerHTML = '';

    for (let i = 0; i < files.length; i++) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(files[i]);
        img.style.width = '100px'; // Set a fixed width for collage images
        collageDisplay.appendChild(img);
    }
});