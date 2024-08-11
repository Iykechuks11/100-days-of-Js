const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(50, 90, 150, 100);

// Circle
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fill();

// Draw lines
ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.lineWidth = 5;
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();

// Draw text
ctx.font = '30px Arial';
ctx.fillStyle = 'blue';
ctx.fillText('Hello World!', 300, 100, 300);

// Draw image
const image = document.querySelector('img');
image.style.display = 'none';

image.addEventListener('load', () => {
  ctx.drawImage(image, 250, 250, 100, 100);
});
