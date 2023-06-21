document.addEventListener('DOMContentLoaded', function () {
    const closeFlashBtn = document.querySelector('span.close-flash');
    if (closeFlashBtn) {
        closeFlashBtn.addEventListener('click', closeFlashMessage);
    }
});
 
const closeFlashMessage = (ev) => {
    const flashMessage = ev.target.parentElement;
    flashMessage.remove(); 
 }