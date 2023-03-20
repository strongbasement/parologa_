
const paralogaimg=document.getElementById('paralogaimg');
const prtlogo=document.getElementById('prtlogo1');

function imgres()
{
    let width=window.innerWidth;
    paralogaimg.setAttribute("width",width);
    prtlogo.setAttribute("width",width/1.2);
    
}
imgres();
window.onresize=imgres;