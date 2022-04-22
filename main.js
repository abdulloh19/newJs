// const a = prompt("birinchi sonni kiriting");
// const b = prompt("ikkinchi sonni kiriting");


// const yigindi = Number(a) + Number(b);
// const ayirma = a - b;
// const kopaytma = a * b;
// const bolinma = a / b;

// alert(`yig'ndi: ${yigindi};
// ayirma: ${ayirma}; 
// kopaytma: ${kopaytma}; 
// bolinma: ${bolinma}`)   
  
const a = prompt("Birinchi sonni kiriting");
const b = prompt("Ikkinchi sonni kiriting");
const v = prompt("Siz o'ylagan yig'indini kiriting");

const sum = +a + +b;

const resultWrapper = document.querySelector(".rasult")

if (sum == +v) {
    resultWrapper.textContent = "Siz to'g'ri toptingiz"
} else if (sum < v) {
    resultWrapper.textContent = "Siz kotta qiymat kiritingiz"
} else if (sum > v) {
    resultWrapper.textContent = "Siz kichkina qiymat kiritingiz"
} else {
    resultWrapper.textContent = "Siz noto'g'ri qiymat kiritingiz"
}

