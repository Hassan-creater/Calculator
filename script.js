let input = document.querySelector('#input');
let btn = document.querySelectorAll('button');
//console.log(btn);

let str = "";
let arr = Array.from(btn);

arr.forEach(button => {
    button.addEventListener('click', (ele) => {
    
        
        if(ele.target.innerHTML == '='){
            str = eval(str);
            input.value = str;
        }
        else if(ele.target.innerHTML == 'AC'){
            str ="";
            input.value = str;

        }else if(ele.target.innerHTML == 'DEL'){
            str = str.substring(0,str.length-1);
            input.value = str;
        }
        else{
            str +=ele.target.innerHTML;
            input.value = str;
        }
    })
})