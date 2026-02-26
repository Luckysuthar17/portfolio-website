const salesChart = document.getElementById("salesChart");

new Chart(salesChart,{

type:"bar",

data:{
labels:["Electronics","Clothing","Furniture"],

datasets:[{
label:"Sales",
data:[12000,8000,15000]
}]
}

});


const profitChart = document.getElementById("profitChart");

new Chart(profitChart,{

type:"pie",

data:{
labels:["Electronics","Clothing","Furniture"],

datasets:[{
data:[2500,1200,3000]
}]
}

});
