var more = document.getElementsByClassName("mores");
  function readMore(){
     if (event.target.className = "btns") {
         //alert(event.target.id);
         if (event.target.innerText === "• Торцевание") {
             more[0].style.display = "inline-block";
             event.target.innerHTML = "Скрыть";
         } else {
             more[0].style.display = "none";
             event.target.innerHTML = "• Торцевание";
         }
     }
 }
 
  function readMore2() {
     if (event.target.className = "btns") {
         //alert(event.target.id);
         if (event.target.innerText === "• Вырубка") {
             more[1].style.display = "inline-block";
             event.target.innerHTML = "Скрыть";
         } else {
             more[1].style.display = "none";
             event.target.innerHTML = "• Вырубка";
         }
     }
 }
 function readMore3() {
     if (event.target.className = "btns") {
         //alert(event.target.id);
         if (event.target.innerText === "• Сверление") {
             more[2].style.display = "inline-block";
             event.target.innerHTML = "Скрыть";
         } else {
             more[2].style.display = "none";
             event.target.innerHTML = "• Сверление";
         }
     }
 }
