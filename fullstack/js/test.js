const addNumber = (number) => {
    let sum = Number(number) + 10;
    return console.log(sum);
};

const getInput = document.querySelector('input[name="number"]');
const butRef = document.querySelector("button");

butRef.addEventListener("click", () => addNumber(getInput.value));