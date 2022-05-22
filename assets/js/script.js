const optionInput = document.querySelectorAll(".form__option__input");

document.addEventListener("keydown", (e)=>{
    optionInput.forEach(optionInputElement => {
        if(e.keyCode == 27){
            optionInputElement.checked = false;
        }
        else if(optionInputElement.dataset.key == e.key.toLowerCase()){
            optionInputElement.checked = true;
        }
    });
})