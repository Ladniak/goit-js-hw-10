// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const delayInput = document.querySelector('input[name="delay"]');
const submitBtn = document.querySelector('button');

const executor = (resolve, reject) => {
    setTimeout(() => {
        const radioInput = document.querySelector('input[name="state"]:checked');

        if (radioInput.value == "fulfilled") {
            resolve();
        } else {
            reject();
        }
    }, delayInput.value)
};


const onBtnClick = (event) => {
    
    const promise = new Promise(executor);

    promise
    .then(() => {
        iziToast.success({
            message: `✅ Fulfilled promise in ${delayInput.value}ms`,
            icon: '',
            backgroundColor: '#59a10d',
            messageColor: '#fff',
        });
    })
    .catch(() => {
        iziToast.error({
            message: `❌ Rejected promise in ${delayInput.value}ms`,
            icon: '',
            backgroundColor: '#ef4040',
            messageColor: '#fff',
        });
    });
    
    event.preventDefault();
}

submitBtn.addEventListener('click', onBtnClick);




