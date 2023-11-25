const app = document.getElementById('app')
getSubmit=()=>{
   console.log('it')
}
 
relogio=()=>{
    containerDate=document.getElementById('relogio')
    const data=new Date()
    let hr=data.getHours()
    let mn=data.getMinutes()
    let ms=data.getSeconds()


    let horaatual=hr+":"+mn+":"+ms
    // console.log(horaatual)

    if(containerDate){
        containerDate.innerHTML=`<h5>Horário de Brasília `+horaatual+`</h5>`
    }

    return horaatual
}  
gotop=()=>{

 
   window.scrollTo(0, 0);
}
initapp=()=>{
    app.innerHTML=`
        <header  id="top">

      

        <div   class="container-flx">
            <div class='menu'>
            <button onclick='menutoggleMenu()' class='btn-menu'>
             
            <img class='logo' src='assets/img/menu-bar.png' alt='..'>
            </button>
                <nav>
                    <div class='controls' onclick='closeMenu()' >
                        <button>
                        <svg class="svg-inline--fa fa-chevron-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg>
                        </button>
                        <button onclick='closeMenu()' >
                        <svg class="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path></svg>
                        </button>
                    </div>
                    <ul>
                       
                        <li class='iten-dropdown' >
                           <a href=' javascript:void(0)'>Serviços</a>
                           <div class='dropdown'>
                              <ul>
                               
                                 <li>
                                    <a href='#contact' class='activeModalConsult' onclick='toggleModalForm()' target='_blank' >Consulta CPF Serasa<i class="fa-solid fa-arrow-right"></i></a>
                                 </li>
                                 <li>
                                  <a href='https://protestosp.com.br/consulta-de-protesto' class=' '  target='_blank' >Consulta CPF Cartório<i class="fa-solid fa-arrow-right"></i></a>
                                  </li>
                                   
                              </ul>
                           </div>
                        </li>
                        <li>
                           <a href='#benfits'>Vantagens</a>
                        </li>
                        <li>
                        <a href='#steps'>Passo a passo</a>
                     </li>
                  
                     <li class='iten-dropdown' >
                     <a href=' javascript:void(0)'>Entenda seus direitos</a>
                     <div class='dropdown'>
                        <ul>
                        
                   
                           <li>
                              <a href='https://legislacao.presidencia.gov.br/atos/?tipo=LEI&numero=4595&ano=1964&ato=840QTVU9UNVRVTf4c' target='_blank' >Lei nº 4.595 <i class="fa-solid fa-arrow-right"></i></a>
                           </li>
                           <li>
                              <a href='https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm' target='_blank' >Lei nº 8.078<i class="fa-solid fa-arrow-right"></i></a>
                           </li>
                           <li>
                              <a href='https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp105.htm' target='_blank' >Lei Complementar Nº 105<i class="fa-solid fa-arrow-right"></i></a>
                           </li>
                            <li> 
                              <a href='https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm#:~:text=43.,sobre%20as%20suas%20respectivas%20fontes' target='_blank' >Artigo 43 da LEI Nº 8.078<i class="fa-solid fa-arrow-right"></i></a>
                           </li>
                           <li>
                           <a href='https://lgpd-brasil.info/capitulo_06/artigo_42' target='_blank' >ARTIGO 42 DA LEI LGPD <i class="fa-solid fa-arrow-right"></i></a>
                        </li>
                          
                        </ul>
                     </div>
                  </li>
                     
                        
                        
                        <li >
                            <button class='btn primary convert-btn' >
                                <span>Atendimento</span>
                                <i class="fa-brands fa-whatsapp"></i>
                            </button>
                        </li>
                        <li style='display:none;'>
                            <div class='btn inline ' onclick='toggleLogin()' target='_blank'>
                                <span>Entrar</span>
                                <i class="fa-solid fa-arrow-right-to-bracket"></i>
                            </div>
                        </li>
                        
                    </ul>
                </nav>
            </div>
            
                <div class='brand'><a href='index.html'>
                <img class='h-sm' src='assets/img/prianti-logo.png' alt='..'></a>
                <img class='h-xs' src='assets/img/logo-desk.png' alt='..'></a>
                </div>
                <div style=" display: flex;  align-items: center;  margin: 20px;">
                  
                <a class='activeModalPage' name='ajuda' href='#contact'>
                ?

               </a>

                   
                  </span>
                </div>
            </div>
             <div class='user-area'> 
               <div class='container-flx'>  
                  <div class=''>  
                     <span>Busque restrições em seu CPF.<span>
                  </div>
               <div onclick='toggleLogin()' <i  style='display:none;' class='' >  
                  <i  style='display:none;' class="fa-regular fa-user"></i>Entrar
               </div> 
               </div> 
               </div> 


               <div class='searchapi' >

                  <div class='content-consult'>
                     <form class='mob-consult'>
                        <div class='input-group' class='position: relative;'>    
                           <span><i class="fa-regular fa-address-card"></i></span>  
                           <input id='mobDoc' style="position: absolute;left: 0; width: 96%; " name="somename" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                           type = "number"  maxlength = "11" placeholder='Busque seu CPF'>  
                           <button typ='submit' class='getForm'><i class="fa-solid fa-arrow-right"></i></button>
                        </div>  
                     <form> 
                  </div>
               </div>

       
        </header>

        <main id='main'> 
                <div class='display'  > 

                          
                           <div class='content-consult' style='display:none'>
                              <div class='input-group' class='position: relative;'>   
                              <span><i class="fa-regular fa-address-card"></i></span>  
                              <input id='' style="position: absolute;left: 0; width: 96%; " name="somename" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                              type = "number"  maxlength = "11" placeholder='Busque seu CPF'> 

                              <button class='getForm'><i class="fa-solid fa-arrow-right"></i></button>
                              
                  
                           </div> 
                             
                          
                        </div>

                        <div class='social'>
                            <a class='' href='#'  target="_blank">    
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            
                            <a class='' href="#" target="_blank">
                              <i class="fa-brands fa-facebook"></i>
                            </a>
                            
                        </div>

                        <div style="
                        position: absolute;
                        left: 42%;
                        bottom: 0;
                    " >
                        <button onclick='toggleModalForm()' class=' '>
                        Busque seu CPF
                        
                           <i class="fa-solid fa-arrow-right"></i></button>

                        </div>


                </div>
                  <div id='benfits' class='highlights'>
                     <div class='content-text'>
                              <h2>
                              Conheça <strong>vantagens</strong> de Reativar seu <strong>Crédito</strong> 
                              e voltar a investir.</h2>
                     
                           </div>
                     <div class='container'>
                        <div>
                           <img class='persona' src='assets/img/persona2.png'>
                        </div>
                        
                           <div class='card-container'>
                              <div class='card active'>
                                 <div class='card-header'>
                                    <img class='icon' src='assets/img/$.png'>
                                 </div>
                                 <div class='card-main'>
                                    <h5>  
                                    
                                    Reabilitar seu crédito e voltar a fazer negócios.
                                    </h5>
                                    <p>
                                    Finanças estruturadas.
                                    </p>
                                 </div>
                                 <div class='card-footer'>
                                    <button>
                                    <i class="fa-regular fa-circle-check"></i>
                                    </button>
                                 </div>   
                              </div>
                              
                              <div class='card'>
                                 <div class='card-header'>
                                    <img class='icon' src='assets/img/flag-icon-confianc.png'>
                                 </div>
                                 <div class='card-main'>
                                    <h5>  
                                    Processos confiáveis e transparentes.
                                    </h5>
                                    <p>
                                       Resolva e volte a comprar.
                                    </p>
                                 </div>
                                 <div class='card-footer'>
                                    <button>
                                      <i class="fa-regular fa-circle-check"></i>
                                    </button>
                                 </div>   
                              </div>

                              <div class='card'>
                                 <div class='card-header'>
                                    <img class='icon' src='assets/img/flag-icon-grafic.png'>
                                 </div>
                                 <div class='card-main'>
                                    <h5>  
                                    Aumento da pontuação do Score de crédito.
                                    </h5>
                                    <p>
                                    Acelere seu negócio.
                                    </p>
                                 </div>
                                 <div class='card-footer'>
                                    <button>
                                       <i class="fa-regular fa-circle-check"></i>

                                    </button>
                                 </div>   
                              </div>
                              <div class='card'>
                                 <div class='card-header'>
                                    <img class='icon' src='assets/img/flag-icon-fil.png'>
                                 </div>
                                 <div class='card-main'>
                                    <h5>  
                                    Operação 100% humanizada.
                                    </h5>
                                    <p>
                                    Consultamos suas dívidas.
                                    </p>
                                 </div>
                                 <div class='card-footer'>
                                    <button>
                                    <i class="fa-regular fa-circle-check"></i>

                                    </button>
                                 </div>   
                              </div>
                           </div>
                     </div>
                  </div>

                  <div id='steps' class='bread'>
                     <div class='content-text'>
                        <h2>Passo a passo <strong>simples</strong> para você reativar seu crédito agora..</h2>
                     </div>
 
                     <div class='container'>
                        <div>
                           <img class='icon' src='assets/img/persona.png'>
                        </div>
                          
                              <div class='card-container'>
                                 
                              <div class='card' >
                                       <div class='card-header'>
                                       <div class='tooltip blue'>
                                       1
                                       </div>
                                       </div>
                                       <div class='card-main'>
                                          <div class='title-flex'   > 
                                             <h5>  
                                             Busque pelo seu CPF
                                             </h5>
                                          </div>

                                         
                                          <button class='btn circle  getForm' style='display:none;'>
                                          <i class="fa-solid fa-arrow-right"></i>
                                          </button>

 


                                       </div>
                                       
                                    </div>      
                              
                              <div class='card'>
                                       <div class='card-header'>
                                       <div class='tooltip blue'>
                                       2
                                       </div>
                                       </div>
                                       <div class='card-main'>
                                          <h5>  
                                          Entenda sua dívida
                                          </h5>
                                          <p>
                                          Equipe pronta para ajuda.
                                          </p>
                                       </div>
                                       
                                    </div>
                                    <div class='card'>
                                    <div class='card-header'>
                                    <div class='tooltip blue'>
                                    3
                                    </div>
                                    </div>
                                    <div class='card-main'>
                                       <h5>  
                                       Leia o contrato e entenda o processo
                                       </h5>
                                       <p>
                                       <a hred='arquivo.pdf' target='_blank'>Clique </a> e faça download do pdf
                                       </p>
                                    </div>
                                    
                                 </div>      
                           
                                    <div class='card active'>
                                 <div class='card-header'>
                                 <div class='tooltip blue'>
                                 4
                                 </div>
                                 </div>
                                    <div class='card-main' onclick="toggleModalForm()">
                                       <h5>  
                                          Pronto! Clique para suporte
                                       </h5>
                                       <p>
                                       Simples e rápido
                                       </p>
                                    </div>
                                     
                                 </div>

                                 
                              </div>
                        </div>
                     </div>
                  
                     </div>

                  <div class='action'>
                     <button class="btn primary" onclick='toggleModalForm()'>
                        <span>Busque seu CPF</span>
                        <i class="fa-regular fa-file"></i>
                     </button>
                  </div>


                </div>

                



               



 
 
                    
               </div>

               <div class='mv'>
               <div class='content-text'>
                  <h2>Videos informativos para ajuda-lo a reabilitar seu <strong>crédito.</strong> </h2>

               </div>
               <div class='container-flex'>
                  <div>
                     <video width="100%" controls>
                        <source src="assets/img/videoCredito.mp4" type="video/mp4">
                        <source src="mov_bbb.ogg" type="video/ogg">
                        Your browser does not support HTML video.
                     </video>
                  </div>
                  <div>
                  <video width="100%" controls>
                  <source src="assets/img/video2.mp4" type="video/mp4">
                  <source src="mov_bbb.ogg" type="video/ogg">
                  Your browser does not support HTML video.
               </video>
                  </div>
               </div>
               <div class="action">
                     <button class="btn primary" onclick="toggleModalForm()">
                        <span>Busque seu CPF</span>
                        <svg class="svg-inline--fa fa-file" aria-hidden="true" focusable="false" data-prefix="far" data-icon="file" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M0 64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM336 448V160H256C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V448C48 456.8 55.16 464 64 464H320C328.8 464 336 456.8 336 448z"></path></svg><!-- <i class="fa-regular fa-file"></i> Font Awesome fontawesome.com -->
                     </button>
                  </div>
            </div>

               <div class='map'>
                  <div class='container-flex'>
                     <div>
                        <div class='content-text'>
                           <h2>Fale com nossa equipe e volte a ter <strong>crédito.</strong> </h2>
                           <p>
                              Avenida da República 251 - Sala 49 / Centro - Santa Isabel.
                           </p>
                           <p>
                              +55 (11) 5540-0056
                           </p>
                              <a class="btn primary" href="#"  onclick='toggleModalForm()'>
                                 <span>Atendimento</span>
                                 <svg class="svg-inline--fa fa-whatsapp" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg><!-- <i class="fa-brands fa-whatsapp"></i> Font Awesome fontawesome.com -->
                              </a>
                        </div>
                     </div>
                     <div>
                        <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=avenida%20da%20Rep%C3%BAblica%20251,sala49%20centro%20santa%C2%A0Isabel+(Prianti%20e%20Associados)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe></div>
                     </div>
                  </div>
               </div>


        </main>

    `
   
}   
gotop()
app ? initapp() : console.log('err')