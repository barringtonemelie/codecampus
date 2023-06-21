document.addEventListener('DOMContentLoaded', function () {
    const closeFlashBtn = document.querySelector('span.close-flash');
    if (closeFlashBtn) {
        closeFlashBtn.addEventListener('click', closeFlashMessage);
    }

    const completeStepCheckboxes = document.querySelectorAll('input.complete-step');
    if (completeStepCheckboxes) {
        completeStepCheckboxes.forEach(x => x.addEventListener('change', completeStep));
    }
});

    
const closeFlashMessage = (ev) => {
    const flashMessage = ev.target.parentElement;
    flashMessage.remove(); 
}
 
const completeStep = async (ev) => { 
    const checkbox = ev.target;
    const done = checkbox.dataset.done === "true";
    const stepId = checkbox.dataset.stepId;
    const pathId = checkbox.dataset.pathId;

    console.log({ done });
    
    const response = await fetch('/api/profile/complete-step', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ stepId, pathId, done: !done })
    });

    if (response.status === 200) { 
        checkbox.dataset.done = !done;
    }
}