function calculate(){
    var p = parseFloat(document.getElementById('p').value);
    var t = parseFloat(document.getElementById('t').value);
    var r = parseFloat(document.getElementById('r').value);
    
    var ci,ca,hci,hca,si,dif;

    ci = p*(Math.pow(1+(r/100),t)-1);
    ca = p*(Math.pow(1+(r/100),t));
    hci = p*(Math.pow(1+(r/200),(2*t))-1);
    hca = p*(Math.pow(1+(r/200),(2*t)));
    si = (p*t*r)/100;
    dif = ci-si;

    document.getElementById('ci').innerHTML = (ci.toFixed(2)).toString();
    document.getElementById('ca').innerHTML = (ca.toFixed(2)).toString();
    document.getElementById('hci').innerHTML = (hci.toFixed(2)).toString();
    document.getElementById('hca').innerHTML = (hca.toFixed(2)).toString();
    document.getElementById('si').innerHTML = (si.toFixed(2)).toString();
    document.getElementById('dif').innerHTML = (dif.toFixed(2)).toString();


    
}