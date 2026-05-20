import sender from "./sender.js";

/* CSS imports */
import '/src/tw-input.css';
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
        // window.quiz.setStep(6);
    });
});