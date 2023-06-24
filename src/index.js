import { fetchNameAge } from './name-fetch'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const input = document.querySelector('.enter-name');
const button = document.querySelector('.find-button');
const ageDisplay = document.querySelector('.age-display')

let name = '';

button.addEventListener('click', (event) => {
    event.preventDefault();
    name = input.value.trim().toLowerCase();
    if (input.value.length > 0) {
         fetchNameAge(name)
          .then((age) => {
              let namePerson = age.name.charAt(0).toUpperCase() + age.name.slice(1);
              ageDisplay.innerHTML = 
                  `<h1 class='show-age'>${namePerson} your age is ${age.age} years</h1>`
              Notify.success(`✅ ${namePerson} your age is ${age.age} years`);
        observerv.observe(target)
    })
    .catch((error) => {
       })  
    } else {
  Notify.failure("Enter your name!")
    }


})
