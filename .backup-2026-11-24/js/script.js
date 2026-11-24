/**
 * WEDDING INVITATION INTERACTIVE JAVASCRIPT
 * Bilingual Vietnamese & English Landing Page
 */

// ==========================================
// 1. BILINGUAL DICTIONARY (VI / EN)
// ==========================================
const translations = {
  vi: {
    // Nav
    "nav.home": "Trang Chủ",
    "nav.couple": "Cặp Đôi",
    "nav.events": "Sự Kiện",
    "nav.story": "Câu Chuyện",
    "nav.gallery": "Album Cưới",
    "nav.rsvp": "Xác Nhận",
    "nav.gift": "Mừng Cưới",

    // Gate
    "gate.badge": "Thư Mời Cưới",
    "gate.subtitle": "Trân trọng kính mời tới tham dự lễ cưới của",
    "gate.for": "Kính gửi quý khách:",
    "gate.defaultGuest": "Quý Khách & Người Thương",
    "gate.btn": "Mở Thiệp Cưới",

    // Hero
    "hero.theWeddingOf": "The Wedding Of",
    "hero.date": "Chủ Nhật, Ngày 28 Tháng 12 Năm 2026",
    "hero.quote": "“Tình yêu không phải là nhìn nhau, mà là cùng nhau nhìn về một hướng.”",

    // Couple
    "couple.sub": "Cô Dâu & Chú Rể",
    "couple.title": "Cặp Đôi Hạnh Phúc",
    "couple.desc": "Hạnh phúc lớn nhất của đời người là tìm thấy một nửa luôn đồng hành và thấu hiểu.",
    "couple.groomBadge": "Chú Rể",
    "couple.groomName": "Andy",
    "couple.groomFamily": "Trưởng nam của Ông: Nguyễn Văn An<br>& Bà: Lê Thị Lan",
    "couple.groomQuote": "“Gặp được em là điều may mắn nhất, yêu em là quyết định đúng đắn nhất đời anh.”",
    "couple.brideBadge": "Cô Dâu",
    "couple.brideName": "Emma",
    "couple.brideFamily": "Ái nữ của Ông: Trần Đình Trọng<br>& Bà: Hoàng Thu Hà",
    "couple.brideQuote": "“Cảm ơn anh đã luôn ở bên, bao dung và nắm chặt tay em qua mọi thăng trầm.”",

    // Countdown
    "countdown.sub": "Save The Date",
    "countdown.title": "Đếm Ngược Ngày Chung Đôi",
    "countdown.desc": "Thời gian đang đếm ngược đến khoảnh khắc trọng đại nhất của chúng mình.",
    "countdown.days": "Ngày",
    "countdown.hours": "Giờ",
    "countdown.minutes": "Phút",
    "countdown.seconds": "Giây",
    "countdown.btnGoogle": "Thêm vào Google Calendar",
    "countdown.btnIcal": "Tải lịch Apple / iCal",

    // Events
    "events.sub": "Chương Trình Lễ Cưới",
    "events.title": "Thời Gian & Địa Điểm",
    "events.desc": "Sự hiện diện của quý khách là niềm vinh hạnh lớn nhất cho gia đình chúng tôi.",
    "events.ceremonyBadge": "Lễ Thành Hôn",
    "events.ceremonyTitle": "Lễ Vu Quy & Thành Hôn",
    "events.ceremonyTime": "09:00 AM - Chủ Nhật, 28.12.2026",
    "events.ceremonyLocation": "Tư gia Nhà Trai",
    "events.ceremonyAddress": "123 Đường Hoa Hồng, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
    "events.receptionBadge": "Tiệc Cưới",
    "events.receptionTitle": "Dạ Tiệc & Mừng Cưới",
    "events.receptionTime": "18:00 PM - Chủ Nhật, 28.12.2026 (Đón khách: 17:30)",
    "events.receptionLocation": "Gem Center - Sảnh Castor (Tầng 3)",
    "events.receptionAddress": "Số 8 Nguyễn Bỉnh Khiêm, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh",
    "events.btnMap": "Xem trên Google Maps",

    // Story
    "story.sub": "Hành Trình Yêu",
    "story.title": "Câu Chuyện Tình Yêu",
    "story.desc": "Từ cái nhìn đầu tiên đến lời hứa trọn đời bên nhau.",
    "story.milestone1Date": "Tháng 03, 2021",
    "story.milestone1Title": "Lần Đầu Gặp Gỡ",
    "story.milestone1Desc": "Một buổi chiều mưa bất chợt tại quán cà phê quen thuộc ở Sài Gòn, ánh mắt vô tình chạm nhau...",
    "story.milestone2Date": "Tháng 10, 2022",
    "story.milestone2Title": "Hẹn Hò Đầu Tiên",
    "story.milestone2Desc": "Chuyến đi dạo bờ sông ngắm pháo hoa và cái nắm tay e ấp đầu tiên thay lời muốn nói.",
    "story.milestone3Date": "Tháng 12, 2025",
    "story.milestone3Title": "Lời Cầu Hôn",
    "story.milestone3Desc": "Dưới ánh hoàng hôn lãng mạn tại đồi thông Đà Lạt, anh đã quỳ xuống và em nói 'Em đồng ý!'.",
    "story.milestone4Date": "Tháng 12, 2026",
    "story.milestone4Title": "Về Chung Một Nhà",
    "story.milestone4Desc": "Hôm nay, trước sự chứng kiến của người thân và bạn bè, chúng mình chính thức nên duyên vợ chồng.",

    // Gallery
    "gallery.sub": "Khoảnh Khắc Đẹp",
    "gallery.title": "Album Ảnh Cưới",
    "gallery.desc": "Lưu giữ những nụ cười, ánh mắt và khoảnh khắc ngọt ngào nhất.",
    "gallery.all": "Tất Cả",
    "gallery.studio": "Studio",
    "gallery.outdoor": "Ngoại Cảnh",
    "gallery.moment": "Khoảnh Khắc",

    // RSVP
    "rsvp.sub": "Tham Dự Cùng Chúng Mình",
    "rsvp.title": "Xác Nhận Tham Dự (RSVP)",
    "rsvp.desc": "Vui lòng phản hồi trước ngày 20.12.2026 để chúng mình đón tiếp chu đáo nhất.",
    "rsvp.nameLabel": "Họ và Tên của bạn:",
    "rsvp.namePlaceholder": "Nhập họ tên...",
    "rsvp.phoneLabel": "Số điện thoại:",
    "rsvp.phonePlaceholder": "Nhập số điện thoại...",
    "rsvp.sideLabel": "Khách mời của:",
    "rsvp.sideGroom": "Nhà Trai (Chú rể)",
    "rsvp.sideBride": "Nhà Gái (Cô dâu)",
    "rsvp.sideBoth": "Cả hai bạn",
    "rsvp.statusLabel": "Bạn sẽ đến chứ?",
    "rsvp.statusYes": "Chắc chắn tham dự ❤️",
    "rsvp.statusNo": "Rất tiếc không thể tham dự",
    "rsvp.countLabel": "Số lượng người tham dự:",
    "rsvp.wishLabel": "Gửi lời chúc đến cô dâu chú rể:",
    "rsvp.wishPlaceholder": "Gửi gắm lời chúc ngọt ngào nhất...",
    "rsvp.btnSubmit": "Gửi Phản Hồi & Lời Chúc",

    // Wishes
    "wishes.title": "Sổ Lưu Bút & Lời Chúc",
    "wishes.desc": "Những lời chúc ý nghĩa từ gia đình và bạn bè thân thương.",

    // Gift
    "gift.sub": "Mừng Cưới",
    "gift.title": "Hộp Mừng Cưới & Chúc Phúc",
    "gift.desc": "Sự hiện diện của bạn là món quà quý giá nhất. Nếu bạn muốn gửi lời chúc mừng từ xa, xin gửi qua thông tin dưới đây.",
    "gift.groomTitle": "Mừng Cưới Chú Rể",
    "gift.brideTitle": "Mừng Cưới Cô Dâu",
    "gift.bank": "Ngân hàng:",
    "gift.accNum": "Số tài khoản:",
    "gift.accName": "Chủ tài khoản:",
    "gift.copyBtn": "Sao Chép Số Tài Khoản",
    "gift.copied": "Đã sao chép vào bộ nhớ tạm!",

    // Footer
    "footer.thankyou": "Chân Thành Cảm Ơn!",
    "footer.quote": "“Cảm ơn bạn đã là một phần yêu thương trong ngày trọng đại của chúng mình!”",
    "footer.copyright": "© 2026 MINH DANG LE. All rights reserved."
  },

  en: {
    // Nav
    "nav.home": "Home",
    "nav.couple": "Couple",
    "nav.events": "Events",
    "nav.story": "Story",
    "nav.gallery": "Gallery",
    "nav.rsvp": "RSVP",
    "nav.gift": "Gift Box",

    // Gate
    "gate.badge": "Wedding Invitation",
    "gate.subtitle": "Cordially invite you to celebrate the wedding of",
    "gate.for": "Honored Guest:",
    "gate.defaultGuest": "Dear Guest & Beloved",
    "gate.btn": "Open Invitation",

    // Hero
    "hero.theWeddingOf": "The Wedding Of",
    "hero.date": "Sunday, December 28, 2026",
    "hero.quote": "“Love does not consist in gazing at each other, but in looking outward together in the same direction.”",

    // Couple
    "couple.sub": "Bride & Groom",
    "couple.title": "Meet The Happy Couple",
    "couple.desc": "Life's greatest happiness is finding someone to walk hand in hand through every season.",
    "couple.groomBadge": "The Groom",
    "couple.groomName": "Andy",
    "couple.groomFamily": "Eldest son of Mr. An Nguyen<br>& Mrs. Lan Le",
    "couple.groomQuote": "“Meeting you was fate, falling in love with you was the easiest choice I've ever made.”",
    "couple.brideBadge": "The Bride",
    "couple.brideName": "Emma",
    "couple.brideFamily": "Beloved daughter of Mr. Trong Tran<br>& Mrs. Ha Hoang",
    "couple.brideQuote": "“Thank you for standing beside me, protecting my dreams and filling my days with warmth.”",

    // Countdown
    "countdown.sub": "Save The Date",
    "countdown.title": "Counting Down To The Big Day",
    "countdown.desc": "Ticking down to the moment we exchange vows and begin our forever.",
    "countdown.days": "Days",
    "countdown.hours": "Hours",
    "countdown.minutes": "Mins",
    "countdown.seconds": "Secs",
    "countdown.btnGoogle": "Add to Google Calendar",
    "countdown.btnIcal": "Download Apple / iCal",

    // Events
    "events.sub": "Wedding Program",
    "events.title": "Time & Location",
    "events.desc": "Your presence is our highest honor as we celebrate our new beginning.",
    "events.ceremonyBadge": "Holy Matrimony",
    "events.ceremonyTitle": "Wedding Ceremony",
    "events.ceremonyTime": "09:00 AM - Sunday, Dec 28, 2026",
    "events.ceremonyLocation": "Groom's Residence",
    "events.ceremonyAddress": "123 Rose Street, Ben Nghe Ward, District 1, Ho Chi Minh City",
    "events.receptionBadge": "Reception",
    "events.receptionTitle": "Wedding Dinner & Party",
    "events.receptionTime": "06:00 PM - Sunday, Dec 28, 2026 (Welcome: 05:30 PM)",
    "events.receptionLocation": "Gem Center - Castor Ballroom (3rd Floor)",
    "events.receptionAddress": "8 Nguyen Binh Khiem, Da Kao Ward, District 1, Ho Chi Minh City",
    "events.btnMap": "View on Google Maps",

    // Story
    "story.sub": "Our Journey",
    "story.title": "Our Love Story",
    "story.desc": "From our very first glance to forever together.",
    "story.milestone1Date": "March, 2021",
    "story.milestone1Title": "First Met",
    "story.milestone1Desc": "A sudden Saigon afternoon rain at a cozy coffee corner where our paths crossed...",
    "story.milestone2Date": "October, 2022",
    "story.milestone2Title": "First Date",
    "story.milestone2Desc": "A riverside stroll watching evening fireworks, gently holding hands for the first time.",
    "story.milestone3Date": "December, 2025",
    "story.milestone3Title": "The Proposal",
    "story.milestone3Desc": "Under the golden sunset of Da Lat pine hills, he got on one knee, and she said 'YES!'.",
    "story.milestone4Date": "December, 2026",
    "story.milestone4Title": "Happily Ever After",
    "story.milestone4Desc": "Today, surrounded by beloved friends and family, we start our lifetime adventure.",

    // Gallery
    "gallery.sub": "Sweet Moments",
    "gallery.title": "Wedding Gallery",
    "gallery.desc": "Capturing smiles, loving gazes, and timeless memories.",
    "gallery.all": "All Photos",
    "gallery.studio": "Studio",
    "gallery.outdoor": "Outdoor",
    "gallery.moment": "Moments",

    // RSVP
    "rsvp.sub": "Be Our Guest",
    "rsvp.title": "RSVP Confirmation",
    "rsvp.desc": "Please kindly confirm by December 20, 2026 so we can prepare your welcome.",
    "rsvp.nameLabel": "Your Full Name:",
    "rsvp.namePlaceholder": "Enter your name...",
    "rsvp.phoneLabel": "Phone Number:",
    "rsvp.phonePlaceholder": "Enter phone number...",
    "rsvp.sideLabel": "Guest of:",
    "rsvp.sideGroom": "Groom's Side",
    "rsvp.sideBride": "Bride's Side",
    "rsvp.sideBoth": "Both",
    "rsvp.statusLabel": "Will you attend?",
    "rsvp.statusYes": "Will gladly attend ❤️",
    "rsvp.statusNo": "Regretfully cannot attend",
    "rsvp.countLabel": "Number of Guests:",
    "rsvp.wishLabel": "Send a warm wish to the couple:",
    "rsvp.wishPlaceholder": "Write your heartfelt congratulations...",
    "rsvp.btnSubmit": "Send RSVP & Wishes",

    // Wishes
    "wishes.title": "Guestbook & Wishes",
    "wishes.desc": "Heartwarming congratulations from our cherished guests.",

    // Gift
    "gift.sub": "Wedding Gift",
    "gift.title": "Gift Box & Best Wishes",
    "gift.desc": "Your presence and prayers are the greatest gift. If you wish to send greetings from afar, kindly use the accounts below.",
    "gift.groomTitle": "Groom's Account",
    "gift.brideTitle": "Bride's Account",
    "gift.bank": "Bank:",
    "gift.accNum": "Account Number:",
    "gift.accName": "Account Holder:",
    "gift.copyBtn": "Copy Account Number",
    "gift.copied": "Copied to clipboard!",

    // Footer
    "footer.thankyou": "Thank You With Love!",
    "footer.quote": "“Thank you for being part of our most treasured day and our forever memories!”",
    "footer.copyright": "© 2026 MINH DANG LE. All rights reserved."
  }
};

let currentLang = localStorage.getItem("wedding_lang") || "vi";

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("wedding_lang", lang);
  document.documentElement.lang = lang;

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  const placeholderElements = document.querySelectorAll("[data-i18n-ph]");
  placeholderElements.forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update switcher button label
  const switcher = document.getElementById("langSwitcherBtn");
  if (switcher) {
    switcher.innerHTML = lang === "vi" 
      ? '<span class="flag">🇻🇳</span> VI' 
      : '<span class="flag">🇬🇧</span> EN';
  }

  // Re-render wishes feed with updated language badges/timestamps
  const wishesContainer = document.getElementById("wishesWallFeed");
  if (wishesContainer && typeof activeWishesList !== "undefined" && activeWishesList.length > 0) {
    renderWishesFeed(wishesContainer, activeWishesList);
  }
}

// ==========================================
// 2. PARSE GUEST NAME FROM URL (?to=Name)
// ==========================================
function parseGuestName() {
  const urlParams = new URLSearchParams(window.location.search);
  const guestParam = urlParams.get("to") || urlParams.get("guest") || urlParams.get("u");
  if (guestParam) {
    const cleanName = decodeURIComponent(guestParam);
    const guestEl = document.getElementById("gateGuestName");
    const rsvpNameInput = document.getElementById("rsvpName");
    if (guestEl) guestEl.textContent = cleanName;
    if (rsvpNameInput) rsvpNameInput.value = cleanName;
  }
}

// ==========================================
// 3. BACKGROUND MUSIC (WEB AUDIO API SYNTHESIZER + MP3)
// ==========================================
let audioContext = null;
let isAudioPlaying = false;
let synthInterval = null;

// Romantic chord progression generator using Web Audio API
// Guarantees soothing music plays reliably in any browser without CORS or broken URLs!
function initWeddingMusic() {
  if (audioContext) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  audioContext = new AudioContext();
}

function playRomanticChords() {
  if (!audioContext) initWeddingMusic();
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  // Canon-in-D romantic chord progressions (frequencies in Hz)
  const chordNotes = [
    [293.66, 369.99, 440.00], // D Major (D4, F#4, A4)
    [220.00, 277.18, 329.63], // A Major (A3, C#4, E4)
    [246.94, 293.66, 369.99], // B Minor (B3, D4, F#4)
    [185.00, 220.00, 277.18], // F# Minor (F#3, A3, C#4)
    [196.00, 246.94, 293.66], // G Major (G3, B3, D4)
    [146.83, 185.00, 220.00], // D Major (D3, F#3, A3)
    [196.00, 246.94, 293.66], // G Major
    [220.00, 277.18, 329.63]  // A Major
  ];

  let chordIndex = 0;

  function triggerChord() {
    if (!isAudioPlaying || !audioContext) return;

    const currentNotes = chordNotes[chordIndex];
    currentNotes.forEach((freq, i) => {
      setTimeout(() => {
        if (!isAudioPlaying) return;
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();

        // Warm soft sine tone
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, audioContext.currentTime);

        // Gentle envelope (chime / music box style)
        gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.045, audioContext.currentTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 2.8);

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.start();
        osc.stop(audioContext.currentTime + 3.0);
      }, i * 260); // Gentle arpeggio timing
    });

    chordIndex = (chordIndex + 1) % chordNotes.length;
  }

  triggerChord();
  synthInterval = setInterval(triggerChord, 2200);
}

function stopRomanticMusic() {
  if (synthInterval) {
    clearInterval(synthInterval);
    synthInterval = null;
  }
}

function toggleAudio() {
  const musicBtn = document.getElementById("musicToggleBtn");
  if (!isAudioPlaying) {
    initWeddingMusic();
    playRomanticChords();
    isAudioPlaying = true;
    if (musicBtn) musicBtn.classList.add("playing");
  } else {
    stopRomanticMusic();
    isAudioPlaying = false;
    if (musicBtn) musicBtn.classList.remove("playing");
  }
}

// ==========================================
// 4. OPENING GATE / ENVELOPE HANDLER
// ==========================================
function openInvitation() {
  const gate = document.getElementById("invitation-gate");
  if (gate) {
    gate.classList.add("opened");
    document.body.classList.remove("locked");
  }

  // Start background romantic music
  if (!isAudioPlaying) {
    toggleAudio();
  }

  // Start falling rose petals
  startFallingPetals();
}

// ==========================================
// 5. LIVE COUNTDOWN TIMER
// ==========================================
function initCountdown() {
  // Wedding Date: Dec 28, 2026, 09:00:00 AM UTC+7
  const weddingDate = new Date("2026-12-28T09:00:00+07:00").getTime();

  function update() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
      document.getElementById("cdDays").textContent = "00";
      document.getElementById("cdHours").textContent = "00";
      document.getElementById("cdMins").textContent = "00";
      document.getElementById("cdSecs").textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (num) => String(num).padStart(2, "0");

    document.getElementById("cdDays").textContent = pad(days);
    document.getElementById("cdHours").textContent = pad(hours);
    document.getElementById("cdMins").textContent = pad(minutes);
    document.getElementById("cdSecs").textContent = pad(seconds);
  }

  update();
  setInterval(update, 1000);
}

// ==========================================
// 6. CALENDAR INTEGRATION
// ==========================================
function addToGoogleCalendar() {
  const title = encodeURIComponent("Lễ Thành Hôn - Andy & Emma");
  const details = encodeURIComponent("Trân trọng kính mời quý khách tham dự lễ cưới của Andy & Emma.");
  const location = encodeURIComponent("Gem Center - 8 Nguyễn Bỉnh Khiêm, Quận 1, TP. Hồ Chí Minh");
  // 2026-12-28 from 09:00 to 22:00 in UTC (02:00 to 15:00 UTC)
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261228T020000Z/20261228T150000Z&details=${details}&location=${location}`;
  window.open(url, "_blank");
}

function downloadIcsCalendar() {
  const icsData = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Invitation//Andy & Emma//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    "SUMMARY:Lễ Cưới Andy & Emma",
    "DESCRIPTION:Trân trọng kính mời quý khách tham dự lễ cưới của Andy & Emma.",
    "LOCATION:Gem Center - 8 Nguyễn Bỉnh Khiêm, Quận 1, TP. Hồ Chí Minh",
    "DTSTART:20261228T020000Z",
    "DTEND:20261228T150000Z",
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", "wedding-andy-emma.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast(currentLang === "vi" ? "Đã tải file lịch!" : "Calendar downloaded!");
}

// ==========================================
// 7. TOAST NOTIFICATIONS
// ==========================================
function showToast(message) {
  let toast = document.getElementById("weddingToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "weddingToast";
    toast.className = "wedding-toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="bi bi-check-circle-fill" style="color:#f7a2be"></i> <span>${message}</span>`;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// ==========================================
// 8. COPY BANK ACCOUNT NUMBER
// ==========================================
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(translations[currentLang]["gift.copied"]);
  }).catch(() => {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    showToast(translations[currentLang]["gift.copied"]);
  });
}

// ==========================================
// 9. PHOTO GALLERY LIGHTBOX & FILTER
// ==========================================
const galleryImages = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", tag: "studio", caption: "Sweetest Promise" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80", tag: "outdoor", caption: "Forever In Nature" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80", tag: "moment", caption: "Ring Exchange" },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80", tag: "outdoor", caption: "Sunlit Sunset Walk" },
  { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80", tag: "studio", caption: "Gentle Gaze" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80", tag: "moment", caption: "Pure Joy & Laughter" }
];

let activeLightboxIndex = 0;

function filterGallery(category) {
  const cards = document.querySelectorAll(".gallery-card");
  const buttons = document.querySelectorAll(".gallery-filter-btn");

  buttons.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-filter") === category);
  });

  cards.forEach(card => {
    const cardCat = card.getAttribute("data-category");
    if (category === "all" || cardCat === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function openLightbox(index) {
  activeLightboxIndex = index;
  const modal = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");

  if (modal && img) {
    img.src = galleryImages[index].src;
    if (caption) caption.textContent = galleryImages[index].caption;
    modal.classList.add("active");
  }
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (modal) modal.classList.remove("active");
}

function nextLightbox() {
  activeLightboxIndex = (activeLightboxIndex + 1) % galleryImages.length;
  openLightbox(activeLightboxIndex);
}

function prevLightbox() {
  activeLightboxIndex = (activeLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
  openLightbox(activeLightboxIndex);
}

// ==========================================
// 10. RSVP & WISHES FEED (FIREBASE RTDB + LOCAL CACHE)
// ==========================================
const FIREBASE_DB_URL = "https://thiepcuoi-f7b2e-default-rtdb.firebaseio.com";

const sampleWishes = [
  {
    name: "Anh Tuấn & Mai Lan",
    status: "will_attend",
    message: "Chúc hai em trăm năm hạnh phúc, răng long đầu bạc, sớm đón thiên thần nhỏ nhé! 🎉🥂",
    createdAt: Date.now() - 2 * 60 * 60 * 1000
  },
  {
    name: "Jessica & David Miller",
    status: "will_attend",
    message: "Wishing you both a lifetime of eternal love, happiness, and joyful adventures together! ❤️",
    createdAt: Date.now() - 5 * 60 * 60 * 1000
  },
  {
    name: "Bác Ba & Gia đình",
    status: "will_attend",
    message: "Chúc hai cháu vẹn tròn duyên thắm, dâu hiền rể thảo, gia đình thuận hòa hạnh phúc!",
    createdAt: Date.now() - 24 * 60 * 60 * 1000
  }
];

let activeWishesList = [];

function escapeHtml(string) {
  if (!string) return "";
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(String(string)));
  return div.innerHTML;
}

function formatRelativeTime(timestamp) {
  if (!timestamp) return currentLang === "vi" ? "Vừa xong" : "Just now";
  const num = Number(timestamp);
  if (isNaN(num)) return String(timestamp);

  const diff = Date.now() - num;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (diff < 60000) return currentLang === "vi" ? "Vừa xong" : "Just now";
  if (minutes < 60) return currentLang === "vi" ? `${minutes} phút trước` : `${minutes}m ago`;
  if (hours < 24) return currentLang === "vi" ? `${hours} giờ trước` : `${hours}h ago`;
  if (days < 30) return currentLang === "vi" ? `${days} ngày trước` : `${days}d ago`;
  return new Date(num).toLocaleDateString(currentLang === "vi" ? "vi-VN" : "en-US");
}

function renderWishesFeed(container, wishes) {
  if (!container || !Array.isArray(wishes)) return;

  container.innerHTML = wishes.map((item) => {
    const nameStr = item.name ? String(item.name).trim() : (currentLang === "vi" ? "Khách mời" : "Guest");
    const initial = nameStr.charAt(0).toUpperCase() || "❤️";
    const isAttending = item.status === "will_attend";
    const badgeText = isAttending 
      ? (currentLang === "vi" ? "Sẽ tham dự" : "Attending") 
      : (currentLang === "vi" ? "Gửi lời chúc" : "Best wishes");

    const timeText = item.createdAt 
      ? formatRelativeTime(item.createdAt) 
      : (item.time || (currentLang === "vi" ? "Vừa xong" : "Just now"));

    return `
      <div class="wish-item-card">
        <div class="wish-header">
          <div class="wish-author">
            <div class="wish-author-avatar">${escapeHtml(initial)}</div>
            <div>
              <span>${escapeHtml(nameStr)}</span>
              <div class="wish-time">${escapeHtml(timeText)}</div>
            </div>
          </div>
          <span class="wish-badge">${badgeText}</span>
        </div>
        <p class="wish-text">${escapeHtml(item.message || "")}</p>
      </div>
    `;
  }).join("");
}

async function fetchWishesFromFirebase() {
  try {
    const res = await fetch(`${FIREBASE_DB_URL}/wishes.json`);
    if (!res.ok) {
      console.warn("[Firebase RTDB] HTTP error:", res.status);
      return null;
    }
    const data = await res.json();
    if (!data) return [];

    const list = Object.entries(data).map(([key, val]) => ({
      id: key,
      ...val
    }));

    // Newest first
    list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    return list;
  } catch (err) {
    console.warn("[Firebase RTDB] Fetch failed:", err);
    return null;
  }
}

async function loadWishes() {
  const wishesContainer = document.getElementById("wishesWallFeed");
  if (!wishesContainer) return;

  // 1. Initial display from cache or sample data
  const stored = JSON.parse(localStorage.getItem("wedding_wishes") || "[]");
  if (stored.length > 0) {
    activeWishesList = stored;
  } else if (activeWishesList.length === 0) {
    activeWishesList = sampleWishes;
  }
  renderWishesFeed(wishesContainer, activeWishesList);

  // 2. Fetch fresh data from Firebase Realtime Database
  const remote = await fetchWishesFromFirebase();
  if (remote !== null) {
    const displayList = remote.length > 0 ? remote : sampleWishes;
    activeWishesList = displayList;
    localStorage.setItem("wedding_wishes", JSON.stringify(displayList));
    renderWishesFeed(wishesContainer, displayList);
  }
}

function initFirebaseRealtimeListener() {
  if (typeof EventSource === "undefined") return;
  try {
    const source = new EventSource(`${FIREBASE_DB_URL}/wishes.json`);
    source.addEventListener("put", (e) => {
      try {
        const payload = JSON.parse(e.data);
        if (payload) {
          loadWishes();
        }
      } catch (err) {}
    });
    source.onerror = () => {
      source.close();
    };
  } catch (err) {
    console.warn("[Firebase RTDB] EventSource error:", err);
  }
}

async function handleRsvpSubmit(e) {
  e.preventDefault();
  const nameInput = document.getElementById("rsvpName");
  const phoneInput = document.getElementById("rsvpPhone");
  const sideInput = document.getElementById("rsvpSide");
  const statusInput = document.getElementById("rsvpStatus");
  const countInput = document.getElementById("rsvpCount");
  const wishInput = document.getElementById("rsvpWish");
  const submitBtn = document.getElementById("btnSubmitRsvp");

  const name = nameInput ? nameInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const side = sideInput ? sideInput.value : "both";
  const status = statusInput ? statusInput.value : "will_attend";
  const count = countInput ? countInput.value : "1";
  const wish = wishInput ? wishInput.value.trim() : "";

  if (!name) {
    alert(currentLang === "vi" ? "Vui lòng nhập họ và tên của bạn!" : "Please enter your name!");
    return;
  }

  const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "";
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>${currentLang === "vi" ? "Đang gửi..." : "Sending..."}`;
  }

  const newRsvp = {
    name,
    phone,
    side,
    status,
    count,
    message: wish || (currentLang === "vi" ? "Chúc mừng hạnh phúc hai bạn!" : "Congratulations to the happy couple!"),
    createdAt: Date.now(),
    createdAtFormatted: new Date().toISOString()
  };

  // Optimistic local update
  const stored = JSON.parse(localStorage.getItem("wedding_wishes") || "[]");
  stored.unshift(newRsvp);
  localStorage.setItem("wedding_wishes", JSON.stringify(stored));
  activeWishesList = stored;
  const wishesContainer = document.getElementById("wishesWallFeed");
  if (wishesContainer) renderWishesFeed(wishesContainer, activeWishesList);

  // Send to Firebase Realtime Database
  try {
    const res = await fetch(`${FIREBASE_DB_URL}/wishes.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRsvp)
    });

    if (res.ok) {
      console.log("[Firebase RTDB] Wish successfully saved!");
      await loadWishes();
    } else {
      console.warn("[Firebase RTDB] Write failed, status:", res.status);
    }
  } catch (err) {
    console.warn("[Firebase RTDB] Post error:", err);
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
    }
  }

  // Reset form
  const rsvpForm = document.getElementById("rsvpForm");
  if (rsvpForm) rsvpForm.reset();

  // Show confirmation toast
  const successMsg = currentLang === "vi" 
    ? `Cảm ơn ${name}! Chúng mình đã nhận được xác nhận của bạn ❤️` 
    : `Thank you ${name}! We have received your RSVP ❤️`;
  showToast(successMsg);

  // Trigger celebration petals
  startFallingPetals(60);
}

// ==========================================
// 11. FALLING PETALS CANVAS ANIMATION
// ==========================================
let petalsAnimationId = null;

function startFallingPetals(durationSeconds = 20) {
  const canvas = document.getElementById("petals-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petalsCount = 35;
  const petals = [];
  const petalColors = ["#f8b6cc", "#fcd0de", "#f7a2be", "#e57e9d", "#fff0f5"];

  for (let i = 0; i < petalsCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 9 + 7,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      speedY: Math.random() * 1.5 + 1.2,
      speedX: Math.random() * 1 - 0.5,
      angle: Math.random() * 360,
      angleSpeed: (Math.random() - 0.5) * 1.5
    });
  }

  let startTime = Date.now();

  function draw() {
    ctx.clearRect(0, 0, width, height);

    petals.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.angle * Math.PI) / 180);

      // Draw oval petal shape
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size, p.size * 0.65, 0, 0, 2 * Math.PI);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.75;
      ctx.fill();
      ctx.restore();

      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.y * 0.015) * 0.6;
      p.angle += p.angleSpeed;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
    });

    if (Date.now() - startTime < durationSeconds * 1000) {
      petalsAnimationId = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, width, height);
      cancelAnimationFrame(petalsAnimationId);
    }
  }

  draw();
}

// ==========================================
// 12. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Lock body until gate is clicked
  document.body.classList.add("locked");

  // Apply language
  updateLanguage(currentLang);

  // Check URL params for guest name
  parseGuestName();

  // Start countdown
  initCountdown();

  // Load guestbook wishes
  loadWishes();

  // Initialize Firebase RTDB realtime listener
  initFirebaseRealtimeListener();

  // Language switcher click
  const langSwitcher = document.getElementById("langSwitcherBtn");
  if (langSwitcher) {
    langSwitcher.addEventListener("click", () => {
      const nextLang = currentLang === "vi" ? "en" : "vi";
      updateLanguage(nextLang);
    });
  }

  // Open invitation button click
  const openBtn = document.getElementById("btnOpenInvitation");
  if (openBtn) {
    openBtn.addEventListener("click", openInvitation);
  }

  // Music toggle click
  const musicBtn = document.getElementById("musicToggleBtn");
  if (musicBtn) {
    musicBtn.addEventListener("click", toggleAudio);
  }

  // RSVP Form submit
  const rsvpForm = document.getElementById("rsvpForm");
  if (rsvpForm) {
    rsvpForm.addEventListener("submit", handleRsvpSubmit);
  }

  // Navbar scroll spy style
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".wedding-navbar");
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  // Lightbox keyboard controls
  document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("lightboxModal");
    if (modal && modal.classList.contains("active")) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    }
  });
});

