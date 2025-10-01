'use strict';

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const largeImg = document.querySelector('#largeImg');

  if (gallery && largeImg) {
    gallery.addEventListener('click', (e) => {
      const target = e.target;

      const link = target.closest('a');

      if (link) {
        e.preventDefault();

        const href = link.href;

        if (href) {
          largeImg.src = href;
        }
      }
    });
  }
});
