const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;
    
    const tempSelected = document.getElementById('tempdiff');
    const valueTemp =  tempdiff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }

    const fahtoCel = (fah) => {
        let celcius = Math.round((fah - 32) * 5/9);
        return celcius;
    }
         
    let result;

    if(valueTemp == 'cel')
    {
     result = celToFah(numberTemp);
     document.getElementById('resultContainer').innerHTML= ` ${result} °Fahrenheit`;
    }
    else
    {
     result = fahtoCel(numberTemp);
     document.getElementById('resultContainer').innerHTML= ` ${result} °Celcius`;
    }
}

