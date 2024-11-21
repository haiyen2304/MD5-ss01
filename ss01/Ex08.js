function array(arr1,arr2,vitri){
    // kiểm tra Nếu vị trí không hợp lệ 
    //thì thông báo lên màn hình.
    if(vitri < 0 || vitri > arr1.length){
        console.log("vị trí không hợp lệ");
        return;        
    }
    arr1.splice(vitri,0,...arr2);// 0 là số phần tử cần xóa
    console.log(arr1);
}

array([1, 2, 3, 7, 8], [4, 5, 6], 3);