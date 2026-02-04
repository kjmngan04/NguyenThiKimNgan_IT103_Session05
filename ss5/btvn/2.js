let n = parseInt(prompt("Hôm nay có bao nhiêu lượt trả sách?"));

if (!isNaN(n) && n > 0) {
    let tongLuotTra = 0;
    let luotTraMuon = 0;

    for (let i = 1; i <= n; i++) {
        let tenNguoi = prompt("Tên người trả (Lượt " + i + "):");
        let tenSach = prompt("Tên sách (Lượt " + i + "):");
        let soNgay;

        while (true) {
            soNgay = parseInt(prompt("Số ngày đã mượn thực tế (phải >= 1):"));
            if (!isNaN(soNgay) && soNgay >= 1) {
                break;
            }
            alert("Dữ liệu không hợp lệ. Vui lòng nhập lại số nguyên >= 1.");
        }

        if (soNgay <= 14) {
            alert("Trả đúng hạn");
        } else if (soNgay >= 15 && soNgay <= 21) {
            alert("Trả muộn nhẹ + Phạt nhắc nhở");
            luotTraMuon++;
        } else {
            alert("Quá hạn nghiêm trọng + Cần ghi biên bản phạt");
            luotTraMuon++;
        }

        tongLuotTra++;
    }

    console.log("Tổng số lượt trả sách: " + tongLuotTra);
    console.log("Số lượt trả muộn (>= 15 ngày): " + luotTraMuon);
}