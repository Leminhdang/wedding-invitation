# 💍 Thiệp Cưới Online Song Ngữ — Andy & Emma

Landing page thiệp cưới song ngữ Việt – Anh, responsive trên mọi thiết bị, **không cần build** và **không phụ thuộc framework** (HTML + CSS + JavaScript thuần).

---

## 🌟 Tính năng

| Mục | Mô tả |
|---|---|
| **Màn hình mở thiệp** | Ảnh nền toàn màn hình, khung vòm, tên khách mời cá nhân hoá qua URL `?to=Tên+Khách`. Bấm “Mở thiệp” → phát nhạc nền + cánh hoa rơi. |
| **Nhạc nền “I Do” – 911** | Phát từ file mp3 trong `assets/music/`, fade-in nhẹ, nút bật/tắt có hiệu ứng equalizer, tự tạm dừng khi khách chuyển app/tab, hiện tên bài trên màn hình khoá (Media Session). |
| **Song ngữ VI / EN** | Chuyển tức thì, ghi nhớ lựa chọn bằng `localStorage`. Thứ trong tuần được **tính tự động** từ ngày cưới. |
| **Save the date** | Lịch tháng cưới (tự vẽ theo ngày cưới), đồng hồ đếm ngược, nút thêm vào Google Calendar và tải file `.ics` (có nhắc trước 1 ngày). |
| **Cô dâu & chú rể** | Ảnh khung vòm, phụ huynh hai bên, lời nhắn, mạng xã hội. |
| **Sự kiện** | Lễ thành hôn & tiệc cưới, nút chỉ đường Google Maps. |
| **Câu chuyện tình yêu** | Timeline xen kẽ trái/phải trên desktop. |
| **Album ảnh** | Lọc theo nhóm, lightbox hỗ trợ phím ← → Esc và vuốt trên điện thoại; chỉ duyệt các ảnh đang được lọc. |
| **RSVP & Sổ lưu bút** | Lưu lên Firebase Realtime Database, cập nhật realtime qua SSE, cache offline. Số điện thoại **không hiển thị công khai**. |
| **Mừng cưới** | QR VietQR, sao chép số tài khoản 1 chạm. |
| **Menu dưới (dock)** | Thanh điều hướng nổi cho điện thoại/tablet, tự đánh dấu mục đang xem. |

---

## 📁 Cấu trúc

```
wedding-invitation/
├── index.html            # Nội dung & bố cục
├── css/style.css         # Giao diện (màu, font, khoảng cách ở :root)
├── js/script.js          # CONFIG + logic (song ngữ, nhạc, đếm ngược, RSVP…)
└── assets/
    ├── groom-qr.png      # QR chú rể
    └── music/
        └── i-do-911.mp3  # ← bạn tự thêm file nhạc vào đây
```

---

## 🎵 Thêm nhạc nền “I Do” – 911

Bài hát có bản quyền nên repo **không kèm sẵn file nhạc**. Bạn dùng bản mp3 mình đã mua/sở hữu hợp lệ:

1. Đổi tên file thành `i-do-911.mp3`.
2. Đặt vào `assets/music/i-do-911.mp3`.
3. (Tuỳ chọn) Trong `js/script.js` → `CONFIG.music`:
   - `startAt: 12` — bắt đầu phát từ giây thứ 12 (bỏ intro).
   - `volume: 0.6` — âm lượng 0 → 1.
   - `src` — có thể là URL mp3 ở nơi khác (CDN, Firebase Storage…).

> Mẹo: nén file khoảng 128 kbps (~3–4 MB) để khách mở thiệp trên 4G nhanh hơn.
> Nếu thiếu file, trang vẫn chạy bình thường — nút nhạc chỉ bị mờ đi.

---

## 🚀 Chạy thử

```bash
cd ~/Desktop/wedding-invitation
python3 -m http.server 8080
```

- `http://localhost:8080`
- `http://localhost:8080/?to=Anh+Minh+%26+Người+thương` — có tên khách mời

---

## 🎨 Tuỳ chỉnh nhanh

| Muốn đổi | Sửa ở đâu |
|---|---|
| Ngày/giờ cưới | `CONFIG.weddingDate` và `CONFIG.calendar` trong `js/script.js` |
| Chữ (cả 2 ngôn ngữ) | Bảng `DICT` trong `js/script.js` — dùng `{weekday}`, `{dmy}` để tự điền ngày |
| Tên cô dâu chú rể | Tìm `Andy` / `Emma` trong `index.html` |
| Ảnh | Thuộc tính `src` trong `index.html` (album: `src` = ảnh nhỏ, `data-full` = ảnh lớn) |
| Tài khoản & QR | Khối `gift-card` trong `index.html` (`data-copy` = số TK khi sao chép) |
| Màu & font | Biến trong `:root` ở đầu `css/style.css` |

QR cô dâu đang dùng `https://img.vietqr.io/image/<BIN ngân hàng>-<số TK>-qr_only.png?accountName=...` nên sẽ tự khớp khi bạn đổi số tài khoản (Techcombank BIN = `970407`).

---

## 🔒 Firebase Realtime Database

- Lời chúc công khai lưu ở `/wishes` (chỉ tên, lời chúc, trạng thái, thời gian).
- RSVP đầy đủ (có số điện thoại, số người, bên nhà trai/gái) lưu ở `/rsvps` — chỉ bạn xem trong Firebase Console.
- Nếu rules chặn `/rsvps`, trang tự ghi đầy đủ vào `/wishes` như bản cũ để không mất dữ liệu.

Rules khuyến nghị (Firebase Console → Realtime Database → Rules):

```json
{
  "rules": {
    "wishes": {
      ".read": true,
      "$id": {
        ".write": "!data.exists()",
        ".validate": "newData.child('name').isString() && newData.child('name').val().length <= 80 && newData.child('message').isString() && newData.child('message').val().length <= 500"
      }
    },
    "rsvps": {
      ".read": false,
      "$id": { ".write": "!data.exists()" }
    }
  }
}
```

`!data.exists()` cho phép khách thêm mới nhưng không sửa/xoá lời chúc của người khác.

> ⚠️ Các RSVP cũ (trước bản này) có số điện thoại nằm trong `/wishes` — ai biết URL database vẫn đọc được. Nên chuyển/xoá trường `phone` của các bản ghi cũ trong Console.
