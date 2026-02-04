let n = parseInt(prompt("Hôm nay có bao nhiêu lượt mượn sách?"));

if (!isNaN(n) && n > 0) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        let tenNguoi = prompt("Tên người mượn:");
        let tenSach = prompt("Tên sách:");
        let soNgay = parseInt(prompt("Số ngày mượn (1-30):"));

        if (soNgay > 14) {
            alert("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
        } else {
            alert("Mượn thành công");
        }
        
        count++;
    }

    console.log("Tổng số lượt mượn: " + count);
}