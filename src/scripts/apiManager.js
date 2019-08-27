const apiEntries = {
    getAllEntries: ()=>{
return fetch("http://localhost:8088/entries") // Fetch from the API
    .then(responce => responce.json())  // Parse as JSON
    .then(journalEntrytoPrint => {
     
        renderJournalEntries(journalEntrytoPrint)
        // journalEntrytoPrint.forEach(
        //     singleEntry => {document.querySelector(".entryLog").innerHTML +=
        //     makeJournalEntryComponent.buildEntryCard(singleEntry)}
        // )
    })
 } }

    