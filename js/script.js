/**
 * WEDDING INVITATION — Andy & Emma
 * Vanilla JS, không cần build. Mọi tuỳ chỉnh chính nằm trong CONFIG.
 */
(() => {
  "use strict";

  // =========================================================================
  // CONFIG — chỉnh ở đây
  // =========================================================================
  const CONFIG = {
    // Giờ bắt đầu lễ (dùng cho đếm ngược, lịch tháng, thứ trong tuần)
    weddingDate: "2026-12-28T09:00:00+07:00",
    timeZone: "Asia/Ho_Chi_Minh",

    // Sự kiện khi khách bấm "Thêm vào lịch"
    calendar: {
      start: "2026-12-28T09:00:00+07:00",
      end: "2026-12-28T22:00:00+07:00",
      title: "Lễ cưới Andy & Emma",
      location: "Gem Center, 8 Nguyễn Bỉnh Khiêm, Đa Kao, Quận 1, TP. Hồ Chí Minh",
      description:
        "Lễ thành hôn 09:00 tại tư gia nhà trai · Tiệc cưới 18:00 tại Gem Center, Sảnh Castor (Tầng 3)."
    },

    // Nhạc nền — đặt file mp3 vào đúng đường dẫn này (xem README)
    music: {
      src: "assets/music/i-do-911.mp3",
      title: "I Do",
      artist: "911",
      volume: 0.6,
      startAt: 0 // giây bắt đầu phát, ví dụ 12 để bỏ đoạn intro
    },

    firebaseUrl: "https://thiepcuoi-f7b2e-default-rtdb.firebaseio.com",
    storageKeys: { lang: "wedding_lang", wishes: "wedding_wishes_v2" }
  };

  // =========================================================================
  // I18N
  // =========================================================================
  // {weekday}, {dmy}, {dmyDots} được thay tự động từ CONFIG.weddingDate
  const DICT = {
    vi: {
      "meta.title": "Andy & Emma · Thiệp cưới {dmy}",
      "nav.home": "Trang chủ",
      "nav.couple": "Cặp đôi",
      "nav.date": "Ngày cưới",
      "nav.events": "Sự kiện",
      "nav.story": "Chuyện tình",
      "nav.gallery": "Album",
      "nav.rsvp": "Xác nhận",
      "nav.gift": "Mừng cưới",
      "lang.switch": "Switch to English",

      "gate.badge": "Thư mời cưới",
      "gate.date": "{dmyDots}",
      "gate.for": "Trân trọng kính mời",
      "gate.defaultGuest": "Quý khách & người thương",
      "gate.btn": "Mở thiệp",
      "gate.hint": "Bật âm thanh để nghe nhạc nền",

      "music.play": "Phát nhạc nền: I Do – 911",
      "music.pause": "Tạm dừng nhạc nền",
      "music.error": "Không tải được nhạc nền",

      "hero.theWeddingOf": "The Wedding Of",
      "hero.date": "{weekday} · {dmy}",
      "hero.scroll": "Cuộn xuống",

      "intro.quote": "“Tình yêu không phải là nhìn nhau, mà là cùng nhau nhìn về một hướng.”",

      "couple.sub": "Cô dâu & Chú rể",
      "couple.title": "Cặp đôi hạnh phúc",
      "couple.desc": "Hạnh phúc lớn nhất của đời người là tìm thấy một nửa luôn đồng hành và thấu hiểu.",
      "couple.groomRole": "Chú rể",
      "couple.groomFamily": "Trưởng nam của<br>Ông Nguyễn Văn An & Bà Lê Thị Lan",
      "couple.groomQuote": "“Gặp được em là điều may mắn nhất, yêu em là quyết định đúng đắn nhất đời anh.”",
      "couple.brideRole": "Cô dâu",
      "couple.brideFamily": "Ái nữ của<br>Ông Trần Đình Trọng & Bà Hoàng Thu Hà",
      "couple.brideQuote": "“Cảm ơn anh đã luôn ở bên, bao dung và nắm chặt tay em qua mọi thăng trầm.”",

      "countdown.sub": "Save the date",
      "countdown.title": "Đếm ngược ngày chung đôi",
      "countdown.desc": "Thời gian đang đếm ngược đến khoảnh khắc trọng đại nhất của chúng mình.",
      "countdown.days": "Ngày",
      "countdown.hours": "Giờ",
      "countdown.minutes": "Phút",
      "countdown.seconds": "Giây",
      "countdown.done": "Hôm nay là ngày chung đôi của chúng mình!",
      "countdown.google": "Thêm vào Google Calendar",
      "countdown.ics": "Tải lịch Apple / iCal",
      "countdown.icsDone": "Đã tải file lịch!",
      "calendar.month": "Tháng {month}",
      "calendar.dow": ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],

      "events.sub": "Chương trình",
      "events.title": "Thời gian & Địa điểm",
      "events.desc": "Sự hiện diện của quý khách là niềm vinh hạnh lớn nhất cho gia đình chúng tôi.",
      "events.ceremonyBadge": "Lễ thành hôn",
      "events.ceremonyTitle": "Lễ Vu Quy & Thành Hôn",
      "events.ceremonyTime": "09:00 · {weekday}, {dmy}",
      "events.ceremonyNote": "Lễ rước dâu & lễ gia tiên",
      "events.ceremonyLocation": "Tư gia nhà trai",
      "events.ceremonyAddress": "123 Đường Hoa Hồng, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
      "events.receptionBadge": "Tiệc cưới",
      "events.receptionTitle": "Tiệc mừng hôn lễ",
      "events.receptionTime": "18:00 · {weekday}, {dmy}",
      "events.receptionNote": "Đón khách từ 17:30 · Khai tiệc & chương trình âm nhạc",
      "events.receptionLocation": "Gem Center · Sảnh Castor (Tầng 3)",
      "events.receptionAddress": "Số 8 Nguyễn Bỉnh Khiêm, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh",
      "events.map": "Chỉ đường",

      "story.sub": "Hành trình yêu",
      "story.title": "Câu chuyện tình yêu",
      "story.desc": "Từ cái nhìn đầu tiên đến lời hứa trọn đời bên nhau.",
      "story.m1Date": "Tháng 03 · 2021",
      "story.m1Title": "Lần đầu gặp gỡ",
      "story.m1Desc": "Một buổi chiều mưa bất chợt tại quán cà phê quen thuộc ở Sài Gòn, ánh mắt vô tình chạm nhau...",
      "story.m2Date": "Tháng 10 · 2022",
      "story.m2Title": "Hẹn hò đầu tiên",
      "story.m2Desc": "Chuyến đi dạo bờ sông ngắm pháo hoa và cái nắm tay e ấp đầu tiên thay lời muốn nói.",
      "story.m3Date": "Tháng 12 · 2025",
      "story.m3Title": "Lời cầu hôn",
      "story.m3Desc": "Dưới ánh hoàng hôn trên đồi thông Đà Lạt, anh quỳ xuống và em nói: “Em đồng ý!”.",
      "story.m4Date": "Tháng 12 · 2026",
      "story.m4Title": "Về chung một nhà",
      "story.m4Desc": "Trước sự chứng kiến của người thân và bạn bè, chúng mình chính thức nên duyên vợ chồng.",

      "gallery.sub": "Khoảnh khắc đẹp",
      "gallery.title": "Album ảnh cưới",
      "gallery.desc": "Lưu giữ những nụ cười, ánh mắt và khoảnh khắc ngọt ngào nhất.",
      "gallery.filter": "Lọc ảnh",
      "gallery.all": "Tất cả",
      "gallery.studio": "Studio",
      "gallery.outdoor": "Ngoại cảnh",
      "gallery.moment": "Khoảnh khắc",
      "lightbox.close": "Đóng",
      "lightbox.prev": "Ảnh trước",
      "lightbox.next": "Ảnh sau",

      "rsvp.sub": "Tham dự cùng chúng mình",
      "rsvp.title": "Xác nhận tham dự",
      "rsvp.desc": "Vui lòng phản hồi trước ngày 20.12.2026 để chúng mình đón tiếp chu đáo nhất.",
      "rsvp.nameLabel": "Họ và tên",
      "rsvp.namePlaceholder": "Nhập họ tên của bạn",
      "rsvp.phoneLabel": "Số điện thoại",
      "rsvp.phonePlaceholder": "Không bắt buộc",
      "rsvp.statusLabel": "Bạn sẽ đến chứ?",
      "rsvp.statusYes": "Sẽ tham dự",
      "rsvp.statusNo": "Không thể đến",
      "rsvp.sideLabel": "Bạn là khách của",
      "rsvp.sideGroom": "Nhà trai",
      "rsvp.sideBride": "Nhà gái",
      "rsvp.sideBoth": "Cả hai",
      "rsvp.countLabel": "Số người tham dự",
      "rsvp.decrease": "Giảm",
      "rsvp.increase": "Tăng",
      "rsvp.wishLabel": "Lời chúc gửi cô dâu chú rể",
      "rsvp.wishPlaceholder": "Gửi gắm lời chúc ngọt ngào nhất...",
      "rsvp.submit": "Gửi xác nhận",
      "rsvp.sending": "Đang gửi...",
      "rsvp.nameRequired": "Vui lòng nhập họ và tên của bạn",
      "rsvp.thanks": "Cảm ơn {name}! Chúng mình đã nhận được phản hồi của bạn ❤️",
      "rsvp.error": "Chưa gửi được, bạn vui lòng thử lại nhé",
      "rsvp.defaultWish": "Chúc mừng hạnh phúc hai bạn!",

      "wishes.title": "Sổ lưu bút",
      "wishes.desc": "Những lời chúc ý nghĩa từ gia đình và bạn bè thân thương.",
      "wishes.attending": "Sẽ tham dự",
      "wishes.notAttending": "Gửi lời chúc",
      "wishes.guest": "Khách mời",
      "wishes.justNow": "Vừa xong",

      "gift.sub": "Mừng cưới",
      "gift.title": "Hộp mừng cưới",
      "gift.desc": "Sự hiện diện của bạn là món quà quý giá nhất. Nếu muốn gửi lời chúc mừng từ xa, bạn có thể gửi qua thông tin dưới đây.",
      "gift.groomTitle": "Mừng cưới chú rể",
      "gift.brideTitle": "Mừng cưới cô dâu",
      "gift.bank": "Ngân hàng",
      "gift.accNum": "Số tài khoản",
      "gift.accName": "Chủ tài khoản",
      "gift.copy": "Sao chép số tài khoản",
      "gift.copied": "Đã sao chép số tài khoản!",

      "footer.thanks": "Chân thành cảm ơn!",
      "footer.quote": "“Cảm ơn bạn đã là một phần yêu thương trong ngày trọng đại của chúng mình!”",
      "footer.copyright": "© 2026 MINH DANG LE. All rights reserved."
    },

    en: {
      "meta.title": "Andy & Emma · Wedding Invitation {dmy}",
      "nav.home": "Home",
      "nav.couple": "Couple",
      "nav.date": "The Date",
      "nav.events": "Events",
      "nav.story": "Our Story",
      "nav.gallery": "Gallery",
      "nav.rsvp": "RSVP",
      "nav.gift": "Gifts",
      "lang.switch": "Chuyển sang tiếng Việt",

      "gate.badge": "Wedding Invitation",
      "gate.date": "{dmyDots}",
      "gate.for": "Cordially inviting",
      "gate.defaultGuest": "Our dear guest",
      "gate.btn": "Open invitation",
      "gate.hint": "Turn your sound on for music",

      "music.play": "Play background music: I Do – 911",
      "music.pause": "Pause background music",
      "music.error": "Couldn't load the background music",

      "hero.theWeddingOf": "The Wedding Of",
      "hero.date": "{weekday} · {dmy}",
      "hero.scroll": "Scroll down",

      "intro.quote": "“Love does not consist in gazing at each other, but in looking outward together in the same direction.”",

      "couple.sub": "Bride & Groom",
      "couple.title": "Meet the happy couple",
      "couple.desc": "Life's greatest happiness is finding someone to walk hand in hand with through every season.",
      "couple.groomRole": "The Groom",
      "couple.groomFamily": "Eldest son of<br>Mr. An Nguyen & Mrs. Lan Le",
      "couple.groomQuote": "“Meeting you was fate; falling in love with you was the easiest choice I've ever made.”",
      "couple.brideRole": "The Bride",
      "couple.brideFamily": "Beloved daughter of<br>Mr. Trong Tran & Mrs. Ha Hoang",
      "couple.brideQuote": "“Thank you for standing beside me, protecting my dreams and filling my days with warmth.”",

      "countdown.sub": "Save the date",
      "countdown.title": "Counting down to the big day",
      "countdown.desc": "Ticking down to the moment we exchange vows and begin our forever.",
      "countdown.days": "Days",
      "countdown.hours": "Hours",
      "countdown.minutes": "Mins",
      "countdown.seconds": "Secs",
      "countdown.done": "Today is our wedding day!",
      "countdown.google": "Add to Google Calendar",
      "countdown.ics": "Apple / iCal",
      "countdown.icsDone": "Calendar file downloaded!",
      "calendar.month": "{monthName}",
      "calendar.dow": ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],

      "events.sub": "Wedding program",
      "events.title": "Time & Venue",
      "events.desc": "Your presence is our greatest honor as we celebrate our new beginning.",
      "events.ceremonyBadge": "Ceremony",
      "events.ceremonyTitle": "Wedding Ceremony",
      "events.ceremonyTime": "09:00 AM · {weekday}, {dmy}",
      "events.ceremonyNote": "Bride procession & ancestral rites",
      "events.ceremonyLocation": "Groom's family home",
      "events.ceremonyAddress": "123 Rose Street, Ben Nghe Ward, District 1, Ho Chi Minh City",
      "events.receptionBadge": "Reception",
      "events.receptionTitle": "Wedding Reception",
      "events.receptionTime": "06:00 PM · {weekday}, {dmy}",
      "events.receptionNote": "Welcome from 05:30 PM · Dinner & live music",
      "events.receptionLocation": "Gem Center · Castor Ballroom (3rd floor)",
      "events.receptionAddress": "8 Nguyen Binh Khiem, Da Kao Ward, District 1, Ho Chi Minh City",
      "events.map": "Get directions",

      "story.sub": "Our journey",
      "story.title": "Our love story",
      "story.desc": "From our very first glance to forever together.",
      "story.m1Date": "March · 2021",
      "story.m1Title": "First met",
      "story.m1Desc": "A sudden Saigon afternoon rain at a cozy coffee corner where our eyes first met...",
      "story.m2Date": "October · 2022",
      "story.m2Title": "First date",
      "story.m2Desc": "A riverside stroll under the evening fireworks, holding hands for the very first time.",
      "story.m3Date": "December · 2025",
      "story.m3Title": "The proposal",
      "story.m3Desc": "Under the golden sunset of the Da Lat pine hills, he got down on one knee — and she said yes.",
      "story.m4Date": "December · 2026",
      "story.m4Title": "Happily ever after",
      "story.m4Desc": "Surrounded by the people we love most, we begin our lifelong adventure together.",

      "gallery.sub": "Sweet moments",
      "gallery.title": "Wedding gallery",
      "gallery.desc": "Capturing smiles, loving glances and timeless memories.",
      "gallery.filter": "Filter photos",
      "gallery.all": "All",
      "gallery.studio": "Studio",
      "gallery.outdoor": "Outdoor",
      "gallery.moment": "Moments",
      "lightbox.close": "Close",
      "lightbox.prev": "Previous photo",
      "lightbox.next": "Next photo",

      "rsvp.sub": "Be our guest",
      "rsvp.title": "Kindly RSVP",
      "rsvp.desc": "Please let us know by December 20, 2026 so we can prepare your welcome.",
      "rsvp.nameLabel": "Full name",
      "rsvp.namePlaceholder": "Your name",
      "rsvp.phoneLabel": "Phone number",
      "rsvp.phonePlaceholder": "Optional",
      "rsvp.statusLabel": "Will you attend?",
      "rsvp.statusYes": "Joyfully accept",
      "rsvp.statusNo": "Regretfully decline",
      "rsvp.sideLabel": "You are a guest of",
      "rsvp.sideGroom": "Groom",
      "rsvp.sideBride": "Bride",
      "rsvp.sideBoth": "Both",
      "rsvp.countLabel": "Number of guests",
      "rsvp.decrease": "Decrease",
      "rsvp.increase": "Increase",
      "rsvp.wishLabel": "A wish for the couple",
      "rsvp.wishPlaceholder": "Write your heartfelt congratulations...",
      "rsvp.submit": "Send RSVP",
      "rsvp.sending": "Sending...",
      "rsvp.nameRequired": "Please enter your name",
      "rsvp.thanks": "Thank you, {name}! We've received your RSVP ❤️",
      "rsvp.error": "Couldn't send — please try again",
      "rsvp.defaultWish": "Congratulations to the happy couple!",

      "wishes.title": "Guestbook",
      "wishes.desc": "Heartwarming wishes from our beloved family and friends.",
      "wishes.attending": "Attending",
      "wishes.notAttending": "Best wishes",
      "wishes.guest": "Guest",
      "wishes.justNow": "Just now",

      "gift.sub": "Wedding gift",
      "gift.title": "Gift box",
      "gift.desc": "Your presence is the greatest gift. If you'd like to send your wishes from afar, you can use the details below.",
      "gift.groomTitle": "Groom's account",
      "gift.brideTitle": "Bride's account",
      "gift.bank": "Bank",
      "gift.accNum": "Account no.",
      "gift.accName": "Account holder",
      "gift.copy": "Copy account number",
      "gift.copied": "Account number copied!",

      "footer.thanks": "Thank you, with love!",
      "footer.quote": "“Thank you for being part of our most treasured day and our forever memories!”",
      "footer.copyright": "© 2026 MINH DANG LE. All rights reserved."
    }
  };

  // =========================================================================
  // Helpers
  // =========================================================================
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const storage = {
    get(key, fallback = null) {
      try {
        const v = localStorage.getItem(key);
        return v === null ? fallback : JSON.parse(v);
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch {
        /* storage đầy hoặc bị chặn (private mode) — bỏ qua */
      }
    }
  };

  const state = {
    lang: storage.get(CONFIG.storageKeys.lang) === "en" ? "en" : "vi",
    opened: false,
    guestName: ""
  };

  /** Ngày cưới theo múi giờ Việt Nam (không phụ thuộc múi giờ máy khách). */
  function weddingParts() {
    const date = new Date(CONFIG.weddingDate);
    const parts = Object.fromEntries(
      new Intl.DateTimeFormat("en-US", {
        timeZone: CONFIG.timeZone,
        year: "numeric",
        month: "numeric",
        day: "numeric"
      })
        .formatToParts(date)
        .map((p) => [p.type, p.value])
    );
    return { date, year: +parts.year, month: +parts.month, day: +parts.day };
  }

  function dateTokens(lang) {
    const { date, year, month, day } = weddingParts();
    const locale = lang === "vi" ? "vi-VN" : "en-US";
    const pad = (n) => String(n).padStart(2, "0");
    return {
      weekday: new Intl.DateTimeFormat(locale, { weekday: "long", timeZone: CONFIG.timeZone }).format(date),
      monthName: new Intl.DateTimeFormat("en-US", { month: "long", timeZone: CONFIG.timeZone }).format(date),
      month: pad(month),
      year: String(year),
      dmy: `${pad(day)}.${pad(month)}.${year}`,
      dmyDots: `${pad(day)} · ${pad(month)} · ${year}`
    };
  }

  function t(key, vars = {}) {
    const value = DICT[state.lang][key] ?? DICT.vi[key];
    if (typeof value !== "string") return value;
    const tokens = { ...dateTokens(state.lang), ...vars };
    return value.replace(/\{(\w+)\}/g, (m, k) => (k in tokens ? tokens[k] : m));
  }

  function escapeHtml(str) {
    return String(str ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[c]);
  }

  // =========================================================================
  // Toast
  // =========================================================================
  const toast = (() => {
    const el = $("#toast");
    let timer;
    return (message, type = "success") => {
      if (!el) return;
      el.replaceChildren();
      const icon = document.createElement("i");
      icon.className = type === "error" ? "bi bi-exclamation-circle" : "bi bi-check2-circle";
      icon.setAttribute("aria-hidden", "true");
      const text = document.createElement("span");
      text.textContent = message;
      el.append(icon, text);
      el.classList.toggle("is-error", type === "error");
      el.classList.add("is-visible");
      clearTimeout(timer);
      timer = setTimeout(() => el.classList.remove("is-visible"), 3400);
    };
  })();

  // =========================================================================
  // Language
  // =========================================================================
  function applyLanguage(lang) {
    state.lang = lang;
    storage.set(CONFIG.storageKeys.lang, lang);
    document.documentElement.lang = lang;
    document.title = t("meta.title");

    $$("[data-i18n]").forEach((el) => {
      const v = t(el.dataset.i18n);
      if (typeof v === "string") el.textContent = v;
    });
    $$("[data-i18n-html]").forEach((el) => {
      // Chỉ dùng cho chuỗi tĩnh trong DICT (có <br>), không bao giờ cho dữ liệu người dùng
      const v = t(el.dataset.i18nHtml);
      if (typeof v === "string") el.innerHTML = escapeHtml(v).replace(/&lt;br&gt;/g, "<br>");
    });
    $$("[data-i18n-ph]").forEach((el) => {
      el.placeholder = t(el.dataset.i18nPh);
    });
    $$("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });
    $$("#langBtn [data-lang]").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.lang === lang);
    });

    renderCalendar();
    Music.refresh();
    Wishes.render();
  }

  // =========================================================================
  // Guest name (?to=Tên+Khách)
  // =========================================================================
  function applyGuestName() {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get("to") || params.get("guest") || params.get("u") || "";
    const name = raw.trim().slice(0, 80);
    if (!name) return;

    state.guestName = name;
    const el = $("#guestName");
    if (el) {
      el.removeAttribute("data-i18n"); // giữ tên khách khi đổi ngôn ngữ
      el.textContent = name;
    }
    const input = $("#rsvpName");
    if (input) input.value = name;
  }

  // =========================================================================
  // Background music — I Do (911)
  // =========================================================================
  const Music = (() => {
    const btn = $("#musicBtn");
    const audio = new Audio();
    audio.loop = true;
    audio.preload = "none";
    audio.src = CONFIG.music.src;

    let unavailable = false;
    let silentErrors = true;
    let resumeOnVisible = false;
    let fadeRaf = 0;
    let started = false;

    function fadeTo(target, ms) {
      cancelAnimationFrame(fadeRaf);
      const from = audio.volume;
      const t0 = performance.now();
      return new Promise((resolve) => {
        const step = (now) => {
          const k = Math.min(1, (now - t0) / ms);
          audio.volume = from + (target - from) * k;
          if (k < 1) fadeRaf = requestAnimationFrame(step);
          else resolve();
        };
        fadeRaf = requestAnimationFrame(step);
      });
    }

    function refresh() {
      if (!btn) return;
      const playing = !audio.paused;
      btn.classList.toggle("is-playing", playing);
      btn.classList.toggle("is-unavailable", unavailable);
      btn.setAttribute("aria-pressed", String(playing));
      btn.setAttribute("aria-label", t(playing ? "music.pause" : "music.play"));
      btn.title = `${CONFIG.music.title} – ${CONFIG.music.artist}`;
    }

    function setupMediaSession() {
      if (!("mediaSession" in navigator) || typeof MediaMetadata === "undefined") return;
      navigator.mediaSession.metadata = new MediaMetadata({
        title: CONFIG.music.title,
        artist: CONFIG.music.artist,
        album: "Andy & Emma · Wedding"
      });
      navigator.mediaSession.setActionHandler("play", () => play());
      navigator.mediaSession.setActionHandler("pause", () => pause());
    }

    async function play({ silent = false } = {}) {
      if (unavailable) {
        if (!silent) toast(t("music.error"), "error");
        return;
      }
      silentErrors = silent;
      try {
        if (!started && CONFIG.music.startAt > 0) {
          audio.currentTime = CONFIG.music.startAt;
        }
        audio.volume = 0;
        await audio.play();
        started = true;
        setupMediaSession();
        fadeTo(CONFIG.music.volume, 1800);
      } catch (err) {
        // NotAllowedError: trình duyệt chặn autoplay — để người dùng tự bấm nút
        if (err && err.name !== "NotAllowedError" && err.name !== "AbortError") {
          markUnavailable(silent);
        }
      }
      refresh();
    }

    async function pause() {
      resumeOnVisible = false;
      await fadeTo(0, 350);
      audio.pause();
      refresh();
    }

    function markUnavailable(silent) {
      if (unavailable) return;
      unavailable = true;
      console.warn(`[music] Không tải được "${CONFIG.music.src}". Đặt file mp3 vào đúng đường dẫn (xem README).`);
      if (!silent) toast(t("music.error"), "error");
      refresh();
    }

    audio.addEventListener("error", () => markUnavailable(silentErrors));
    audio.addEventListener("play", refresh);
    audio.addEventListener("pause", refresh);

    // Tạm dừng khi khách chuyển app/tab (ví dụ mở app ngân hàng để mừng cưới)
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && !audio.paused) {
        resumeOnVisible = true;
        audio.pause();
      } else if (!document.hidden && resumeOnVisible) {
        resumeOnVisible = false;
        audio.play().catch(() => {});
      }
    });

    btn?.addEventListener("click", () => (audio.paused ? play() : pause()));

    return { play, pause, refresh };
  })();

  // =========================================================================
  // Gate
  // =========================================================================
  function openInvitation() {
    if (state.opened) return;
    state.opened = true;

    const gate = $("#gate");
    gate?.classList.add("is-open");
    document.body.classList.remove("is-locked");
    document.body.classList.add("is-opened");
    // Ẩn hẳn sau khi hiệu ứng mờ dần kết thúc (CSS: 1.1s–1.4s)
    setTimeout(() => gate?.setAttribute("hidden", ""), 1500);

    Music.play({ silent: true });
    Petals.burst(16);

    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1));
      target?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    }
  }

  // =========================================================================
  // Countdown
  // =========================================================================
  function initCountdown() {
    const target = new Date(CONFIG.weddingDate).getTime();
    const nums = Object.fromEntries($$("[data-unit]").map((el) => [el.dataset.unit, el]));
    const done = $("#countdownDone");
    const pad = (n) => String(n).padStart(2, "0");
    let timer = 0;

    const render = (d, h, m, s) => {
      if (nums.days) nums.days.textContent = pad(d);
      if (nums.hours) nums.hours.textContent = pad(h);
      if (nums.minutes) nums.minutes.textContent = pad(m);
      if (nums.seconds) nums.seconds.textContent = pad(s);
    };

    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        render(0, 0, 0, 0);
        if (done) done.hidden = false;
        clearInterval(timer);
        return;
      }
      const sec = Math.floor(diff / 1000);
      render(Math.floor(sec / 86400), Math.floor((sec % 86400) / 3600), Math.floor((sec % 3600) / 60), sec % 60);
    };

    tick();
    timer = setInterval(tick, 1000);
  }

  // =========================================================================
  // Month calendar (tự tính từ CONFIG.weddingDate)
  // =========================================================================
  function renderCalendar() {
    const el = $("#calendar");
    if (!el) return;
    const { year, month, day } = weddingParts();
    const firstDow = new Date(Date.UTC(year, month - 1, 1)).getUTCDay(); // 0 = CN
    const offset = (firstDow + 6) % 7; // tuần bắt đầu từ thứ Hai
    const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();

    const cells = [];
    t("calendar.dow").forEach((d) => cells.push(`<span class="calendar__dow">${d}</span>`));
    for (let i = 0; i < offset; i++) cells.push("<span></span>");
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push(
        d === day
          ? `<span class="calendar__day is-wedding" aria-current="date"><i class="bi bi-heart-fill" aria-hidden="true"></i><b>${d}</b></span>`
          : `<span class="calendar__day">${d}</span>`
      );
    }

    el.setAttribute("aria-label", `${t("calendar.month")} ${year}`);
    el.innerHTML = `
      <div class="calendar__head">
        <span class="eyebrow">${year}</span>
        <h3 class="calendar__title">${escapeHtml(t("calendar.month"))}</h3>
      </div>
      <div class="calendar__grid">${cells.join("")}</div>`;
  }

  // =========================================================================
  // Add to calendar
  // =========================================================================
  const toUtcStamp = (iso) => new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

  function openGoogleCalendar() {
    const c = CONFIG.calendar;
    const url =
      "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      `&text=${encodeURIComponent(c.title)}` +
      `&dates=${toUtcStamp(c.start)}/${toUtcStamp(c.end)}` +
      `&details=${encodeURIComponent(c.description)}` +
      `&location=${encodeURIComponent(c.location)}`;
    window.open(url, "_blank", "noopener");
  }

  function downloadIcs() {
    const c = CONFIG.calendar;
    const esc = (s) => String(s).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
    const encoder = new TextEncoder();
    // RFC 5545: mỗi dòng tối đa 75 byte, dòng nối bắt đầu bằng 1 khoảng trắng
    const fold = (line) => {
      let out = "";
      let bytes = 0;
      for (const ch of line) {
        const len = encoder.encode(ch).length;
        if (bytes + len > 75) {
          out += "\r\n ";
          bytes = 1;
        }
        out += ch;
        bytes += len;
      }
      return out;
    };

    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Andy & Emma//Wedding Invitation//VI",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:${toUtcStamp(c.start)}-andy-emma@wedding-invitation`,
      `DTSTAMP:${toUtcStamp(new Date().toISOString())}`,
      `DTSTART:${toUtcStamp(c.start)}`,
      `DTEND:${toUtcStamp(c.end)}`,
      `SUMMARY:${esc(c.title)}`,
      `DESCRIPTION:${esc(c.description)}`,
      `LOCATION:${esc(c.location)}`,
      "STATUS:CONFIRMED",
      "BEGIN:VALARM",
      "TRIGGER:-P1D",
      "ACTION:DISPLAY",
      `DESCRIPTION:${esc(c.title)}`,
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR"
    ].map(fold).join("\r\n");

    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
    const a = Object.assign(document.createElement("a"), { href: url, download: "andy-emma-wedding.ics" });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast(t("countdown.icsDone"));
  }

  // =========================================================================
  // Copy bank account
  // =========================================================================
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback cho http không bảo mật / trình duyệt cũ
      const ta = Object.assign(document.createElement("textarea"), { value: text });
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.append(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    toast(t("gift.copied"));
  }

  // =========================================================================
  // Gallery + Lightbox
  // =========================================================================
  const Lightbox = (() => {
    const root = $("#lightbox");
    const img = $("#lightboxImg");
    const caption = $("#lightboxCaption");
    const counter = $("#lightboxCounter");
    let items = [];
    let index = 0;
    let lastFocus = null;
    let touchX = null;

    const isOpen = () => root?.classList.contains("is-open");

    function show(i) {
      if (!items.length) return;
      index = (i + items.length) % items.length;
      const item = items[index];
      img.classList.remove("is-loaded");
      img.src = item.src;
      img.alt = item.caption;
      caption.textContent = item.caption;
      counter.textContent = `${index + 1} / ${items.length}`;
    }

    function open(list, i) {
      items = list;
      lastFocus = document.activeElement;
      show(i);
      root.classList.add("is-open");
      root.setAttribute("aria-hidden", "false");
      document.body.classList.add("is-locked");
      $(".lightbox__close", root)?.focus();
    }

    function close() {
      root.classList.remove("is-open");
      root.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-locked");
      lastFocus?.focus?.();
    }

    if (root) {
      img.addEventListener("load", () => img.classList.add("is-loaded"));
      root.addEventListener("click", (e) => {
        const action = e.target.closest("[data-lb]")?.dataset.lb;
        if (action === "close") close();
        else if (action === "prev") show(index - 1);
        else if (action === "next") show(index + 1);
        else if (e.target === root) close();
      });
      root.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
      root.addEventListener("touchend", (e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        touchX = null;
        if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
      });
      document.addEventListener("keydown", (e) => {
        if (!isOpen()) return;
        if (e.key === "Escape") close();
        else if (e.key === "ArrowRight") show(index + 1);
        else if (e.key === "ArrowLeft") show(index - 1);
      });
    }

    return { open };
  })();

  function initGallery() {
    const grid = $("#galleryGrid");
    if (!grid) return;
    const chips = $$(".chip");
    const figures = $$(".gallery__item", grid);

    chips.forEach((chip) =>
      chip.addEventListener("click", () => {
        const filter = chip.dataset.filter;
        chips.forEach((c) => {
          const active = c === chip;
          c.classList.toggle("is-active", active);
          c.setAttribute("aria-pressed", String(active));
        });
        figures.forEach((fig) => {
          fig.hidden = !(filter === "all" || fig.dataset.category === filter);
        });
      })
    );

    grid.addEventListener("click", (e) => {
      const btn = e.target.closest(".gallery__btn");
      if (!btn) return;
      // Lightbox chỉ duyệt các ảnh đang hiển thị theo bộ lọc
      const visible = figures.filter((f) => !f.hidden).map((f) => $(".gallery__btn", f));
      const list = visible.map((b) => ({
        src: b.dataset.full || $("img", b).src,
        caption: $("figcaption", b)?.textContent.trim() || $("img", b).alt
      }));
      Lightbox.open(list, visible.indexOf(btn));
    });
  }

  // =========================================================================
  // Guestbook (Firebase Realtime Database qua REST + SSE)
  // =========================================================================
  const Wishes = (() => {
    const base = CONFIG.firebaseUrl.replace(/\/+$/, "");
    const list = $("#wishesList");
    const countEl = $("#wishCount");
    const map = new Map();

    const SAMPLES = [
      { name: "Anh Tuấn & Mai Lan", status: "will_attend", message: "Chúc hai em trăm năm hạnh phúc, răng long đầu bạc, sớm đón thiên thần nhỏ nhé! 🎉🥂", createdAt: Date.now() - 2 * 3600e3 },
      { name: "Jessica & David Miller", status: "will_attend", message: "Wishing you both a lifetime of love, happiness, and joyful adventures together! ❤️", createdAt: Date.now() - 5 * 3600e3 },
      { name: "Bác Ba & Gia đình", status: "cannot_attend", message: "Chúc hai cháu vẹn tròn duyên thắm, dâu hiền rể thảo, gia đình thuận hòa hạnh phúc!", createdAt: Date.now() - 26 * 3600e3 }
    ];

    /** Chỉ giữ các trường công khai — không bao giờ hiển thị/lưu số điện thoại. */
    const sanitize = (v) => ({
      name: String(v?.name ?? "").slice(0, 80),
      message: String(v?.message ?? "").slice(0, 500),
      status: v?.status === "cannot_attend" ? "cannot_attend" : "will_attend",
      createdAt: Number(v?.createdAt) || 0
    });

    function setAll(data) {
      map.clear();
      if (data && typeof data === "object") {
        for (const [id, v] of Object.entries(data)) {
          if (v && typeof v === "object") map.set(id, sanitize(v));
        }
      }
    }

    function sorted() {
      return [...map.values()].sort((a, b) => b.createdAt - a.createdAt);
    }

    function persist() {
      storage.set(CONFIG.storageKeys.wishes, Object.fromEntries(
        [...map.entries()].filter(([id]) => !id.startsWith("local-")).slice(0, 200)
      ));
    }

    function relativeTime(ts) {
      if (!ts) return t("wishes.justNow");
      const diff = (ts - Date.now()) / 1000;
      if (Math.abs(diff) < 60) return t("wishes.justNow");
      const rtf = new Intl.RelativeTimeFormat(state.lang, { numeric: "auto" });
      const units = [["day", 86400], ["hour", 3600], ["minute", 60]];
      for (const [unit, sec] of units) {
        if (Math.abs(diff) >= sec || unit === "minute") {
          if (unit === "day" && Math.abs(diff) > 30 * 86400) {
            return new Date(ts).toLocaleDateString(state.lang === "vi" ? "vi-VN" : "en-US");
          }
          return rtf.format(Math.round(diff / sec), unit);
        }
      }
      return "";
    }

    function hueFor(name) {
      let h = 0;
      for (const ch of name) h = (h * 31 + ch.codePointAt(0)) % 360;
      return h;
    }

    function render() {
      if (!list) return;
      const real = sorted();
      const items = real.length ? real : SAMPLES;

      if (countEl) {
        countEl.hidden = real.length === 0;
        countEl.textContent = String(real.length);
      }

      list.innerHTML = items.map((w) => {
        const name = w.name.trim() || t("wishes.guest");
        const initial = [...name][0]?.toLocaleUpperCase() || "♥";
        const attending = w.status === "will_attend";
        return `
          <li class="wish">
            <span class="wish__avatar" style="--hue:${hueFor(name)}" aria-hidden="true">${escapeHtml(initial)}</span>
            <div>
              <div class="wish__head">
                <span class="wish__name">${escapeHtml(name)}</span>
                <span class="wish__time">${escapeHtml(relativeTime(w.createdAt))}</span>
                <span class="wish__badge${attending ? "" : " is-muted"}">${escapeHtml(t(attending ? "wishes.attending" : "wishes.notAttending"))}</span>
              </div>
              <p class="wish__text">${escapeHtml(w.message)}</p>
            </div>
          </li>`;
      }).join("");
    }

    async function fetchAll() {
      try {
        const res = await fetch(`${base}/wishes.json`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setAll(await res.json());
        persist();
        render();
      } catch (err) {
        console.warn("[guestbook] Không tải được lời chúc:", err);
      }
    }

    function applyEvent(raw, isPatch) {
      let payload;
      try {
        payload = JSON.parse(raw);
      } catch {
        return;
      }
      if (!payload || typeof payload.path !== "string") return;
      const segs = payload.path.split("/").filter(Boolean);
      const data = payload.data;

      if (segs.length === 0) {
        if (isPatch && data) {
          for (const [id, v] of Object.entries(data)) {
            v === null ? map.delete(id) : map.set(id, sanitize(v));
          }
        } else {
          setAll(data);
        }
      } else if (segs.length === 1) {
        const id = segs[0];
        if (data === null) map.delete(id);
        else map.set(id, sanitize(isPatch ? { ...map.get(id), ...data } : data));
      } else {
        fetchAll(); // thay đổi lồng sâu — tải lại toàn bộ cho chắc
        return;
      }
      persist();
      render();
    }

    function listen() {
      if (!("EventSource" in window)) {
        fetchAll();
        return;
      }
      const es = new EventSource(`${base}/wishes.json`);
      es.addEventListener("put", (e) => applyEvent(e.data, false));
      es.addEventListener("patch", (e) => applyEvent(e.data, true));
      es.addEventListener("cancel", () => es.close());
      es.addEventListener("auth_revoked", () => es.close());
      es.onerror = () => {
        // CLOSED = lỗi không thể tự kết nối lại (vd. bị từ chối quyền) → thử tải 1 lần
        if (es.readyState === EventSource.CLOSED) fetchAll();
      };
    }

    async function post(path, body) {
      const res = await fetch(`${base}/${path}.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json(); // { name: "<id>" }
    }

    /**
     * Lưu RSVP đầy đủ (có SĐT) vào /rsvps (riêng tư) và lời chúc công khai vào /wishes.
     * Nếu /rsvps bị chặn bởi rules, ghi đầy đủ vào /wishes như bản cũ để không mất dữ liệu.
     */
    async function submit(entry) {
      const createdAt = Date.now();
      const rsvp = { ...entry, createdAt, lang: state.lang };
      const publicWish = sanitize(rsvp);

      const tempId = `local-${createdAt}`;
      map.set(tempId, publicWish);
      render();

      let rsvpSaved = false;
      try {
        await post("rsvps", rsvp);
        rsvpSaved = true;
      } catch (err) {
        console.warn("[rsvp] Không ghi được /rsvps, dùng /wishes:", err);
      }

      let wishId = null;
      try {
        const res = await post("wishes", rsvpSaved ? publicWish : rsvp);
        wishId = res?.name || null;
      } catch (err) {
        console.warn("[rsvp] Không ghi được /wishes:", err);
      }

      map.delete(tempId);
      if (wishId) map.set(wishId, publicWish);
      persist();
      render();
      return rsvpSaved || Boolean(wishId);
    }

    function init() {
      const cached = storage.get(CONFIG.storageKeys.wishes);
      if (cached) setAll(cached);
      render();
      listen();
    }

    return { init, render, submit };
  })();

  // =========================================================================
  // RSVP form
  // =========================================================================
  function initRsvp() {
    const form = $("#rsvpForm");
    if (!form) return;
    const submitBtn = $("#rsvpSubmit");
    const countField = $("#countField");
    const countInput = $("#rsvpCount");
    const clamp = (n) => Math.min(10, Math.max(1, Math.round(n) || 1));

    const syncCount = () => {
      const attending = form.elements.status.value === "will_attend";
      countField.hidden = !attending;
    };

    form.addEventListener("change", (e) => {
      if (e.target.name === "status") syncCount();
      if (e.target === countInput) countInput.value = clamp(+countInput.value);
    });

    $$("[data-step]", form).forEach((btn) =>
      btn.addEventListener("click", () => {
        countInput.value = clamp(+countInput.value + Number(btn.dataset.step));
      })
    );

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const get = (k) => String(data.get(k) ?? "").trim();

      const name = get("name").slice(0, 80);
      if (!name) {
        toast(t("rsvp.nameRequired"), "error");
        $("#rsvpName")?.focus();
        return;
      }
      const status = get("status") === "cannot_attend" ? "cannot_attend" : "will_attend";
      const entry = {
        name,
        phone: get("phone").slice(0, 20),
        side: get("side") || "both",
        status,
        count: status === "will_attend" ? clamp(+get("count")) : 0,
        message: (get("message") || t("rsvp.defaultWish")).slice(0, 500)
      };

      const original = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner" aria-hidden="true"></span><span>${escapeHtml(t("rsvp.sending"))}</span>`;

      const ok = await Wishes.submit(entry);

      submitBtn.disabled = false;
      submitBtn.innerHTML = original;
      // innerHTML gốc mang chữ của ngôn ngữ lúc bấm — cập nhật lại theo ngôn ngữ hiện tại
      const label = $("[data-i18n]", submitBtn);
      if (label) label.textContent = t(label.dataset.i18n);

      if (!ok) {
        toast(t("rsvp.error"), "error");
        return;
      }

      form.reset();
      if (state.guestName) $("#rsvpName").value = state.guestName;
      syncCount();
      toast(t("rsvp.thanks", { name }));
      Petals.burst(8);
    });

    syncCount();
  }

  // =========================================================================
  // Falling petals
  // =========================================================================
  const Petals = (() => {
    const canvas = $("#petals");
    const ctx = canvas?.getContext("2d");
    const COLORS = ["#f3c9cf", "#ecb4bd", "#f8dfe2", "#e9d6b8", "#ffffff"];
    let w = 0;
    let h = 0;
    let petals = [];
    let raf = 0;
    let endAt = 0;

    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const make = (initial) => ({
      x: Math.random() * w,
      y: initial ? -Math.random() * h : -20,
      size: 6 + Math.random() * 8,
      color: COLORS[(Math.random() * COLORS.length) | 0],
      vy: 0.8 + Math.random() * 1.2,
      vx: -0.4 + Math.random() * 0.8,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.04,
      flip: Math.random() * Math.PI * 2,
      vf: 0.02 + Math.random() * 0.03,
      sway: Math.random() * Math.PI * 2
    });

    function drawPetal(p) {
      const s = p.size;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.scale(Math.cos(p.flip), 1); // hiệu ứng lật 3D
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.bezierCurveTo(s * 0.9, -s * 0.55, s * 0.65, s * 0.7, 0, s);
      ctx.bezierCurveTo(-s * 0.65, s * 0.7, -s * 0.9, -s * 0.55, 0, -s);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.85;
      ctx.fill();
      ctx.restore();
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      const spawning = Date.now() < endAt;
      petals = petals.filter((p) => {
        p.sway += 0.02;
        p.y += p.vy;
        p.x += p.vx + Math.sin(p.sway) * 0.5;
        p.rot += p.vr;
        p.flip += p.vf;
        if (p.y > h + 20) {
          if (!spawning) return false; // hết giờ: để cánh hoa rơi hết rồi dừng
          Object.assign(p, make(false));
        }
        drawPetal(p);
        return true;
      });
      if (petals.length) raf = requestAnimationFrame(frame);
      else {
        raf = 0;
        ctx.clearRect(0, 0, w, h);
      }
    }

    function burst(seconds = 12) {
      if (!canvas || !ctx || reduceMotion) return;
      endAt = Math.max(endAt, Date.now() + seconds * 1000);
      const target = w < 600 ? 22 : 34;
      while (petals.length < target) petals.push(make(true));
      if (!raf) raf = requestAnimationFrame(frame);
    }

    if (canvas) {
      resize();
      window.addEventListener("resize", resize, { passive: true });
    }

    return { burst };
  })();

  // =========================================================================
  // Header, scroll spy, reveal
  // =========================================================================
  function initHeader() {
    const header = $("#siteHeader");
    const hero = $("#hero");
    if (!header) return;
    let ticking = false;
    const update = () => {
      const threshold = (hero?.offsetHeight || 400) - header.offsetHeight - 40;
      header.classList.toggle("is-scrolled", window.scrollY > threshold);
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
  }

  function initScrollSpy() {
    const links = $$("[data-nav]");
    const ids = [...new Set(links.map((a) => a.getAttribute("href").slice(1)))];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!("IntersectionObserver" in window) || !sections.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => io.observe(s));
  }

  function initReveal() {
    const els = $$(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    els.forEach((el) => io.observe(el));
  }

  // =========================================================================
  // Boot
  // =========================================================================
  function init() {
    applyGuestName();
    applyLanguage(state.lang);
    initCountdown();
    initGallery();
    initRsvp();
    initHeader();
    initScrollSpy();
    initReveal();
    Wishes.init();

    $("#openInvitation")?.addEventListener("click", openInvitation);
    $("#langBtn")?.addEventListener("click", () => applyLanguage(state.lang === "vi" ? "en" : "vi"));

    document.addEventListener("click", (e) => {
      const actionEl = e.target.closest("[data-action]");
      if (actionEl?.dataset.action === "google-calendar") openGoogleCalendar();
      if (actionEl?.dataset.action === "ics") downloadIcs();

      const copyEl = e.target.closest("[data-copy]");
      if (copyEl) copyText(copyEl.dataset.copy);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
