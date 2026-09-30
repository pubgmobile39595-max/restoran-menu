var mesaj = document.getElementById('openStatus');
if (mesaj) {
  mesaj.textContent = 'JAVASCRIPT ÇALIŞIYOR!';
  mesaj.style.color = 'green';
  mesaj.style.fontSize = '20px';
}

document.getElementById('themeBtn').onclick = function () {
  alert('TEMA BUTONU ÇALIŞIYOR');
};

document.getElementById('cartBtn').onclick = function () {
  alert('SEPET BUTONU ÇALIŞIYOR');
};
