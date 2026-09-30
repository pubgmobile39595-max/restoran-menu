alert('TEST OK');
// ===== MENÜ =====
const items = [
...
  { id: 1, name: 'Mercimek Çorbası', cat: 'starter', price: 75, desc: 'Tereyağlı geleneksel çorba.', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400' },
  { id: 2, name: 'Humus Tabağı', cat: 'starter', price: 95, desc: 'Tahin, zeytinyağı ve limon.', img: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=400' },
  { id: 3, name: 'Sigara Böreği', cat: 'starter', price: 85, desc: 'Beyaz peynir ve maydanoz.', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400' },
  { id: 4, name: 'Acılı Ezme', cat: 'starter', price: 70, desc: 'Domates ve baharatlarla.', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400' },
  { id: 5, name: 'Kalamar Tava', cat: 'starter', price: 140, desc: 'Tarator sos ile.', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400' },
  { id: 6, name: 'Karışık Pizza', cat: 'main', price: 165, desc: 'Mozzarella, sucuk, mantar.', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400' },
  { id: 7, name: 'Izgara Somon', cat: 'main', price: 280, desc: 'Taze somon, sebze ile.', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400' },
  { id: 8, name: 'Adana Kebap', cat: 'main', price: 220, desc: 'Zırh kıyma, bulgur ile.', img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400' },
  { id: 9, name: 'Mantarlı Risotto', cat: 'main', price: 175, desc: 'Arborio pirinci, parmesan.', img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400' },
  { id: 10, name: 'Fettuccine Alfredo', cat: 'main', price: 155, desc: 'Krema soslu makarna.', img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400' },
  { id: 11, name: 'Kuzu Tandır', cat: 'main', price: 320, desc: '8 saat fırında kuzu.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400' },
  { id: 12, name: 'Vegan Bowl', cat: 'main', price: 145, desc: 'Kinoa, avokado, nohut.', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
  { id: 13, name: 'Cheesecake', cat: 'dessert', price: 95, desc: 'New York usulü.', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400' },
  { id: 14, name: 'Tiramisu', cat: 'dessert', price: 105, desc: 'Mascarpone ile.', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400' },
  { id: 15, name: 'Çikolatalı Sufle', cat: 'dessert', price: 115, desc: 'Sıcak çikolata dolgulu.', img: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400' },
  { id: 16, name: 'Baklava', cat: 'dessert', price: 120, desc: 'Antep fıstıklı.', img: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400' },
  { id: 17, name: 'Sütlaç', cat: 'dessert', price: 75, desc: 'Fırında pişmiş, tarçınlı.', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400' },
  { id: 18, name: 'Türk Kahvesi', cat: 'drink', price: 45, desc: 'Bakır cezvede.', img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400' },
  { id: 19, name: 'Latte', cat: 'drink', price: 65, desc: 'Espresso ve süt.', img: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400' },
  { id: 20, name: 'Taze Portakal Suyu', cat: 'drink', price: 55, desc: 'Günlük sıkılmış.', img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400' },
  { id: 21, name: 'Limonata', cat: 'drink', price: 50, desc: 'Ev yapımı, naneli.', img: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400' },
  { id: 22, name: 'Sıcak Çikolata', cat: 'drink', price: 70, desc: 'Bitter çikolata.', img: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400' },
  { id: 23, name: 'Ayran', cat: 'drink', price: 30, desc: 'Geleneksel Türk içeceği.', img: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400' },
  { id: 24, name: 'Iced Americano', cat: 'drink', price: 60, desc: 'Soğuk espresso.', img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400' }
];

// ===== DURUM =====
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let favs = JSON.parse(localStorage.getItem('favs') || '[]');
let cat = 'all';
let q = '';

const $ = s => document.querySelector(s);

// ===== TEMA =====
const themeBtn = $('#themeBtn');
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
themeBtn.onclick = () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
};

// ===== AÇIK/KAPALI =====
function updateOpenStatus() {
  const h = new Date().getHours();
  const open = h >= 10 && h < 23;
  const el = $('#openStatus');
  if (el) {
    el.textContent = open ? '● Açık · 10:00-23:00' : '● Kapalı · 10:00-23:00';
    el.style.color = open ? '#5a8a3f' : '#c73e3e';
  }
}

// ===== TOAST =====
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 2000);
}

// ===== MENÜ RENDER =====
function renderMenu() {
  const grid = $('#menuGrid');
  const list = items.filter(i => {
    const c = cat === 'all' || (cat === 'fav' && favs.includes(i.id)) || i.cat === cat;
    const s = !q || i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q);
    return c && s;
  });
  if (!list.length) {
    grid.innerHTML = '<p style="text-align:center;padding:40px;color:#7a6a5a">Sonuç bulunamadı</p>';
    return;
  }
  grid.innerHTML = list.map(i => {
    const f = favs.includes(i.id);
    return '<div class="menu-item">' +
      '<button class="menu-item__fav ' + (f ? 'active' : '') + '" data-f="' + i.id + '">' + (f ? '❤️' : '🤍') + '</button>' +
      '<div class="menu-item__image" style="background-image:url(\'' + i.img + '\')"></div>' +
      '<div class="menu-item__body">' +
        '<div class="menu-item__head"><div class="menu-item__name">' + i.name + '</div><div class="menu-item__price">' + i.price + '₺</div></div>' +
        '<div class="menu-item__desc">' + i.desc + '</div>' +
        '<button class="btn-mini" style="margin-top:8px" data-add="' + i.id + '">🛒 Sepete Ekle</button>' +
      '</div></div>';
  }).join('');

  grid.querySelectorAll('[data-f]').forEach(b => b.onclick = (e) => {
    e.stopPropagation();
    const id = +b.dataset.f;
    const i = favs.indexOf(id);
    if (i >= 0) { favs.splice(i, 1); toast('💔 Favoriden çıkarıldı'); }
    else { favs.push(id); toast('❤️ Favorilere eklendi'); }
    localStorage.setItem('favs', JSON.stringify(favs));
    renderMenu();
  });

  grid.querySelectorAll('[data-add]').forEach(b => b.onclick = (e) => {
    e.stopPropagation();
    addCart(+b.dataset.add);
  });
}

// ===== SEPETE EKLE =====
function addCart(id) {
  const ex = cart.find(c => c.id === id);
  if (ex) ex.qty++;
  else cart.push({ id, qty: 1 });
  localStorage.setItem('cart', JSON.stringify(cart));
  const it = items.find(x => x.id === id);
  toast('🛒 ' + it.name + ' eklendi');
  renderCart();
}

// ===== SEPET RENDER =====
function renderCart() {
  const n = cart.reduce((s, c) => s + c.qty, 0);
  $('#cartBadge').textContent = n;
  $('#cartBadge').style.display = n > 0 ? 'grid' : 'none';

  const box = $('#cartItems');
  if (!cart.length) {
    $('#cartEmpty').style.display = 'block';
    box.innerHTML = '';
    $('#cartTotal').textContent = '0₺';
    return;
  }
  $('#cartEmpty').style.display = 'none';
  let total = 0;
  box.innerHTML = cart.map((c, i) => {
    const it = items.find(x => x.id === c.id);
    if (!it) return '';
    total += it.price * c.qty;
    return '<div class="cart-item">' +
      '<div class="cart-item__img" style="background-image:url(\'' + it.img + '\')"></div>' +
      '<div class="cart-item__info">' +
        '<div class="cart-item__name">' + it.name + '</div>' +
        '<div class="cart-item__price">' + (it.price * c.qty) + '₺</div>' +
        '<div class="cart-item__controls">' +
          '<button class="qty-btn" data-m="' + i + '">−</button>' +
          '<span class="cart-item__qty">' + c.qty + '</span>' +
          '<button class="qty-btn" data-p="' + i + '">+</button>' +
        '</div>' +
      '</div>' +
      '<button class="cart-item__remove" data-r="' + i + '">🗑️</button>' +
    '</div>';
  }).join('');
  $('#cartTotal').textContent = total + '₺';

  box.querySelectorAll('[data-m]').forEach(b => b.onclick = () => {
    const i = +b.dataset.m;
    cart[i].qty--;
    if (cart[i].qty <= 0) cart.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  });
  box.querySelectorAll('[data-p]').forEach(b => b.onclick = () => {
    cart[+b.dataset.p].qty++;
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  });
  box.querySelectorAll('[data-r]').forEach(b => b.onclick = () => {
    cart.splice(+b.dataset.r, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  });
}

// ===== SEPET AÇ/KAPAT =====
$('#cartBtn').onclick = () => { $('#cartPanel').classList.add('open'); $('#cartOverlay').classList.add('open'); };
$('#cartClose').onclick = () => { $('#cartPanel').classList.remove('open'); $('#cartOverlay').classList.remove('open'); };
$('#cartOverlay').onclick = () => { $('#cartPanel').classList.remove('open'); $('#cartOverlay').classList.remove('open'); };
$('#cartClear').onclick = () => { cart = []; localStorage.setItem('cart', JSON.stringify(cart)); renderCart(); toast('🗑️ Sepet temizlendi'); };

// ===== WHATSAPP SİPARİŞ =====
$('#cartSend').onclick = () => {
  if (!cart.length) { toast('⚠️ Sepetiniz boş'); return; }
  let msg = '🍽️ *Lezzet Durağı Sipariş*\n\n';
  let total = 0;
  cart.forEach(c => {
    const it = items.find(x => x.id === c.id);
    if (!it) return;
    total += it.price * c.qty;
    msg += '• ' + c.qty + 'x ' + it.name + ' — ' + (it.price * c.qty) + '₺\n';
  });
  msg += '\n💰 *Toplam: ' + total + '₺*';
  msg += '\n\n_' + new Date().toLocaleString('tr-TR') + '_';
  window.open('https://wa.me/905550000000?text=' + encodeURIComponent(msg), '_blank');
  toast('💬 WhatsApp açılıyor');
};

// ===== KATEGORİ =====
document.querySelectorAll('.cat-btn').forEach(b => b.onclick = () => {
  document.querySelectorAll('.cat-btn').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  cat = b.dataset.cat;
  renderMenu();
});

// ===== ARAMA =====
$('#searchInput').oninput = (e) => {
  q = e.target.value.toLowerCase().trim();
  $('#searchClear').style.display = q ? 'block' : 'none';
  renderMenu();
};
$('#searchClear').onclick = () => {
  $('#searchInput').value = '';
  q = '';
  $('#searchClear').style.display = 'none';
  renderMenu();
};

// ===== BAŞLAT =====
updateOpenStatus();
setInterval(updateOpenStatus, 60000);
renderMenu();
renderCart();

console.log('🍽️ Lezzet Durağı hazır! ' + items.length + ' yemek yüklendi.');
