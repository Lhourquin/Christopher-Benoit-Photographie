//Target
let buttonBurger = document.getElementById('button-burger');
let header = document.getElementById('header');
let nav = document.getElementById('header-nav');
let md = window.matchMedia("(max-width: 1050px)");
let main = document.getElementById('main');
let body = document.getElementsByTagName('body')[0];

// function for media query active
function mediaScreen (mq) {
    if(mq.matches){
        header.classList.add('close');
        nav.classList.add('displayNone');
        buttonBurger.classList.remove('displayNone');
        if (body.classList.contains('body-index')){
            //if(header.classList.contains('close')){
                buttonBurger.classList.add('btnWhite');
            //}

        }
      //  checkThePage();

    }else{
        header.classList.remove('close');
        nav.classList.remove('displayNone');
        buttonBurger.classList.add('displayNone');
        main.classList.remove('displayNone');
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
        if (body.classList.contains('body-index')){
            if(!header.classList.contains('close')){
                buttonBurger.classList.remove('btnWhite');
            }else if(header.classList.contains('close')){
                buttonBurger.classList.add('btnWhite');

            }

        }

    }
}

buttonBurger.addEventListener('click', toggle);

//test cache

let image = new Image();

let img = document.getElementsByTagName('img');


function notify_complete(){
    console.log('The image has been loaded into the browser cache.');
}

function load_image(){
  // call the notify_complete function when the image has loaded
    image.onload = notify_complete;

    // load the image
    for(let i of img){
        let src = i.src; 
        image.src = src;
        console.log(image.src);
    }
    
}

load_image();

//check if img is cahed
function is_cached(src) {
    var image = new Image();
    image.src = src;

    return image.complete;
}
console.log('test gh page');