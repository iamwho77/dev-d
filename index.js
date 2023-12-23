 let button = document.querySelector(".btn") ; 
 let searchBar  = document.querySelector(".search") ; 
 let searchForm = document.querySelector(".search-form") ; 
  let searchInput = document.querySelector("#search-input") ; 






  searchForm.addEventListener('submit',(e)=>{
   e.preventDefault() ; 
   let username = searchInput.value;
     console.log(username) ; 
     getInfo(username) ; 
  })




async function getInfo(username) { 
    let response = await fetch(`https://api.github.com/users/${username}`) ; 
    // let data = await response.json() ; 
    console.log(response);
}




// const searchForm = document.getElementById('search-input');
// const searchInput = document.querySelector('.search');
// const usernameElement = document.querySelector('.username');
// const idElement = document.querySelector('.id');
// const nameElement = document.querySelector('.name');
// const bioElement = document.querySelector('.bio');
// const reposElement = document.querySelector('.public-repos');

// // Event listener for form submission
// searchForm.addEventListener('submit', async (e) => {
//   e.preventDefault(); // Prevent the default form submission behavior
  
//   const username = searchInput.value.trim(); // Get the entered username
//  console.log(username);

//   if (username) {
//     try {
//       const response = await fetch(`https://api.github.com/users/${username}`); // Make a GET request to GitHub API
//       const userData = await response.json(); // Parse the JSON response

//       // Update the DOM with user information
//       usernameElement.textContent = `Username: ${userData.login}`;
//       idElement.textContent = `ID: ${userData.id}`;
//       nameElement.textContent = `Name: ${userData.name || 'N/A'}`;
//       bioElement.textContent = `Bio: ${userData.bio || 'N/A'}`;
//       reposElement.textContent = `Public Repos: ${userData.public_repos}`;
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//       // Handle errors or display a message if user is not found
//       usernameElement.textContent = 'User not found';
//       idElement.textContent = '';
//       nameElement.textContent = '';
//       bioElement.textContent = '';
//       reposElement.textContent = '';
//     }
//   } else {
//     // If no username is entered
//     alert('Please enter a username');
//   }
// });