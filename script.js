document.addEventListener("DOMContentLoaded",function(){


/* typing animation */

const roles=[
"Data Analyst",
"SQL Specialist",
"Power BI Developer",
"Python Data Analyst"
]

let count=0
let index=0
let currentText=""
let letter=""

function type(){

if(count===roles.length){
count=0
}

currentText=roles[count]

letter=currentText.slice(0,++index)

document.getElementById("typing").textContent=letter

if(letter.length===currentText.length){

count++
index=0

setTimeout(type,1500)

}

else{

setTimeout(type,80)

}

}

type()



/* counter animation */

const counters=document.querySelectorAll(".counter")

counters.forEach(counter=>{

counter.innerText="0"

const update=()=>{

const target=+counter.getAttribute("data-target")
const value=+counter.innerText

const increment=target/50

if(value<target){

counter.innerText=Math.ceil(value+increment)

setTimeout(update,30)

}

else{

counter.innerText=target

}

}

update()

})



/* project chart */

const ctx=document.getElementById("projectChart")

new Chart(ctx,{

type:"bar",

data:{

labels:["Sales Analysis","Customer Segmentation","Financial Dashboard"],

datasets:[{

label:"Project Impact",

data:[85,70,90]

}]

}

})



/* particles background */

particlesJS("particles-js",{

particles:{

number:{value:80},

size:{value:3},

move:{speed:1}

}

})

})
