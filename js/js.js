var Trung_Ngay_Bat_Dau = new Date("Nov 29,2021 00:00:00").getTime();
// Date("tháng ngày,năm giờ:phút:giây")
setInterval(function () {
  var Trung_ngayhientai = new Date().getTime();
  var D       = Trung_ngayhientai - Trung_Ngay_Bat_Dau;
  var days    = Math.floor(D / (1000 * 60 * 60 * 24));
  var hours   = Math.floor(D / (1000 * 60 * 60));
  var minutes = Math.floor(D / (1000 * 60));
  var seconds = Math.floor(D / 1000);

 
  hours   %= 24;
  minutes %= 60;
  seconds %= 60;

  
  
  
  
  if(days < 10){
    document.getElementById("ngay").innerText = "0" + days;
  }
  else
  {
    document.getElementById("ngay").innerText = days;
  }
  //---------------------------------------------------------
  if(hours < 10){
    document.getElementById("gio").innerText = "0" + hours;
  }
  else
  {
    document.getElementById("gio").innerText = hours;
  }
  //---------------------------------------------------------
  if(minutes < 10){
    document.getElementById("phut").innerText = "0" + minutes;
  }
  else
  {
    document.getElementById("phut").innerText = minutes;  
  }
  //---------------------------------------------------------
  if(seconds < 10){
    document.getElementById("giay").innerText = "0" + seconds;
  }
  else
  {
    document.getElementById("giay").innerText = seconds;
  }
  //---------------------------------------------------------
}, 1000);
