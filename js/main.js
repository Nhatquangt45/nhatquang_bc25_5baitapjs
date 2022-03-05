/** bài 1
 *--đầu vào:lương 1 ngày :100.000
 * tính tiền lương cho nhân viên?
 * 
 * 
 *--xử lý:công thức tính lương:lương 1 ngày*số ngày làm.
 * 
 * 
 * --đầu ra:show lương ra.
 */
const numberFormat = new Intl.NumberFormat('vi-VN',{
  style: 'currency',
  currency:'VND',
});
document.getElementById("btnCong").onclick = function (){
  var luong = document.getElementById("tienLuong").value;
  var lam =document.getElementById("ngayLam").value;
    var tong = luong * lam ;
    var kqTong = "Ket Qua La:" + numberFormat.format(tong);
    console.log(numberFormat.format(tong));

document.getElementById("thongBao").innerHTML = kqTong;
document.getElementById("thongBao").className = "thong-bao";
}


/** bài 2
 *--đầu vào:viết chương trình cho khách nhập vào 5 số thực
 * 
 * 
 *--xử lý:tính trung bình:tổng 5 số chia cho 5
 *
 * 
 * --đầu ra:show kết quả
 */


document.getElementById("btnTrungBinh").onclick = function () {
  var number1 = document.getElementById("soThu1").value;
  var number2 = document.getElementById("soThu2").value;
  var number3 = document.getElementById("soThu3").value;
  var number4 = document.getElementById("soThu4").value;
  var number5 = document.getElementById("soThu5").value;

  var tongSoThuc = (number1 + number2 + number3 + number4 + number5 )/5;
  var ketQuaSoThuc = "Ket Qua Trung Binh La :" + tongSoThuc;
  console.log(ketQuaSoThuc);
   
 document.getElementById("tongTrungBinh").innerHTML = ketQuaSoThuc;
 document.getElementById("tongTrungBinh").className = "thong-bao";
}

/**bài 4
 * --đầu vào:chiều dài:?
 *           +chiều rộng:?
 * 
 * 
 * --xử lý:tính chu vi:(dài + rộng)*2
 *          +tính diện tích:dài * rộng   
 * 
 * --đầu ra:show chu vi ,diện tích.
 *  
 */


document.getElementById("btnChuVi").onclick = function () {
  var chieuDai = document.getElementById("txtDai").value;
  var chieuRong = document.getElementById("txtRong").value;
  var cvHcn = (chieuDai + chieuRong)*2;
  var kqChuVi = "Ket Qua Cua Chu Vi la :" + cvHcn;
  console.log(kqChuVi);
  document.getElementById("chuVi").innerHTML = kqChuVi;
  document.getElementById("chuVi").className = "chu__vi";
}
document.getElementById("btnHcn").onclick = function () {
  var chieuDai2 = document.getElementById("txtDai").value;
  var chieuRong2 =document.getElementById("txtRong").value;
  var dtHcn = chieuDai2 * chieuRong2;
  var kqHcn = "Ket Qua Cua Dien Tich la :" + dtHcn;
  console.log(kqHcn);
  document.getElementById("dienTich").innerHTML = kqHcn;
  document  .getElementById("dienTich").className = "dien__tich";
}

/**bài 5
 * 
 * --đầu vào:tạo biến n
 *          +tách đơn vị 
 *          +tách đơn chục
 * 
 * --xử lý:cộng hàng chục và hàng đơn vị
 * 
 * 
 * --đầu ra : show kết quả  
 */

 document.getElementById("btnKySo").onclick = function () {
  var n = document.getElementById("SoNhapVao").value;
  var donVi = n % 10;
  var chuc = Math.floor((n%100)/10);
   var tong2KySo = donVi + chuc;
   var kqTongKySo = "Ket Qua Cua 2 Ky So la :" + tong2KySo;
   console.log(kqTongKySo);

   document.getElementById("tongKySo").innerHTML =  kqTongKySo;
   document.getElementById("tongKySo").className = "ky__so";
}

/**bài 3
 *--đầu vào : 1usd=23.500VND
 *
 * 
 * --xử lý:23.500*1usd
 * 
 * 
 *--đầu ra:show kết quả
 */

document.getElementById("btnUsd").onclick = function (){
  var a = 23500;
  var b = document.getElementById("txtUsd").value;
  var soTien = a*b ;
  var tongSoTien = "So Tien La :" + numberFormat.format(soTien);
  console.log(numberFormat.format(soTien));
document.getElementById("tbSoTien").innerHTML = tongSoTien;
document.getElementById("tbSoTien").className = "so__tien";

}