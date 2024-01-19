const form = document.querySelector('#formA');

form.addEventListener('submit',(e)=>{
   e.preventDefault();
   const result = document.querySelector('#result');
   const height = parseInt(document.querySelector('#height').value);
   const weight =  parseInt(document.querySelector('#weight').value);

    if (height === '' || height < 0 || isNaN(height)) {
         result.innerHTML = "Please give correct height value."
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) {
         result.innerHTML = "Please give correct weight value."
   }
   else{
         const bmi = (weight / ((height*height)/10000)).toFixed(2); 
         result.innerHTML = `<span>${bmi}</span>`;
         
         if (bmi < 18.6) {
         result.innerHTML = `<span>${bmi}Under Weight </span>`
         }else if(bmi === 18.6 || bmi === 24.9 ){
         result.innerHTML = `<span>${bmi} Normal Weight</span>`
         } else if(bmi > 24.9){
         result.innerHTML = `<span>${bmi} Over weight</span>`
         }
    
   }
})






