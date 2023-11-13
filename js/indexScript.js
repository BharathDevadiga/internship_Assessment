let loginOption = document.getElementById("login-option")
let registerOption = document.getElementById("register-option")

let logg = document.getElementById("login")
let registerUser = document.getElementById("registerUser")

var u_name = ""
var u_passW = ""
var u_securityQues = ""
var u_securityAns = ""

loginOption.onclick = function(){
    loginOption.style.backgroundColor = 'lightblue';
    document.getElementById("security-field").style.height = "0"
    document.getElementById("answer-field").style.height = "0"
    document.getElementById("registerUser").style.display = 'none'
    document.getElementById("register-btn").style.height = '0'
    document.getElementById("login").style.display = ''
    document.getElementById("logg-btn").style.height = '45px'
    registerOption.style.backgroundColor = ''
}

registerOption.onclick = function(){
    registerOption.style.backgroundColor = 'lightblue'
    document.getElementById("security-field").style.height = "45px"
    document.getElementById("answer-field").style.height = "45px"
    document.getElementById("login").style.display = 'none'
    document.getElementById("logg-btn").style.height = '0'
    document.getElementById("registerUser").style.display = ''
    document.getElementById("register-btn").style.height = '45px'
    loginOption.style.backgroundColor = '';
}

logg.onclick = function(){
    const username = document.getElementById("userName").value
    const pass = document.getElementById("userPassword").value

    console.log(u_name)
    console.log(username)
    
    if(username == "" && pass == ""){
        alert("Invalid Name and Password")
        return
    }

    if(username == u_name && pass == u_passW){
        window.location.assign("HomePage.html")
        alert("Registration success")
        return
    }else{
        alert("Invalid Name and Password")
    }
}

registerUser.onclick = function(){

    let user_n = document.getElementById("userName").value
    let passW = document.getElementById("userPassword").value
    let s_ques = document.getElementById("securityQes").value
    let s_ans = document.getElementById("s_answer").value


    if(user_n != "" && passW != "" && s_ques != "" && s_ans != ""){
        u_name = user_n
        u_passW = passW
        u_securityQues = s_ques
        u_securityAns = s_ans
        console.log(u_name)
        alert("Registration Successfull..")
        document.getElementById("security-field").style.height = "0"
        document.getElementById("answer-field").style.height = "0"
        document.getElementById("registerUser").style.display = 'none'
        document.getElementById("register-btn").style.height = '0'
        document.getElementById("login").style.display = ''
        document.getElementById("logg-btn").style.height = '45px'
        loginOption.style.backgroundColor = 'lightblue';
        registerOption.style.backgroundColor = ''
        document.getElementById("userName").value = ''
        document.getElementById("userPassword").value = ''
        return
    }else{
        alert("Please Enter the Details")
    }
}

