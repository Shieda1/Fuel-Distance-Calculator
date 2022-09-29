// https://www.omnicalculator.com/everyday-life/fuel-distance

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const distanceRadio = document.getElementById('distanceRadio');
const fuelefficiencyRadio = document.getElementById('fuelefficiencyRadio');
const fuelquantityRadio = document.getElementById('fuelquantityRadio');

let distance;
let fuelefficiency = v1;
let fuelquantity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

distanceRadio.addEventListener('click', function() {
  variable1.textContent = 'Fuel efficiency';
  variable2.textContent = 'Fuel quantity';
  fuelefficiency = v1;
  fuelquantity = v2;
  result.textContent = '';
});

fuelefficiencyRadio.addEventListener('click', function() {
  variable1.textContent = 'Distance';
  variable2.textContent = 'Fuel quantity';
  distance = v1;
  fuelquantity = v2;
  result.textContent = '';
});

fuelquantityRadio.addEventListener('click', function() {
  variable1.textContent = 'Distance';
  variable2.textContent = 'Fuel efficiency';
  distance = v1;
  fuelefficiency = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(distanceRadio.checked)
    result.textContent = `Distance = ${computedistance().toFixed(2)}`;

  else if(fuelefficiencyRadio.checked)
    result.textContent = `Fuel efficiency = ${computefuelefficiency().toFixed(2)}`;

  else if(fuelquantityRadio.checked)
    result.textContent = `Fuel quantity = ${computefuelquantity().toFixed(2)}`;
})

// calculation

function computedistance() {
  return Number(fuelefficiency.value) * Number(fuelquantity.value);
}

function computefuelefficiency() {
  return Number(distance.value) / Number(fuelquantity.value);
}

function computefuelquantity() {
  return Number(distance.value) / Number(fuelefficiency.value);
}