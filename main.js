function pageOnload(){
    arrayCountries();
}

async function arrayCountries() {
// Кунули запит на API 
let response = await fetch("https://countriesnow.space/api/v0.1/countries/capital")
// Отримали відповідь
    let jsonData = await response.json()

// Перенесли дані з API відповіді в масив за допомогою циклу
    let countryInArray = new Array();
    for (let i=0; i<jsonData.data.length-1; i++){
    countryInArray[i]= jsonData.data[i].name;
    }
// Створили даталист із даних в масиві
    var list = document.getElementById('datalistOptionsCountry');
    countryInArray.forEach(function(item){
       var option = document.createElement('option');
       option.value = item;
       list.appendChild(option);
    });
}

async function searchCapital(a) {
// Кунули запит на API 
    let response = await fetch("https://countriesnow.space/api/v0.1/countries/capital")
// Отримали відповідь
    let jsonData = await response.json()

// Запустили цикл для перевірки   
    for (let i=0; i<jsonData.data.length-1; i++){
        if (a == jsonData.data[i].name){
// Якщо тру то присвоюємо значення і показуємо результат
            let capital = jsonData.data[i].capital;
            document.getElementById('capital').innerHTML = capital;
            break;
            }
// Якщо фолс видаємо текст що такої країни не існує
        else (document.getElementById('capital').innerHTML = "Country doesn`t exist")    
    }
        
}

btnFind.onclick = function () {
    // .trim() = ігнор пробілів перед і після значення
    const country = document.getElementById('countryName').value.trim();
     
    //TODO: пофіксити форматування для країн з 2+ слів
    // Форматування тексту відповідно до формату даних.
    // const countryDebug = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
    // console.log(countryDebug);
    
    searchCapital(country);
    buttonStateChange();
    }

btnClear.onclick = function () {
    document.getElementById('capital').innerHTML = "";
    document.getElementById('countryName').value = "";
    buttonStateChange();
}
