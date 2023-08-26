

document.addEventListener("mousemove", (e)=>{
    dot.style.left = `${e.clientX}px`
    dot.style.top = `${e.clientY}px`
})

window.addEventListener("scroll", (e)=>{
    let plus_Ta0 = document.querySelector("#Our_plus");
    let backColor = document.querySelector(".backImg");
    let plus_Ta = document.querySelector(".plus_container");
    
    if(window.scrollY > 300){
        plus_Ta.classList.add("active1")
        plus_Ta0.classList.add("active2")
        backColor.classList.add("active4")
    }
    
    else if(window.scrollY < 380){

        plus_Ta.classList.remove("active1")
        plus_Ta0.classList.remove("active2")
        backColor.classList.remove("active4")
        
    }
    
})
window.addEventListener("scroll", ()=>{
    let plus_Ta2 = document.querySelector(".plus_two");
   
    if (window.scrollY > 600){
        plus_Ta2.classList.add("active3")
        
    }
 
    else if (window.scrollY < 400){
        plus_Ta2.classList.remove("active3")
        
    }
})
window.addEventListener("scroll", ()=>{
    let coment_video = document.querySelector(".coment_video");
    
    
    if (window.scrollY > 1800){
        coment_video.classList.add("activeVideo")
    }
  
    
})
window.addEventListener("scroll", ()=>{
    let body = document.querySelector("body");
    if(window.scrollY > 3960){
        body.classList.add("active_footer");
       
    }
    else if(window.scrollY < 3950){
        body.classList.remove("active_footer")
    }

})
window.addEventListener("scroll", ()=>{

if (window.scrollY > 1600){
let animate_num = document.querySelectorAll(".coun_num");
let month = document.querySelectorAll(".month");
let interval = 750;
animate_num.forEach((animate)=>{
   
    const update_num = () =>{
    let finNum = +animate.getAttribute("data-val");
    
    let start_num = +animate.innerText;
    let addNum = finNum / interval;
    
    if (start_num < finNum) {
         animate.innerHTML = Math.ceil(start_num + addNum);
         
         setTimeout(update_num, 7)
        }else{
            animate.innerText = finNum;
                
            month.forEach((aww)=>{
                
                    let finNu = +aww.getAttribute("data-val")
                    aww.innerHTML = finNu+"oy"
            }
            )
        }
    }
    update_num()
    });
}

})