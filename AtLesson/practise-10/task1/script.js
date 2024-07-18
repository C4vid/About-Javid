// const form = document.getElementById('user-form')
// const input = document.getElementById('username-input')
// const card = document.getElementsByClassName('card')


// form.addEventListener("submit", (e) => {
//     e.preventDefault()

//     fetch(`https://api.github.com/users/${input.value}`)
//     .then(response => 
//         {return response.json()}
//     )
//     .then(user => {
//         card.innerHTML = `
//             <img src="${user.avatar_url}" class="card-img-top" alt="User Avatar">
//             <div class="card-body">
//                 <h5 class="card-title">${user.login}</h5>
//             </div>
//         `; 
//     })
//     .catch(error => console.error('Error:', error));

// })
const form = document.getElementById('user-form')
const input = document.getElementById('username-input')
const card = document.getElementsByClassName('card')     

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  try {
    const response = await fetch(`https://api.github.com/users/${input.value}`)
    const user = await response.json()
    card.innerHTML = `
      <img src="${user.avatar_url}" class="card-img-top" alt="User Avatar">
      <div class="card-body">
          <h5 class="card-title">${user.login}</h5>
      </div>
    `
  } catch (error) {
    console.error('Error:', error);
  }
})



