



var contentContainer=document.querySelectorAll('.content-consult')
var arrCont=Array.from(contentContainer)

var inputConsult=document.querySelectorAll('.content-consult input')
var arrInput=Array.from(inputConsult)

var btnSubmit=document.querySelectorAll('.content-consult button')
var arrBtn=Array.from(btnSubmit)

 



validator=()=>{
    console.log('*')
}

arrBtn.map((el)=>{

    el.addEventListener('click',()=>{
        arrInput.map((das)=>{
             
           if(das.value.length>10){
            toggleModalForm()
           }

           

        })
    })
})
