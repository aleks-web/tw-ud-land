import sender from "./sender.js";
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    forms.forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);

            if (formData.get('phone')) {
                formData.set('phone', formatPhone(formData.get('phone')));
            }

            const formDataObject = Object.fromEntries(formData.entries());

            form.classList.add('sending');
            window.currentSendingForm = {form, formDataObject};
            sender(formDataObject);
        })
    });
});