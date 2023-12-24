const updateText = (inputId, targetId) => {
    const inputValue = document.getElementById(inputId).value;
    document.getElementById(targetId).innerText = inputValue;
}

const countCharacters = (targetId, outputId) => {
    const inputValue = document.getElementById(targetId).value;
    const characterCount = inputValue.length;
    const maxlengthValue = document.getElementById(targetId).maxLength;
    document.getElementById(outputId).innerText = characterCount + "/" + maxlengthValue;
}

const resultToggle = () => {
    const popup = document.getElementById("popup");
    
    popup.classList.contains("hidden") ? popup.classList.remove("hidden") : popup.classList.add("hidden");
}

const positions = [
    { left: '10%', top: '15%' },
    { left: '30%', top: '19%' },
    { left: '20%', top: '45%' },
    { left: '50%', top: '74%' },
    { left: '50%', top: '20%' }
];

let currentPositionIndex = 0;

const changePosition = (targetId) => {
    const button = document.getElementById(targetId);
    
    const position = positions[currentPositionIndex];

    button.style.left = position.left;
    button.style.top = position.top;

    currentPositionIndex = (currentPositionIndex + 1) % positions.length;
};