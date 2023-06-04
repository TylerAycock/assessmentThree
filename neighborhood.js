let restuarants =[`The Shanty`, `Best Pizza`, `The Sicilian`, `Seaside Market`, `Fish 101`]


const btn = document.querySelector(`button`)
const message = document.querySelector(`#message`)


const randomSpot = (event)=>{
    let random = restuarants[Math.floor(Math.random() * restuarants.length)];
    event.preventDefault()
    message.textContent = random
    revealMessage()
}

btn.addEventListener(`click`, randomSpot)

const revealMessage = ()=>{
    message.classList.remove(`hide`)
    setTimeout(()=>{
        message.classList.add(`hide`)
    }, 4000)
}
