import { Fancybox } from "@fancyapps/ui";
document.querySelectorAll("[data-modal]").forEach((modal) => {
    modal.addEventListener("click", (e) => {
        e.preventDefault();

        Fancybox.show([
            {
                src: "#" + modal.dataset.modal,
            },
        ]);
    });
});