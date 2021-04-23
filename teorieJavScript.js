RegExp: 
    Aceste expresii regulate folosesc paranteze (rotunde, patrate, acolade) prin care formeaza regulile de formare a cuvintelor. 
        Exemplu:
            c[eo]r //poate forma cuvintele: cer si cor
            [aeiou] //sablon pentru siruri care sa contina doar vocale
            [aeiouAEIOU] //sablon pentru siruri care sa contina doar vocale si permite majuscule
            [a-z] = [abcdefghijklmnopqrstuvwxyz] //siruri care pot include orice litera scrisa cu minuscule
            [0-9] //reprezinta siruri care contin doar numere.
    Pentru a specifica nr de caract pe care un sir il poate contine, se adauga o pereche de acolade in care se includ min si max nr de caract permis.
        Exemplu:
            [aeiou]{1,3} //corespunde sirurilor care sunt formate din 1, 2 si 3 vocale.
    Pentru a specifica repetarea mai multor parti ale unei expresii regulate, se includ partile respective intre paranteze rotunde.
        Exemplu: 
            ([sm]at){1 ,2} //corespunde unui numar de una sau doua repetari ale oricaruia dintre sirurile "sat", "mat".
    Daca un accent circumflex (^) este primul simbol mentionat intre parantezele drepte, acesta are ca efect inversarea semnificatiei expresiei regulate plasate intre paranteze.
        Exemplu:
        [^a-z] //corespunde oricarui caracter care nu este o litera mica.
    Cand acest caracter este pus in afara parantezelor drepte, el reprezinta inceput de sir sau de linie.
        Exemplu:
            ^[sm]at //corespunde sub-sirurilor "sat" sau "mat" numai daca acestea apar la inceputul sirului subiect.
    Pentru a forma o expresie regulata ce corespunde numai unui sir care include anumite caractere la sfarsit
        Exemple:
            pa[nr]a$ //corespunde sirurilor "pana" sau "para" numai daca acestea apar la sfarsitul sirului subiect.
    
    Caractere speciale si rolul lor in expresiile regulate:
        ^ //indica inceputul liniei
        $ //indica sfarsitul liniei
        . //(punct) orice caracter
        [] //un caracter dintre cele din paranezele patrate
        [^] // orice caracter, in afara celor din paranezele patrate
        \ //adauga in expresie caractere speciale, fara a mai avea rolul lor special
        + //caracterul (expresia) anterior acestui semn se poate repeta cel putin odata si de cate ori e posibil (de la 1 la infinit)
        * //caracterul (expresia) anterior acestui semn se poate repeta de cate ori e posibil sau niciodate (de la 0 la infinit)
        ? //caracterul (expresia) anterior acestui semn se poate repeta ce mult odata
        (|) //lista de optiuni SAU
        {m, n} //repetarea expresiei de la "m" la "n" ori
        \n //rand nou (pt. Windows e \r\n)
        \t //Tab
            Exemplu:
                [ca|ma] //sa corespunde cuvintelor: casa si masa.
        
    Formule speciale pentru scurtarea expresiei RegExp:
        \w = [a-zA-Z0-9_]//Caractere pt. cuvinte (litere, numere si '_')
        \W = [^a-zA-Z0-9_]//Caractere care nu sunt litere, numere sau '_'.
        \s = [\t\n\r ]//Spatiu, Tab, Rand-nou.
        \S = [^\t\n\r ]//Siruri fara Spatiu, Tab sau Rand-nou.
        \d = [0-9]//Caractere numerice.
        \D = [^0-9]//Caractere non-numerice.
        .  //Orice caracter, in afara de rand-nou
            Exemplu: 
                [\d\s]+ //se potriveste sirurilor ce contin doar numere si spatii.

    Iata cateva exemple de expresii regulate:
        (.*) //Reprezinta toate caracterele (prin .) repetate de cate ori e posibil (dat de *)
        //<bine> Cuvantul "bine"
        (ci|co)tim //Reprezinta "citim" si "cotim"
        ^www.+net$ //Sirurile care incep cu "www" si se sfarsesc cu "net"
        ^www\.[a-z0-9]+\.ro$ //Reprezinta sirurile "www.---.ro" unde '---' poate fi orice litera sau cuvant ce contine litere mici si numere
        (^-\+[0-9]*) //Orice numar care incepe cu "-" sau "+"
        \<tag\>(.*?)\<\/tag\> //</tag>Reprezinta continutul dintre <tag>...</tag>
        \<tag\>(.[^\<]+) //Textul de la <tag>, pana la prima "</"
        ^([a-zA-Z0-9]+[a-zA-Z0-9._%-]*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4})$  //</tag>Expresie regulata pentru adrese de e-mail
    
    Modificatori:
        g (Global) //determina continuarea cautarii expresiei si dupa prima potrivire
        i (ignore-case) //nu mai face diferenta intre majuscule si litere mici
        m (multiline) //schimba rolul lui "^" si "$". Daca multiline nu e specificat, acestia indica inceputul si sfarsitul textului din RegExp, 
                      //dar cand e adaugat vor indica inceputul si sfarsitul intregii linii
        s (dotall) //face caracterul punct "." sa reprezinte in expresia RegEsp si rand-nou
        x (extended)  //daca este adaugat, determina ignorarea spatiilor din formula expresiei (util cand se doreste un cod RegExp mai aerisit, dar spatiile sa nu fie interpretate ca spatiu, daca nu sunt prefixate cu '\')
        Acesti modificatori se adauga (unul sau mai multi) la sfarsitul exprexiei RegExp,
        Exemplu: /\d{3}-[a-z]+/gi (cauta toate sub-sirurile de forma "nnn-cuvant", 'nnn' fiind un numar de 3 cifre iar 'cuvant' poate fi si cu majuscule).
                

