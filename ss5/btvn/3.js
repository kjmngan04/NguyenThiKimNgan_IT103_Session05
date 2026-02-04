let booksId = [];
let booksName = [];
let inventoryQuantity = [];

let n = parseInt(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"));

if (!isNaN(n) && n > 0) {
    for (let i = 0; i < n; i++) {
        let id, name, qty;

        do {
            id = prompt("Nhập mã sách (không được để trống):");
        } while (!id);

        do {
            name = prompt("Nhập tên sách (không được để trống):");
        } while (!name);

        do {
            qty = parseInt(prompt("Nhập số lượng tồn kho (>= 0):"));
        } while (isNaN(qty) || qty < 0);

        booksId.push(id);
        booksName.push(name);
        inventoryQuantity.push(qty);
    }

    console.log("Danh sách sách cần xem xét bổ sung (" + booksId.length + " loại):");
    
    let lowStockCount = 0;
    let outOfStockList = "";

    for (let i = 0; i < booksId.length; i++) {
        console.log((i + 1) + ". Mã: " + booksId[i] + " - Tên: " + booksName[i] + " - Còn: " + inventoryQuantity[i] + " bản");
        
        if (inventoryQuantity[i] <= 5) {
            lowStockCount++;
        }
        
        if (inventoryQuantity[i] === 0) {
            outOfStockList += (outOfStockList === "" ? "" : ", ") + booksId[i];
        }
    }

    console.log("\nSố sách có tồn kho <= 5 bản: " + lowStockCount + " loại");
    console.log("Các mã sách đã hết hàng (0 bản): " + (outOfStockList || "Không có"));
}