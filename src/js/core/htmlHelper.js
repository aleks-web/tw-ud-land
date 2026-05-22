document.addEventListener("DOMContentLoaded", function() {
    if (import.meta.env.DEV) {
        insertHtml();
        initJs();
    }
});

function insertHtml() {
    const htmlConatiner = document.createElement('div');
    const html = `
        <div class="dev-helper fixed flex bottom-0 right-2 bg-blue-200 px-2 py-1 rounded-t-lg cursor-pointer">Dev helper</div>
    `;
    htmlConatiner.innerHTML = html;
    document.body.append(htmlConatiner);
}

function initJs() {
    document.querySelector('.dev-helper').addEventListener('click',  e => {
        console.log(e);
    });
}