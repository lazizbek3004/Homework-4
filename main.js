let left = document.querySelector('.left')
let right = document.querySelector('.right')
let middleButton = document.querySelector('.middleButton')
let exit = document.querySelector('.exit')


middleButton.addEventListener('click', ()=>{
    left.classList.remove('leftAnim2')
    middleButton.classList.remove('middleButtonAnim2')
    right.classList.remove('rightAnim2')
    left.classList.add('leftAnim')
    right.classList.add('rightAnim')
    middleButton.classList.add('middleButtonAnim')
    
})

exit.addEventListener('click', ()=>{
    left.classList.remove('leftAnim')
    right.classList.remove('rightAnim')
    middleButton.classList.remove('middleButtonAnim')
    left.classList.add('leftAnim2')
    right.classList.add('rightAnim2')
    middleButton.classList.add('middleButtonAnim2')



})


