document.addEventListener('DOMContentLoaded', function () {
    const closeFlashBtn = document.querySelector('span.close-flash');
    if (closeFlashBtn) {
        closeFlashBtn.addEventListener('click', closeFlashMessage);
    }

    const completeStepCheckboxes = document.querySelectorAll('input.complete-step');
    if (completeStepCheckboxes) {
        completeStepCheckboxes.forEach(x => x.addEventListener('change', completeStep));
    }

    const paths = document.querySelectorAll('.path');
    if (paths) { 
        paths.forEach(path => { 
            calculateProgress(path);
        });
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
        calculateAllProgress();
    }
}

const calculateAllProgress = () => {
    const paths = document.querySelectorAll('.path');
    if (paths) { 
        paths.forEach(path => { 
            calculateProgress(path);
        });
    }
}

const calculateProgress = (path) => { 
    const steps = path.querySelectorAll('input.complete-step');
    const totalSteps = steps.length;
    const completedSteps = path.querySelectorAll('input.complete-step[data-done="true"]').length;

    const progress = path.querySelector('.progress-bar');
    progress.style.width = `${(completedSteps / totalSteps) * 100}%`;

    const stepsCount = path.querySelector('.steps-count');
    stepsCount.innerText = `${completedSteps}/${totalSteps} |`;

    const percentage = path.querySelector('.progress-percentage');
    percentage.innerText = `${Math.round((completedSteps / totalSteps) * 100)}%`;
}
