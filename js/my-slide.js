
let panels = document.querySelectorAll('.beerpanel'); //array
let btn = document.querySelector('#swapbutton');

panels[2].classList.add('hidden');
panels[1].classList.add('hidden');
//console.log.(panels[1].classList);

function showHide() {
  //if the second bracket panel is hidden...
  if(panels[1].classList.contains('hidden')) {
  //... then hide the first panel, and show the second
  panels[0].classList.add('hidden');
  panels[1].classList.add('hidden');//hide the first panel
  panels[1].classList.remove('hidden');

}
else if (panels[2].classList.contains('hidden')) {
   panels[1].classList.add('hidden');
   panels[0].classList.add('hidden');
   panels[2].classList.remove('hidden');

 }
 else if(panels[0].classList.contains('hidden')) {
  panels[2].classList.add('hidden');
  panels[1].classList.add('hidden');
  panels[0].classList.remove('hidden');

}


}
btn.addEventListener("click",showHide,false);
