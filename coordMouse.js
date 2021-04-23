<!DOCTYPE html> 
<html>
<head>
<title>Coordonatele cursorului</title>
</head>
<body>
<form name=formular> Coordonatele cursorului<br /><br />
  X <input type=text name=x value=""><br />
  Y <input type=text name=y value="">
  </form>
  <script>
  var InternetExplorer = document.all?true:false;
  if (!InternetExplorer)
  document.captureEvents(Event.mousemove);
  document.onmousemove = pozitie;
  function pozitie(poz)
  {
  var x;
  var y;
  if (!InternetExplorer)
  {
  x = poz.pageX;
  y = poz.pageY;
  }
  if (InternetExplorer)
  {
  x = event.clientX + document.body.scrollLeft;
  y = event.clientY + document.body.scrollTop;
  }
  document.formular.x.value=x;
  document.formular.y.value=y;
  return true; }
  </script>
  </body>
  </html>