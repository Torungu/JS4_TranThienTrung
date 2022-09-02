/*
SẮP XẾP 3 SỐ NGUYÊN
Input:
3 số nguyên bất kỳ
Process:
Tìm số lớn nhất và số nhỏ nhất trong 3 số
Điều kiện thêm là số ở giữa khác SLN và SNN
Output:
Sắp xếp theo thứ tự min < mid < max
*/
function Max(a, b, c) {
    var max = a;
    if (b > max) { max = b }
    if (c > max) { max = c }
    return max;
};
function Min(a, b, c) {
    var min = a;
    if (b < min) { min = b }
    if (c < min) { min = c }
    return min;
};
function sapXep() {
    var num1 = document.getElementById('num1').value * 1;
    var num2 = document.getElementById('num2').value * 1;
    var num3 = document.getElementById('num3').value * 1;
    var max = Max(num1, num2, num3);
    var min = Min(num1, num2, num3);
    if (num1 !== max && num1 !== min) { mid = num1 }
    else if (num2 !== max && num2 !== min) { mid = num2 }
    else if (num3 !== max && num3 !== min) { mid = num3 };
    var sapxep = "Thứ tự sắp xếp tăng dần là " + min + " < " + mid + " < " + max;
    document.getElementById('sapxep').innerHTML = sapxep;
}

/*
CHƯƠNG TRÌNH CHÀO HỎI
Input:
Cho chọn người cần chào
Process:
Gán value cho từng Option
từng option có value khác
Output:
Xin chào + value
*/
function traLoi() {
    var aiVay = document.getElementById('luaChon').value;
    switch (aiVay) {
        case aiVay = "B":
            var xinChao = "Xin chào Bố";
            document.getElementById('Hello').innerHTML = xinChao;
            break;
        case aiVay = "M":
            var xinChao = "Xin chào Mẹ";
            document.getElementById('Hello').innerHTML = xinChao;
            break;
        case aiVay = "A":
            var xinChao = "Xin chào Anh trai";
            document.getElementById('Hello').innerHTML = xinChao;
            break;
        case aiVay = "E":
            var xinChao = "Xin chào Em gái";
            document.getElementById('Hello').innerHTML = xinChao;
            break;
    }
}

/*
CHO 3 SỐ, TÍNH BAO NHIÊU SỐ CHẴN-SỐ LẺ
Input:
Cho nhập 3 số yêu cầu tính số chắn và số lẻ
Process:
Xác định số chẵn-lẻ
Nếu số chẵn thì đếm +1, số lẻ thì là 0
Đếm số chắn nếu 0 thì 3 lẻ, 1 thì 1 chẵn 2 lẻ, 2 thì 2 chẵn 1 lẻ, 3 thì 3 chẵn
Output:
Kết quả chẵn-lẻ
*/
function chanLe(number) {
    var a = 0;
    if (number % 2 === 0) {
        a = 1;
    }
    else {
        a = 0;
    }
    return a;
}
function ketQua() {
    var soThu1 = document.getElementById('number1').value * 1;
    var soThu2 = document.getElementById('number2').value * 1;
    var soThu3 = document.getElementById('number3').value * 1;
    var b = chanLe(soThu1) + chanLe(soThu2) + chanLe(soThu3);
    var ketQua = "";
    if (b == 0) {
        ketQua = "Có 3 số lẻ";
    }
    else if (b == 1) {
        ketQua = "Có 2 số lẻ, 1 số chẵn";
    }
    else if (b == 2) {
        ketQua = "Có 1 số lẻ, 2 số chẵn";
    }
    if (b == 3) {
        ketQua = "Có 3 số chẵn";
    };
    document.getElementById('result').innerHTML = ketQua;
}

/*
CHO 3 CẠNH TAM GIÁC XÁC ĐỊNG TAM GIÁC ĐÓ TAM GIÁC GÌ
Input:
Nhập 3 cạnh bất kỳ
Process:
xét 3 cạnh bằng nhau thì tam giác đều
xét định lý Pytago cho từng trường hợp cạnh thì là tam giác vuông
xét cho 2 cạnh bằng nhau trong từng trường hợp thì tam giác cân
trường hợp cuối là tam giác thường
Output:
Thông báo ra kết quả
*/
function xacDinh() {
    var a = document.getElementById('canhThu1').value * 1;
    var b = document.getElementById('canhThu2').value * 1;
    var c = document.getElementById('canhThu3').value * 1;
    if (a == b && b == c) {
        document.getElementById('thongBao').innerHTML = "Đây là tam giác đều"
    }
    else if (a * a == (b * b + c * c) || b * b == (a * a + c * c) || c * c == (a * a + b * b)) {
        document.getElementById('thongBao').innerHTML = "Đây là tam giác vuông"
    }
    else if (a == b || b == c || a == c) {
        document.getElementById('thongBao').innerHTML = "Đây là tam giác cân"
    }
    else {
        document.getElementById('thongBao').innerHTML = "Đây là tam giác thường";
    }
}