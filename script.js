/* ============================================================
   LEZZET DURAĞI — TAM ÖZELLİKLİ MENÜ
   ============================================================ */

// ============================================================
// MENÜ VERİSİ
// ============================================================
const menuItems = [
  { id: 1, name: 'Mercimek Çorbası', nameEn: 'Lentil Soup', category: 'starter', price: 75, desc: 'Geleneksel Türk mutfağından, tereyağı ve nane ile servis edilir.', descEn: 'Traditional Turkish soup with butter and mint.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600', tags: ['veggie', 'popular'] },
  { id: 2, name: 'Humus Tabağı', nameEn: 'Hummus Plate', category: 'starter', price: 95, desc: 'Tahin, zeytinyağı ve taze limon ile hazırlanan nohut püresi.', descEn: 'Chickpea puree with tahini, olive oil and fresh lemon.', image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600', tags: ['vegan'] },
  { id: 3, name: 'Sigara Böreği', nameEn: 'Cheese Rolls', category: 'starter', price: 85, desc: 'İnce yufkada beyaz peynir ve maydanoz dolgusu. Çıtır çıtır.', descEn: 'Crispy rolls with feta cheese and parsley.', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600', tags: ['veggie', 'popular'] },
  { id: 4, name: 'Acılı Ezme', nameEn: 'Spicy Ezme', category: 'starter', price: 70, desc: 'Domates, biber ve baharatlarla hazırlanan geleneksel meze.', descEn: 'Traditional meze with tomato, pepper and spices.', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600', tags: ['vegan', 'spicy'] },
  { id: 5, name: 'Kalamar Tava', nameEn: 'Fried Calamari', category: 'starter', price: 140, desc: 'Taze kalamar, tarator sos ile. Deniz mahsulü sevenler için.', descEn: 'Fresh calamari with tarator sauce.', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600', tags: ['popular'] },

  { id: 6, name: 'Karışık Pizza', nameEn: 'Mixed Pizza', category: 'main', price: 165, desc: 'Mozzarella, sucuk, biber, mantar, mısır. İnce hamur.', descEn: 'Mozzarella, sausage, pepper, mushroom, corn.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600', tags: ['popular', 'milk'] },
  { id: 7, name: 'Izgara Somon', nameEn: 'Grilled Salmon', category: 'main', price: 280, desc: 'Taze somon fileto, sebze garnitür ve limon sos ile.', descEn: 'Fresh salmon fillet with vegetables and lemon sauce.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600', tags: ['gluten'] },
  { id: 8, name: 'Adana Kebap', nameEn: 'Adana Kebab', category: 'main', price: 220, desc: 'Zırh ile kıyılmış kuzu eti, bulgur pilavı ve közlenmiş biber ile.', descEn: 'Hand-minced lamb kebab with bulgur and grilled pepper.', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600', tags: ['spicy', 'popular'] },
  { id: 9, name: 'Mantarlı Risotto', nameEn: 'Mushroom Risotto', category: 'main', price: 175, desc: 'Arborio pirinci, taze mantar, parmesan ve trüf yağı.', descEn: 'Arborio rice with fresh mushroom, parmesan and truffle oil.', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600', tags: ['veggie', 'milk'] },
  { id: 10, name: 'Fettuccine Alfredo', nameEn: 'Fettuccine Alfredo', category: 'main', price: 155, desc: 'Krema soslu makarna, tavuk göğsü ve parmesan.', descEn: 'Creamy pasta with chicken breast and parmesan.', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600', tags: ['milk', 'gluten'] },
  { id: 11, name: 'Kuzu Tandır', nameEn: 'Lamb Tandoori', category: 'main', price: 320, desc: '8 saat fırında pişmiş kuzu eti, patates püresi ile.', descEn: '8-hour roasted lamb with mashed potatoes.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600', tags: ['popular'] },
  { id: 12, name: 'Vegan Bowl', nameEn: 'Vegan Bowl', category: 'main', price: 145, desc: 'Kinoa, avokado, nohut, ıspanak, cherry domates.', descEn: 'Quinoa, avocado, chickpeas, spinach, cherry tomatoes.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600', tags: ['vegan', 'new'] },

  { id: 13, name: 'Cheesecake', nameEn: 'Cheesecake', category: 'dessert', price: 95, desc: 'New York usulü cheesecake, frambuaz sos ile.', descEn: 'New York style cheesecake with raspberry sauce.', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600', tags: ['milk', 'popular'] },
  { id: 14, name: 'Tiramisu', nameEn: 'Tiramisu', category: 'dessert', price: 105, desc: 'İtalyan klasiği, mascarpone ve kahve aroması ile.', descEn: 'Italian classic with mascarpone and coffee.', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600', tags: ['milk', 'gluten'] },
  { id: 15, name: 'Çikolatalı Sufle', nameEn: 'Chocolate Souffle', category: 'dessert', price: 115, desc: 'Sıcak çikolata dolgulu sufle, vanilyalı dondurma ile.', descEn: 'Warm chocolate souffle with vanilla ice cream.', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600', tags: ['popular', 'milk'] },
  { id: 16, name: 'Baklava', nameEn: 'Baklava', category: 'dessert', price: 120, desc: 'Antep fıstıklı, ince açılmış, tereyağlı ev baklavası.', descEn: 'Homemade baklava with pistachio and butter.', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600', tags: ['popular', 'gluten'] },
  { id: 17, name: 'Sütlaç', nameEn: 'Rice Pudding', category: 'dessert', price: 75, desc: 'Fırında pişmiş geleneksel sütlaç, tarçın ile.', descEn: 'Traditional baked rice pudding with cinnamon.', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600', tags: ['veggie', 'milk'] },

  { id: 18, name: 'Türk Kahvesi', nameEn: 'Turkish Coffee', category: 'drink', price: 45, desc: 'Bakır cezvede pişirilmiş, yanında lokum ile.', descEn: 'Brewed in copper pot, served with Turkish delight.', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600', tags: ['popular'] },
  { id: 19, name: 'Latte', nameEn: 'Latte', category: 'drink', price: 65, desc: 'Espresso ve buharlanmış süt, latte art ile.', descEn: 'Espresso with steamed milk and latte art.', image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=600', tags: ['milk'] },
  { id: 20, name: 'Taze Portakal Suyu', nameEn: 'Fresh Orange Juice', category: 'drink', price: 55, desc: 'Günlük sıkılmış, %100 doğal portakal suyu.', descEn: 'Daily squeezed, 100% natural orange juice.', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600', tags: ['vegan', 'new'] },
  { id: 21, name: 'Limonata', nameEn: 'Lemonade', category: 'drink', price: 50, desc: 'Ev yapımı limonata, taze nane ile.', descEn: 'Homemade lemonade with fresh mint.', image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600', tags: ['vegan'] },
  { id: 22, name: 'Sıcak Çikolata', nameEn: 'Hot Chocolate', category: 'drink', price: 70, desc: 'Bitter çikolata ve taze krema ile hazırlanır.', descEn: 'Made with dark chocolate and fresh cream.', image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=600', tags: ['milk'] },
  { id: 23, name: 'Ayran', nameEn: 'Ayran', category: 'drink', price: 30, desc: 'Geleneksel Türk içeceği, soğuk servis edilir.', descEn: 'Traditional Turkish yogurt drink, served cold.', image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600', tags: ['popular', 'milk'] },
  { id: 24, name: 'Iced Americano', nameEn: 'Iced Americano', category: 'drink', price: 60, desc: 'Soğuk espresso, buz ve tonik su ile ferahlatıcı.', descEn: 'Cold espresso with ice and tonic water.', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600', tags: ['vegan'] }
];

// ============================================================
// ÇEVİRİLER
// ============================================================
const translations = {
  tr: {
    welcome: '✨ Hoş geldiniz',
    heroTitle1: 'Damaklarda',
    heroTitle2: 'iz bırakan',
    heroTitle3: 'lezzetler',
    heroSub: 'Taze malzemeler, ustalıkla hazırlanan tarifler ve sıcak bir atmosfer.',
    searchPh: 'Yemek ara...',
    catAll: 'Tümü',
    catStarter: 'Başlangıçlar',
    catMain: 'Ana Yemekler',
    catDessert: 'Tatlılar',
    catDrink: 'İçecekler',
    catFav: 'Favoriler',
    noResult: 'Farklı bir arama yapmayı deneyin.',
    qrBadge: '📱 Mobil Menü',
    qrTitle: 'Telefonunuzla okutun',
    qrSub: 'Masadaki QR kodu okutarak bu menüye ulaşabilirsiniz.',
    qrLabel: 'Menüye Git',
    qrDownload: '⬇️ QR İndir',
    resEyebrow: 'Rezervasyon',
    resTitle: 'Masa Ayırtın',
    resLead: 'Özel günleriniz için yerinizi şimdiden ayırtın.',
    formName: 'Ad Soyad',
    formPhone: 'Telefon',
    formDate: 'Tarih',
    formTime: 'Saat',
    formPeople: 'Kişi Sayısı',
    formArea: 'Alan',
    formNote: 'Özel Notunuz',
    formSubmit: 'Rezervasyon Yap',
    contactPhone: 'Telefon',
    contactCall: 'Hemen Ara',
    contactWa: 'Sipariş ve bilgi',
    contactWaBtn: 'Mesaj Gönder',
    contactAddr: 'Adres',
    contactMap: 'Yol Tarifi',
    footerMenu: 'Menü',
    footerRes: 'Rezervasyon',
    footerContact: 'İletişim',
    cartTitle: 'Sepetim',
    cartEmpty: 'Sepetiniz boş',
    cartTotal: 'Toplam:',
    cartSend: 'WhatsApp ile Sipariş Ver',
    cartClear: 'Sepeti Temizle',
    modalAdd: 'Sepete Ekle',
    tableLabel: 'Masa',
    added: 'sepete eklendi',
    removed: 'sepetten çıkarıldı',
    favAdded: 'Favorilere eklendi',
    favRemoved: 'Favorilerden çıkarıldı',
    orderEmpty: 'Sepetiniz boş',
    orderSent: 'WhatsApp\'a yönlendiriliyorsunuz',
    tableNumber: 'Masa Numarası'
  },
  en: {
    welcome: '✨ Welcome',
    heroTitle1: 'Flavors',
    heroTitle2: 'that leave',
    heroTitle3: 'a mark',
    heroSub: 'Fresh ingredients, masterfully prepared recipes and a warm atmosphere.',
    searchPh: 'Search food...',
    catAll: 'All',
    catStarter: 'Starters',
    catMain: 'Main Courses',
    catDessert: 'Desserts',
    catDrink: 'Drinks',
    catFav: 'Favorites',
    noResult: 'Try a different search.',
    qrBadge: '📱 Mobile Menu',
    qrTitle: 'Scan with your phone',
    qrSub: 'Scan the QR code on your table to access this menu.',
    qrLabel: 'Go to Menu',
    qrDownload: '⬇️ Download QR',
    resEyebrow: 'Reservation',
    resTitle: 'Book a Table',
    resLead: 'Reserve your place for your special occasions.',
    formName: 'Full Name',
    formPhone: 'Phone',
    formDate: 'Date',
    formTime: 'Time',
    formPeople: 'Number of People',
    formArea: 'Area',
    formNote: 'Special Note',
    formSubmit: 'Make Reservation',
    contactPhone: 'Phone',
    contactCall: 'Call Now',
    contactWa: 'Order and info',
    contactWaBtn: 'Send Message',
    contactAddr: 'Address',
    contactMap: 'Get Directions',
    footerMenu: 'Menu',
    footerRes: 'Reservation',
    footerContact: 'Contact',
    cartTitle: 'My Cart',
    cartEmpty: 'Your cart is empty',
    cartTotal: 'Total:',
    cartSend: 'Order via WhatsApp',
    cartClear: 'Clear Cart',
    modalAdd: 'Add to Cart',
    tableLabel: 'Table',
    added: 'added to cart',
    removed: 'removed from cart',
    favAdded: 'Added to favorites',
    favRemoved: 'Removed from favorites',
    orderEmpty: 'Your cart is empty',
    orderSent: 'Redirecting to WhatsApp',
    tableNumber: 'Table Number'
  }
};

// ============================================================
// DURUM
// ============================================================
let currentLang = localStorage.getItem('lang') || 'tr';
let currentTheme = localStorage.getItem('theme') || 'light';
let currentCategory = 'all';
let currentSearch = '';
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let ratings = JSON.parse(localStorage.getItem('ratings') || '{}');
let currentFood = null;

// Masa numarası URL'den
const urlParams = new URLSearchParams(window.location.search);
const tableNumber = urlParams.get('masa') || urlParams.get('table');

// ============================================================
// YARDIMCILAR
// ============================================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function t(key) {
  return translations[currentLang][key] || key;
}

function showToast(msg) {
  const toast = $('#toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

function saveState() {
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('favorites', JSON.stringify(favorites));
  localStorage.setItem('ratings', JSON.stringify(ratings));
}

// ============================================================
// TEMA
// ============================================================
function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  $('#themeBtn').textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}
$('#themeBtn').addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
  applyTheme();
});

// ============================================================
// DİL
// ============================================================
function applyLanguage() {
  document.documentElement.setAttribute('lang', currentLang);
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
  });
  $$('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[currentLang][key]) el.placeholder = translations[currentLang][key];
  });
  $('#langBtn').textContent = currentLang === 'tr' ? '🇹🇷' : '🇬🇧';
  if (tableNumber) {
    $('#tableInfo').textContent = `${t('tableLabel')}: ${tableNumber}`;
  }
  renderMenu();
}
$('#langBtn').addEventListener('click', () => {
  currentLang = currentLang === 'tr' ? 'en' : 'tr';
  localStorage.setItem('lang', currentLang);
  applyLanguage();
});

// ============================================================
// MENÜ RENDER
// ============================================================
const menuGrid = $('#menuGrid');
const noResult = $('#noResult');

function renderMenu() {
  const filtered = menuItems.filter(item => {
    const matchCat = currentCategory === 'all' ||
      (currentCategory === 'fav' && favorites.includes(item.id)) ||
      item.category === currentCategory;
    const name = currentLang === 'tr' ? item.name : item.nameEn;
    const desc = currentLang === 'tr' ? item.desc : item.descEn;
    const matchSearch = !currentSearch ||
      name.toLowerCase().includes(currentSearch) ||
      desc.toLowerCase().includes(currentSearch);
    return matchCat && matchSearch;
  });

  menuGrid.innerHTML = '';

  if (filtered.length === 0) {
    noResult.style.display = 'block';
    menuGrid.style.display = 'none';
    return;
  }
  noResult.style.display = 'none';
  menuGrid.style.display = 'grid';

  const tagLabels = {
    vegan: { icon: '🌱', tr: 'Vegan', en: 'Vegan' },
    veggie: { icon: '🥬', tr: 'Vejetaryen', en: 'Vegetarian' },
    spicy: { icon: '🌶️', tr: 'Acı', en: 'Spicy' },
    new: { icon: '✨', tr: 'Yeni', en: 'New' },
    popular: { icon: '⭐', tr: 'Popüler', en: 'Popular' },
    gluten: { icon: '🌾', tr: 'Gluten', en: 'Gluten' },
    milk: { icon: '🥛', tr: 'Süt', en: 'Milk' }
  };

  filtered.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'menu-item';
    el.style.animationDelay = (i * 0.04) + 's';

    const name = currentLang === 'tr' ? item.name : item.nameEn;
    const desc = currentLang === 'tr' ? item.desc : item.descEn;

    const tagsHtml = item.tags.map(tag => {
      const tl = tagLabels[tag];
      if (!tl) return '';
      return `<span class="tag tag--${tag}">${tl.icon} ${tl[currentLang]}</span>`;
    }).join('');

    const isFav = favorites.includes(item.id);

    el.innerHTML = `
      <button class="menu-item__fav ${isFav ? 'active' : ''}" data-fav="${item.id}">${isFav ? '❤️' : '🤍'}</button>
      <div class="menu-item__image" style="background-image:url('${item.image}')"></div>
      <div class="menu-item__body">
        <div class="menu-item__head">
          <div class="menu-item__name">${name}</div>
          <div class="menu-item__price">${item.price}₺</div>
        </div>
        <div class="menu-item__desc">${desc}</div>
        <div class="menu-item__tags">${tagsHtml}</div>
      </div>
    `;

    // Kart tıklaması → modal
    el.addEventListener('click', (e) => {
      if (e.target.closest('[data-fav]')) return;
      openModal(item);
    });

    // Favori tıklaması
    el.querySelector('[data-fav]').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(item.id);
    });

    menuGrid.appendChild(el);
  });
}

// ============================================================
// FAVORİLER
// ============================================================
function toggleFavorite(id) {
  const idx = favorites.indexOf(id);
  if (idx >= 0) {
    favorites.splice(idx, 1);
    showToast('💔 ' + t('favRemoved'));
  } else {
    favorites.push(id);
    showToast('❤️ ' + t('favAdded'));
  }
  saveState();
  renderMenu();
}

// ============================================================
// ARAMA
// ============================================================
const searchInput = $('#searchInput');
const searchClear = $('#searchClear');

searchInput.addEventListener('input', (e) => {
  currentSearch = e.target.value.toLowerCase().trim();
  searchClear.style.display = currentSearch ? 'block' : 'none';
  renderMenu();
});
searchClear.addEventListener('click', () => {
  searchInput.value = '';
  currentSearch = '';
  searchClear.style.display = 'none';
  renderMenu();
  searchInput.focus();
});

// ============================================================
// KATEGORİ
// ============================================================
$$('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.cat;
    renderMenu();
  });
});

// ============================================================
// SEPET
// ============================================================
const cartPanel = $('#cartPanel');
const cartOverlay = $('#cartOverlay');
const cartBadge = $('#cartBadge');
const cartItems = $('#cartItems');
const cartEmpty = $('#cartEmpty');
const cartTotal = $('#cartTotal');

function openCart() {
  cartPanel.classList.add('open');
  cartOverlay.classList.add('open');
}
function closeCart() {
  cartPanel.classList.remove('open');
  cartOverlay.classList.remove('open');
}
$('#cartBtn').addEventListener('click', openCart);
$('#cartClose').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function addToCart(item) {
  const existing = cart.find(c => c.id === item.id);
  if (existing) existing.qty++;
  else cart.push({ id: item.id, qty: 1 });
  saveState();
  renderCart();
  showToast('🛒 ' + (currentLang === 'tr' ? item.name : item.nameEn) + ' ' + t('added'));
}
function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveState();
  renderCart();
}
function updateQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { saveState(); renderCart(); }
}

function renderCart() {
  const totalQty = cart.reduce((sum, c) => sum + c.qty, 0);
  cartBadge.textContent = totalQty;
  cartBadge.style.display = totalQty > 0 ? 'grid' : 'none';

  if (cart.length === 0) {
    cartEmpty.style.display = 'block';
    cartItems.innerHTML = '';
    cartTotal.textContent = '0₺';
    return;
  }
  cartEmpty.style.display = 'none
