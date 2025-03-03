let btns = document.querySelectorAll('button');
let para = document.querySelector('p')
let S = 0
btns[2].addEventListener("click",function(){
    S += 1
    para.innerHTML = S
    if (S > 0) {
        para.style.color = "#53d50e"
    }
})
btns[0].addEventListener('click',function(){
    S -= 1
    para.innerHTML = S
    if(S < 0){
        para.style.color = "red"
    }
})
btns[1].addEventListener('click',function(){
    para.innerHTML = 0
    S = 0
    para.style.color = "black"
})