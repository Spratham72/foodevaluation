function login(){
   
    var form=document.getElementById("login");
    data={
       
        username:form.username.value,
        password:form.pass.value,
    };
    console.log(data)
    dataSend=JSON.stringify(data);
    console.log(data)
 
    fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
     method:'POST',
     body:dataSend,
     headers:{
             'Content-Type':"application/json",
         },
    })
    .then ((res)=>{
         return res.json();
     })
     .then((res)=>{
         console.log(res)
         console.log(data.username,res.token)
         fetchmyData(data.username,res.token);
     })
 
 }
 
 function fetchmyData(username, token){
 
     fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
     headers:{
             'Content-Type':"application/json",
             Authorization:`Bearer ${token}`,
         },
    })
    .then ((res)=>{
         return res.json();
     })
     .then((res)=>{
         console.log(res)
         location.href="menu.html"
     })
 
 }