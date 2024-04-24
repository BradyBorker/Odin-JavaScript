const img = document.querySelector('img');
function getGif(search) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=API_KEY=${search}`, { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            if (Object.keys(response.data).length === 0) {
                throw new Error('Unable to find gif')
            }
            img.src = response.data.images.original.url;
        })
        .catch(function (error) {
            alert('Failure check console');
            console.log(error);
        });
}
getGif('cats');

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const input = document.querySelector('input#search');
    let inputValue = input.value;
    if (input.value === '') {
        inputValue = 'cats'
    } else {
        inputValue = input.value
    }
    input.value = '';

    getGif(inputValue);
})