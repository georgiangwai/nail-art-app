
const photoInput = document.getElementById('photoInput');
const canvas = document.getElementById('nailCanvas');
const context =canvas.getContext('2d');

photoInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
        };
    };
    if (file) reader.readAsDataURL(file);
});

document.getElementById('saveButton').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'custom_nail_design.png'
    link.href = canvas.toDataURL();
    link.click();
});