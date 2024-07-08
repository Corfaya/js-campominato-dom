# TRACCIA (old)
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

# Flow (old)
- Recupero dal DOM l'elemento entro cui creare gli altri elementi e lo salvo in una costante
- Recupero dal DOM il button a cui voglio aggiungere il click event tramite id e lo salvo in una costante
- Dichiaro una funzione nominata con ritorno e senza parametri
    - Istruzioni:
        - Crea un elemento HTML (createElement() method) e lo salvo in una variabile
        - Aggiungo le classi necessarie all'elemento
        - Restituisco l'elemento HTML
- Dichiaro una funzione "newGame()" senza ritorno e senza parametri
    - Istruzioni:
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
- Aggiungo l'evento click al bottone e invoco la funzione newGame
        

# TRACCIA (new)
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

# Flow (new)
