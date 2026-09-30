/* ============================================================
   LEZZET DURAĞI — MEGA PAKET (30 Özellik)
   ============================================================ */

// ============================================================
// MENÜ VERİSİ
// ============================================================
const menuItems = [
  { id: 1, name: 'Mercimek Çorbası', nameEn: 'Lentil Soup', nameAr: 'شوربة العدس', category: 'starter', price: 75, desc: 'Geleneksel Türk mutfağından, tereyağı ve nane ile.', descEn: 'Traditional Turkish soup with butter and mint.', descAr: 'شوربة تركية تقليدية بالزبدة والنعناع.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600', tags: ['veggie', 'popular'], calories: 180, prepTime: 15, allergens: [] },
  { id: 2, name: 'Humus Tabağı', nameEn: 'Hummus Plate', nameAr: 'طبق الحمص', category: 'starter', price: 95, desc: 'Tahin, zeytinyağı ve taze limon ile.', descEn: 'Chickpea puree with tahini and lemon.', descAr: 'حمص مع طحينة وزيت زيتون وليمون.', image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600', tags: ['vegan'], calories: 220, prepTime: 10, allergens: ['sesame'] },
  { id: 3, name: 'Sigara Böreği', nameEn: 'Cheese Rolls', nameAr: 'لفائف الجبن', category: 'starter', price: 85, desc: 'İnce yufkada beyaz peynir ve maydanoz.', descEn: 'Crispy rolls with feta cheese.', descAr: 'لفائف مقرمشة بالجبن.', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600', tags: ['veggie', 'popular'], calories: 310, prepTime: 20, allergens: ['gluten', 'milk'] },
  { id: 4, name: 'Acılı Ezme', nameEn: 'Spicy Ezme', nameAr: 'عزة حارة', category: 'starter', price: 70, desc: 'Domates, biber ve baharatlarla.', descEn: 'Traditional meze with tomato and pepper.', descAr: 'مزة تقليدية بالطماطم والفلفل.', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600', tags: ['vegan', 'spicy'], calories: 90, prepTime: 8, allergens: [] },
  { id: 5, name: 'Kalamar Tava', nameEn: 'Fried Calamari', nameAr: 'كاليماري مقلي', category: 'starter', price: 140, desc: 'Taze kalamar, tarator sos ile.', descEn: 'Fresh calamari with tarator sauce.', descAr: 'كاليماري طازج مع صلصة الطرطور.', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600', tags: ['popular'], calories: 340, prepTime: 25, allergens: ['gluten', 'egg'] },

  { id: 6, name: 'Karışık Pizza', nameEn: 'Mixed Pizza', nameAr: 'بيتزا مشكلة', category: 'main', price: 165, desc: 'Mozzarella, sucuk, biber, mantar, mısır.', descEn: 'Mozzarella, sausage, pepper, mushroom.', descAr: 'موزاريلا، نقانق، فلفل، فطر.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600', tags: ['popular', 'milk'], calories: 780, prepTime: 20, allergens: ['gluten', 'milk'] },
  { id: 7, name: 'Izgara Somon', nameEn: 'Grilled Salmon', nameAr: 'سلمون مشوي', category: 'main', price: 280, desc: 'Taze somon fileto, sebze garnitür.', descEn: 'Fresh salmon fillet with vegetables.', descAr: 'فيليه سلمون طازج مع خضار.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600', tags: [], calories: 420, prepTime: 25, allergens: ['fish'] },
  { id: 8, name: 'Adana Kebap', nameEn: 'Adana Kebab', nameAr: 'كباب أضنة', category: 'main', price: 220, desc: 'Zırh ile kıyılmış kuzu eti, bulgur pilavı.', descEn: 'Hand-minced lamb kebab with bulgur.', descAr: 'كباب لحم غنم مفروم يدويًا.', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600', tags: ['spicy', 'popular'], calories: 620, prepTime: 30, allergens: ['gluten'] },
  { id: 9, name: 'Mantarlı Risotto', nameEn: 'Mushroom Risotto', nameAr: 'ريزوتو الفطر', category: 'main', price: 175, desc: 'Arborio pirinci, taze mantar, parmesan.', descEn: 'Arborio rice with mushroom and parmesan.', descAr: 'أرز أربوريو مع الفطر والبارميزان.', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600', tags: ['veggie', 'milk'], calories: 480, prepTime: 30, allergens: ['milk'] },
  { id: 10, name: 'Fettuccine Alfredo', nameEn: 'Fettuccine Alfredo', nameAr: 'فيتوتشيني ألفريدو', category: 'main', price: 155, desc: 'Krema soslu makarna, tavuk göğsü.', descEn: 'Creamy pasta with chicken breast.', descAr: 'معكرونة بصلصة الكريمة والدجاج.', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600', tags: ['milk', 'gluten'], calories: 650, prepTime: 22, allergens: ['gluten', 'milk'] },
  { id: 11, name: 'Kuzu Tandır', nameEn: 'Lamb Tandoori', nameAr: 'لحم غنم تندوري', category: 'main', price: 320, desc: '8 saat fırında pişmiş kuzu eti.', descEn: '8-hour roasted lamb.', descAr: 'لحم غنم مشوي لمدة 8 ساعات.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600', tags: ['popular'], calories: 720, prepTime: 40, allergens: [] },
  { id: 12, name: 'Vegan Bowl', nameEn: 'Vegan Bowl', nameAr: 'طبق نباتي', category: 'main', price: 145, desc: 'Kinoa, avokado, nohut, ıspanak.', descEn: 'Quinoa, avocado, chickpeas, spinach.', descAr: 'كينوا، أفوكادو، حمص، سبانخ.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600', tags: ['vegan', 'new'], calories: 380, prepTime: 12, allergens: [] },

  { id: 13, name: 'Cheesecake', nameEn: 'Cheesecake', nameAr: 'تشيز كيك', category: 'dessert', price: 95, desc: 'New York usulü, frambuaz sos ile.', descEn: 'New York style with raspberry sauce.', descAr: 'على طريقة نيويورك مع صلصة التوت.', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600', tags: ['milk', 'popular'], calories: 420, prepTime: 5, allergens: ['milk', 'gluten', 'egg'] },
  { id: 14, name: 'Tiramisu', nameEn: 'Tiramisu', nameAr: 'تيراميسو', category: 'dessert', price: 105, desc: 'İtalyan klasiği, mascarpone ile.', descEn: 'Italian classic with mascarpone.', descAr: 'الحلوى الإيطالية الكلاسيكية.', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600', tags: ['milk', 'gluten'], calories: 380, prepTime: 5, allergens: ['milk', 'gluten', 'egg'] },
  { id: 15, name: 'Çikolatalı Sufle', nameEn: 'Chocolate Souffle', nameAr: 'سوفليه الشوكولاتة', category: 'dessert', price: 115, desc: 'Sıcak çikolata dolgulu sufle.', descEn: 'Warm chocolate souffle.', descAr: 'سوفليه الشوكولاتة الدافئ.', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600', tags: ['popular', 'milk'], calories: 460, prepTime: 15, allergens: ['milk', 'gluten', 'egg'] },
  { id: 16, name: 'Baklava', nameEn: 'Baklava', nameAr: 'بقلاوة', category: 'dessert', price: 120, desc: 'Antep fıstıklı, tereyağlı.', descEn: 'With pistachio and butter.', descAr: 'بالفستق والزبدة.', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600', tags: ['popular', 'gluten'], calories: 380, prepTime: 5, allergens: ['gluten', 'nuts', 'milk'] },
  { id: 17, name: 'Sütlaç', nameEn: 'Rice Pudding', nameAr: 'رز بلبن', category: 'dessert', price: 75, desc: 'Fırında pişmiş, tarçın ile.', descEn: 'Baked rice pudding with cinnamon.', descAr: 'رز بلبن مخبوز مع القرفة.', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600', tags: ['veggie', 'milk'], calories: 280, prepTime: 5, allergens: ['milk'] },

  { id: 18, name: 'Türk Kahvesi', nameEn: 'Turkish Coffee', nameAr: 'قهوة تركية', category: 'drink', price: 45, desc: 'Bakır cezvede pişirilmiş.', descEn: 'Brewed in copper pot.', descAr: 'مطبوخة في إبريق نحاسي.', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600', tags: ['popular'], calories: 15, prepTime: 5, allergens: [] },
  { id: 19, name: 'Latte', nameEn: 'Latte', nameAr: 'لاتيه', category: 'drink', price: 65, desc: 'Espresso ve buharlanmış süt.', descEn: 'Espresso with steamed milk.', descAr: 'إسبريسو مع حليب مبخر.', image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=600', tags: ['milk'], calories: 190, prepTime: 5, allergens: ['milk'] },
  { id: 20, name: 'Taze Portakal Suyu', nameEn: 'Fresh Orange Juice', nameAr: 'عصير برتقال', category: 'drink', price: 55, desc: 'Günlük sıkılmış, %100 doğal.', descEn: 'Daily squeezed, 100% natural.', descAr: 'طازج 100% طبيعي.', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600', tags: ['vegan', 'new'], calories: 110, prepTime: 3, allergens: [] },
  { id: 21, name: 'Limonata', nameEn: 'Lemonade', nameAr: 'ليموناضة', category: 'drink', price: 50, desc: 'Ev yapımı, taze nane ile.', descEn: 'Homemade with fresh mint.', descAr: 'محلية الصنع مع النعناع الطازج.', image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600', tags: ['vegan'], calories: 120, prepTime: 5, allergens: [] },
  { id: 22, name: 'Sıcak Çikolata', nameEn: 'Hot Chocolate', nameAr: 'شوكولاتة ساخنة', category: 'drink', price: 70, desc: 'Bitter çikolata ve taze krema.', descEn: 'Dark chocolate and cream.', descAr: 'شوكولاتة داكنة وكريمة.', image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=600', tags: ['milk'], calories: 320, prepTime: 8, allergens: ['milk'] },
  { id: 23, name: 'Ayran', nameEn: 'Ayran', nameAr: 'عيران', category: 'drink', price: 30, desc: 'Geleneksel Türk içeceği.', descEn: 'Traditional Turkish yogurt drink.', descAr: 'مشروب الزبادي التركي.', image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600', tags: ['popular', 'milk'], calories: 80, prepTime: 2, allergens: ['milk'] },
  { id: 24, name: 'Iced Americano', nameEn: 'Iced Americano', nameAr: 'أمريكانو مثلج', category: 'drink', price: 60, desc: 'Soğuk espresso ve buz.', descEn: 'Cold espresso with ice.', descAr: 'إسبريسو بارد مع الثلج.', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600', tags: ['vegan'], calories: 10, prepTime: 3, allergens: [] }
];

// Ekstralar
const extrasCatalog = {
  cheese: { tr: 'Ekstra Peynir', en: 'Extra Cheese', ar: 'جبن إضافي', price: 25 },
  bacon: { tr: 'Pastırma', en: 'Bacon', ar: 'لحم مقدد', price: 35 },
  avocado: { tr: 'Avokado', en: 'Avocado', ar: 'أفوكادو', price: 30 },
  egg: { tr: 'Yumurta', en: 'Egg', ar: 'بيض', price: 15 },
  mushrooms: { tr: 'Mantar', en: 'Mushrooms', ar: 'فطر', price: 20 },
  olives: { tr: 'Zeytin', en: 'Olives', ar: 'زيتون', price: 15 }
};

// Kupon kodları
const coupons = {
  'HOSGELDIN10': { type: 'percent', value: 10, desc: 'İlk sipariş %10' },
  'YAZ20': { type: 'percent', value: 20, desc: 'Yaz kampanyası %20' },
  '50TL': { type: 'fixed', value: 50, desc: '50 TL indirim' },
  'BEDAVA': { type: 'percent', value: 100, desc: 'Bedava!' }
};

// ============================================================
// ÇEVİRİLER (TR / EN / AR)
// ============================================================
const translations = {
  tr: {
    welcome: '✨ Hoş geldiniz', heroTitle1: 'Damaklarda', heroTitle2: 'iz bırakan', heroTitle3: 'lezzetler',
    heroSub: 'Taze malzemeler, ustalıkla hazırlanan tarifler.',
    searchPh: 'Yemek ara...', catAll: 'Tümü', catPopular: 'Popüler', catNew: 'Yeni',
    catStarter: 'Başlangıçlar', catMain: 'Ana Yemekler', catDessert: 'Tatlılar', catDrink: 'İçecekler',
    catVegan: 'Vegan', catFav: 'Favoriler',
    noResultTitle: 'Sonuç bulunamadı', noResult: 'Farklı bir arama yapın.',
    sortBy: 'Sırala:', sortDefault: 'Varsayılan', sortPriceAsc: 'Fiyat ↑', sortPriceDesc: 'Fiyat ↓', sortName: 'İsim A-Z', sortRating: 'Puan',
    noAllergen: 'Alerjensiz',
    chefPick: 'Şefin Önerisi', qrBadge: '📱 Mobil Menü', qrTitle: 'Telefonunuzla okutun',
    qrSub: 'Masadaki QR kodu okutarak menüye ulaşın.', qrLabel: 'Menüye Git',
    qrDownload: 'İndir', print: 'Yazdır', share: 'Paylaş', install: 'Yükle',
    resEyebrow: 'Rezervasyon', resTitle: 'Masa Ayırtın', resLead: 'Yerinizi şimdiden ayırtın.',
    formName: 'Ad Soyad', formPhone: 'Telefon', formDate: 'Tarih', formTime: 'Saat',
    formPeople: 'Kişi Sayısı', formArea: 'Alan', formNote: 'Özel Notunuz', formSubmit: 'Rezervasyon Yap',
    contactPhone: 'Telefon', contactCall: 'Hemen Ara', contactWa: 'Sipariş ve bilgi', contactWaBtn: 'Mesaj Gönder',
    contactAddr: 'Adres', contactMap: 'Yol Tarifi', contactSocial: 'Sosyal Medya', contactFollow: 'Takip Et',
    footerMenu: 'Menü', footerRes: 'Rezervasyon', footerContact: 'İletişim', footerClear: 'Verileri Temizle',
    cartTitle: 'Sepetim', cartEmpty: 'Sepetiniz boş', cartTotal: 'Toplam:', cartSend: 'WhatsApp ile Sipariş Ver', cartClear: 'Sepeti Temizle',
    couponPh: 'Kupon kodu', couponApply: 'Uygula', discount: 'İndirim:',
    modalAdd: 'Sepete Ekle', tableLabel: 'Masa', tableNumber: 'Masa',
    added: 'sepete eklendi', removed: 'kaldırıldı', favAdded: 'Favorilere eklendi', favRemoved: 'Favoriden çıkarıldı',
    orderEmpty: 'Sepetiniz boş', orderSent: 'WhatsApp\'a yönlendiriliyorsunuz',
    calories: 'Kalori', prepTime: 'Hazırlık', serves: 'Porsiyon', portion: 'Porsiyon', extras: 'Ekstralar', foodNote: 'Yemeğe Not',
    waiterTitle: 'Garson Çağır', waiterSub: 'Ne için çağırıyorsunuz?',
    waiterOrder: 'Sipariş', waiterBill: 'Hesap', waiterHelp: 'Yardım', waiterWater: 'Su',
    waiterCalled: 'Garson çağırıldı', open: 'Açık', closed: 'Kapalı',
    tracking1: 'Sipariş Alındı', tracking2: 'Hazırlanıyor', tracking3: 'Yolda', tracking4: 'Teslim Edildi',
    cleared: 'Tüm veriler temizlendi', addedFav: 'Favorilere eklendi', couponOk: 'Kupon uygulandı', couponBad: 'Geçersiz kupon',
    shareText: 'Lezzet Durağı menüsü'
  },
  en: {
    welcome: '✨ Welcome', heroTitle1: 'Flavors', heroTitle2: 'that leave', heroTitle3: 'a mark',
    heroSub: 'Fresh ingredients, masterfully prepared recipes.',
    searchPh: 'Search food...', catAll: 'All', catPopular: 'Popular', catNew: 'New',
    catStarter: 'Starters', catMain: 'Mains', catDessert: 'Desserts', catDrink: 'Drinks',
    catVegan: 'Vegan', catFav: 'Favorites',
    noResultTitle: 'No results', noResult: 'Try a different search.',
    sortBy: 'Sort:', sortDefault: 'Default', sortPriceAsc: 'Price ↑', sortPriceDesc: 'Price ↓', sortName: 'Name A-Z', sortRating: 'Rating',
    noAllergen: 'No allergens',
    chefPick: "Chef's Pick", qrBadge: '📱 Mobile Menu', qrTitle: 'Scan with phone',
    qrSub: 'Scan the QR code to access the menu.', qrLabel: 'Go to Menu',
    qrDownload: 'Download', print: 'Print', share: 'Share', install: 'Install',
    resEyebrow: 'Reservation', resTitle: 'Book a Table', resLead: 'Reserve your place.',
    formName: 'Full Name', formPhone: 'Phone', formDate: 'Date', formTime: 'Time',
    formPeople: 'Guests', formArea: 'Area', formNote: 'Note', formSubmit: 'Book Now',
    contactPhone: 'Phone', contactCall: 'Call Now', contactWa: 'Order & info', contactWaBtn: 'Send Message',
    contactAddr: 'Address', contactMap: 'Directions', contactSocial: 'Social', contactFollow: 'Follow',
    footerMenu: 'Menu', footerRes: 'Reservation', footerContact: 'Contact', footerClear: 'Clear Data',
    cartTitle: 'My Cart', cartEmpty: 'Cart is empty', cartTotal: 'Total:', cartSend: 'Order via WhatsApp', cartClear: 'Clear Cart',
    couponPh: 'Coupon code', couponApply: 'Apply', discount: 'Discount:',
    modalAdd: 'Add to Cart', tableLabel: 'Table', tableNumber: 'Table',
    added: 'added to cart', removed: 'removed', favAdded: 'Added to favorites', favRemoved: 'Removed from favorites',
    orderEmpty: 'Cart is empty', orderSent: 'Redirecting to WhatsApp',
    calories: 'Calories', prepTime: 'Prep', serves: 'Serves', portion: 'Portion', extras: 'Extras', foodNote: 'Note',
    waiterTitle: 'Call Waiter', waiterSub: 'What do you need?',
    waiterOrder: 'Order', waiterBill: 'Bill', waiterHelp: 'Help', waiterWater: 'Water',
    waiterCalled: 'Waiter called', open: 'Open', closed: 'Closed',
    tracking1: 'Order Received', tracking2: 'Preparing', tracking3: 'On the way', tracking4: 'Delivered',
    cleared: 'All data cleared', addedFav: 'Added to favorites', couponOk: 'Coupon applied', couponBad: 'Invalid coupon',
    shareText: 'Lezzet Durağı menu'
  },
  ar: {
    welcome: '✨ مرحباً', heroTitle1: 'نكهات', heroTitle2: 'تترك', heroTitle3: 'أثراً',
    heroSub: 'مكونات طازجة ووصفات مُتقنة.',
    searchPh: 'ابحث عن طعام...', catAll: 'الكل', catPopular: 'شائع', catNew: 'جديد',
    catStarter: 'المقبلات', catMain: 'الأطباق الرئيسية', catDessert: 'الحلويات', catDrink: 'المشروبات',
    catVegan: 'نباتي', catFav: 'المفضلة',
    noResultTitle: 'لا توجد نتائج', noResult: 'جرّب بحثاً آخر.',
    sortBy: 'ترتيب:', sortDefault: 'افتراضي', sortPriceAsc: 'السعر ↑', sortPriceDesc: 'السعر ↓', sortName: 'الاسم أ-ي', sortRating: 'التقييم',
    noAllergen: 'بدون مسببات حساسية',
    chefPick: 'اختيار الشيف', qrBadge: '📱 قائمة الجوال', qrTitle: 'امسح برمز QR',
    qrSub: 'امسح رمز QR للوصول إلى القائمة.', qrLabel: 'انتقل إلى القائمة',
    qrDownload: 'تحميل', print: 'طباعة', share: 'مشاركة', install: 'تثبيت',
    resEyebrow: 'حجز', resTitle: 'احجز طاولة', resLead: 'احجز مكانك مسبقاً.',
    formName: 'الاسم الكامل', formPhone: 'الهاتف', formDate: 'التاريخ', formTime: 'الوقت',
    formPeople: 'عدد الأشخاص', formArea: 'المنطقة', formNote: 'ملاحظة', formSubmit: 'احجز الآن',
    contactPhone: 'الهاتف', contactCall: 'اتصل الآن', contactWa: 'الطلب والمعلومات', contactWaBtn: 'أرسل رسالة',
    contactAddr: 'العنوان', contactMap: 'الاتجاهات', contactSocial: 'وسائل التواصل', contactFollow: 'متابعة',
    footerMenu: 'القائمة', footerRes: 'حجز', footerContact: 'اتصال', footerClear: 'مسح البيانات',
    cartTitle: 'سلتي', cartEmpty: 'السلة فارغة', cartTotal: 'المجموع:', cartSend: 'اطلب عبر واتساب', cartClear: 'مسح السلة',
    couponPh: 'كود الخصم', couponApply: 'تطبيق', discount: 'خصم:',
    modalAdd: 'أضف إلى السلة', tableLabel: 'طاولة', tableNumber: 'طاولة',
    added: 'أُضيف للسلة', removed: 'أُزيل', favAdded: 'أُضيف للمفضلة', favRemoved: 'أُزيل من المفضلة',
    orderEmpty: 'السلة فارغة', orderSent: 'جارٍ التحويل إلى واتساب',
    calories: 'السعرات', prepTime: 'التحضير', serves: 'يكفي', portion: 'الحصة', extras: 'إضافات', foodNote: 'ملاحظة',
    waiterTitle: 'اتصل بالنادل', waiterSub: 'ماذا تحتاج؟',
    waiterOrder: 'الطلب', waiterBill: 'الحساب', waiterHelp: 'مساعدة', waiterWater: 'ماء',
    waiterCalled: 'تم استدعاء النادل', open: 'مفتوح', closed: 'مغلق',
    tracking1: 'تم استلام الطلب', tracking2: 'قيد التحضير', tracking3: 'في الطريق', tracking4: 'تم التسليم',
    cleared: 'تم مسح جميع البيانات', addedFav: 'أُضيف للمفضلة', couponOk: 'تم تطبيق الكوبون', couponBad: 'كوبون غير صالح',
    shareText: 'قائمة Lezzet Durağı'
  }
};

const langFlags = { tr: 'TR', en: 'EN', ar: 'ع' };
const currencySymbols = { TRY: '₺', USD: '$', EUR: '€' };
const currencyRates = { TRY: 1, USD: 0.03, EUR: 0.028 };

// ============================================================
// DURUM
// ============================================================
let currentLang = localStorage.getItem('lang') || 'tr';
let currentTheme = localStorage.getItem('theme') || 'light';
let currentCurrency = localStorage.getItem('currency') || 'TRY';
let currentFontSize = localStorage.getItem('fontSize') || 'md';
let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'default';
let onlyNoAllergen = false;
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let ratings = JSON.parse(localStorage.getItem('ratings') || '{}');
let currentFood = null;
let currentPortion = 'M';
let currentPortionMult = 1;
let currentExtras = [];
let appliedCoupon = null;
let deferredPrompt = null;

const urlParams = new URLSearchParams(window.location.search);
const tableNumber = urlParams.get('masa') || urlParams.get('table');

// ============================================================
// YARDIMCILAR
// ============================================================
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const t = (k) => (translations[currentLang] && translations[currentLang][k]) || k;

function convertPrice(tl) {
  const rate = currencyRates[currentCurrency] || 1;
  const converted = tl * rate;
  if (currentCurrency === 'TRY') return Math.round(converted) + '₺';
  return currencySymbols[currentCurrency] + converted.toFixed(2);
}

function showToast(msg) {
  const toast = $('#to
