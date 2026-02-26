document.addEventListener("DOMContentLoaded", function(){

// Typing Animation

const text = ["Data Analyst","SQL Specialist","Power BI Developer"];

let count = 0;
let index = 0;
let currentText="";
let letter="";

function type(){

if(count === text.length){
count=0;
}

currentText = text[count];
letter = currentText.slice(0,++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index=0;
setTimeout(type,1500);
}else{
setTimeout(type,80);
}

}

type();


// Dashboard Data

const salesData = [
{category:"Electronics", revenue:12000, orders:80},
{category:"Clothing", revenue:8000, orders:120},
{category:"Furniture", revenue:15000, orders:60}
];

const revenueEl = document.getElementById("revenue");
const ordersEl = document.getElementById("orders");
const filterEl = document.getElementById("categoryFilter");
const ctx = document.getElementById("dashboardChart");

let chart;

function updateDashboard(selected){

let filtered = salesData;

if(selected !== "All"){
filtered = salesData.filter(d => d.category === selected);
}

let revenue=0;
let orders=0;

filtered.forEach(item=>{
revenue+=item.revenue;
orders+=item.orders;
});

revenueEl.innerText="$"+revenue;
ordersEl.innerText=orders;

const labels = filtered.map(d=>d.category);
const revenues = filtered.map(d=>d.revenue);

if(chart){
chart.destroy();
}

chart = new Chart(ctx,{
type:"bar",
data:{
labels:labels,
datasets:[{
label:"Revenue",
data:revenues
}]
}
});

}

filterEl.addEventListener("change",function(){
updateDashboard(this.value);
});

updateDashboard("All");

});
