'use strict';
let table = document.getElementById("table");
let arrayData = [];
let data = [];
function render() {
    for (let i = 0; i < data.length; i++) {
        let item = data[i];

        let r=document.createElement('tr')
        table.appendChild(r)
        
        let f_id=document.createElement('td')
        f_id.textContent=item.f_id;
        r.appendChild(f_id)

        let fName=document.createElement('td')
        fName.textContent=item.foodName;
        r.appendChild(fName)

        let type=document.createElement('td')
        type.textContent=item.type;
        r.appendChild(type)

        let price=document.createElement('td')
        price.textContent=item.price;
        r.appendChild(price)
        r.classList.add('row');

    }
}
function getData() {
    let retrievedData = localStorage.getItem("Food");
  
    let arrayData = JSON.parse(retrievedData);
    console.log(arrayData)
    
    return arrayData;
  }
  data = getData();
  render();