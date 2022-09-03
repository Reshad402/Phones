// Spinner start hoibe jokhn search button tip dibo then process thn add all ses howar por then last a append er er por
// searchText diye all phone search dea jabe
const loadPhone = (searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data));
}
const displayPhone = phones =>{
   const phoneContainer = document.getElementById('phones-container');
   phoneContainer.textContent = ''
  // Commit 2
  // Display 20 Phones Only
  // phones =phones.slice(0,20)

  const showAll = document.getElementById('show-all')
  // Now jodi 10tar besi product thake thaole ai conditon asbe show all er and nich a button
  if(phones.length > 10) {
    phones =phones.slice(0,10);
    showAll.classList.remove('d-none') ;
   }
   else{
    showAll.classList.add()
   }

// display no phones
const noPhones = document.getElementById('no-found-message');
if(phones.length === 0){
  noPhones.classList.remove('d-none');
}
else{
  noPhones.classList.add('d-none');
}

// Display all phones
   phones.forEach(phone => {
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('col');
    phoneDiv.innerHTML=`
                  <div class="card">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${phone.phone_name}</h5>
                      <p class="card-text">${phone.slug}</p>
                      <button onclick="loadPhoneDetails('${phone.slug}')"  href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Details</button>
                    </div>
                    
                  </div>
                `;
                phoneContainer.appendChild(phoneDiv)
   });
  //  stop the loader spinner option
}


// calling the input value and value

document.getElementById('btn-control').addEventListener('click',function(){
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    loadPhone(searchText)
})

// loadPhone()
// ata auto call korle oije auto no found dekha jay
// 34-4 minutes 11.05 baki
// const toggleSpinner = isLoading =>{
//   const loadSection =document.getElementById('loader')
// }

// LoadPhone details
const loadPhoneDetails = id =>{
  const url =`https://openapi.programming-hero.com/api/phone/${id}`
  fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
}
const phoneLoadDetails = phone =>{
  console.log(phone)
}


// Handle search button click
// document.getElementById('btn-search').addEventListener('click',function(){
  
// })


// search input field enter key
document.getElementById('search-field').addEventListener('keypress',function(e){
  console.log(e.key);
  if(e.key === 'Enter'){
    // code for enter

  }
})