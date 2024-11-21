//Khởi tạo hai mảng đã được sắp xếp theo thứ tự tăng dần, 
//hãy hợp nhất hai mảng thành một mảng sao cho trong quá trình
// này thứ tự sắp xếp tăng dần vẫn được giữ nguyên

//vòng lặp khi hết mảng cùng hết 1 lúc
// nếu mảng nào còn dư phần thử thì push phần thừa vào

function sapXep(arr1,arr2){
    let i=0,j=0;
    let result=[];
    while(i < arr1.length  && j < arr2.length){
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }


    while(i<arr1.length){
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}

// Ví dụ sử dụng hàm
let arr1 = [1, 2, 3, 5, 9];
let arr2 = [4, 6, 7, 8];
let mergedArray = sapXep(arr1, arr2);
console.log(mergedArray);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]