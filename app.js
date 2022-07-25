const label = document.querySelector('.check_label');
const check = document.querySelector('.checked');
const first_header = document.querySelector(".first_header");
const root = document.querySelector(':root'); 
function chang() {
    if( check.style.left == "45%"){
        check.style.left = "9%"; 
        check.style.backgroundColor = "white";
        label.style.backgroundColor = "gray";
        document.body.style.backgroundColor = "white" ;
        first_header.style.backgroundColor = "rgb(245, 247, 255)";
        root.style.setProperty('--dark-gray','hsl(230, 17%, 14%)')
        root.style.setProperty('--main-backgrund','rgb(245, 247, 255)')
    }else{
        check.style.left = "45%";
        check.style.backgroundColor = "#ed8181";
        label.style.backgroundColor = "white";
        document.body.style.backgroundColor = "hsl(230deg 17% 14%)" ;
        first_header.style.backgroundColor = "rgb(37 42 65 / 25%)";
        root.style.setProperty('--dark-gray',' white')
        root.style.setProperty('--main-backgrund','hsl(229deg 27% 20%)')
    }
}

const calc = document.querySelectorAll('.calc');

function startCounter(el) {
let goal = el.dataset.goal;
console.log(goal)
let number =setInterval( ()=> {
    el.textContent++;
    if(el.textContent == goal) {
        clearInterval(number);
    };
},3000/goal);
}

 calc.forEach((item) =>startCounter(item))  