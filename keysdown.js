var keysDown = {};

function init(){
    document.addEventListener('keydown', function(event){
        keysDown[event.which] = true;
    });
    document.addEventListener('keyup', function(event){
        delete keysDown[event.which];
    });
    window.addEventListener('blur', function(event){
        for(var key in keysDown){
            delete keysDown[key];
        }
    });
}

if(window){
    window.addEventListener('load', init);
}

module.exports = keysDown;