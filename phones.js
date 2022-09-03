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
  phones =phones.slice(0,20)


   phones.forEach(phone => {
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('col');
    phoneDiv.innerHTML=`
                  <div class="card">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${phone.phone_name}</h5>
                      <p class="card-text">${phone.slug}</p>
                    </div>
                  </div>
                `;
                phoneContainer.appendChild(phoneDiv)
   });
}


// calling the input value and value

document.getElementById('btn-control').addEventListener('click',function(){
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    loadPhone(searchText)
})

loadPhone()
