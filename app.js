confirm(
  "Assalomu Alaykum Ilova Ishlashi uchun Iltimos Sana va Vaqtni togri kirg'azing : \nAksiyaning Tugash Sanasi kiritilishi soralganda anniq sana va tugaydigan soatni kirgazishingiz kerak "
);

let aksiyaKun = +prompt("Aksiya Tugash Sanasini Kiriting :  ");
let aksiyaSoat = +prompt("Aksiya  Soat Nechida Tugaydi Vaqtini Kiriting :  ");

let hozirgiSoat = () => {
  let now = new Date();
  let text = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  document.querySelector("#soat").textContent = `O'zbekistonda Soat : ${text}`;
};

hozirgiSoat();
setInterval(hozirgiSoat, 1000);

let showTime = () => {
  let now = new Date();

  let hisoblovchi = `
  ${aksiyaKun - now.getDate()}-kun
  ${aksiyaSoat - now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  if (aksiyaKun == " " || aksiyaSoat == " ") {
    document.querySelector(
      "#hisoblovchi"
    ).textContent = `Anniq Sana va Vaqt kiritilmadi. Iltimos Sana va vaqtni qaytadan yozing . `;
  } else {
    document.querySelector(
      "#hisoblovchi"
    ).textContent = `Aksiya tugashiga  :  ${hisoblovchi.replaceAll(
      "-",
      " "
    )} qoldi `;
  }
};
showTime();
setInterval(showTime, 1000);

document.querySelector(
  "#kiritilgan-soat"
).textContent = `Aksiya : ${aksiyaKun}-sana  soat ${aksiyaSoat}:00 da tugaydi`;
