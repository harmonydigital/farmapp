var containerForm=document.getElementById('modalform')




containerForm.innerHTML=`

<div class="modal " id="mform"  style="display:none;z-index:999;"> 
<div class="modal-body" id="modal-body" style="top: 11.4531px; position: fixed;">

    <div class="controls">
        <button onclick="toggleModalForm()"><svg class="svg-inline--fa fa-chevron-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg><!-- <i class="fa-solid fa-chevron-left"></i> Font Awesome fontawesome.com --></button>
        <button onclick="toggleModalForm()"><svg class="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path></svg><!-- <i class="fa-solid fa-xmark"></i> Font Awesome fontawesome.com --></button>
    </div>

    <form class='submitData'>

    <div class=" ">    
        <h2><span id=' '>Preencha os campos</span></h2> 
    </div>

    <div class="form-group ">    

    <div class=" ">    
         <input id='inputname'  type='text' placeholder='Digite seu nome'> 

    </div>
    <div class=" ">    
         
         <input  id='inputcpf'
     oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
     type = "number"
     maxlength = "11" placeholder='Digite seu CPF'>

    </div>
    <div class=" ">    
    <input id='inputdata' placeholder="Data de nascimento" class="textbox-n" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" />

    </div>
    <div class=" ">    
    <input id='inputfon' type='number' placeholder='Numero Telefone'> 

</div>
<div class=" ">    
<button type='submit' class='btn-send btn primary'>Enviar agora</button>
</form>

</div>
</div>

   
</div>
<div onclick="toggleModalForm()" class="overlay"></div>
</div>




`
 var iname=document.getElementById('iname').value
 document.querySelector('.mob-consult').addEventListener('submit',(evt)=>{
    evt.preventDefault()
    var mobDoc=document.getElementById('mobDoc').value

        if(mobDoc.length===11){
            console.log('9',mobDoc.length)
            document.getElementById('inputcpf').value=mobDoc
        }else{
            setTimeout(()=>{
            document.getElementById('returnMsg').classList.toggle('show')
                
            }, 500);

            setTimeout(()=>{
                document.getElementById('returnMsg').classList.toggle('show')
                    
                }, 4000);
        }

 })
document.querySelector('.submitData').addEventListener('submit',(evt)=>{

    evt.preventDefault()
    console.log('iname',document.getElementById('inputname').value )
    console.log('iname',document.getElementById('inputcpf').value )
    console.log('iname',document.getElementById('inputdata').value )
    
    console.log('iname',document.getElementById('inputfon').value )

    var url = "https://wa.me/551155400056?text=" // Seu numero
    +
    "*Olá, novo contato site" + "%0a" // Mensagem personalizada
    +
    "%0a" // Quebra de linha
    +
    "*Nome*: " +document.getElementById('inputname').value + "%0a" // Dados do formulário
    +
    "*Nº CPF*: " + document.getElementById('inputcpf').value  + "%0a" // Dados do formulário
    +
    "*Telefone*: " + document.getElementById('inputfon').value + "%0a" +
    "%0a" // Quebra de linha
    +
     

    setTimeout(function () {
    window.location.href = url;
}, 1000);

})

 

toggleModalForm=()=>{


   document.getElementById('mform').classList.toggle('show')
}

