let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];

let n = parseInt(prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?"));

if (!isNaN(n) && n > 0) {
    for (let i = 0; i < n; i++) {
        let id, name, categories, qty;

        do {
            id = prompt("Nhập mã sách thứ " + (i + 1) + " (duy nhất):");
        } while (!id || booksId.indexOf(id) !== -1);

        do { name = prompt("Nhập tên sách thứ " + (i + 1) + ":"); } while (!name);
        
        do {
            categories = prompt("Nhập các thể loại (cách nhau bởi dấu phẩy):");
        } while (!categories);

        do {
            qty = parseInt(prompt("Nhập số lượng tồn kho (>= 0):"));
        } while (isNaN(qty) || qty < 0);

        booksId.push(id);
        booksName.push(name);
        booksCategory.push(categories);
        inventoryQuantity.push(qty);
    }

    let countLapTrinh = 0;
    for (let i = 0; i < booksCategory.length; i++) {
        if (booksCategory[i].toLowerCase().indexOf("lập trình") !== -1) {
            countLapTrinh++;
        }
    }
    console.log("Tổng số sách thuộc thể loại 'Lập trình': " + countLapTrinh);

    console.log("Danh sách mã sách thuộc cả hai thể loại 'JavaScript' và 'Web':");
    for (let i = 0; i < booksCategory.length; i++) {
        let cat = booksCategory[i].toLowerCase();
        if (cat.indexOf("javascript") !== -1 && cat.indexOf("web") !== -1) {
            console.log(booksId[i]);
        }
    }

    let minQty = inventoryQuantity[0];
    let minIndex = 0;
    for (let i = 1; i < inventoryQuantity.length; i++) {
        if (inventoryQuantity[i] < minQty) {
            minQty = inventoryQuantity[i];
            minIndex = i;
        }
    }
    console.log("Loại sách có số lượng tồn kho thấp nhất:");
    console.log("Mã sách: " + booksId[minIndex] + ", Tên sách: " + booksName[minIndex] + ", Tồn kho: " + inventoryQuantity[minIndex]);
}