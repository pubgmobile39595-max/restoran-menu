/* ============================================================
   LEZZET DURAĞI — RESTORAN MENÜ
   ============================================================ */

// ============================================================
// MENÜ VERİSİ
// ============================================================
const menuItems = [
  { id: 1, name: 'Mercimek Çorbası', category: 'starter', price: 75, desc: 'Geleneksel Türk mutfağından, tereyağı ve nane ile servis edilir.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400', tags: ['veggie', 'popular'] },
  { id: 2, name: 'Humus Tabağı', category: 'starter', price: 95, desc: 'Tahin, zeytinyağı ve taze limon ile hazırlanan nohut püresi.', image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=400', tags: ['vegan'] },
  { id: 3, name: 'Sigara Böreği', category: 'starter', price: 85, desc: 'İnce yufkada beyaz peynir ve maydanoz dolgusu. Çıtır çıtır.', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', tags: ['veggie', 'popular'] },
  { id: 4, name: 'Acılı Ezme', category: 'starter', price: 70, desc: 'Domates, biber ve baharatlarla hazırlanan geleneksel meze.', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400', tags: ['vegan', 'spicy'] },
  { id: 5, name: 'Kalamar Tava', category: 'starter', price: 140, desc: 'Taze kalamar, tarator sos ile. Deniz mahsulü sevenler için.', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400', tags: ['popular'] },

  { id: 6, name: 'Karışık Pizza', category: 'main', price: 165, desc: 'Mozzarella, sucuk, biber, mantar, mısır. İnce hamur.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', tags: ['popular', 'milk'] },
  { id: 7, name: 'Izgara Somon', category: 'main', price: 280, desc: 'Taze somon fileto, sebze garnitür ve limon sos ile.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400', tags: ['gluten'] },
  { id: 8, name: 'Adana Kebap', category: 'main', price: 220, desc: 'Zırh ile kıyılmış kuzu eti, bulgur pilavı ve közlenmiş biber ile.', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400', tags: ['spicy', 'popular'] },
  { id: 9, name: 'Mantarlı Risotto', category: 'main', price: 175, desc: 'Arborio pirinci, taze mantar, parmesan ve trüf yağı.', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400', tags: ['veggie', 'milk'] },
  { id: 10, name: 'Fettuccine Alfredo', category: 'main', price: 155, desc: 'Krema soslu makarna, tavuk göğsü ve parmesan.', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400', tags: ['milk', 'gluten'] },
  { id: 11, name: 'Kuzu Tandır', category: 'main', price: 320, desc: '8 saat fırında pişmiş kuzu eti, patates püresi ile.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', tags: ['popular'] },
  { id: 12, name: 'Vegan Bowl', category: 'main', price: 145, desc: 'Kinoa, avokado, nohut, ıspanak, cherry domates. Sağlıklı seçim.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', tags: ['vegan', 'new'] },

  { id: 13, name: 'Cheesecake', category: 'dessert', price: 95, desc: 'New York usulü cheesecake, frambuaz sos ile.', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400', tags: ['milk', 'popular'] },
  { id: 14, name: 'Tiramisu', category: 'dessert', price: 105, desc: 'İtalyan klasiği, mascarpone ve kahve aroması ile.', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400', tags: ['milk', 'gluten'] },
  { id: 15, name: 'Çikolatalı Sufle', category: 'dessert', price: 115, desc: 'Sıcak çikolata dolgulu sufle, vanilyalı dondurma ile.', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400', tags: ['popular', 'milk'] },
  { id: 16, name: 'Baklava', category: 'dessert', price: 120, desc: 'Antep fıstıklı, ince açılmış, tereyağlı ev baklavası.', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400', tags: ['popular', 'gluten'] },
  { id: 17, name: 'Sütlaç', category: 'dessert', price: 75, desc: 'Fırında pişmiş geleneksel sütlaç, tarçın ile.', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400', tags: ['veggie', 'milk'] },

  { id: 18, name: 'Türk Kahvesi', category: 'drink', price: 45, desc: 'Bakır cezvede pişirilmiş, yanında lokum ile.', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400', tags: ['popular'] },
  { id: 19, name: 'Latte', category: 'drink', price: 65, desc: 'Espresso ve buharlanmış süt, latte art ile.', image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400', tags: ['milk'] },
  { id: 20, name: 'Taze Portakal Suyu', category: 'drink', price: 55, desc: 'Günlük sıkılmış, %100 doğal portakal suyu.', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400', tags: ['vegan', 'new'] },
  { id: 21, name: 'Limonata', category: 'drink', price: 50, desc: 'Ev yapımı limonata, taze nane ile.', image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400', tags: ['vegan'] },
  { id: 22, name: 'Sıcak Çikolata', category: 'drink', price: 70, desc: 'Bitter çikolata ve taze krema ile hazırlanır.', image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400', tags: ['milk'] },
  { id: 23, name: 'Ayran', category: 'drink', price: 30, desc: 'Geleneksel Türk içeceği, soğuk servis edilir.', image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400', tags: ['popular', 'milk'] },
  { id: 24, name: 'Iced Americano', category: 'drink', price: 60, desc: 'Soğuk espresso, buz ve tonik su ile ferahlatıcı.', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400', tags: ['vegan'] }
];

// ============================================================
// TAG ETİKETLERİ
// ============================================================
const tagLabels = {
  vegan: { icon: '🌱', text: 'Vegan' },
  veggie: { icon: '🥬', text: 'Vejetaryen' },
  spicy: { icon: '🌶️', text: 'Acı' },
  new: { icon: '✨', text: 'Yeni' },
  popular: { icon: '⭐', text: 'Popüler' },
  gluten: { icon: '🌾', text: 'Gluten' },
  milk: { icon: '🥛', text: 'Süt' }
};

// ============================================================
// MENÜ RENDER
// ============================================================
const menuGrid = document.getElementById('menuGrid');
const noResult = document.getElementById('noResult');

let currentCategory = 'all';
let currentSearch = '';

function renderMenu() {
  const filtered = menuItems.filter(item => {
    const matchCat = currentCategory === 'all' || item.category === currentCategory;
    const matchSearch = !currentSearch ||
      item.name.toLowerCase().includes(currentSearch) ||
      item.desc.toLowerCase().includes(currentSearch);
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

  filtered.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'menu-item';
    el.style.animationDelay = (index * 0.04) + 's';

    const tagsHtml = item.tags.map(t => {
      const tag = tagLabels[t];
      if (!tag) return '';
      return `<span class="tag tag--${t}">${tag.icon} ${tag.text}</span>`;
    }).join('');

    el.innerHTML = `
      <div class="menu-item__image" style="background-image:url('${item.image}')"></div>
      <div class="menu-item__body">
        <div class="menu-item__head">
          <div class="menu-item__name">${item.name}</div>
          <div class="menu-item__price">${item.price}₺</div>
        </div>
        <div class="menu-item__desc">${item.desc}</div>
        <div class="menu-item__tags">${tagsHtml}</div>
      </div>
    `;

    menuGrid.appendChild(el);
  });
}

renderMenu();

// ============================================================
// KATEGORİ FİLTRELEME
// ============================================================
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.cat;
    renderMenu();
  });
});

// ============================================================
// ARAMA
// ============================================================
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');

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
// REZERVASYON FORMU
// ============================================================
const reservationForm = document.getElementById('reservationForm');
const reservationStatus = document.getElementById('reservationStatus');

if (reservationForm) {
  const dateInput = reservationForm.querySelector('input[name="tarih"]');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  reservationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = reservationForm.querySelector('.btn-submit');
    const data = new FormData(reservationForm);

    reservationStatus.textContent = '⏳ Gönderiliyor...';
    reservationStatus.style.color = 'var(--text-dim)';
    submitBtn.disabled = true;

    try {
      const response = await fetch(reservationForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        reservationStatus.textContent = '✅ Rezervasyonunuz alındı! Sizi arayacağız. 🍽️';
        reservationStatus.style.color = 'var(--green)';
        reservationForm.reset();
      } else {
        reservationStatus.textContent = '❌ Bir hata oluştu. Lütfen tekrar deneyin.';
        reservationStatus.style.color = 'var(--red)';
      }
    } catch (err) {
      reservationStatus.textContent = '❌ Bağlantı hatası.';
      reservationStatus.style.color = 'var(--red)';
    } finally {
      submitBtn.disabled = false;
    }
  });
}

// ============================================================
// REZERVASYONA KAYDIRMA
// ============================================================
function scrollToReservation() {
  document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' });
}

// ============================================================
// GERÇEK QR KOD ÜRETİCİ
// ============================================================
function generateQRCode() {
  const qrDiv = document.getElementById('qrCode');
  if (!qrDiv) return;

  // Kütüphane yüklendi mi?
  if (typeof QRCode === 'undefined') {
    console.warn('QRCode kütüphanesi yüklenemedi. Tekrar deneniyor...');
    setTimeout(generateQRCode, 500);
    return;
  }

  // Menü sayfasının kendi linki
  const siteUrl = window.location.href;

  // Canvas oluştur
  const canvas = document.createElement('canvas');

  QRCode.toCanvas(canvas, siteUrl, {
    width: 160,
    margin: 1,
    errorCorrectionLevel: 'M',
    color: {
      dark: '#8b3a1f',   // Restoran koyu rengi
      light: '#ffffff'
    }
  }, function (error) {
    if (error) {
      console.error('QR kod hatası:', error);
      return;
    }
    qrDiv.innerHTML = '';
    qrDiv.appendChild(canvas);
  });
}

// QR kodunu indir
function downloadQR() {
  const canvas = document.querySelector('#qrCode canvas');
  if (!canvas) return;
  const link = document.createElement('a');
  link.download = 'lezzet-duragi-qr.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

// ============================================================
// SCROLL REVEAL
// ============================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.qr-wrapper, .reservation-form, .contact-card, .section__head')
  .forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    revealObserver.observe(el);
  });

// ============================================================
// BAŞLAT
// ============================================================
window.addEventListener('load', () => {
  generateQRCode();
});

console.log('%c🍽️ Lezzet Durağı Menü','color:#8b3a1f;font-size:16px;font-weight:bold');
console.log('%cToplam ' + menuItems.length + ' ürün yüklendi.','color:#7a6a5a');
