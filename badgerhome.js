const logo = document.getElementById('logo');
const audio = document.getElementById('audio');
const backgroundImg = document.getElementById('background-img');
const backgroundVideo = document.getElementById('background-video');

logo.addEventListener('click', () => {
    if(backgroundImg.style.display == 'none'){
      backgroundImg.style.display = 'block';
      backgroundVideo.style.display = 'none';
      audio.pause();
      audio.currentTime = 0;
      backgroundImg.src = './pics/fondopic.png';
    }else{ 
      audio.play();
      backgroundImg.style.display = 'none'; // Oculta la imagen
      backgroundVideo.style.display = 'block'; // Muestra el video
      backgroundVideo.src = './videos/badgers.mp4'; // Cambia la fuente del video
    }
   
  });

document.getElementById('about-btn').addEventListener('click', function() {
   window.open('./menu/about/about.html', '_self');
});

document.getElementById('founders-btn').addEventListener('click', function() {
  window.open('./menu/founders/founders.html','_self');
});

document.getElementById('community-btn').addEventListener('click', function() {
  window.open('./menu/community/community.html','_blank');
});

