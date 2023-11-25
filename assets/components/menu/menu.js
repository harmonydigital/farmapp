
const navObj=document.querySelector('nav')

menutoggleMenu=()=>{

      navObj.classList.toggle('show')
    

}   

closeMenu=()=>{   navObj.removeAttribute('class') }   


dropDownMenu=()=>{
      
      toogleDrop=(evt)=>{

            console.log('')
            var thisDrop=evt.target.nextSibling.nextSibling
 
            if(thisDrop){

                  thisDrop.classList.toggle('show')
                  return console.log('drop',evt.target.nextSibling.nextSibling) 
            }

         }

      var itensDrop=Array.from(document.querySelectorAll('.menu ul .iten-dropdown'))  

      Array.from(itensDrop).map((elements)=>{
           
            elements.addEventListener("click", toogleDrop);
      })
      // itensDrop

      
}
dropDownMenu()