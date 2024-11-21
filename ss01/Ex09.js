// Xây dựng hàm có tham số là các mảng có độ dài bằng nhau,
// số lượng tham số là không xác định. 
//Hàm có tác dụng đưa các phần tử có cùng chỉ số từ vào chung mảng. 
//Kết quả trả về là mảng chứa các mảng phần tử có cùng chỉ số.
// Input
// Output
// [1, 2, 3], ['a', 'b', 'c'], [true, false, true],...
// [[1, 'a', true], [2, 'b', false], [3, 'c', true],...]

function gopMang(...arrays){
    // kiểm tra độ dài của các mảng
    const doDai =arrays[0].length;
    for(let arr of arrays){
        if (arr.length != doDai) {
            console.log(" độ dài các mảng ko bằng nhau");
            return;
        }
    }

    // tảo mảng rỗng để gộp
    const result =[];
    for (let i = 0; i < doDai; i++) {
        const mangNho =arrays.map(arr=>arr[i]); //sẽ tạo ra một mảng chứa tất cả các phần tử đầu tiên từ mỗi mảng
        result.push(mangNho);
    }
    return result;
}
const result1 = gopMang([1, 2, 3], ['a', 'b', 'c'], [true, false, true]);
console.log(result1); 