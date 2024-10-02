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
      backgroundImg.style.display = 'none'; // Hides the background image
      backgroundVideo.style.display = 'block'; // Shows the video as background
      backgroundVideo.src = './videos/badgers.mp4'; 
    }
   
  });


