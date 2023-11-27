const body=document.getElementsByTagName('body')[0]
const msgDev=document.getElementById('dev')
 

 
msgDev.style.cssText='background:#00008f'

console.log(msgDev)
msgDev.innerHTML=`
    <div style="
    text-align: center;
    margin: 0px;
    padding: 40px 0;
    color:white;
    font-size: 13px;
    background:#A80002;
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100%;
">

<i style="
font-size: 20px;
margin: 0 auto 10px;
" class="fa-solid fa-circle-info"></i>
        <h1 style="
        color:white;
        font-size: 14px;
        margin: 0px;
    ">Harmony Building...<h1>
        <p style="
        color:white;
        font-size: 12px;
        margin: 0px;
    ">Aplicação em desenvolvimento...</p>
    </div>

`

 