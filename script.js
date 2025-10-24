// Loading Screen
window.addEventListener('load', () => {
  const loader = document.getElementById('loading-screen');
  const form = document.getElementById('form-container');

  setTimeout(() => {
    loader.style.display = 'none';
    form.classList.add('show');
  }, 2000); // 3 seconds
});

// Form Submission
const form = document.getElementById('feedbackForm');
const thankYouMsg = document.getElementById('thankYouMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Replace this with your Google Apps Script web app URL
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzWfk2GsWMpR3OStHzLkUGNjpQO0DKzZnDMal7xNBwjm8k11qmI-QmgZhXite2EKV_kvQ/exec';

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      thankYouMsg.style.display = 'block';
      form.reset();
    })
    .catch(error => alert('Error submitting feedback!'));
});
