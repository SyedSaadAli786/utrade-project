let sidebar = document.querySelector(".sidebar");
      let closeBtn = document.querySelector("#btn");
      let searchBtn = document.querySelector(".bx-search");
    
      closeBtn.addEventListener("click", ()=>{
        sidebar.classList.toggle("open");
        menuBtnChange();//calling the function(optional)
      });
    
      searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
        sidebar.classList.toggle("open");
        menuBtnChange(); //calling the function(optional)
      });
    
      // following are the code to change sidebar button(optional)
      function menuBtnChange() {
       if(sidebar.classList.contains("open")){
         closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
       }else {
         closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
       }
      }

function AdmisntatorAdd(){

  let addList = document.getElementById("AdmisntatorAdd").innerHTML

}

function toggleDropdown() {
  let dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}
function toggleDropdown11() {
  let dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}
function toggleDropdown2() {
  let dropdownContent = document.getElementById("dropdownContent2");
  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}
function toggleDropdown21() {
  let dropdownContent = document.getElementById("dropdownContent2");
  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}
function toggleDropdown3() {
  let dropdownContent = document.getElementById("dropdownContent3");
  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}
function toggleDropdown31() {
  let dropdownContent = document.getElementById("dropdownContent3");
  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}
function toggleDropdown4() {
  let dropdownContent = document.getElementById("dropdownContent4");
  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}

function toggleDropdown41(){
  let dropdownContent = document.getElementById("dropdownContent4");
  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}






