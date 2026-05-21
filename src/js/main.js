import sender from "./sender.js";
import { getMaskByElement } from "./masks.js";

/* CSS imports */
import '/src/tw-input.css';
import "/src/scss/main.scss";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import "./utils.js";
import "./modals.js";
import "./quiz.js";
import "./masks.js";
import "./menu.js";
import "./last-day.js";


document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('fetchLeadSuccess', async (e) => {
        document.querySelector('.loading')?.remove();
        window.location.href = "/success.html";
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-submit').forEach(btn => {

        btn.onclick = (e) => {
            e.preventDefault();
            const phoneEl = document.querySelector('.qz-step [data-mask-phone]');
            const mask = getMaskByElement(phoneEl);
            const phone = clearPhone(mask.value);
            const result = window.quiz.getResult();
            result.phone = phone;

            sender(result);
        }

    });
});