document.addEventListener('DOMContentLoaded', () => {
    const soundButton = document.getElementById('soundButton');
    const clickSound = document.getElementById('clickSound');
  
    const playClickSound = () => {
      clickSound.play();
    };
  
    soundButton.addEventListener('click', playClickSound);
  });