// Sử dụng toán tử rest để xây dựng hàm có số lượng tham số không xác định. 
//Khi gọi hàm có thể truyền vào số lượng đối số bất kỳ và 
//hàm có tác dụng in ra tất cả các đối số được truyền vào.

const ham=(...a)=>{
    console.log(`đối số: ` ,a);
}
ham(1,2,3,4,5);



