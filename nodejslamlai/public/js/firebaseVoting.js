
// alert('Xin chào các bạn')   
var ccccc = "admin"
var camcc = "admmmmmmm"
function writeData(){
    firebase.database().ref('data').push({ccccc:camcc});
}