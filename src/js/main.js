import sender from "./core/sender.js";

/* CSS imports */
import '/src/tw-input.css';
import "/src/scss/main.scss";

import "./core/core.js";
import "./quiz.js";
import "./menu.js";


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