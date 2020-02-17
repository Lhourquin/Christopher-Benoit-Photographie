//Target
let buttonBurger = document.getElementById('button-burger');
let header = document.getElementById('header');
let nav = document.getElementById('header-nav');
let md = window.matchMedia("(max-width: 1050px)");
let main = document.getElementById('main');

// function for media query active
function mediaScreen (mq) {
    if(mq.matches){
        header.classList.add('close');
        nav.classList.add('displayNone');
        buttonBurger.classList.remove('displayNone');
        checkThePage();

    }else{
        header.classList.remove('close');
        nav.classList.remove('displayNone');
        buttonBurger.classList.add('displayNone');
    }
}

mediaScreen(md);
md.addListener(mediaScreen);

//function for toggle nav bar
function toggle (e) {
    let target = e.target;
    
    if(target){
        console.log('ok');
        header.classList.toggle('close');
        nav.classList.toggle('displayNone');
        main.classList.toggle('displayNone');
        buttonBurger.classList.toggle('btnWhite');

    }
}

buttonBurger.addEventListener('click', toggle);


//function for check  page
function checkThePage (){
    var checkPage = window.location.pathname;

if (checkPage.length === 0 || checkPage === "/" || checkPage.match(/^\/?Livrasion2\/index/)){

    
    if(header.classList.contains('close')){
        buttonBurger.classList.add('btnWhite');
    }/*else if(header.classList.contains('btnBlack')) {
        buttonBurger.classList.add('btnWhite');

    }*/
}else if (checkPage.length === 0 || checkPage === "/" || checkPage.match(/^\/?contact/) || checkPage.match(/^\/?prestation/) || checkPage.match(/^\/?a-propos/)) {
    buttonBurger.style.color = "black";
}

}

