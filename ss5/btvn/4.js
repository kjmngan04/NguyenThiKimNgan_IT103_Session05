let booksId = [];
let booksName = [];
let bookStatus = [];

let n = parseInt(prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?"));

if (!isNaN(n) && n > 0) {
    for (let i = 0; i < n; i++) {
        let id, name, statusChoice, statusText;

        do { id = prompt("Nhập mã sách:"); } while (!id);
        do { name = prompt("Nhập tên sách:"); } while (!name);
        
        do {
            statusChoice = prompt("Nhập tình trạng (1-Hỏng nhẹ, 2-Hỏng nặng, 3-Cần sửa gấp):");
        } while (!["1", "2", "3"].includes(statusChoice));

        if (statusChoice === "1") statusText = "Hỏng nhẹ";
        else if (statusChoice === "2") statusText = "Hỏng nặng";
        else statusText = "Cần sửa gấp";

        booksId.push(id);
        booksName.push(name);
        bookStatus.push(statusText);
    }

    let menu;
    do {
        let currentList = "Danh sách hiện tại:\n";
        for (let i = 0; i < booksId.length; i++) {
            currentList += (i + 1) + ". " + booksId[i] + " - " + booksName[i] + " - " + bookStatus[i] + "\n";
        }
        alert(currentList);

        menu = prompt("Chế độ chỉnh sửa:\n1. Sửa tình trạng\n2. Loại bỏ (xóa) sách\n0. Kết thúc và in báo cáo");

        if (menu === "1") {
            let editId = prompt("Nhập mã sách cần sửa:");
            let index = booksId.indexOf(editId);
            if (index !== -1) {
                let newChoice = prompt("Chọn tình trạng mới (1: Hỏng nhẹ, 2: Hỏng nặng, 3: Cần sửa gấp, 4: Đã sửa xong, 5: Loại bỏ):");
                let statuses = { "1": "Hỏng nhẹ", "2": "Hỏng nặng", "3": "Cần sửa gấp", "4": "Đã sửa xong", "5": "Loại bỏ" };
                if (statuses[newChoice]) bookStatus[index] = statuses[newChoice];
            } else {
                alert("Không tìm thấy mã sách!");
            }
        } else if (menu === "2") {
            let deleteId = prompt("Nhập mã sách cần xóa:");
            let index = -1;
            for (let i = 0; i < booksId.length; i++) {
                if (booksId[i] === deleteId) {
                    index = i;
                    break;
                }
            }
            if (index !== -1) {
                booksId.splice(index, 1);
                booksName.splice(index, 1);
                bookStatus.splice(index, 1);
                alert("Đã xóa sách thành công!");
            } else {
                alert("Không tìm thấy mã sách!");
            }
        }
    } while (menu !== "0");

    let countFixed = 0;
    let countRemoved = 0;
    console.log("BÁO CÁO CUỐI CÙNG:");
    console.log("Tổng số sách còn lại trong danh sách: " + booksId.length);
    
    for (let i = 0; i < bookStatus.length; i++) {
        if (bookStatus[i] === "Đã sửa xong") countFixed++;
        if (bookStatus[i] === "Loại bỏ") countRemoved++;
    }
    
    console.log("Số sách 'Đã sửa xong': " + countFixed);
    console.log("Số sách 'Loại bỏ': " + countRemoved);
    if (booksId.length > 0) {
        console.log("Danh sách chi tiết còn lại:");
        for (let i = 0; i < booksId.length; i++) {
            console.log("- " + booksId[i] + ": " + bookStatus[i]);
        }
    }
}