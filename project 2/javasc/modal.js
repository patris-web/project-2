var modal = document.getElementById('modal');

function openimage(eikona) {
    const imagemodal =document.getElementById('imagemodal');
    imagemodal.src = eikona;
    modal.style.display = "block";
}


function closemodal() {
    modal.style.display = "none";
}

