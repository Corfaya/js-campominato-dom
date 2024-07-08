# TRACCIA BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

# Flow BONUS
- Dichiaro una funzione nominata con ritorno e (NEW) con parametro per la difficoltà
    - Istruzioni:
        - Crea un elemento HTML (createElement() method) e lo salvo in una variabile
        - Aggiungo le classi necessarie all'elemento (NEW: passo anche il parametro)
        - Restituisco l'elemento HTML
- Recupero dal DOM l'elemento entro cui creare gli altri elementi e lo salvo in una costante
- Recupero dal DOM il button a cui voglio aggiungere il click event tramite id e lo salvo in una costante
- (NEW) Recupero dal DOM il select in cui scegliere il livello di difficoltà
- Aggiungo l'evento click al bottone
    - Nella callback function:
        - Svuoto la griglia
        - Dichiaro una variabile "square" per i quadrati
        - (NEW) Dichiaro 3 variabili: levelSelection per recuperare il valore dell'option; squareLength per recuperare la misura del totale dei quadrati; squareClass per aggiungere al div una classe recuperata dal CSS in base al livello
        - (NEW) ? il livello selezionato ha valore 1
            - (NEW) => la lunghezza dei quadrati (squareLength) è 100
            - (NEW) => la classe da aggiungere (squareClass) è .easy-squares
        - (NEW) ? INVECE il livello selezionato ha valore 2
            - (NEW) => la lunghezza dei quadrati (squareLength) è 81
            - (NEW) => la classe da aggiungere (squareClass) è .medium-squares
        - (NEW) ? INVECE il livello selezionato ha valore 3
            - (NEW) => la lunghezza dei quadrati (squareLength) è 49
            - (NEW) => la classe da aggiungere (squareClass) è .hard-squares
        - Eseguo un ciclo di (NEW) iterazioni fino alla lunghezza del numero dei quadrati per creare una griglia (NEW) rispettivamente 10x10, 9x9, 7x7
            - Invoco la funzione di creazione dell'elemento HTML e passo come parametro la variabile della classe (squareClass)
            - Memorizzo la funzione nella variabile "square"
            - Aggiungo a ciascun elemento creato in "square" un evento click
                - Nella callback function:
                    - Aggiungo all'elemento clickato la classe "clicked-azure"
                    - Stampo su console "Hai cliccato su " + (indice + 1)
            - Aggiungo del testo a ogni elemento creato
            - Aggiungo in coda l'elemento creato all'interno del contenitore recuperato dal DOM