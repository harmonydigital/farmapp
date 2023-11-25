 const loginSocial = document.getElementById('loginSocial')

 var btns = document.querySelectorAll('.toggle-loginsocial')


//converter objeto em arry


 var arrayactive= Array.from(btns)
 arrayactive.map((el)=>{
    el.addEventListener('click', function(){


        loginSocial.classList.toggle('show')
    })
 })


 












































const mcont=document.getElementById('modalLogin')

mcont.innerHTML=`
<div class="modal " id="mLogin" style="display:none;z-index:999;"> 
<div class="modal-body" id="modal-body" style="top: 11.4531px; position: fixed;">
  <div class="controls">
    <button onclick="toggleLogin()"><svg class="svg-inline--fa fa-chevron-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg><!-- <i class="fa-solid fa-chevron-left"></i> Font Awesome fontawesome.com --></button>
    <button onclick="toggleLogin()"><svg class="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path></svg><!-- <i class="fa-solid fa-xmark"></i> Font Awesome fontawesome.com --></button>
</div>

    <div class=" ">    
    <h2> Login <span id="namePage"></span></h2>
    <p>..</p>

    </div>
        
   
</div>
<div onclick="toggleLogin()" class="overlay"></div>
</div>

`

var mLogin = document.getElementById('mLogin')
 

toggleLogin=()=>{
    loginSocial.classList.toggle('show')
}