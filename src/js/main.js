import sender from "./sender.js";
import { getMaskByElement } from "./masks.js";

/* CSS imports */
import '/src/tw-input.css';
import "/src/scss/main.scss";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import "./core.js";
import "./modals.js";
import "./quiz.js";
import "./masks.js";
import "./menu.js";
import "./forms.js";
import "./last-day.js";


document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('fetchLeadSuccess', async (e) => {
        document.querySelector('.loading')?.remove();
        document.querySelector('.sending').classList.remove('sending');

        if (window.currentSendingForm) {
            window.currentSendingForm.form.classList.add('success');
            window.currentSendingForm.form.classList.remove('error');
            window.currentSendingForm = null;
        }

        window.location.href = "/success.html";
    });

    document.addEventListener('fetchLeadError', async (e) => {
        setTimeout(() => document.querySelector('.sending').classList.remove('sending'), 500);

        if (window.currentSendingForm) {
            window.currentSendingForm.form.classList.add('error');
            window.currentSendingForm.form.classList.remove('success');
            window.currentSendingForm = null;
        }
    });
});

console.log(import.meta.env);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-submit').forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            const phoneEl = document.querySelector('.qz-step [data-mask-phone]');
            const mask = getMaskByElement(phoneEl);
            const phone = formatPhone(mask.value);
            const result = window.quiz.getResult();
            result.phone = phone;
            sender(result);
        }
    });
});