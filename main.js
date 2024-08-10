//exercitiu 1 declaram variabile var 1
const heightVadim1 = 1.69;
let weightVadim1 = 78;
const heightAlex1 = 1.95;
let weightAlex1 = 92;


//exercitiu 1 declaram variabile var 2
const heightVadim2 = 1.88;
let weightVadim2 = 95;
const heightAlex2 = 1.76;
let weightAlex2 = 85;


//exercitiu 2 var 1
let bmiV1 = weightVadim1 / heightVadim1 ** 2;
let bmiVadim1 = bmiV1.toFixed(2);
let bmiA1 = weightAlex1 / heightAlex1 ** 2;
let bmiAlex1 = bmiA1.toFixed(2);
console.log('Vadim 1 BMI is: ' + bmiVadim1)
console.log('Alex 1 BMI is: ' + bmiAlex1)

//exercitiu 2 var 2
let bmiV2 = weightVadim2 / heightVadim2 ** 2;
let bmiVadim2 = bmiV2.toFixed(2);
let bmiA2 = weightAlex2 / heightAlex2 ** 2;
let bmiAlex2 = bmiA2.toFixed(2);
console.log('Vadim 2 BMI is: ' + bmiVadim2)
console.log('Alex 2 BMI is: ' + bmiAlex2)


//exercitiul 3 Compararea BMI-ului
let markHigherBMI1 = bmiVadim1 > bmiAlex1
let markHigherBMI2 = bmiVadim2 < bmiAlex1
console.log('It is Vadim`s BMI higher than Alex`s BMI = ' + markHigherBMI1)
console.log('It is Vadim`s BMI higher than Alex`s BMI = ' + markHigherBMI2)
