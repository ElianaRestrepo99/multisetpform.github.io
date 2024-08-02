document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const steps = form.querySelectorAll('.stp');
    const sidebarSteps = form.querySelectorAll('.form-sidebar .step');
    const nextButtons = form.querySelectorAll('.next-stp');
    const prevButtons = form.querySelectorAll('.prev-stp');
    const switchInput =form.querySelector('.switch input[type ="checkbox"]');

    let currentStep = 0;

    hideAllSteps();
    showStep(currentStep);

    nextButtons.forEach(button =>{
        button.addEventListener('click', function(e){
            e.preventDefault();
            if(validateStep(currentStep)){
                currentStep++;
                hideAllSteps();
                showStep(currentStep);
                updateSidebar(currentStep);
            }
        });
    });

prevButtons.forEach(button =>{
    button.addEventListener('click',function(e){
        e.preventDefault();
        currentStep--;
        hideAllSteps();
        showStep(currentStep);
        updateSidebar(currentStep);
    });
});

switchInput.addEventListener('change', function(){
})

function hideAllSteps(){
    steps.forEach(step =>{
        step.style.display = 'none';
    });
}

function showStep(index){
    steps[index].style.display = 'block';
}

function validateStep(index) {
    const inputs = steps[index].querySelectorAll('input[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            const errorParagraph = input.parentElement.querySelector('.error');
            if (errorParagraph) {
                errorParagraph.style.display = 'block';
            }
        } else {
            const errorParagraph = input.parentElement.querySelector('.error');
            if (errorParagraph) {
                errorParagraph.style.display = 'none';
            }
        }
    });
    
    return isValid;
}

// Función para actualizar el sidebar de pasos
function updateSidebar(index) {
    sidebarSteps.forEach((step, i) => {
        if (i === index) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}
});
