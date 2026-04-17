# Formularis i validacions

## Validacions síncrones
El camp de cerca comprova que el text tingui almenys dues lletres i que no superi els cinquanta.  
Aquesta revisió es fa al moment, mentre l’usuari escriu.

## Validació asíncrona
També hi ha una comprovació que espera mig segon abans de donar resposta.  
Si s’escriu “zzz”, es considera que no hi ha coincidències i es marca com a error.

## Debounce
Els canvis del camp no es processen de seguida: s’espera una mica abans d’actuar, per evitar repeticions mentre encara s’està teclejant.

## Comportament del formulari
Els missatges d’error només apareixen quan el camp ha estat tocat.  
Quan la comprovació asíncrona està en marxa, es mostra un avís.  
El botó de netejar només surt quan hi ha text.
