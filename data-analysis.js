async function loadData(){

const response = await fetch("dataset.csv")
const text = await response.text()

const rows = text.split("\n").slice(1)

const revenueByCategory = {}

rows.forEach(row=>{

const cols = row.split(",")

const category = cols[0]
const revenue = parseInt(cols[1])

if(!revenueByCategory[category]){
revenueByCategory[category]=0
}

revenueByCategory[category]+=revenue

})

const labels = Object.keys(revenueByCategory)
const data = Object.values(revenueByCategory)

const ctx = document.getElementById("analysisChart")

new Chart(ctx,{
type:"bar",
data:{
labels:labels,
datasets:[{
label:"Total Revenue",
data:data
}]
}
})

}

loadData()
