//
dataPag = [{
    name: 'ajuda',
    content: 'Conteúdo de ajuda'
 }, {
    name: 'termos',
    content: 'Conteúdo de termos'
 }, {
    name: 'privacidade',
    content: 'A sua privacidade é importante para nós. É política do Prianti respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Prianti, e outros sites que possuímos e operamos. Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado. Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados. Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei. O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade. Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados. O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.'
 }, {
    name: 'seguranca',
    content: ' O site é confiável e seguro para o usuário conforme informado pelo Site Check. A página verifica informações do site para identificar possíveis problemas de segurança.  '
 }]
 
 
 var btnMOdal = document.querySelectorAll('.activeModalPage')
 var arrBtn = Array.from(btnMOdal)
 
 
 mousePos = {};
 
 var modalpagcontain = document.getElementById('modalpagcontain')
 var modl = `   
 
 <div class="modal " id="mpag"  style="display:none;z-index:999;"> 
 <div class="modal-body" id="modal-body" style="top: 11.4531px; position: fixed;">
   <div class="controls">
     <button onclick="toggleModalPag()"><svg class="svg-inline--fa fa-chevron-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg><!-- <i class="fa-solid fa-chevron-left"></i> Font Awesome fontawesome.com --></button>
     <button onclick="toggleModalPag()"><svg class="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path></svg><!-- <i class="fa-solid fa-xmark"></i> Font Awesome fontawesome.com --></button>
 </div>
 
     <div class=" ">    
     <h2><span id='namePage'></span></h2>
     <p id='content-text'>..</p>
 
     </div>
         
    
 </div>
 <div onclick="toggleModalPag()" class="overlay"></div>
 </div>
 `
 
 modalpagcontain.innerHTML += modl
 
 
 innerContent = (namePg) => {
    var contenttext = document.getElementById('content-text')
    contenttext.innerHTML = 'ok'
 
 
    dataPag.map((el) => {
       if (namePg == el.name) {
          console.log(el.content)
          contenttext.innerHTML = el.content
       }
    })
 }
 
 toggleModalPag = () => {
 
 
    if (modalPag) {
       modalPag.style.top = mousePos.y + "px";
       modalPag.style.position = "fixed";
 
    }
    var modalPag = document.getElementById('mpag').classList.toggle('show')
 
 }
 namePage = document.getElementById('namePage')
 
 arrBtn.map((th) => {
 
    th.addEventListener('click', function (e) {
 
       document.getElementById('mpag').classList.toggle('show')
       namePage.innerHTML = e.target.getAttribute('name')
 
       var namePg = e.target.getAttribute('name')
 
       innerContent(namePg)
 
    })
 })
 
 
 var btnConvert = btnGetMsg = document.querySelectorAll('.convert-btn')
 const arr = Array.from(btnConvert);
 const modal = document.getElementById('modalCall')
 const modalBody = document.getElementById('modal-body')
 
 var mousePos = {};
 
 
 toggleModal = () => {
    modal.classList.toggle('show') 
    modalBody.style.top = mousePos.y + "px";
    modalBody.style.position = "fixed";
 }
 arr.map((el) => {
    el.addEventListener('click', (e) => {
       e.preventDefault()
       var rect = e.target.getBoundingClientRect(); // get some poition, scale,... properties of the item
       mousePos.x = e.clientX - rect.left; // get the mouse position relative to the element
       mousePos.y = e.clientY - rect.top;
 
 
       return toggleModal()
 
    })
 })