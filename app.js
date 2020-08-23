/* random number generator functionality and show in the input box */
const showRandomNumber = document.querySelector(".pin-generator .form-control");
const generatorBtn = document.querySelector(".generate-btn");

let randomNumber = null;

generatorBtn.addEventListener('click', () => {
    let random = Math.random() * 9000 + 1000;
    showRandomNumber.value = parseInt(random);
    randomNumber = parseInt(random);

})

/*get key value and show in box */
const showCalcValue = document.querySelector('.input-section .form-control');
const calcParentBody = document.querySelector(".calc-body");

let submitNumber;
let formValue = '';
let newCount = 0;
calcParentBody.addEventListener('click', (event) => {

    if (event.target.className == "button") {
        let targetValue = event.target.innerText;

        if (targetValue == 'C') {
            showCalcValue.value = ''
        } else if (targetValue == '<') {
            showCalcValue.value = formValue.substring(0, formValue.length- (++newCount));
        } else {
            showCalcValue.value += parseInt(targetValue);
            submitNumber = parseInt(showCalcValue.value);
            formValue = showCalcValue.value;
        }

    }
})



/*check between generator number and submitted number is match true and false and some action*/
const submitBtn = document.querySelector(".submit-btn");
const notifySuccess = document.querySelector('.notify-success ');
const notifyFailed = document.querySelector('.notify-failed');
const tryAction = document.querySelector('.action-left');

let tryCount = 3;


tryAction.innerText = `${tryCount} try left`;
tryAction.style.display = 'none';


submitBtn.addEventListener("click", () => {

    if (randomNumber === submitNumber) {
        tryCount = 3;  /* Try Action*/ 
        tryAction.style.display = 'none';

        notifySuccess.style.display = "block"; /* notify is sucess  */
        setTimeout(() => {
            notifySuccess.style.display = "none"; /* after 2s  display none notify sucess */
        }, 2000);

        /* form value empty  */
        showRandomNumber.value = '';
        showCalcValue.value = '';
    } else {
        --tryCount;    /* Try Action*/ 
        
        if (tryCount <= 0) {
            submitBtn.classList.add('btn-disabled');
            submitBtn.disabled = true;
            tryAction.style.display = 'none';
        } else {
            tryAction.innerText = `${tryCount} try left`;
            tryAction.style.display = 'block';
        }

        /* notify is failed*/
        notifyFailed.style.display = "block";
        setTimeout(() => {
            notifyFailed.style.display = "none"; /* after 2s  display none notify failed */
        }, 2000);

    }

})

