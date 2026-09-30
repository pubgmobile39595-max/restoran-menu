// ===== MENÜ VERİSİ =====
const menuItems = [
  { id: 1, name: 'Mercimek Çorbası', category: 'starter', price: 75, desc: 'Tereyağı ve nane ile geleneksel çorba.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600', tags: ['popular'] },
  { id: 2, name: 'Humus Tabağı', category: 'starter', price: 95, desc: 'Tahin, zeytinyağı ve limon ile.', image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600', tags: ['vegan'] },
  { id: 3, name: 'Sigara Böreği', category: 'starter', price: 85, desc: 'Beyaz peynir ve maydanoz dolgusu.', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600', tags: ['popular'] },
  { id: 4, name: 'Acılı Ezme', category: 'starter', price: 70, desc: 'Domates, biber ve baharatlarla.', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600', tags: ['vegan'] },
  { id: 5, name: 'Kalamar Tava', category: 'starter', price: 140, desc: 'Tarator sos ile taze kalamar.', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600', tags: ['popular'] },
  { id: 6, name: 'Karışık Pizza', category: 'main', price: 165, desc: 'Mozzarella, sucuk, biber, mantar.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600', tags: ['popular'] },
  { id: 7, name: 'Izgara Somon', category: 'main', price: 280, desc: 'Taze somon, sebze garnitür ile.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600', tags: [] },
  { id: 8, name: 'Adana Kebap', category: 'main', price: 220, desc: 'Zırh kıyma, bulgur pilavı ile.', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600', tags: ['spicy'] },
  { id: 9, name: 'Mantarlı Risotto', category: 'main', price: 175, desc: 'Arborio pirinci, parmesan ile.', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600', tags: ['vegan'] },
  { id: 10, name: 'Fettuccine Alfredo', category: 'main', price: 155, desc: 'Krema soslu makarna, tavuk ile.', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600', tags: [] },
  { id: 11, name: 'Kuzu Tandır', category: 'main', price: 320, desc: '8 saat fırında pişmiş kuzu.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600', tags: ['popular'] },
  { id: 12, name: 'Vegan Bowl', category: 'main', price: 145, desc: 'Kinoa, avokado, nohut, ıspanak.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600', tags: ['vegan'] },
  { id: 13, name: 'Cheesecake', category: 'dessert', price: 95, desc: 'New York usulü, frambuaz sos ile.', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600', tags: ['popular'] },
  { id: 14, name: 'Tiramisu', category: 'dessert', price: 105, desc: 'İtalyan klasiği, mascarpone ile.', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600', tags: [] },
  { id: 15, name: 'Çikolatalı Sufle', category: 'dessert', price: 115, desc: 'Sıcak çikolata dolgulu sufle.', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600', tags: ['popular'] },
  { id: 16, name: 'Baklava', category: 'dessert', price: 120, desc: 'Antep fıstıklı, tereyağlı.', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600', tags: ['popular'] },
  { id: 17, name: 'Sütlaç', category: 'dessert', price: 75, desc: 'Fırında pişmiş, tarçın ile.', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600', tags: [] },
  { id: 18, name: 'Türk Kahvesi', category: 'drink', price: 45, desc: 'Bakır cezvede pişirilmiş.', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600', tags: ['popular'] },
  { id: 19, name: 'Latte', category: 'drink', price: 65, desc: 'Espresso ve buharlanmış süt.', image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=600', tags: [] },
  { id: 20, name: 'Taze Portakal Suyu', category: 'drink', price: 55, desc: 'Günlük sıkılmış, %100 doğal.', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600', tags: ['vegan'] },
  { id: 21, name: 'Limonata', category: 'drink', price: 50, desc: 'Ev yapımı, taze nane ile.', image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600', tags: ['vegan'] },
  { id: 22, name: 'Sıcak Çikolata', category: 'drink', price: 70, desc: 'Bitter çikolata ve krema ile.', image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=600', tags: [] },
  { id: 23, name: 'Ayran', category: 'drink', price: 30, desc: 'Geleneksel Türk içeceği.', image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600', tags: ['popular'] },
  { id: 24, name: 'Iced Americano', category: 'drink', price: 60, desc: 'Soğuk espresso ve buz.', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600', tags: ['vegan'] }
];

// ===== DURUM =====
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let currentCategory = 'all';
let currentSearch = '';
let currentTheme = localStorage.getItem('theme') || 'light';

// ===== YARDIMCI =====
const $ = (s) => document.querySelector(s);

// ===== TEMA =====
function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  $('#themeBtn').textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}
$('#themeBtn').addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
  applyTheme();
});

// ===== TOAST =====
function showToast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._tm);
  t._tm = setTimeout(() => t.classList.remove('show'), 2500);
}

// ===== MENÜ RENDER =====
function renderMenu() {
  const grid = $('#menuGrid');
  const noRes = $('#noResult');
  
  const filtered = menuItems.filter(item => {
    const matchCat = currentCategory === 'all' || 
                     (currentCategory === 'fav' && favorites.includes(item.id)) ||
                     item.category === currentCategory;
    const matchSearch = !currentSearch || 
                        item.name.toLowerCase().includes(currentSearch) ||
                        item.desc.toLowerCase().includes(currentSearch);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.style.display = 'none';
    noRes.style.display = 'block';
    return;
  }
  grid.style.display = 'grid';
  noRes.style.display = 'none';
  grid.innerHTML = '';

  filtered.forEach(item => {
    const isFav = favorites.includes(item.id);
    const el = document.createElement('div');
    el.className = 'menu-item';
    el.innerHTML = 
      '<button class="menu-item__fav ' + (isFav ? 'active' : '') + '" data-fav="' + item.id + '">' + (isFav ? '❤️' : '🤍') + '</button>' +
      '<div class="menu-item__image" style="background-image:url(\'' + item.image + '\')"></div>' +
      '<div class="menu-item__body">' +
        '<div class="menu-item__head">' +
          '<div class="menu-item__name">' + item.name + '</div>' +
          '<div class="menu-item__price">' + item.price + '₺</div>' +
        '</div>' +
        '<div class="menu-item__desc">' + item.desc + '</div>' +
      '</div>';
    
    el.addEventListener('click', (e) => {
      if (e.target.closest('[data-fav]')) return;
      showToast('🍽️ ' + item.name);
    });
    
    el.querySelector('[data-fav]').addEventListener('click', (e) => {
      e.stopPropagation();
      const i = favorites.indexOf(item.id);
      if (i >= 0) { favorites.splice(i, 1); showToast('💔 Favoriden çıkarıldı'); }
      else { favorites.push(item.id); showToast('❤️ Favorilere eklendi'); }
      localStorage.setItem('favorites', JSON.stringify(favorites));
      renderMenu();
    });
    
    grid.appendChild(el);
  });
}

// ===== KATEGORİ =====
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.cat;
    renderMenu();
  });
});

// ===== ARAMA =====
$('#searchInput').addEventListener('input', (e) => {
  currentSearch = e.target.value.toLowerCase().trim();
  $('#searchClear').style.display = currentSearch ? 'block' : 'none';
  renderMenu();
});
$('#searchClear').addEventListener('click', () => {
  $('#searchInput').value = '';
  currentSearch = '';
  $('#searchClear').style.display = 'none';
  renderMenu();
});

// ===== SEPET =====
function openCart() {
  $('#cartPanel').classList.add('open');
  $('#cartOverlay').classList.add('open');
}
function closeCart() {
  $('#cartPanel').classList.remove('open');
  $('#cartOverlay').classList.remove('open');
}
$('#cartBtn').addEventListener('click', openCart);
$('#cartClose').addEventListener('click', closeCart);
$('#cartOverlay').addEventListener('click', closeCart);
$('#cartClear').addEventListener('click', () => {
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
});

function renderCart() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  $('#cartBadge').textContent = total;
  $('#cartBadge').style.display = total > 0 ? 'grid' : 'none';
  
  if (cart.length === 0) {
    $('#cartEmpty').style.display = 'block';
    $('#cartItems').innerHTML = '';
    $('#cartTotal').textContent = '0₺';
    return;
  }
  $('#cartEmpty').style.display = 'none';
  $('#cartItems').innerHTML = '';
  let sum = 0;
  cart.forEach((c, i) => {
    const item = menuItems.find(m => m.id === c.id);
    if (!item) return;
    sum += item.price * c.qty;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = 
      '<div class="cart-item__img" style="background-image:url(\'' + item.image + '\')"></div>' +
      '<div class="cart-item__info">' +
        '<div class="cart-item__name">' + item.name + '</div>' +
        '<div class="cart-item__price">' + (item.price * c.qty) + '₺</div>' +
        '<div class="cart-item__controls">' +
          '<button class="qty-btn" data-m="' + i + '">−</button>' +
          '<span class="cart-item__qty">' + c.qty + '</span>' +
          '<button class="qty-btn" data-p="' + i + '">+</button>' +
        '</div>' +
      '</div>';
    $('#cartItems').appendChild(div);
  });
  $('#cartTotal').textContent = sum + '₺';
  
  document.querySelectorAll('[data-m]').forEach(b => b.addEventListener('click', () => {
    const i = parseInt(b.dataset.m);
    cart[i].qty--;
    if (cart[i].qty <= 0) cart.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }));
  document.querySelectorAll('[data-p]').forEach(b => b.addEventListener('click', () => {
    cart[parseInt(b.dataset.p)].qty++;
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }));
}

// ===== WHATSAPP SİPARİŞ =====
$('#cartSend').addEventListener('click', () => {
  if (cart.length === 0) { showToast('⚠️ Sepet boş'); return; }
  let msg = '🍽️ *Lezzet Durağı Sipariş*\n\n';
  let sum = 0;
  cart.forEach(c => {
    const item = menuItems.find(m => m.id === c.id);
    if (!item) return;
    sum += item.price * c.qty;
    msg += '• ' + c.qty + 'x ' + item.name + ' — ' + (item.price * c.qty) + '₺\n';
  });
  msg += '\n💰 Toplam: ' + sum + '₺';
  window.open('https://wa.me/905550000000?text=' + encodeURIComponent(msg), '_blank');
  showToast('💬 WhatsApp açılıyor');
});

// ===== BAŞLAT =====
applyTheme();
renderMenu();
renderCart();

console.log('🍽️ Menü hazır. ' + menuItems.length + ' yemek yüklendi.');
