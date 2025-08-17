function openModal(image) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    modal.classList.remove('hidden');
    modalImg.src = image.src;
}

function closeModal() {
    document.getElementById('imageModal').classList.add('hidden');
}
