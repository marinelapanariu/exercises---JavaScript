Evenimente generale //Aceste evenimente au caracter general, pot fi adaugate la obiectul window, la documentul HTML sau la majoritatea elementelor HTML din pagina.
copy // se declansaza cand utilizatorul copie continutul unui element din pagina.
error // se declansaza cand apare o eroare la obiectul la care e atasat. De exemplu cand o imagine sau continut media nu se incarca.
load // se declansaza cand pagina (cu toate componentele) sau alta resursa la care e atasat s-a incarcat complet.
scroll // se declansaza cand se face 'scroll' la pagina sau la un element HTML (cand se deruleaza continutul).
Evenimente pentru Drag-Drop
drag // se executa coninuu (la fiecare 350 milisecunde) cand un element e tras dintr-un loc in altu.
dragend // e declansat cand utilizatorul termina operatiunea de tragere cu mouse-ul si elibereaza clicul.
dragenter // e declansat pe elementul definit pt. Drop (unde va fi lasat obiectul tras) cand acesta intra in suprafata lui.
dragleave // se executa continuu cand obiectul e tras in (sau scos din) afara zonei elementului unde trebuie plasat; cand paraseste suprafata acestuia.
dragover // se ataseaza la elementul pt. Drop. E declansat continuu in timp ce obiectul e tras pe elementul definit pentru Drop.
dragstart // e declansat imediat ce utilizatorul incepe sa mute obiectul.
drop // se ataseaza la elementul pentru Drop. Se declansaza cand obiectul tras (drag) e lasat la Drop. !!Vine imediat dupa dragend.
Evenimente pentru media //Aceste evenimente se aplica in general la elemente tip media: <audio>, <embed>, <img>, <object>, si <video>.
canplay // se declansaza cand browser-ul poate sa porneasca redarea continutului media.
ended // se executa cand piesa audio/video s-a terminat.
loadedmetadata // se declansaza cand s-au incarcat datele meta ale continutului media (durata, text trcks si dimensiuni pt. video).
loadstart // este emis cand incepe incarcarea continutului media.
pause // este emis cand se pune pauza la piesa audio/video.
play // se executa cand incepe redarea continutului audio/video.
seeking // se executa cand utilizatorul muta pozitia cursorului 'playback' (de derulare) in elementul audio/video.
timeupdate // se executa cand se schimba pozitia cursorului 'playback' (de derulare) in elementul audio/video.
volumechange // se declansaza cand se modifica volumul sonor.
Evenimente pentru mouse
click // se declansaza cand se apasa clic cu butonul mouse-ului pe un element.
contextmenu // se declansaza cand se apasa butonul dreapta al mouse-ului pe un element (right-click), inainte de afisarea meniului prestabilit la clic-dreapta.
dblclick // se declansaza cand se apasa dublu-clic cu mouse-ul pe un element.
mouseenter // este emis cand mouse-ul intra in suprafata unui element.
mouseleave // este emis cand mouse-ul iese din suprafata completa a unui element.
mousemove // se executa cand mouse-ul se misca pe suprafata unui element.
mouseout // se executa cand mouse-ul iese din suprafata unui element sau a unui element (copil) din interiorul lui. Similar cu 'mouseleave'; diferenta fiind ca 'mouseleave' nu se declansaza la iesirea din elemente copil.
mouseover // se executa cand mouse-ul intra in suprafata unui element sau a unui element (copil) din interiorul lui. Similar cu 'mouseenter'; diferenta fiind ca 'mouseenter' nu se declansaza la intrarea in elemente copil.
Evenimente pentru form si casete de formular
blur // se declansaza cand un element de formular (sau alt tip de element cu atribut contenteditable) pierde focus (e opusul lui 'focus').
change // se emite dupa ce se schimba valoarea de la un element de formular.
focus // se declansaza cand un element de formular (sau alt tip de element cu atribut contenteditable) primeste focus (cursorul e in el).
input // se declansaza cand se adauga date intr-un element de formular (sau alt tip de element cu atribut contenteditable).
invalid // este emis cand la trimiterea formularului elementul la care se asociaza evenimentul nu e valid conform setarilor stabilite.
reset // se executa cand se reseteaza datele din formular (cu butonul 'reset', sau metoda reset() ).
select // se emite cand e selectat text dintr-o caseta <input> sau <textarea>.
submit // se executa cand se trimite formular (cu butonul 'submit').
Evenimente pentru tastatura
keydown // se emite cand e apasat un buton de la tastatura.
keypress // se declansaza cand e apasat un buton de la tastatura care produce un caracter (nu se emite la Alt, CapsLock, Ctrl, Shift).
keyup // se emite dupa ce este eliberata apasarea unui buton.
Evenimente pentru window
beforeunload // se declansaza cand fereastra si documentul urmeaza sa fie inchise, la refresh sau deschidere alt link in fereastra. Va afisa o fereastra prestabilita de browser care informeaza utilizatorul daca vrea sau nu sa paraseasca pagina.
hashchange // actioneaza cand se modifica partea #hash din adresa URL.
pageshow // se declansaza dupa ce pagina (cu toate componentele) s-a incarcat complet. Similar cu 'load', diferenta fiind ca 'pageshow' se executa dupa 'load', chiar si cand e incarcata din cache sau history.
resize // se executa cand se face 'resize' la fereastra paginii (cand dimensiunile ferestrei se modifica).
Alte tipuri de evenimente
DOMContentLoaded // se ataseaza la obiectul document, si se executa cand toate elementele din pagina (documentul HTML) s-au incarcat in DOM, fara sa mai astepte incarcarea continutului extern (fisiere css, imagini, iframe). Nu functioneaza in <iframe>.
toggle // se declansaza cand elementul <details> este deschis sau inchis.
touchmove // se declansaza cand utilizatorul misca degetul pe ecran (pentru dispozitive cu touch-screen).
transitionend // se declansaza cand un efect CSS transition s-a executat complet.


