/* ========== PAKET 35 ÖZELLİK ========== */
(function(){
'use strict';
var $=function(s){return document.querySelector(s)};
var $$=function(s){return document.querySelectorAll(s)};
var LS={
  get:function(k,d){try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}},
  set:function(k,v){localStorage.setItem(k,JSON.stringify(v))}
};

var lang=LS.get('lang','tr');
var currency=LS.get('currency','TRY');
var fontSize=LS.get('fontSize','md');
var themeColor=LS.get('themeColor','#8b3a1f');
var soundOn=LS.get('soundOn',false);

var t={
  tr:{name:'Lezzet Durağı',settings:'Ayarlar',language:'Dil',currency:'Para Birimi',fontSize:'Yazı Boyutu',color:'Renk',sound:'Ses',fullscreen:'Tam Ekran',share:'Paylaş'},
  en:{name:'Lezzet Durağı',settings:'Settings',language:'Language',currency:'Currency',fontSize:'Font Size',color:'Color',sound:'Sound',fullscreen:'Fullscreen',share:'Share'},
  ar:{name:'مطعم الذوق',settings:'الإعدادات',language:'اللغة',currency:'العملة',fontSize:'حجم الخط',color:'اللون',sound:'صوت',fullscreen:'شاشة كاملة',share:'مشاركة'}
};
var rates={TRY:1,USD:0.03,EUR:0.028};
var syms={TRY:'₺',USD:'$',EUR:'€'};

function t_(k){return (t[lang]&&t[lang][k])||k}

function applyLang(){
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  var nameEl=$('.topbar__name');
  if(nameEl)nameEl.textContent=t[lang].name;
}

function convert(p){
  if(currency==='TRY')return p+'₺';
  return syms[currency]+(p*rates[currency]).toFixed(2);
}

function applyCurrency(){
  $$('.menu-item__price').forEach(function(el){
    var p=parseInt(el.textContent);
    if(!isNaN(p))el.textContent=convert(p);
  });
}

function applyFontSize(){
  document.documentElement.setAttribute('data-font',fontSize);
}

function applyThemeColor(){
  document.documentElement.style.setProperty('--primary',themeColor);
  var darker=shadeColor(themeColor,-20);
  document.documentElement.style.setProperty('--primary-light',darker);
}

function shadeColor(c,p){
  var num=parseInt(c.replace('#',''),16);
  var r=(num>>16)+p;var g=((num>>8)&0x00FF)+p;var b=(num&0x0000FF)+p;
  r=Math.max(0,Math.min(255,r));g=Math.max(0,Math.min(255,g));b=Math.max(0,Math.min(255,b));
  return '#'+((r<<16)|(g<<8)|b).toString(16).padStart(6,'0');
}

function playBeep(){
  if(!soundOn)return;
  try{
    var ctx=new (window.AudioContext||window.webkitAudioContext)();
    var o=ctx.createOscillator();var g=ctx.createGain();
    o.connect(g);g.connect(ctx.destination);
    o.frequency.value=800;g.gain.value=0.1;
    o.start();o.stop(ctx.currentTime+0.1);
  }catch(e){}
}

function toggleFullscreen(){
  if(!document.fullscreenElement)document.documentElement.requestFullscreen();
  else document.exitFullscreen();
}

// ===== ÜST BARA ⚙️ BUTONU EKLE =====
var topActions=$('.topbar__actions');
if(topActions){
  var gearBtn=document.createElement('button');
  gearBtn.className='icon-btn';
  gearBtn.id='fabSettings';
  gearBtn.innerHTML='⚙️';
  gearBtn.title='Ayarlar';
  gearBtn.type='button';
  topActions.appendChild(gearBtn);

  var chatBtn=document.createElement('button');
  chatBtn.className='icon-btn';
  chatBtn.id='fabChat';
  chatBtn.innerHTML='💬';
  chatBtn.title='Canlı Sohbet';
  chatBtn.type='button';
  topActions.appendChild(chatBtn);

  gearBtn.addEventListener('click',function(){playBeep();openSettings();});
  chatBtn.addEventListener('click',function(){playBeep();openChat();});
}

// ===== AYARLAR PANELİ =====
function openSettings(){
  if($('.settings-panel')){$('.settings-panel').remove();return;}
  var p=document.createElement('aside');
  p.className='settings-panel open';
  p.innerHTML=
    '<div class="settings-panel__header"><h3>⚙️ '+t_('settings')+'</h3><button class="settings-panel__close" type="button">✕</button></div>'+
    '<div class="settings-group"><div class="settings-group__title">🌐 '+t_('language')+'</div><div class="settings-row"><select id="setLang"><option value="tr"'+(lang==='tr'?' selected':'')+'>Türkçe</option><option value="en"'+(lang==='en'?' selected':'')+'>English</option><option value="ar"'+(lang==='ar'?' selected':'')+'>العربية</option></select></div></div>'+
    '<div class="settings-group"><div class="settings-group__title">💱 '+t_('currency')+'</div><div class="settings-row"><select id="setCur"><option value="TRY"'+(currency==='TRY'?' selected':'')+'>₺ TRY</option><option value="USD"'+(currency==='USD'?' selected':'')+'>$ USD</option><option value="EUR"'+(currency==='EUR'?' selected':'')+'>€ EUR</option></select></div></div>'+
    '<div class="settings-group"><div class="settings-group__title">🔤 '+t_('fontSize')+'</div><div class="settings-row"><select id="setFont"><option value="md"'+(fontSize==='md'?' selected':'')+'>Normal</option><option value="lg"'+(fontSize==='lg'?' selected':'')+'>Büyük</option><option value="xl"'+(fontSize==='xl'?' selected':'')+'>Çok Büyük</option></select></div></div>'+
    '<div class="settings-group"><div class="settings-group__title">🎨 '+t_('color')+'</div><div class="color-btns"><button type="button" class="color-btn'+(themeColor==='#8b3a1f'?' active':'')+'" data-c="#8b3a1f" style="background:#8b3a1f"></button><button type="button" class="color-btn'+(themeColor==='#2c5f2d'?' active':'')+'" data-c="#2c5f2d" style="background:#2c5f2d"></button><button type="button" class="color-btn'+(themeColor==='#1e3a8a'?' active':'')+'" data-c="#1e3a8a" style="background:#1e3a8a"></button><button type="button" class="color-btn'+(themeColor==='#7c1d6f'?' active':'')+'" data-c="#7c1d6f" style="background:#7c1d6f"></button><button type="button" class="color-btn'+(themeColor==='#b91c1c'?' active':'')+'" data-c="#b91c1c" style="background:#b91c1c"></button></div></div>'+
    '<div class="settings-group"><div class="settings-group__title">🔊 '+t_('sound')+'</div><div class="settings-row"><span>Ses efekti</span><input type="checkbox" id="setSound"'+(soundOn?' checked':'')+'></div></div>'+
    '<div class="settings-group"><div class="settings-row"><span>📺 '+t_('fullscreen')+'</span><button type="button" class="btn-mini" id="setFull">Aç</button></div></div>'+
    '<div class="settings-group"><div class="settings-row"><span>📤 '+t_('share')+'</span><button type="button" class="btn-mini" id="setShare">Paylaş</button></div></div>'+
    '<div class="settings-group"><div class="settings-group__title">🏆 Sadakat Puanı</div><div class="settings-row"><span>Puanınız</span><span class="loyalty-badge">⭐ '+LS.get('points',0)+' Puan</span></div></div>';
  document.body.appendChild(p);

  p.querySelector('.settings-panel__close').addEventListener('click',function(){p.remove()});

  p.querySelector('#setLang').addEventListener('change',function(e){
    lang=e.target.value;LS.set('lang',lang);applyLang();p.remove();openSettings();
  });
  p.querySelector('#setCur').addEventListener('change',function(e){
    currency=e.target.value;LS.set('currency',currency);location.reload();
  });
  p.querySelector('#setFont').addEventListener('change',function(e){
    fontSize=e.target.value;LS.set('fontSize',fontSize);applyFontSize();
  });
  p.querySelector('#setSound').addEventListener('change',function(e){
    soundOn=e.target.checked;LS.set('soundOn',soundOn);if(soundOn)playBeep();
  });
  p.querySelector('#setFull').addEventListener('click',toggleFullscreen);
  p.querySelector('#setShare').addEventListener('click',function(){
    if(navigator.share)navigator.share({title:t[lang].name,url:location.href});
    else alert('Link: '+location.href);
  });
  p.querySelectorAll('.color-btn').forEach(function(b){
    b.addEventListener('click',function(){
      themeColor=b.dataset.c;LS.set('themeColor',themeColor);applyThemeColor();
      p.querySelectorAll('.color-btn').forEach(function(x){x.classList.remove('active')});
      b.classList.add('active');playBeep();
    });
  });
}

// ===== CANLI SOHBET =====
function openChat(){
  if($('.chat-box')){$('.chat-box').remove();return;}
  var c=document.createElement('div');
  c.className='chat-box open';
  c.innerHTML='<div class="chat-box__header"><span>💬 Canlı Sohbet</span><button type="button" class="cart-panel__close" id="chatClose">✕</button></div><div class="chat-box__body"><div class="chat-msg chat-msg--bot">Merhaba! 👋 Size nasıl yardımcı olabilirim?</div></div><div class="chat-box__input"><input type="text" id="chatInput" placeholder="Mesajınızı yazın..."><button type="button" id="chatSend">➤</button></div>';
  document.body.appendChild(c);

  var body=c.querySelector('.chat-box__body');
  var input=c.querySelector('#chatInput');
  function addMsg(text,isUser){
    var m=document.createElement('div');
    m.className='chat-msg chat-msg--'+(isUser?'user':'bot');
    m.textContent=text;
    body.appendChild(m);body.scrollTop=body.scrollHeight;
  }
  var replies=['Tabii ki! Sipariş için menüden seçim yapabilirsiniz.','Rezervasyon için sayfanın altındaki formu kullanın.','Garson için üstteki 🔔 butonuna basın.','Ödeme nakit veya kart ile yapılabilir.','Teşekkürler! Başka isteğiniz var mı?','Alerjen bilgileri yemek detayında yazıyor.'];
  function send(){
    var v=input.value.trim();if(!v)return;
    addMsg(v,true);input.value='';
    setTimeout(function(){addMsg(replies[Math.floor(Math.random()*replies.length)],false);playBeep();},600);
  }
  c.querySelector('#chatClose').addEventListener('click',function(){c.remove()});
  c.querySelector('#chatSend').addEventListener('click',send);
  input.addEventListener('keypress',function(e){if(e.key==='Enter')send()});
}

// ===== YUKARI ÇIK =====
var topBtn=document.createElement('button');
topBtn.className='top-btn';topBtn.innerHTML='⬆️';topBtn.type='button';
document.body.appendChild(topBtn);
topBtn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
window.addEventListener('scroll',function(){
  topBtn.classList.toggle('show',window.scrollY>400);
});

// ===== ROZETLER =====
function addPopularBadges(){
  var labels=['En Çok Satan','Popüler','Şef Seçimi'];
  labels.forEach(function(label,i){
    var item=$$('.menu-item')[i];
    if(item&&!item.querySelector('.menu-item__discount')){
      var b=document.createElement('span');
      b.className='menu-item__discount';
      b.style.background='#d4a24e';
      b.style.color='#2b1d12';
      b.textContent=label;
      item.appendChild(b);
    }
  });
}

// ===== KUPON =====
function addCouponUI(){
  var footer=$('.cart-panel__footer');
  if(!footer||footer.querySelector('.coupon-ui'))return;
  var div=document.createElement('div');
  div.className='coupon-ui';
  div.style.cssText='display:flex;gap:8px;margin-bottom:10px';
  div.innerHTML='<input type="text" id="couponInput2" placeholder="Kupon kodu" style="flex:1;background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:9px 12px;font-family:inherit;font-size:.85rem;color:var(--text)"><button type="button" class="btn-mini" id="applyCoupon">Uygula</button>';
  footer.insertBefore(div,footer.firstChild);
  var coupons={HOSGELDIN10:10,YAZ20:20,SEF30:30};
  div.querySelector('#applyCoupon').addEventListener('click',function(){
    var code=div.querySelector('#couponInput2').value.trim().toUpperCase();
    if(coupons[code]){
      LS.set('coupon',{code:code,disc:coupons[code]});
      alert('🎉 Kupon uygulandı: %'+coupons[code]+' indirim!');
      playBeep();
    }else alert('❌ Geçersiz kupon. Deneyin: HOSGELDIN10, YAZ20, SEF30');
  });
}

// ===== SADAKAT =====
function addLoyalty(){
  var origSend=$('#cartSend');
  if(!origSend)return;
  origSend.addEventListener('click',function(){
    var cart=LS.get('cart',[]);
    var total=cart.reduce(function(s,c){return s+c.qty},0);
    var pts=LS.get('points',0)+total*10;
    LS.set('points',pts);playBeep();
  },true);
}

// ===== SİPARİŞ TAKİBİ =====
function showOrderTrack(){
  var el=document.createElement('div');
  el.className='order-track';
  el.innerHTML='<div class="order-track__icon">⏳</div><div class="order-track__text"><strong>Sipariş Alındı</strong><span>0:00</span></div>';
  document.body.appendChild(el);
  setTimeout(function(){el.classList.add('show')},100);
  var sec=0;
  var int=setInterval(function(){
    sec++;
    var m=Math.floor(sec/60),s=sec%60;
    el.querySelector('span').textContent=m+':'+String(s).padStart(2,'0');
    var icons=['⏳','👨‍🍳','🛵','✅'];
    var labels=['Sipariş Alındı','Hazırlanıyor','Yolda','Teslim Edildi'];
    var idx=sec<15?0:sec<60?1:sec<180?2:3;
    el.querySelector('.order-track__icon').textContent=icons[idx];
    el.querySelector('strong').textContent=labels[idx];
    if(sec>=240){clearInterval(int);el.classList.remove('show');setTimeout(function(){el.remove()},500)}
  },1000);
}

// ===== SİPARİŞ KAYDET =====
function saveLastOrder(){
  var s=$('#cartSend');
  if(!s)return;
  s.addEventListener('click',function(){
    var cart=LS.get('cart',[]);
    if(cart.length)LS.set('lastOrder',cart);
    setTimeout(showOrderTrack,500);
  },true);
}

// ===== SÜRPRİZ =====
function addConfettiBtn(){
  if($('.confetti-btn'))return;
  var b=document.createElement('button');
  b.className='confetti-btn';b.textContent='🎉 Sürpriz!';b.type='button';
  document.body.appendChild(b);
  setTimeout(function(){b.classList.add('show')},5000);
  b.addEventListener('click',function(){
    for(var i=0;i<50;i++){
      var c=document.createElement('div');
      c.style.cssText='position:fixed;top:-20px;left:'+Math.random()*100+'%;width:10px;height:10px;background:'+['#d4a24e','#8b3a1f','#e8c98a','#c73e3e','#5a8a3f'][i%5]+';z-index:9999;pointer-events:none;border-radius:'+(i%2?'50%':'2px')+';transition:transform 3s linear';
      document.body.appendChild(c);
      (function(el){
        var x=(Math.random()-0.5)*400,y=window.innerHeight+50,r=Math.random()*720;
        setTimeout(function(){el.style.transform='translate('+x+'px,'+y+'px) rotate('+r+'deg)'},50);
        setTimeout(function(){el.remove()},3500);
      })(c);
    }
    playBeep();
  });
}

// ===== YORUMLAR =====
function addStars(){
  var comments=[
    {name:'Ayşe K.',text:'Harika lezzetler! Kesinlikle tavsiye ederim.',stars:5},
    {name:'Mehmet D.',text:'Servis hızlı, yemekler taze. 5 yıldız!',stars:5},
    {name:'Zeynep A.',text:'Ortam çok güzel ama fiyatlar biraz yüksek.',stars:4}
  ];
  var ct=$('.contact-section .container');
  if(!ct||$('.comments-wrap'))return;
  var w=document.createElement('div');
  w.className='comments-wrap';w.style.cssText='margin-top:40px';
  var html='<h3 style="font-family:var(--serif);text-align:center;margin-bottom:20px;color:var(--primary)">⭐ Müşteri Yorumları</h3>';
  comments.forEach(function(c){
    html+='<div class="comment-box"><strong>'+c.name+' '+'⭐'.repeat(c.stars)+'</strong><p>'+c.text+'</p></div>';
  });
  w.innerHTML=html;
  ct.appendChild(w);
}

// ===== INSTAGRAM =====
function addInstagram(){
  var ft=$('.footer');
  if(!ft||$('.instagram-feed'))return;
  var w=document.createElement('div');
  w.style.cssText='padding:20px 0;border-top:1px solid var(--border);margin-top:20px';
  w.innerHTML='<div style="text-align:center;margin-bottom:14px;font-size:.85rem;color:var(--text-dim)">📸 Instagram: <strong style="color:var(--primary)">@lezzetduragi</strong></div>'+
    '<div class="instagram-feed">'+[1,2,3,4,5,6,7,8].map(function(i){
      return '<a href="https://instagram.com" target="_blank" style="background-image:url(https://picsum.photos/200?random='+(i+100)+')"></a>';
    }).join('')+'</div>';
  ft.querySelector('.container').appendChild(w);
}

// ===== BİLDİRİM =====
function askNotification(){
  if('Notification' in window&&Notification.permission==='default'){
    setTimeout(function(){
      Notification.requestPermission().then(function(p){
        if(p==='granted'){
          setTimeout(function(){new Notification('Lezzet Durağı',{body:'Bugünün menüsü: %20 indirim! 🍕'});},3000);
        }
      });
    },10000);
  }
}

// ===== KONUM =====
function detectLocation(){
  if(!navigator.geolocation)return;
  navigator.geolocation.getCurrentPosition(function(pos){
    LS.set('location',{lat:pos.coords.latitude,lng:pos.coords.longitude});
  },function(){},{enableHighAccuracy:false,timeout:5000,maximumAge:600000});
}

// ===== DOĞUM GÜNÜ =====
function checkBirthday(){
  var today=new Date();
  var bday=LS.get('birthday',null);
  if(!bday)return;
  var b=new Date(bday);
  if(b.getDate()===today.getDate()&&b.getMonth()===today.getMonth()){
    setTimeout(function(){alert('🎂 Doğum gününüz kutlu olsun! %30 indirim: DOGUMGUNU30');},2000);
  }
}

// ===== AKILLI ÖNERİ =====
function smartSuggest(){
  var viewed=LS.get('viewed',[]);
  if(viewed.length<3)return;
  var items=$$('.menu-item');
  if(items.length>3){
    var r=items[Math.floor(Math.random()*items.length)];
    r.style.outline='2px solid var(--primary)';
    r.style.outlineOffset='3px';
    setTimeout(function(){r.style.outline='';r.style.outlineOffset=''},3000);
  }
}

// ===== BAŞLAT =====
window.addEventListener('load',function(){
  setTimeout(function(){
    applyLang();
    applyCurrency();
    applyFontSize();
    applyThemeColor();
    addPopularBadges();
    addCouponUI();
    addLoyalty();
    saveLastOrder();
    addConfettiBtn();
    addStars();
    addInstagram();
    askNotification();
    detectLocation();
    checkBirthday();
    smartSuggest();
    console.log('🎁 35 özellik paketi yüklendi!');
  },500);
});

document.addEventListener('click',function(e){
  var item=e.target.closest('.menu-item');
  if(item){
    var name=item.querySelector('.menu-item__name');
    if(name){
      var viewed=LS.get('viewed',[]);
      viewed.push(name.textContent);
      if(viewed.length>20)viewed.shift();
      LS.set('viewed',viewed);
    }
  }
});

document.addEventListener('click',function(e){
  if(e.target.closest('[data-add]'))playBeep();
});

})();
