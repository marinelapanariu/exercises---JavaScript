//o funcţie care verifică dacă cookie-ul a fost setat
function getCookie(c_name)
{
    if (document.cookie.length>0)
    {   //fct verifică mai întâi dacă în obiectul document.cookie este memorat vreun cookie
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1)
        { 
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) 
                c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return "";
}
//fct care afişează un mesaj de bun venit dacă cookie-ul este setat şi o casetă prompt care cere numele vizitat, în caz contrar
function checkCookie()
{
    username=getCookie('username');
    if (username != null && username != "")
    {
        alert('Welcome again ' + username +'!');
    }
    else
    {
        username=prompt('Please enter your name:',"");
        if (username!=null && username!="")
        {
            setCookie('username',username,365);
        }
    }
}
   
