function calculateIMC() {
    var weigth = document.getElementById("weigth").value;
    var heigth= document.getElementById("heigth").value;

    if (weigth !== ''&& heigth !==''){
        var bmi=weigth/((heigth/100)**2);
        var result= document.getElementById('result');
        result.innerHTML= 'Tu IMC es :'+ bmi.toFixed(2);

        //Clasificacion del IMC
        if (bmi<16){
            result.innerHTML +='- Delgadez Severa';
        }else if (16<=bmi && bmi <= 16.99){
            result.innerHTML +='- Delgadez moderada';
        }else if (17<=bmi && bmi <= 18.49){
            result.innerHTML +='- Delgadez aceptable';
        }else if (18.50<=bmi && bmi <= 24.99){
            result.innerHTML +='- Peso normal';
        }else if (25.00<=bmi && bmi <= 29.99){
            result.innerHTML +='- Sobrepeso';
        }else if (30.00<=bmi && bmi <= 34.99){
            result.innerHTML +='- Obeso : Tipo I';
        }else if (35.00<=bmi && bmi <= 40.00){
            result.innerHTML +='- Obeso : Tipo II';
        }else{
            result.innerHTML +='- Obeso : Tipo III';


        }
    }
}