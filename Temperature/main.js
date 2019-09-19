// Checks for button click
document.getElementById('calculateBtn').addEventListener('click', conversion);

function conversion() {
    let input = document.getElementById('input').value;
    let output = (input-32)*5/9;
    document.getElementById('result').innerHTML = output;
}