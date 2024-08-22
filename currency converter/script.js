let opt = document.querySelectorAll('.currency1');
let btn = document.getElementById('btn')
let input = document.getElementById('input')

fetch("https://api.frankfurter.app/currencies")
    .then(res => res.json())
    .then(res => dropdown(res))

function dropdown(res) {
    let allcurr = Object.entries(res);
    for (i = 0; i <= allcurr.length; i++) {
        let option = `<option value="${allcurr[i][0]}">${allcurr[i][0]}</option>`
        opt[0].innerHTML += option
        opt[1].innerHTML += option
    }
}
btn.addEventListener('click', () => {
    let curr1 = opt[0].value
    let curr2 = opt[1].value
    let inputval = input.value
    if (curr1 === curr2) {
        alert('Enter Different Currency...')
    }
    else {
        convert(curr1, curr2, inputval)
    }
    return curr1,curr1,inputval;
});
function convert(curr1,curr2,inputval) {
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputval}&from=${curr1}&to=${curr2}`)
        .then(resp => resp.json())
        .then((data) => {
            document.getElementById('result').value=Object.entries(data.rates)[0][1]
            let resultval=result.value
            document.getElementById('restext').innerHTML=`${inputval} ${curr1} = ${resultval} ${curr2}`
        });
}
