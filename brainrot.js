const platformLinks = {
  Android: 'https://www.mediafire.com/folder/5xxwd24qnj571/Android',
  iOS: 'https://antasyadav07.itch.io/brainrot-king-follows',
  'PC / MAC': 'https://www.mediafire.com/folder/dlqhv43prk2k4/Window_(PC)',
  'Web Browser': 'https://antasyadav07.itch.io/brainrot-king-follows'
};

document.querySelectorAll('.platform').forEach(card => {
  const key = card.dataset.platform;

  if (platformLinks[key]) {
    card.href = platformLinks[key];

    // Android and PC/Mac should download instead of opening the file
    if (key === 'Android' || key === 'PC / MAC') {
      card.setAttribute('download', '');
    } else {
      // iOS and Web Browser open the itch.io page
      card.target = '_blank';
      card.rel = 'noopener';
    }
  }

  card.addEventListener('pointermove', e => {
    if (matchMedia('(hover:hover) and (pointer:fine)').matches) {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;

      card.style.transform =
        `translateY(-9px) perspective(800px) rotateX(${y * -3}deg) rotateY(${x * 3}deg)`;
    }
  });

  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});
