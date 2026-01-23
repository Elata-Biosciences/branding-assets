(function(){
  const accentToggle = document.getElementById('accent-toggle');
  const scaleToggle = document.getElementById('scale-toggle');
  let accentState = 0;
  let scaleState = 0;
  const accents = ['#7C4DFF', '#5CC1FF']; // purple, blue
  const scales = [1, 1.05, 1.1];

  accentToggle.addEventListener('click', () => {
    accentState = (accentState + 1) % accents.length;
    document.documentElement.style.setProperty('--color-accent', accents[accentState]);
  });

  scaleToggle.addEventListener('click', () => {
    scaleState = (scaleState + 1) % scales.length;
    const s = scales[scaleState];
    document.documentElement.style.setProperty('--scale-md', s);
    // reflect the scale across useful vars
    document.documentElement.style.setProperty('--scale-lg', s * 1.05);
  });
})();