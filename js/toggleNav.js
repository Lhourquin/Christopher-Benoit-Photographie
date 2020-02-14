//Target
let buttonBurger = document.getElementById('button-burger');
let header = document.getElementById('header');
let nav = document.getElementById('header-nav');
let md = window.matchMedia("(max-width: 1050px)");


function mediaScreen (mq) {
    if(mq.matches){
        header.classList.add('close');
        nav.classList.add('displayNone');
    }else{
        header.classList.remove('close');
        nav.classList.remove('displayNone');
    }
}

mediaScreen(md);
md.addListener(mediaScreen);

function toggle (e) {
    let target = e.target;
    
    if(target){
        header.classList.toggle('close');
        nav.classList.toggle('displayNone');
    }
}

buttonBurger.addEventListener('click', toggle);