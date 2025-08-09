
//! link API
//img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`;


const wrapper = document.querySelector(".wrapper");
    form = wrapper.querySelector(".form");
    input = wrapper.querySelector(".form input");
    btn = wrapper.querySelector(".form button");
    img  = wrapper.querySelector(".qr-code img");

let currentValueInput;

form.addEventListener('submit', (event)=>{
    
    event.preventDefault();
    const inputValue = input.value.trim();

    if(!inputValue || inputValue === currentValueInput) {
        return
    }


    currentValueInput = inputValue;
    // console.log('currentValueInput', currentValueInput);
    btn.textContent = "Відбувається створення QR - Коду";
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`;

    img.addEventListener("load", () => {
        wrapper.classList.add("active");
        btn.textContent= "Згенерувати QR - Код"
    })

    img.addEventListener("error", () =>{
        alert("Сталась помилка підчас завантаження QR - Коду");
        location.reload();
    })

    input.addEventListener("input", () => {
        if(!input.value.trim() && wrapper.classList.contains("active")){
            wrapper.classList.remove("active");
        }
    })
})
