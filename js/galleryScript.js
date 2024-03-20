

const gallery = document.getElementById('gallery')
const prevButton = document.getElementById('prevButton')
const nextButton = document.getElementById('nextButton')

const images = [['img/gallery_TLB.png', "On the surface lay a frigid and empty wasteland."], ['img/gallery_jelly.png', "blabla jelly"], ['img/gallery_pax.png', "Meet Pax and Floresco, the first sinners"]];
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
  const imgCaption = gallery.querySelector('.currentCaption');
  img.classList.add('fadeOut');
  imgCaption.classList.add('fadeOut');
  setTimeout(() => {
    img.src = images[currentIndex][0]
    img.classList.remove('fadeOut');
    imgCaption.innerHTML = images[currentIndex][1]
    imgCaption.classList.remove('fadeOut');
  }, 500);
}