// MENÜ
var items = [
  { id: 1, name: 'Mercimek Çorbası', cat: 'starter', price: 75, desc: 'Tereyağlı geleneksel çorba.', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400', tags: ['popular'] },
  { id: 2, name: 'Humus Tabağı', cat: 'starter', price: 95, desc: 'Tahin, zeytinyağı ve limon.', img: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=400', tags: ['vegan'] },
  { id: 3, name: 'Sigara Böreği', cat: 'starter', price: 85, desc: 'Beyaz peynir ve maydanoz.', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', tags: ['popular'] },
  { id: 4, name: 'Acılı Ezme', cat: 'starter', price: 70, desc: 'Domates ve baharatlarla.', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400', tags: ['vegan'] },
  { id: 5, name: 'Kalamar Tava', cat: 'starter', price: 140, desc: 'Tarator sos ile.', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400', tags: ['popular'] },
  { id: 6, name: 'Karışık Pizza', cat: 'main', price: 165, desc: 'Mozzarella, sucuk, mantar.', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', tags: ['popular'] },
  { id: 7, name: 'Izgara Somon', cat: 'main', price: 280, desc: 'Taze somon, sebze ile.', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400', tags: [] },
  { id: 8, name: 'Adana Kebap', cat: 'main', price: 220, desc: 'Zırh kıyma, bulgur ile.', img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400', tags: ['popular'] },
  { id: 9, name: 'Mantarlı Risotto', cat: 'main', price: 175, desc: 'Arborio pirinci, parmesan.', img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400', tags: [] },
  { id: 10, name: 'Fettuccine Alfredo', cat: 'main', price: 155, desc: 'Krema soslu makarna.', img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400', tags: [] },
  { id: 11, name: 'Kuzu Tandır', cat: 'main', price: 320, desc: '8 saat fırında kuzu.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', tags: ['popular'] },
  { id: 12, name: 'Vegan Bowl', cat: 'main', price: 145, desc: 'Kinoa, avokado, nohut.', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', tags: ['vegan', 'new'] },
  { id: 13, name: 'Cheesecake', cat: 'dessert', price: 95, desc: 'New York usulü.', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400', tags: ['popular'] },
  { id: 14, name: 'Tiramisu', cat: 'dessert', price: 105, desc: 'Mascarpone ile.', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400', tags: [] },
  { id: 15, name: 'Çikolatalı Sufle', cat: 'dessert', price: 115, desc: 'Sıcak çikolata dolgulu.', img: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400', tags: ['popular'] },
  { id: 16, name: 'Baklava', cat: 'dessert', price: 120, desc: 'Antep fıstıklı.', img: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400', tags: ['popular'] },
  { id: 17, name: 'Sütlaç', cat: 'dessert', price: 75, desc: 'Fırında pişmiş, tarçınlı.', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400', tags: [] },
  { id: 18, name: 'Türk Kahvesi', cat: 'drink', price: 45, desc: 'Bakır cezvede.', img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400', tags: ['popular'] },
  { id: 19, name: 'Latte', cat: 'drink', price: 65, desc: 'Espresso ve süt.', img: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400', tags: [] },
  { id: 20, name: 'Taze Portakal Suyu', cat: 'drink', price: 55, desc: 'Günlük sıkılmış.', img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400', tags: ['vegan', 'new'] },
  { id: 21, name: 'Limonata', cat: 'drink', price: 50, desc: 'Ev yapımı, naneli.', img: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400', tags: ['vegan'] },
  { id: 22, name: 'Sıcak Çikolata', cat: 'drink', price: 70, desc: 'Bitter çikolata.', img: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400', tags: [] },
  { id: 23, name: 'Ayran', cat: 'drink', price: 30, desc: 'Geleneksel Türk içeceği.', img: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400', tags: ['popular'] },
  { id: 24, name: 'Iced Americano', cat: 'drink', price: 60, desc: 'Soğuk espresso.', img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400', tags: ['vegan'] }
];

var cart = JSON.parse(localStorage.getItem('cart') || '[]');
var favs = JSON.parse(localStorage.getItem('favs') || '[]');
var cat = 'all';
var q = '';
var sort = 'default';
var $ = function (s) { return document.querySelector(s); };

// ===== TEMA =====
var themeBtn = $('#themeBtn');
var savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
themeBtn.addEventListener('click', function () {
  var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
});

// ===== AÇIK/KAPALI =====
function updateStatus() {
  var h = new Date().getHours();
  var open = h >= 10 && h < 23;
  var el = $('#openStatus');
  if (el) {
    el.textContent = open ? '● Açık · 10:00-23:00' : '● Kapalı · 10:00-23:00';
    el.style.color = open ? '#5a8a3f' : '#c73e3e';
  }
}

// ===== TOAST =====
function toast(msg) {
  var t = $('#toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(function () { t.classList.remove('show'); }, 2000);
}

// ===== MENÜ RENDER =====
function renderMenu() {
  var grid = $('#menuGrid');
  var list = items.filter(function (i) {
    var c = cat === 'all' ||
            (cat === 'fav' && favs.indexOf(i.id) >= 0) ||
            (cat === 'popular' && i.tags.indexOf('popular') >= 0) ||
            (cat === 'new' && i.tags.indexOf('new') >= 0) ||
            (cat === 'vegan' && i.tags.indexOf('vegan') >= 0) ||
            i.cat === cat;
    var s = !q || i.name.toLowerCase().indexOf(q) >= 0 || i.desc.toLowerCase().indexOf(q) >= 0;
    return c && s;
  });

  // Sıralama
  if (sort === 'price-asc') list.sort(function (a, b) { return a.price - b.price; });
  else if (sort === 'price-desc') list.sort(function (a, b) { return b.price - a.price; });
  else if (sort === 'name') list.sort(function (a, b) { return a.name.localeCompare(b.name, 'tr'); });

  if (!list.length) {
    grid.innerHTML = '<p style="text-align:center;padding:40px;color:#7a6a5a;grid-column:1/-1">Sonuç bulunamadı</p>';
    return;
  }

  var html = '';
  for (var k = 0; k < list.length; k++) {
    var i = list[k];
    var f = favs.indexOf(i.id) >= 0;
    html += '<div class="menu-item">';
    html += '<button class="menu-item__fav ' + (f ? 'active' : '') + '" data-f="' + i.id + '">' + (f ? '❤️' : '🤍') + '</button>';
    if (i.tags.indexOf('new') >= 0) {
      html += '<span class="menu-item__discount" style="background:#5a8a3f">YENİ</span>';
    }
    html += '<div class="menu-item__image" style="background-image:url(\'' + i.img + '\')"></div>';
    html += '<div class="menu-item__body">';
    html += '<div class="menu-item__head"><div class="menu-item__name">' + i.name + '</div><div class="menu-item__price">' + i.price + '₺</div></div>';
    html += '<div class="menu-item__desc">' + i.desc + '</div>';
    html += '<button class="btn-mini" style="margin-top:8px" data-add="' + i.id + '">🛒 Sepete Ekle</button>';
    html += '</div></div>';
  }
  grid.innerHTML = html;

  grid.querySelectorAll('[data-f]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      var id = +b.dataset.f;
      var idx = favs.indexOf(id);
      if (idx >= 0) { favs.splice(idx, 1); toast('💔 Çıkarıldı'); }
      else { favs.push(id); toast('❤️ Favorilere eklendi'); }
      localStorage.setItem('favs', JSON.stringify(favs));
      renderMenu();
    });
  });
  grid.querySelectorAll('[data-add]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      addCart(+b.dataset.add);
    });
  });
}

// ===== SEPETE EKLE =====
function addCart(id) {
  var ex = null;
  for (var k = 0; k < cart.length; k++) if (cart[k].id === id) ex = cart[k];
  if (ex) ex.qty++;
  else cart.push({ id: id, qty: 1 });
  localStorage.setItem('cart', JSON.stringify(cart));
  var it = items.filter(function (x) { return x.id === id; })[0];
  toast('🛒 ' + it.name + ' eklendi');
  renderCart();
}

// ===== SEPET RENDER =====
function renderCart() {
  var n = 0;
  for (var k = 0; k < cart.length; k++) n += cart[k].qty;
  $('#cartBadge').textContent = n;
  $('#cartBadge').style.display = n > 0 ? 'grid' : 'none';

  var box = $('#cartItems');
  if (!cart.length) {
    $('#cartEmpty').style.display = 'block';
    box.innerHTML = '';
    $('#cartTotal').textContent = '0₺';
    return;
  }
  $('#cartEmpty').style.display = 'none';
  var total = 0;
  var html = '';
  for (var k = 0; k < cart.length; k++) {
    var c = cart[k];
    var it = items.filter(function (x) { return x.id === c.id; })[0];
    if (!it) continue;
    total += it.price * c.qty;
    html += '<div class="cart-item">';
    html += '<div class="cart-item__img" style="background-image:url(\'' + it.img + '\')"></div>';
    html += '<div class="cart-item__info">';
    html += '<div class="cart-item__name">' + it.name + '</div>';
    html += '<div class="cart-item__price">' + (it.price * c.qty) + '₺</div>';
    html += '<div class="cart-item__controls">';
    html += '<button class="qty-btn" data-m="' + k + '">−</button>';
    html += '<span class="cart-item__qty">' + c.qty + '</span>';
    html += '<button class="qty-btn" data-p="' + k + '">+</button>';
    html += '</div></div>';
    html += '<button class="cart-item__remove" data-r="' + k + '">🗑️</button>';
    html += '</div>';
  }
  box.innerHTML = html;
  $('#cartTotal').textContent = total + '₺';

  box.querySelectorAll('[data-m]').forEach(function (b) {
    b.addEventListener('click', function () {
      var i = +b.dataset.m;
      cart[i].qty--;
      if (cart[i].qty <= 0) cart.splice(i, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    });
  });
  box.querySelectorAll('[data-p]').forEach(function (b) {
    b.addEventListener('click', function () {
      cart[+b.dataset.p].qty++;
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    });
  });
  box.querySelectorAll('[data-r]').forEach(function (b) {
    b.addEventListener('click', function () {
      cart.splice(+b.dataset.r, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    });
  });
}

// ===== SEPET AÇ/KAPAT =====
$('#cartBtn').addEventListener('click', function () {
  $('#cartPanel').classList.add('open');
  $('#cartOverlay').classList.add('open');
});
$('#cartClose').addEventListener('click', function () {
  $('#cartPanel').classList.remove('open');
  $('#cartOverlay').classList.remove('open');
});
$('#cartOverlay').addEventListener('click', function () {
  $('#cartPanel').classList.remove('open');
  $('#cartOverlay').classList.remove('open');
});
$('#cartClear').addEventListener('click', function () {
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
  toast('🗑️ Temizlendi');
});

// ===== WHATSAPP =====
$('#cartSend').addEventListener('click', function () {
  if (!cart.length) { toast('⚠️ Sepet boş'); return; }
  var msg = '🍽️ *Lezzet Durağı Sipariş*\n\n';
  var total = 0;
  for (var k = 0; k < cart.length; k++) {
    var c = cart[k];
    var it = items.filter(function (x) { return x.id === c.id; })[0];
    if (!it) continue;
    total += it.price * c.qty;
    msg += '• ' + c.qty + 'x ' + it.name + ' — ' + (it.price * c.qty) + '₺\n';
  }
  msg += '\n💰 *Toplam: ' + total + '₺*';
  window.open('https://wa.me/905550000000?text=' + encodeURIComponent(msg), '_blank');
});

// ===== KATEGORİ =====
document.querySelectorAll('.cat-btn').forEach(function (b) {
  b.addEventListener('click', function () {
    document.querySelectorAll('.cat-btn').forEach(function (x) { x.classList.remove('active'); });
    b.classList.add('active');
    cat = b.dataset.cat;
    renderMenu();
  });
});

// ===== SIRALAMA =====
$('#sortSelect').addEventListener('change', function (e) {
  sort = e.target.value;
  renderMenu();
});

// ===== ARAMA =====
$('#searchInput').addEventListener('input', function (e) {
  q = e.target.value.toLowerCase().trim();
  $('#searchClear').style.display = q ? 'block' : 'none';
  renderMenu();
});
$('#searchClear').addEventListener('click', function () {
  $('#searchInput').value = '';
  q = '';
  $('#searchClear').style.display = 'none';
  renderMenu();
});

// ===== QR KOD =====
function generateQRCode() {
  var el = $('#qrCode');
  if (!el) return;
  if (typeof QRCode === 'undefined') {
    setTimeout(generateQRCode, 500);
    return;
  }
  var url = window.location.href.split('?')[0];
  var canvas = document.createElement('canvas');
  QRCode.toCanvas(canvas, url, {
    width: 155, margin: 1,
    color: { dark: '#8b3a1f', light: '#ffffff' }
  }, function (err) {
    if (err) return;
    el.innerHTML = '';
    el.appendChild(canvas);
  });
}

// ===== YAZDIR =====
function printMenu() { window.print(); }

// ===== PAYLAŞ =====
function sharePage() {
  if (navigator.share) {
    navigator.share({ title: 'Lezzet Durağı', url: window.location.href }).catch(function () {});
  } else {
    var input = document.createElement('input');
    input.value = window.location.href;
    document.body.appendChild(input);
    input.select();
    try { document.execCommand('copy'); toast('🔗 Link kopyalandı'); } catch (e) {}
    input.remove();
  }
}

// ===== BAŞLAT =====
updateStatus();
setInterval(updateStatus, 60000);
renderMenu();
renderCart();
generateQRCode();
// ============================================================
// EKSİK DÜZELTMELER
// ============================================================

// ===== QR KOD (API ile — kütüphane gerekmez) =====
(function fixQR() {
  var el = document.getElementById('qrCode');
  if (!el) return;
  var url = window.location.href.split('?')[0];
  el.innerHTML = '<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(url) + '&color=8b3a1f&bgcolor=ffffff" style="width:155px;height:155px;display:block" alt="QR">';
})();

// ===== GARSON =====
(function fixWaiter() {
  var wb = document.getElementById('waiterBtn');
  var wm = document.getElementById('waiterModal');
  if (wb) wb.onclick = function () { if (wm) wm.classList.add('active'); };
  var wc = document.getElementById('waiterClose');
  if (wc) wc.onclick = function () { if (wm) wm.classList.remove('active'); };
  if (wm) wm.onclick = function (e) { if (e.target === wm) wm.classList.remove('active'); };
  document.querySelectorAll('.waiter-options button').forEach(function (b) {
    b.onclick = function () {
      var reason = b.dataset.reason || 'Yardım';
      window.open('https://wa.me/905550000000?text=' + encodeURIComponent('🔔 Garson Çağrısı: ' + reason), '_blank');
      if (wm) wm.classList.remove('active');
    };
  });
})();

// ===== YAZDIR =====
(function fixPrint() {
  var pb = document.getElementById('printBtn');
  if (pb) pb.onclick = function () { window.print(); };
})();

// ===== PAYLAŞ =====
(function fixShare() {
  var sb = document.getElementById('shareBtn');
  if (sb) sb.onclick = function () {
    if (navigator.share) {
      navigator.share({ title: 'Lezzet Durağı', url: window.location.href }).catch(function () {});
    } else {
      var i = document.createElement('input');
      i.value = window.location.href;
      document.body.appendChild(i);
      i.select();
      try { document.execCommand('copy'); toast('🔗 Link kopyalandı'); } catch (e) {}
      i.remove();
    }
  };
})();

// ===== VERİ TEMİZLE =====
(function fixClear() {
  var cd = document.getElementById('clearDataBtn');
  if (cd) cd.onclick = function (e) {
    e.preventDefault();
    if (confirm('Tüm veriler silinsin mi?')) { localStorage.clear(); location.reload(); }
  };
})();

// ===== REZERVASYON =====
(function fixReservation() {
  var rf = document.getElementById('reservationForm');
  if (!rf) return;
  var di = rf.querySelector('input[name="tarih"]');
  if (di) di.min = new Date().toISOString().split('T')[0];
  rf.onsubmit = function (e) {
    e.preventDefault();
    var st = document.getElementById('reservationStatus');
    st.textContent = '⏳ Gönderiliyor...';
    st.style.color = 'gray';
    var fd = new FormData(rf);
    fetch(rf.action, { method: 'POST', body: fd, headers: { 'Accept': 'application/json' } })
      .then(function (r) {
        if (r.ok) { st.textContent = '✅ Rezervasyonunuz alındı!'; st.style.color = 'green'; rf.reset(); }
        else { st.textContent = '❌ Bir hata oluştu'; st.style.color = 'red'; }
      })
      .catch(function () { st.textContent = '❌ Bağlantı hatası'; st.style.color = 'red'; });
  };
})();

console.log('🔧 Ek düzeltmeler yüklendi');
