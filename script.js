fetch("https://free-food-menus-api-production.up.railway.app/burgers")
.then((response)=> response.json())  
.then((data)=> {
    console.log("DATE>>>", data);
    let myArr = data;
    let myDiv = document.getElementById("results");
    let myimg = document.getElementById("Image");
    myArr.map((data)=>{
        myDiv.innerHTML += `<p><strong>${data.country}<br> ${data.dsc}<br> ${data.id}<br>${data.img}<br>${data.name}<br>${data.price}<br>${data.rate}</strong></p>`
        //myimg.innerHTML =  
    })

}) 