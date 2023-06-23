import { fetchNameAge } from './name-fetch'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const input = document.querySelector('.enter-name');
const button = document.querySelector('.find-button');

let name = '';

button.addEventListener('click', (event) => {
    event.preventDefault();
    name = input.value.trim().toLowerCase();

      fetchNameAge(name)
          .then((age) => {
              let namePerson = age.name.charAt(0).toUpperCase() + age.name.slice(1);
       Notify.success(`✅ ${namePerson} your age is ${age.age} years`);
      observerv.observe(target)
    })
       .catch((error) => {
              Notify.failure("Sorry, there are no images matching your search query. Please try again.")
       }) 
})
