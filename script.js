const loveBtn = document.getElementById("loveBtn");
const extraMsg = document.getElementById("extraMsg");

const messages = [
  "အရမ်းချစ်တယ်ဆိုတာ အမြဲသိစေချင်လို့ ❤️",
  "ဘယ်နေရာရောက်ရောက် ကိုယ့်စိတ်ထဲ မင်းပဲ ရှိတယ် 💕",
  "ပျော်ပျော်ရွှင်ရွှင် နေပါနော်၊ အရမ်းချစ်တယ် 🥰"
];

let i = 0;

loveBtn.addEventListener("click", () => {
  extraMsg.textContent = messages[i];
  i = (i + 1) % messages.length;
});
