// Modal and slider for gallery
const galeriImages = [
    'images/galeri/1.jpeg',
    'images/galeri/2.jpeg',
    'images/galeri/3.jpeg',
    'images/galeri/4.jpeg',
    'images/galeri/6.jpeg',
    'images/galeri/7.jpeg',
    'images/galeri/9.jpeg',
    'images/galeri/10.jpeg',
    'images/galeri/11.jpeg',
    'images/galeri/12.jpeg',
];

function createGaleriModal() {
    const modal = document.createElement('div');
    modal.id = 'galeri-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 hidden';
    modal.innerHTML = `
    <button id="galeri-modal-close" class="absolute top-4 right-4 text-white text-3xl font-bold z-60">&times;</button>
    <button id="galeri-modal-prev" class="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold z-60">&#8592;</button>
    <img id="galeri-modal-img" src="" alt="Galeri Zoom" class="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-white object-contain mx-auto" />
    <button id="galeri-modal-next" class="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold z-60">&#8594;</button>
  `;
    document.body.appendChild(modal);
}

function openGaleriModal(index) {
    const modal = document.getElementById('galeri-modal');
    const img = document.getElementById('galeri-modal-img');
    modal.dataset.index = index;
    img.src = galeriImages[index];
    modal.classList.remove('hidden');
}

function closeGaleriModal() {
    document.getElementById('galeri-modal').classList.add('hidden');
}

function galeriModalNext() {
    const modal = document.getElementById('galeri-modal');
    let idx = parseInt(modal.dataset.index, 10);
    idx = (idx + 1) % galeriImages.length;
    openGaleriModal(idx);
}

function galeriModalPrev() {
    const modal = document.getElementById('galeri-modal');
    let idx = parseInt(modal.dataset.index, 10);
    idx = (idx - 1 + galeriImages.length) % galeriImages.length;
    openGaleriModal(idx);
}

document.addEventListener('DOMContentLoaded', function () {
    createGaleriModal();
    document.querySelectorAll('.galeri-img').forEach((img, idx) => {
        img.addEventListener('click', function () {
            openGaleriModal(idx);
        });
    });
    document.getElementById('galeri-modal-close').addEventListener('click', closeGaleriModal);
    document.getElementById('galeri-modal-next').addEventListener('click', galeriModalNext);
    document.getElementById('galeri-modal-prev').addEventListener('click', galeriModalPrev);
    document.getElementById('galeri-modal').addEventListener('click', function (e) {
        if (e.target === this) closeGaleriModal();
    });
    document.addEventListener('keydown', function (e) {
        const modal = document.getElementById('galeri-modal');
        if (modal.classList.contains('hidden')) return;
        if (e.key === 'ArrowRight') galeriModalNext();
        if (e.key === 'ArrowLeft') galeriModalPrev();
        if (e.key === 'Escape') closeGaleriModal();
    });
});
