"use strict";

export function localeStorage(arrayOfImg){
        for(let img of arrayOfImg){
            img.addEventListener('load' , () => {
                let imgCanvas = document.createElement('canvas');
                let imgContext = imgCanvas.getContext('2d');
                
                imgCanvas.width = img.width;
                imgCanvas.height = img.height;
                
                imgContext.drawImage(img, 0, 0, img.width, img.height);
                
                let imgAsDataURL = imgCanvas.toDataURL('image/jpg');
                
                try {
                    localStorage.setItem('img', imgAsDataURL);
                }
                catch (e) {
                    console.log("Storage failed: " + e);
                }
            },false);
        }
}


