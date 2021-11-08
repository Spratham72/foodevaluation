
async function fetchData(){
    let food=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    let data=await food.json();
    console.log(data)
    showdata(data.meals)
}
var rate=[455,562,452,899,455,222,265,789,786,456,256,456,474,332,399,789,123,456,789,400,500,600,700,800,100,199,545,456,123]
var i=0;
fetchData()
function showdata(recipe){
    var proDiv=document.getElementById("product");
   recipe.forEach(item => {
    var div=document.createElement("div");
    var figure=document.createElement("figure");
    
    var img=document.createElement("img");
    figure.append(img);
    img.src=item.strMealThumb;
    var prod_name=document.createElement('p')
    prod_name.id="desc";
    prod_name.textContent=`Name: ${item.strMeal}`;
    var price=document.createElement("p");
    price.textContent=`Price: ${rate[i++]}`
    var cart=document.createElement("button");
    cart.textContent="Add to cart"
    cart.onclick=function (){
        addtocart(item)
    }
    div.append(figure, prod_name,price,cart);
   
    proDiv.append(div)
   })
}
if(localStorage.getItem("food")===null){
    localStorage.setItem("food",JSON.stringify([]));
    
  }
  function addtocart(p){
  var foodstorage=JSON.parse(localStorage.getItem("food"));
  foodstorage.push(p);
  localStorage.setItem("food",JSON.stringify(foodstorage));
  console.log(foodstorage)
  }