const github = new Github();

const searchUser = document.getElementById('searchUser');
// Search input event listener
searchUser.addEventListener('keyup', e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make http request
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        // Show alert user not found
      } else {
        // Show profile
      }
    });
  } else {
    // Clear profile
  }
});
