# calcolo del prezzo del biglietto del treno
## Traccia:
 
 Il programma dovrà chiedere all'utente
  
  <u>**_il numero di chilometri che vuole percorrere_**</u> e <u>**_l'età del passeggero_**</u>.

Sulla base di queste informazioni dovrà calcolare 
<u>**_il prezzo totale del viaggio_**</u>, 

secondo queste regole:

-  il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65

L'output del <u><b>prezzo finale</b></u> va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## Svolgimento:

Come prima opzione inserire le informazioni iniziali:

- inserire **età**
- inserire **Kilometri da percorrere**

come dopodichè definisco il prezzo <u>iniziale</u> del biglietto in base ai **Kilometri da percorrere**:
 
 - **Kilometri da percorrere** * **costo definito** (0.21€)

poi, ne calcolo il <u>costo scontato</u> in base all'**età** richiesta inizialmente.
Se <18 avra il 20% oppure se  >65 avra il 40% .

All fine si mostrerà il prezzo finale.