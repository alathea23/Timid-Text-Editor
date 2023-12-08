const btnInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    btnInstall.style.visibility = 'visible'; //need to update this??  check for function
    textHeader.textContent = 'Click the button to install!';
  
    btnInstall.addEventListener('click', () => {
      event.prompt();
      btnInstall.setAttribute('disabled', true);
      btnInstall.textContent = 'Installed!';
    });
  });

// TODO: Implement a click event handler on the `butInstall` element
//butInstall.addEventListener('click', async () => {});
//Do I nned to update with async function??

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    btnInstall.style.visibility = 'hidden';
    textHeader.textContent = 'Successfully installed!';
    console.log('👍', 'appinstalled', event);
  });
  