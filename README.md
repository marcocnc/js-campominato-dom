Griglia Campo Minato
===
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
## Procedimento
1. Fare un markup provvisorio della griglia coi quadrati che che avrà una classe con display: none con in particolare il bottone al centro;
2. Per rendere possibile ciò si andrà a richiamare il bottone con l'addEventListener, al cui click comparirà la griglia (togliendo la classe col display: none) e scomparirà il bottone;
3. Sempre nell'addEventListener del bottone si creerà un ciclo for che genera i quadrati;
4. A questo punto nel file CSS si crea una classe clicked che avrà uno sfondo azzurro che verrà aggiunta e tolta quando l'utente clicca quel quadrato (toggle);
5. Ora al click del quadrato dovrà comparire in console il numero della cella cliccata, quindi il numero non sarà visibile all'utente.