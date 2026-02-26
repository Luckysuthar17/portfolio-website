window.onload = function () {

const salesCtx = document.getElementById("salesChart");
const profitCtx = document.getElementById("profitChart");

new Chart(salesCtx, {
type: "bar",
data: {
labels: ["Electronics", "Clothing", "Furniture"],
datasets: [{
label: "Sales",
data: [12000, 8000, 15000],
backgroundColor: ["#38bdf8","#6366f1","#22c55e"]
}]
},
options:{
plugins:{legend:{labels:{color:"white"}}},
scales:{
x:{ticks:{color:"white"}},
y:{ticks:{color:"white"}}
}
}
});

new Chart(profitCtx, {
type: "doughnut",
data: {
labels: ["Electronics", "Clothing", "Furniture"],
datasets: [{
data: [2500, 1200, 3000],
backgroundColor: ["#38bdf8","#6366f1","#22c55e"]
}]
},
options:{
plugins:{legend:{labels:{color:"white"}}}
}
});

};
