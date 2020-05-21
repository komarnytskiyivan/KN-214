document.querySelector(`body`).onload = () => {
    console.log(localStorage.getItem(`theme`));
    if(localStorage.getItem(`theme`) != undefined){
        if(localStorage.getItem(`theme`) == `black`){
            DarkTheme();
        }else{
            LightTheme();
        }
    }else{
        return;
    }
}

changeTheme = () => {
    if(localStorage.getItem(`theme`) != undefined){
        if(localStorage.getItem(`theme`) == `black`){
            localStorage.setItem(`theme`, `white`);
            LightTheme();
        }else{
            localStorage.setItem(`theme`, `black`);
            DarkTheme();
        }
    }else{
        localStorage.setItem(`theme`, `black`);
        DarkTheme();
    }
}

DarkTheme = () => {
    $(`.features`).css({"background-color" : `#000000`})
	$(`.contact`).css({"background-color" : `#000000`})
}

LightTheme = () => {
    $(`.features`).css({"background-color" : `#f7f7f7`})
	$(`.contact`).css({"background-color" : `#f7f7f7`})
}