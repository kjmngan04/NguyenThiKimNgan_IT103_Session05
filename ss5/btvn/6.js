let maTheDocGia = [];
let tenDocGia = [];
let maSachMuon = [];
let soNgayQuaHan = [];

let n = parseInt(prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?"));

if (!isNaN(n) && n > 0) {
    for (let i = 0; i < n; i++) {
        let maThe, ten, danhSachSach, ngayQuaHan;

        do {
            maThe = prompt("Nhập mã thẻ bạn đọc thứ " + (i + 1) + " (duy nhất):");
        } while (!maThe || maTheDocGia.indexOf(maThe) !== -1);

        do { ten = prompt("Nhập tên bạn đọc thứ " + (i + 1) + ":"); } while (!ten);
        
        do {
            danhSachSach = prompt("Nhập các mã sách đang mượn (cách nhau bởi dấu phẩy):");
        } while (!danhSachSach);

        do {
            ngayQuaHan = parseInt(prompt("Nhập số ngày quá hạn (>= 0):"));
        } while (isNaN(ngayQuaHan) || ngayQuaHan < 0);

        maTheDocGia.push(maThe);
        tenDocGia.push(ten);
        maSachMuon.push(danhSachSach);
        soNgayQuaHan.push(ngayQuaHan);
    }

    let tongQuaHanTren10 = 0;
    let nguoiQuaHanNhat = 0;
    let demQuaHanTren7 = 0;

    console.log("DANH SÁCH BẠN ĐỌC QUÁ HẠN:");
    for (let i = 0; i < maTheDocGia.length; i++) {
        console.log((i + 1) + ". Mã thẻ: " + maTheDocGia[i] + " | Tên: " + tenDocGia[i] + " | Quá hạn: " + soNgayQuaHan[i] + " ngày");
        
        if (soNgayQuaHan[i] >= 10) tongQuaHanTren10++;
        if (soNgayQuaHan[i] >= 7) demQuaHanTren7++;
        if (soNgayQuaHan[i] > soNgayQuaHan[nguoiQuaHanNhat]) {
            nguoiQuaHanNhat = i;
        }
    }

    console.log("Tổng số bạn đọc quá hạn >= 10 ngày: " + tongQuaHanTren10);

    console.log("Các mã thẻ mượn cả sách mã 'JS' và 'PYT':");
    for (let i = 0; i < maSachMuon.length; i++) {
        let s = maSachMuon[i].toUpperCase();
        if (s.indexOf("JS") !== -1 && s.indexOf("PYT") !== -1) {
            console.log(maTheDocGia[i]);
        }
    }

    console.log("Bạn đọc có số ngày quá hạn cao nhất: " + tenDocGia[nguoiQuaHanNhat] + " (" + soNgayQuaHan[nguoiQuaHanNhat] + " ngày)");

    if (demQuaHanTren7 === 0) {
        console.log("Tình hình trả sách hôm nay khá tốt!");
    } else if (demQuaHanTren7 >= 1 && demQuaHanTren7 <= 4) {
        console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
    } else {
        console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
    }
}