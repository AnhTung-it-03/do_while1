function play() {
     let n = +prompt("Nhập số lớn nhất bạn muốn: ");
     let b = Math.floor(Math.random() * n); // số bất kỳ
     let i = 1;
     let a = +prompt("Lượt 1: Nhập số bạn đoán");

     while (i <= 3) {
          if (a === b) {
               document.writeln("Wow! Bạn đoán đúng rồi, thông minh quá!<br>");
               return;
          } else {
               if (a < b) {
                    a = +prompt("Sai rồi! Nhập số lớn hơn:");
               } else {
                    a = +prompt("Sai rồi! Nhập số bé hơn:");
               }
          }
          i++;
          if (i <= 3 && a !== b) {
               document.writeln("Lượt đoán thứ " + i + "<br>");
          }
     }
     document.writeln("ất tiếc, bạn đã hết lượt. Số đúng là: " + b);
}
