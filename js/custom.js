function setLanguage(){
    var selectBox = document.getElementById("select_language");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    localStorage.setItem('language', selectedValue);
    location.reload();
}

// $(document).ready(function(){
//     if(localStorage.getItem('language')){
//         document.getElementById("select_language").value=localStorage.getItem('language');
//     }
// });