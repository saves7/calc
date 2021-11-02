window.onload = function () {
    let num1 = document.querySelector('input[name=num1]');
    let num2 = document.querySelector('input[name=num2]');
    let result = 0;
    let btnsum = document.querySelector('input[name=sum] ');
    let btnded = document.querySelector('input[name=ded] ');
    let btnmultipl = document.querySelector('input[name=multiplication] ');
    let btndivision = document.querySelector('input[name=division] ');
    let box_result = document.querySelector('input[name=result]');

    btnsum.onclick = function () {
       /* btnsum.setAttribute("disabled", "disabled");*/
        result = parseInt(num1.value) + parseInt(num2.value);
        box_result.value = result;
        /*this.classList.toggle('calc__button_active');*/
    }
    btnded.onclick = function () {
        result = parseInt(num1.value) - parseInt(num2.value);
        box_result.value = result;
        /*this.classList.toggle('calc__button_active');*/
    }
    btnmultipl.onclick = function () {

        result = parseInt(num1.value) * parseInt(num2.value);
        box_result.value = result;
       /* this.classList.toggle('calc__button_active');*/
    }
    btndivision.onclick = function () {
        result = parseInt(num1.value) / parseInt(num2.value);
        box_result.value = result;
       /* this.classList.toggle('calc__button_active');*/
    }
}