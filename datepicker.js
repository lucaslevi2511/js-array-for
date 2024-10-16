for(let i = 2024; i >= 1924; i--){
    anos.innerHTML += `<option> ${i} </option>`;
}
let mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
for(let i = 0; i < 12; i++){
    meses.innerHTML += `<option> ${mes[i]} </option>`;
}

for(let i = 1; i <=qtdDias; i++){
    dias.innerHTML += `<option> ${i} </option>`;
}

anos.onchange =() => {
    meses.onchange = () => {
    let qtdDias = 0;
    if (meses.value == mes[0] || meses.value == mes[2] || meses.value == mes[4] || meses.value == mes[6]|| meses.value == mes[7] || meses.value == mes [9] || meses.value == mes [11]) {
        qtdDias = 31;
    } else if(meses.value == mes[3] || meses.value == mes[5] || meses.value == mes [8] || meses.value == mes[10] ){
        for(let i = 1; i <= 30; i++){
            qtdDias = 30;
        }
    } else {
        qtdDias = 28;
    }
    dias.innerHTML= '';
    for(let i = 1; i <=qtdDias; i++){
        dias.innerHTML += `<option> ${i} </option>`;
    }
    }
    if(Number(anos.value) % 4 == 0){
        qtdDias = 29;
    } else {
        qtdDias = 28;
    }
} 