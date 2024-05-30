let numArray = [];
function getElementById(n) {
  return document.getElementById(n);
}
function getNumber() {
  let n = Number(getElementById("soN").value);
  if (!isNaN(n)) {
    numArray.push(n);
    getElementById("txtArray").innerHTML = numArray.join(", ");
  } else {
    alert("Vui lòng nhập số.");
  }
  document.getElementById("soN").value = "";
}
// Bài 1
function sumPositive() {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      sum += numArray[i];
    }
  }
  getElementById("txtSum").innerHTML = "Tổng số dương: " + sum;
}
//Bài 2
function countPositive() {
  let count = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      count++;
    }
  }
  getElementById("txtCount").innerHTML = `Có ${count} số dương trong mảng`;
}

//Bài 3
function findMin() {
  let min = numArray[0];
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] < min) {
      min = numArray[i];
    }
  }
  getElementById("txtMin").innerHTML = `Số nhỏ nhất trong mảng là ${min}`;
}

// Bài 4
function findMinPositive() {
  let minPositive = null;
  for (let i = 0; i < numArray.length; i++) {
    if (
      numArray[i] > 0 &&
      (minPositive === null || numArray[i] < minPositive)
    ) {
      minPositive = numArray[i];
    }
  }

  getElementById("txtMinPositive").innerHTML =
    minPositive !== null
      ? `Số dương nhỏ nhất trong mảng là ${minPositive}`
      : "Không có số dương nào trong mảng";
}
//Bài 5
function findLastEvenNumber() {
  let lastEven = -1;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) {
      lastEven = numArray[i];
    }
  }
  getElementById(
    "txtLastEvenNumber"
  ).innerHTML = `Số chẵn cuối cùng trong mảng là: ${lastEven}`;
}
//Bài 6
function swapArrayElements() {
  let viTri1 = parseInt(document.getElementById("viTri1").value);
  let viTri2 = parseInt(document.getElementById("viTri2").value);

  if (
    viTri1 >= 0 &&
    viTri1 < numArray.length &&
    viTri2 >= 0 &&
    viTri2 < numArray.length
  ) {
    // Đổi chỗ giá trị
    let temp = numArray[viTri1];
    numArray[viTri1] = numArray[viTri2];
    numArray[viTri2] = temp;

    document.getElementById(
      "txtSwap"
    ).innerHTML = `Mảng sau khi đổi chỗ: ${numArray.join(", ")}`;
  } else {
    document.getElementById("txtSwap").innerHTML =
      "Vị trí nhập vào không hợp lệ!";
  }
}

//Bài 7
function sortArray() {
  numArray.sort((a, b) => a - b);
  document.getElementById(
    "txtSort"
  ).innerHTML = `Mảng sau khi sắp xếp: ${numArray.join(", ")}`;
}

// Bài 8
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}

function findFirstPrime() {
  for (let i = 0; i < numArray.length; i++) {
    if (isPrime(numArray[i])) {
      document.getElementById(
        "txtPrime"
      ).innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${numArray[i]}`;
      return;
    }
  }
  document.getElementById("txtPrime").innerHTML =
    "Không có số nguyên tố nào trong mảng. Kết quả là -1.";
}

// Bài 9

let realNumberArray = [];
function addRealNumber() {
  let n = parseFloat(getElementById("soThuc").value);
  if (!isNaN(n)) {
    realNumberArray.push(n);
    getElementById("txtSoThuc").innerHTML = realNumberArray.join(", ");
  } else {
    alert("Vui lòng nhập số.");
  }
  document.getElementById("soThuc").value = "";
}

function countIntegers() {
  let count = 0;
  for (let i = 0; i < realNumberArray.length; i++) {
    if (Number.isInteger(realNumberArray[i])) {
      count++;
    }
  }
  document.getElementById(
    "txtCountIntegers"
  ).innerHTML = `Có ${count} số nguyên trong mảng.`;
}
//Bài 10
function comparePositiveNegative() {
  let positiveCount = 0;
  let negativeCount = 0;

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      positiveCount++;
    } else if (numArray[i] < 0) {
      negativeCount++;
    }
  }

  let comparisonResult = "";
  if (positiveCount > negativeCount) {
    comparisonResult = "Số lượng số dương nhiều hơn số lượng số âm.";
  } else if (positiveCount < negativeCount) {
    comparisonResult = "Số lượng số âm nhiều hơn số lượng số dương.";
  } else {
    comparisonResult = "Số lượng số dương và số lượng số âm bằng nhau.";
  }

  document.getElementById("txtComparison").innerHTML = comparisonResult;
}
