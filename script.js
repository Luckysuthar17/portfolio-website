const ctx = document.getElementById("chart");

new Chart(ctx, {

type:"bar",

data:{

labels:["Electronics","Clothing","Furniture"],

datasets:[{

label:"Sales",

data:[12000,8000,15000]

}]

}

});
