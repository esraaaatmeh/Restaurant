'use strict';
var form=document.getElementById('form')
var submit = document.getElementById('submit');

var f_id=1000;
function g_f(counter){
    ++f_id ;
    return f_id
};

const allFood = [];
function Food(f_id,foodName,type,price){
    this.f_id=f_id;
    this.foodName=foodName;
    this.type=type;
    this.price=price;
    }
function saveData(data){
    var stringData = JSON.stringify(allFood);
    localStorage.setItem("Food",stringData);

    
}
    

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    var f_id=g_f();
    let foodName = event.target.foodName.value;
    let type = event.target.type.value;
    let price = event.target.price.value;    
    const newFood = new Food(f_id,foodName,type,price);
    allFood.push(newFood);
    saveData(allFood);

    
}

