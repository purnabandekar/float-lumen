// CHART

const ctx=document.getElementById("trendChart");

const chart=new Chart(ctx,{

type:"line",

data:{

labels:[],

datasets:[

{

label:"Temperature",

data:[],

borderColor:"#ff7a18",

tension:0.4

},

{

label:"Salinity",

data:[],

borderColor:"#22d3ee",

tension:0.4

}

]

}

});



// REALTIME DATA

function updateData(){

let temp=(27+Math.random()*3).toFixed(2);

let sal=(33+Math.random()).toFixed(2);

let heat=(200+Math.random()*50).toFixed(0);


document.getElementById("temp").innerText=temp+" °C";

document.getElementById("sal").innerText=sal+" PSU";

document.getElementById("heat").innerText=heat+" kJ";


let time=new Date().toLocaleTimeString();


chart.data.labels.push(time);

chart.data.datasets[0].data.push(temp);

chart.data.datasets[1].data.push(sal);


if(chart.data.labels.length>10){

chart.data.labels.shift();

chart.data.datasets[0].data.shift();

chart.data.datasets[1].data.shift();

}

chart.update();

}


setInterval(updateData,4000);



// MAP

var map=L.map('map').setView([19.07,72.87],5);


L.tileLayer(

'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

).addTo(map);


const floats=[

[19.07,72.87],

[18.52,73.85],

[15.29,73.91],

[21.14,72.83],

[12.97,80.25]

];


floats.forEach(loc=>{

L.marker(loc).addTo(map)

.bindPopup("ARGO Float Sensor");

});




// CHATBOT

function send(){

let msg=document.getElementById("msg").value;

let chat=document.querySelector(".messages");


chat.innerHTML+=`<p><b>You:</b> ${msg}</p>`;

chat.innerHTML+=`<p><b>AI:</b> Fetching ocean data...</p>`;


document.getElementById("msg").value="";

}