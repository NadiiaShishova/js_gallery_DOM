'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const largeImg = document.querySelector('#largeImg');

  if (gallery && largeImg) {
    gallery.addEventListener('click', (e) => {
      e.preventDefault();

      const target = e.target;

      // Якщо клікнули на <a> або <img> у <a>
      if (target.tagName === 'A' || target.closest('a')) {
        const link = target.tagName === 'A' ? target : target.closest('a');
        const href = link.getAttribute('href');

        // Формуємо абсолютний URL (Cypress очікує http://localhost:3001/...)
        largeImg.src = new URL(href, window.location.origin).href;
      }
    });
  }
});
