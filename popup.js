// popup.js

document.addEventListener('DOMContentLoaded', function () {
  const modifyButton = document.getElementById('modifyButton');

  if (!modifyButton) {
    console.error('Could not find the button. Check your HTML and button ID.');
    return;
  }

  modifyButton.addEventListener('click', function () {
    chrome.runtime.sendMessage({ type: 'convertURL' });
  });
});

