let logout = document.getElementById("logout")

logout.onclick = function(){
    window.location.assign("index.html")
    alert("Logout successfully..")
    return
}

document.getElementById("menubtn").onclick = function(){
    document.getElementById("sidenavMenu").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("sidenavMenu").style.width = "0";
  }