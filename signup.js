function getData(){
   
    var form=document.getElementById("signup");
    data={
        name:form.name.value,
        email:form.email.value,
        password:form.password.value,
        username:form.user.value,
        mobile:form.mobile.value,
        description:form.description.value
    };
    console.log(data)
    data=JSON.stringify(data);
    console.log(data)

    fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
        method:'POST',
        body:data,
        headers:{
            'Content-Type':"application/json",
        },
    })
    .then ((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res)
        location.href='login.html'
    })
    .catch((er)=>{
        console.log(er)
    })
}
