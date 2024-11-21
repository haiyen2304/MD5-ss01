function groupString(strings){
    const map = new Map();
    for(let str of strings){
        const stringSorted = str.split('').sort().join('');
        if (!map.has(stringSorted)) {
            map.set(stringSorted,[]);
        }
        map.get(stringSorted).push(str);
    }
    return Array.from(map.values());
}





function groupAnagrams(strs) {
    // Sử dụng Map để nhóm các chuỗi có các ký tự giống nhau
    const map = new Map();  

    // Lặp qua từng chuỗi trong mảng
    for (let str of strs) {
        // Sắp xếp các ký tự trong chuỗi để có thể nhóm các chuỗi giống nhau lại với nhau
        const sortedStr = str.split('')   // Chuyển chuỗi thành mảng các ký tự
                                  .sort()     // Sắp xếp các ký tự theo thứ tự tăng dần
                                  .join('');  // Ghép lại các ký tự thành chuỗi đã sắp xếp

        // Kiểm tra xem Map đã có nhóm này chưa (dựa trên chuỗi đã sắp xếp)
        if (!map.has(sortedStr)) {
            // Nếu chưa có nhóm, tạo nhóm mới cho chuỗi đã sắp xếp
            map.set(sortedStr, []);
        }
        
        // Thêm chuỗi vào nhóm tương ứng với khóa là chuỗi đã sắp xếp
        map.get(sortedStr).push(str);
    }

    // Lấy tất cả các nhóm chuỗi và trả về dưới dạng mảng
    return Array.from(map.values());
}

// Ví dụ sử dụng hàm
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);
console.log(result);
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]


const input2 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result2 = groupString(input);
console.log(result);