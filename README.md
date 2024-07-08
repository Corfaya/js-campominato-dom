# TRACCIA
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

# Flow
- Dichiaro una funzione nominata con ritorno e senza parametri
    - Istruzioni:
        - Crea un elemento HTML (createElement() method) e lo salvo in una variabile
        - Aggiungo le classi necessarie all'elemento
        - Restituisco l'elemento HTML
- Recupero dal DOM l'elemento entro cui creare gli altri elementi e lo salvo in una costante
- Recupero dal DOM il button a cui voglio aggiungere il click event tramite id e lo salvo in una costante
- Aggiungo l'evento click al bottone
    - Nella callback function:
        - Svuoto la griglia
        - Dichiaro una variabile "square" per i quadrati
        - Eseguo un ciclo di 100 iterazioni per creare una griglia 10x10
            - Invoco la funzione di creazione dell'elemento HTML e la memorizzo nella variabile "square"
            - Aggiungo a ciascun elemento creato in "square" un evento click
                - Nella callback function:
                    - Aggiungo all'elemento clickato la classe "clicked-azure"
                    - Stampo su console "Hai cliccato su " + (indice + 1)
            - Aggiungo del testo a ogni elemento creato
            - Aggiungo in coda l'elemento creato all'interno del contenitore recuperato dal DOM