document.querySelector('form').addEventListener('submit', event =>{
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');
    event.preventDefault();
    const input= document.querySelector('#message-input');
   const encrypted= btoa(input.value);


   const linkInput =document.querySelector('#link-input');
   linkInput.value= `${window.location}#${encrypted}`;
   linkInput.select()
});

