document.querySelectorAll('.founder').forEach(function (element) {
    element.addEventListener('click', function () {
      const founderText = element.querySelector('.founder-text');
      
      // Toggle opacity on click
      if (founderText.style.opacity === '1') {
        founderText.style.opacity = '0';
      } else {
        founderText.style.opacity = '1';
      }
    });
  });