function register(){
    acnum = acno.value
    uname = uname.value
    pswd = pswd.value

    acDetails ={acnum,uname,pswd,balance:0}

    if(acnum in localStorage){
        alert("user already exist");
    }
    else{
        localStorage.setItem(acnum,JSON.stringify(acDetails))
        alert("ac created")
        window.location ='index.html'
    }
}

function login(){
    acnum = acno.value
    pswd = pswd.value

    if(acnum in localStorage){
        acData = JSON.parse(localStorage.getItem(acnum))
        if(pswd == acData.pswd){
            alert("Login success")
            window.location ='home.html'
        }
        else{
            alert("incorrect password")
        }
    }
    else{
        alert("not registered")
        window.location('register.html')
    }
}