//Xây dựng hàm có tham số là các mảng, 
//số lượng tham số là không xác định.

// Hàm có tác dụng tính tổng các phần tử trong các mảng
// được truyền vào và lưu tổng đó vào một mảng mới.
// Kết quả trả về là mảng chứa tổng của các mảng là đối số truyền vào.

function sum(...arrays){
    const result=[];
    for(let arr of arrays){
        let sum=0;
        for (let element of arr) {
            sum = sum + element;
        }
        result.push(sum);
    }
    return result;
}
let vidu1= sum([1,2],[2,2],[3,3])
console.log(vidu1);


// cách 2:
function tinhTong(...arrays){
    const result=arrays.map(arr=>arr.reduce((sumHienTai, giaTriSoHienTai)=> sumHienTai + giaTriSoHienTai,0));
    return result;
}
let vidu2= tinhTong([2,2],[4,4],[3,3])
console.log(vidu2);