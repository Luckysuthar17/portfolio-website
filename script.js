window.onload = function () {

const salesCtx = document.getElementById("salesChart");
const profitCtx = document.getElementById("profitChart");

new Chart(salesCtx, {
type: "bar",
data: {
labels: ["Electronics", "Clothing", "Furniture"],
datasets: [{
label: "Sales",
data: [12000, 8000, 15000]
}]
}
});

new Chart(profitCtx, {
type: "pie",
data: {
labels: ["Electronics", "Clothing", "Furniture"],
datasets: [{
data: [2500, 1200, 3000]
}]
}
});

};
