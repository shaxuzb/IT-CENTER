  "use strict"
const remove = document.querySelector(".remove"),
      text = document.querySelector("#ismi"),
      tel = document.querySelector("#raqam"),
      textarea = document.querySelector("#komment"),
      btn_all_teacher = document.querySelector(".teacher_btn"),
      otaDiv = document.querySelector(".form_div");
let form = document.getElementById('form');

window.addEventListener("click",(e)=>{

 
  if(e.target == otaDiv){
    otaDiv.style.display = "none"
   
  }
});
remove.addEventListener("click",()=>{
    
    otaDiv.style.display = "none";
  
});
btn_all_teacher.addEventListener("click",()=>{
  
  otaDiv.style.display = "flex"
});

tel.addEventListener("click",()=>{
  tel.value = "+998"
});

text.addEventListener("keyup", ()=>{

  if(text.value == ""){
    text.style.borderColor = "red"
    inpName.innerHTML = "Ismingizni yozing"
  }
  else{
  text.style.borderColor = "#53e415"
  inpName.innerHTML = ""
  }
});
tel.addEventListener("keyup", ()=>{

  if(tel.value == ""){
    tel.style.borderColor = "red"
    inpTell.innerHTML = "Raqamingizni kiriting"
    inpTell13.innerHTML = ""
  }
  else if( tel.value.length < 13 || tel.value.length > 13){
    tel.style.borderColor = "red"
    inpTell13.innerHTML  = "Raqam to'g'ri kiritilmagan"
    inpTell.innerHTML = ""
 }
  else{
  tel.style.borderColor = "#53e415"
  inpTell.innerHTML = ""
  inpTell13.innerHTML = ""
  }
});





const inpName = document.querySelector(".inp_name"),
      inpTell = document.querySelector(".inp_tel"),
      inpTell13 = document.querySelector(".inp_tel_13");

const btn = document.getElementById('button');

document.getElementById('form')

 form.addEventListener('submit', function(event) {
  event.preventDefault();

  if(text.value == ""){
    text.style.borderColor = "red"
    inpName.innerHTML = "Ismingizni yozing"
  }

  
 else if(tel.value == ""){
      tel.style.borderColor = "red"
      inpTell.innerHTML = "Raqamingizni kiriting"
  }
 
  else{
    
    text.style.borderColor = "#53e415"
    tel.style.borderColor = "#53e415"
   btn.value = 'Yuborilmoqda...';

   const serviceID = 'default_service';
   const templateID = 'template_aqnotuk';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Yubormoq';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
  }
});


