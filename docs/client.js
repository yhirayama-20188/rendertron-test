// const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=50';
// const tpl = document.querySelector('template').content;
// const container = document.querySelector('ul');
// function init() {
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(cats => {
//             container.innerHTML = '';
//             cats
//                 .map(cat => {
//                     const li = document.importNode(tpl, true);
//                     li.querySelector('img').src = cat.url;
//                     return li;
//                 }).forEach(li => container.appendChild(li));
//         })
// }
// init();
// document.querySelector('button').addEventListener('click', init);


const apiUrl = 'https://dog.ceo/api/breed/samoyed/images/random';
const tpl = document.querySelector('template').content;
const container = document.querySelector('ul');
function init() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(function(dogs) {
            container.innerHTML = '';
            const li = document.importNode(tpl, true);
            li.querySelector('img').src = dogs.message;
            container.appendChild(li)
        })
}
init();
document.querySelector('button').addEventListener('click', init);