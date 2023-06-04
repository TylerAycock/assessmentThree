
document.getElementById(`color`).addEventListener(`click`, () => alert(`My favorite color is Purple`))
document.getElementById(`place`).addEventListener(`click`, ()=> alert(`My favorite place is the beach`))
document.getElementById(`ritual`).addEventListener(`click`, ()=> alert(`My favorite place is an afternoon nap`))

// I know there is a more effecient way to execute all three of these requests with a for loop but I wasn'nt able to figure it out. 
// Sincere apologies for the D.R.Y. code.
// Below you can look at my failed loop attempt.

// const fact = document.querySelector(`#fun-fact`)
// const btn = document.querySelectorAll(`button`)

// btn.addEventListener(`click`, (event)=>{
//     for (let i = 0; i < btn.length; i++){
//         if (event.target.id === `color` ){
//             fact.textContent = `my favorite color is purple`
//     }  if (event.target.id === `place`){
//         fact.textContent = `my favorite place is the beach`
//     } if (event.target.id === `ritual`){
//         fact.textContent = `my favoite ritual is an afternoon nap`
//         }
//     }   
// })