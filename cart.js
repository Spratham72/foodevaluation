var food=JSON.parse(localStorage.getItem("food"));
var proDiv=document.getElementById("product");
   food.forEach(item => {
    var div=document.createElement("div");
    var figure=document.createElement("figure");
    
    var img=document.createElement("img");
    figure.append(img);
    img.src=item.strMealThumb;
    var prod_name=document.createElement('p')
    prod_name.id="desc";
    prod_name.textContent=`Name: ${item.strMeal}`;
    div.append(figure, prod_name);
   
    proDiv.append(div)
   })

   function place(){
       setTimeout(() => {
           alert("Your order is accepted")
       }, 0);
       setTimeout(() => {
        alert("Your order is being cooked ")
    }, 3000);
    setTimeout(() => {
        alert("Your order is ready")
    }, 11000);
    setTimeout(() => {
        alert("Order out for delivery")
    }, 21000);
    setTimeout(() => {
        alert("Order delivered")
    }, 35000);
   }