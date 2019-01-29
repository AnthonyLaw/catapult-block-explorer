function setLanguage(){
    var selectBox = document.getElementById("select_language");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    localStorage.setItem('language', selectedValue);
    location.reload();
}