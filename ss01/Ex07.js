//Xây dựng hàm có tham số là các đối tượng, 
//số lượng tham số là không xác định. Hàm có tác dụng hợp nhất các đối tượng được 
//truyền vào thành một đối tượng duy nhất. Nếu tên thuộc tính bị trùng nhau thì 
//lấy thuộc tính của đối tượng cuối cùng. Kết quả trả về của hàm là đối tượng sau khi hợp nhất.

const objects =(...objects)=>{
    let result ={};
    for (let element of objects) {
        result={...result,...element}
    }
    return result;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5, a: 6 };

console.log(objects(obj1,obj2,obj3));



const mergeObjects = (...objects) => {
    // Dùng reduce để duyệt qua các đối tượng và hợp nhất chúng 
    // acc là đối tượng tích lũy, curr là đối tượng hiện tại trong mỗi bước của reduce
     // Mỗi lần gộp hai đối tượng lại với nhau  acc= result ;curr=element  ;{} là giá trị khởi tạo bạn đầu
    return objects.reduce((acc, curr) => {return { ...acc, ...curr };} , {});
}