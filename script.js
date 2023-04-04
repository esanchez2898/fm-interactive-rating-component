const mainContainer = document.querySelector(".main")
const thanksContainer = document.querySelector(".thankyou")
const ratings = document.querySelectorAll('.btn')
const currentRating = document.querySelector(".numberRating")
const submitBtn = document.querySelector("#submit")
const returnBtn = document.querySelector("#return")

ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
        currentRating.innerHTML = rating.innerHTML
    })
})

submitBtn.addEventListener("click", () => {
    if (currentRating.innerHTML != "X") {
        console.log('There is a currently focused button');
        mainContainer.classList.add("hide")
        thanksContainer.classList.remove("hide")
    } else {
        Swal.fire(
            'Ups...',
            'It looks like you forgot to select the rating :)',
            'question'
        )
        console.log('There is no currently focused button');
    }
})

returnBtn.addEventListener("click", () => {
    mainContainer.classList.remove("hide")    
    thanksContainer.classList.add("hide")
    currentRating.innerHTML = "X"
})


