// setTimeout(changeText, 1000);

function changeText() {
    document.querySelector('h1').textContent = 'Hello from callback';
}

const timerId = setTimeout(changeText, 3000);

// clearTimeout cancels setTimeout
document.querySelector('#cancel').addEventListener('click', () => {
    console.log(timerId);
    clearTimeout(timerId);
    console.log('cancelled');
});
