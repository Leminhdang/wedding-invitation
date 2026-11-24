# 💍 Landing Page Thiệp Cưới Song Ngữ (Vietnamese - English Wedding Invitation)

Dự án landing page thiệp cưới trực tuyến được thiết kế bám sát theo mẫu Figma **Wedding Invitation (Community)**, hỗ trợ song ngữ Việt - Anh, responsive mượt mà trên tất cả thiết bị (Mobile, Tablet, Laptop, Desktop).

---

## 🌟 Tính Năng Nổi Bật

1. **Màn hình Mở Thiệp Cưới (Gate / Cover Screen)**
   - Khung vòm Semicircle Arch + Vòng hoa Botanical Wreath chuẩn phong cách Figma.
   - Hiệu ứng nút bấm phát sáng **"Mở Thiệp Cưới / Open Invitation"** với biểu tượng phong thư.
   - Cá nhân hóa tên khách mời tự động qua tham số URL (`?to=Tên+Khách+Mời`).
   - Tự động phát nhạc nền lãng mạn và hiệu ứng cánh hoa rơi nhẹ nhàng khi mở thiệp.

2. **Chuyển Đổi Song Ngữ Nhanh Chóng (Bilingual VI / EN)**
   - Nút chuyển đổi ngôn ngữ cố định (🇻🇳 Tiếng Việt / 🇬🇧 English) tức thì, không cần tải lại trang.
   - Lưu trạng thái ngôn ngữ qua `localStorage`.

3. **Âm Nhạc Lãng Mạn (Romantic Music Player)**
   - Tích hợp bộ tổng hợp âm thanh **Web Audio API** giai điệu Canon in D êm dịu, không lo lỗi bản quyền hay link MP3 bên ngoài bị chặn.
   - Đĩa than quay tròn khi phát nhạc, có thể bật/tắt bất kỳ lúc nào.

4. **Đồng Hồ Đếm Ngược Trực Tiếp (Live Countdown Timer)**
   - Hiển thị Ngày, Giờ, Phút, Giây đếm ngược chính xác đến ngày cưới.
   - Nút tích hợp **Thêm vào Google Calendar** và **Tải file iCal (.ics)** cho iPhone/Mac.

5. **Thông Tin Chú Rể & Cô Dâu (Meet The Happy Couple)**
   - 2 card thông tin Chú Rể & Cô Dâu, phụ mẫu hai bên, lời nhắn nhủ yêu thương và liên kết mạng xã hội.
   - Biểu tượng `&` kết nối nghệ thuật ở giữa.

6. **Chương Trình Lễ Cưới (Ceremony & Reception)**
   - Card hình ảnh cho Lễ Vu Quy / Thành Hôn và Tiệc Cưới.
   - Tích hợp nút xem chỉ đường trực tiếp qua Google Maps.

7. **Hành Trình Tình Yêu (Love Story Timeline)**
   - Cột mốc thời gian kỷ niệm (Lần đầu gặp gỡ, Buổi hẹn hò đầu tiên, Lời cầu hôn, Ngày chung đôi).

8. **Album Ảnh Cưới (Photo Gallery with Lightbox)**
   - Bộ lọc ảnh: Tất Cả, Studio, Ngoại Cảnh, Khoảnh Khắc.
   - Trình xem phóng to toàn màn hình (Lightbox) với phím điều hướng mũi tên và phím ESC.

9. **Xác Nhận Tham Dự (RSVP) & Sổ Lưu Bút Trực Tiếp (Firebase Realtime Database)**
   - Form gửi phản hồi tham dự (đi bao nhiêu người, khách nhà trai/nhà gái, lời chúc).
   - Tích hợp **Firebase Realtime Database** (`https://thiepcuoi-f7b2e-default-rtdb.firebaseio.com/`):
     - Lưu trữ tự động toàn bộ phản hồi và lời chúc của khách mời theo thời gian thực.
     - Đồng bộ tức thì lên bảng lời chúc (Wishes Wall Feed) qua Server-Sent Events (SSE).
     - Bộ đệm `localStorage` hỗ trợ hoạt động offline và hiển thị mượt mà tức thì.

10. **Hộp Mừng Cưới & QR Pay (Gift Box)**
    - Mã VietQR chuẩn ngân hàng cho cả Chú Rể và Cô Dâu.
    - Nút **"Sao chép số tài khoản"** 1 chạm với thông báo Toast tiện lợi.

11. **Thanh Điều Hướng Di Động (Bottom Mobile Nav)**
    - Thanh menu tiện dụng dưới đáy màn hình trên điện thoại thông minh giúp khách mời dễ dàng chuyển đổi các mục bằng một tay.

---

## 📁 Cấu Trúc Thư Mục

```
wedding-invitation/
├── index.html          # File HTML giao diện chính (Bootstrap 5.3 + FontAwesome/Icons)
├── css/
│   └── style.css       # File CSS tùy chỉnh phong cách thanh lịch, màu hồng pastel/rose
├── js/
│   └── script.js       # File xử lý logic: mở thiệp, đếm ngược, song ngữ, RSVP, âm nhạc
├── assets/             # Thư mục hình ảnh & tài nguyên
└── README.md           # Hướng dẫn sử dụng
```

---

## 🚀 Cách Chạy & Xem Thử

Bạn có thể mở trực tiếp file `index.html` bằng trình duyệt web bất kỳ (Chrome, Safari, Edge, Firefox), hoặc chạy qua server nội bộ:

```bash
# Sử dụng Python HTTP Server
cd /Users/dang/.gemini/antigravity/scratch/wedding-invitation
python3 -m http.server 8080
```

Sau đó mở trình duyệt và truy cập:
- `http://localhost:8080` (Mặc định)
- `http://localhost:8080/?to=Bạn+Thân+Mến` (Có tên khách mời trên phong bì thiệp cưới)

---

## 🎨 Hướng Dẫn Tùy Chỉnh

1. **Đổi tên Cô Dâu & Chú Rể**:
   - Mở `js/script.js` và chỉnh sửa mục `couple.groomName`, `couple.brideName` trong từ điển song ngữ.
2. **Đổi ngày cưới**:
   - Trong `js/script.js`, tìm dòng:
     ```js
     const weddingDate = new Date("2026-12-28T09:00:00+07:00").getTime();
     ```
     và thay đổi theo ngày mong muốn.
3. **Đổi số tài khoản & mã QR**:
   - Trong `index.html`, tìm phần `<!-- Groom Account -->` và `<!-- Bride Account -->` để thay đổi số tài khoản, ngân hàng và link ảnh mã VietQR.

