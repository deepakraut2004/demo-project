const output = document.querySelector(".result");
const buttons = document.querySelectorAll("button");


let str = ' ';

buttons.forEach((button) => {
    button.addEventListener('click' , (e) => {
        
        if(e.target.textContent.trim() === "AC"){
            str = ""
            output.value = str;
        }else if(e.target.textContent.trim()=== "DEL"){
            str = str.substring(0 , str.length-1);
            output.value = str;

        }else if(e.target.textContent.trim()=== "="){
            str = eval(str);
            output.value = str;

        }else{
            str += e.target.textContent.trim();
            output.value = str;

        }
    })
 })