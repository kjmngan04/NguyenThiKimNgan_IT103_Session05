let danhSachSach = ["Nhà Giả Kim", "Đắc Nhân Tâm", "Tuần Làm Việc 4 Giờ"];
let luaChon;

do {
    luaChon = prompt(
        "--- THƯ VIỆN KHOA HỌC ---\n" +
        "1. Xem danh sách\n" +
        "2. Nhập sách mới\n" +
        "3. Mượn sách (Xóa)\n" +
        "4. Sửa tên sách\n" +
        "5. Sắp xếp kệ\n" +
        "0. Thoát\n\n" +
        "Bạn chọn:"
    );

    switch (luaChon) {
        case "1":
            let noiDung = "=> Danh sách hiện tại (" + danhSachSach.length + " cuốn):\n";
            for (let i = 0; i < danhSachSach.length; i++) {
                noiDung += (i + 1) + ". " + danhSachSach[i] + "\n";
            }
            alert(noiDung);
            break;

        case "2":
            let sachMoi = prompt("Nhập tên cuốn sách mới:");
            if (sachMoi) {
                danhSachSach.push(sachMoi);
                alert("Đã thêm thành công!");
            }
            break;

        case "3":
            let sachMuon = prompt("Nhập tên sách muốn mượn:");
            let viTriMuon = danhSachSach.indexOf(sachMuon);
            if (viTriMuon !== -1) {
                danhSachSach.splice(viTriMuon, 1);
                alert("Đã cho mượn cuốn '" + sachMuon + "'");
            } else {
                alert("Lỗi: Không tìm thấy sách " + sachMuon + "!");
            }
            break;

        case "4":
            let tenCu = prompt("Nhập tên sách cũ cần sửa:");
            let viTriSua = danhSachSach.indexOf(tenCu);
            if (viTriSua !== -1) {
                let tenMoi = prompt("Nhập tên mới:");
                danhSachSach[viTriSua] = tenMoi;
                alert("Đã cập nhật tên sách!");
            } else {
                alert("Không tìm thấy sách cần sửa!");
            }
            break;

        case "5":
            danhSachSach.sort();
            alert("Đã sắp xếp lại danh sách theo bảng chữ cái!");
            break;

        case "0":
            alert("Tạm biệt!");
            break;

        default:
            if (luaChon !== null) {
                alert("Lựa chọn không hợp lệ, vui lòng nhập từ 0 đến 5!");
            }
            break;
    }

} while (luaChon !== "0" && luaChon !== null);