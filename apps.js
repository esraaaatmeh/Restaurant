'use strict';
var form=document.getElementById('form')
var table=document.getElementById('table')
var f_id=1000;
const allFood = [];
function Food(f_id,foodName,type,price){
    this.f_id=f_id;
    this.foodName=foodName;
    this.type=type;
    this.price=price;
    this.render();
    }

Food.prototype.render = function () {

        let r=document.createElement('tr')
        table.appendChild(r)
        
        let f_id=document.createElement('td')
        f_id.textContent=this.f_id;
        r.appendChild(f_id)

        let fName=document.createElement('td')
        fName.textContent=this.foodName;
        r.appendChild(fName)

        let type=document.createElement('td')
        type.textContent=this.type;
        r.appendChild(type)

        let price=document.createElement('td')
        price.textContent=this.price;
        r.appendChild(price)
        r.classList.add('row');

    
    }
    function g_f(counter){
        ++f_id ;
        return f_id
    };

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    var f_id=g_f();
    let foodName = event.target.foodName.value;
    let type = event.target.type.value;
    let price = event.target.price.value;    
    const newFood = new Food(f_id,foodName,type,price);

    
}

