function showLoader(){
    document.getElementsByClassName("loader").style.display='block'
}
function hideLoader(){
    document.getElementsByClassName("loader").style.display='none'
    document.getElementsByClassName("home-banner").style.display='block'
}
var body=document.getElementsByClassName('home-banner')
body.addEventListener('load',hideLoader)
showLoader()