alert('1. Script çalışıyor');

window.addEventListener('load', function () {
  alert('2. Sayfa yüklendi');

  const cartBtn = document.getElementById('cartBtn');
  alert('3. Sepet butonu: ' + (cartBtn ? 'BULUNDU' : 'YOK'));

  const themeBtn = document.getElementById('themeBtn');
  alert('4. Tema butonu: ' + (themeBtn ? 'BULUNDU' : 'YOK'));

  const grid = document.getElementById('menuGrid');
  alert('5. Menü alanı: ' + (grid ? 'BULUNDU' : 'YOK'));

  // Test: Sepet butonuna bas
  if (cartBtn) {
    cartBtn.addEventListener('click', function () {
      alert('6. Sepet butonuna basıldı! Çalışıyor!');
    });
  }

  // Test: Tema butonuna bas
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      alert('7. Tema butonuna basıldı! Çalışıyor!');
    });
  }
});
