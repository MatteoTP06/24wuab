const gallery = document.getElementById('gallery')
const prevButton = document.getElementById('prevButton')
const nextButton = document.getElementById('nextButton')

const images = ['img/gallery_TLB.png', 'img/gallery_jelly.png', 'img/gallery_pax.png'];
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex = currentIndex -= 1
  updateImage();
})
nextButton.addEventListener('click', () => {
  currentIndex = currentIndex += 1
  updateImage();
})

function updateImage(){
if(currentIndex < 0){
    currentIndex = (images.length - 1)
}
else if(currentIndex > (images.length - 1)){
    currentIndex = (0)
}
  const img = gallery.querySelector('.currentImage');
  img.classList.add('fadeOut');
  setTimeout(() => {
    img.src = images[currentIndex]
    img.classList.remove('fadeOut');
  }, 500);
}