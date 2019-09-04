import renderJournalEntries from './DOMPrinter.js'
// gets all data then uses render function imported from DOMPrinter.js
const apiEntries = {
    getAllEntries: ()=>{
return fetch("http://localhost:8088/entries") // Fetch from the API
    .then(responce => responce.json())  // Parse as JSON
    .then(journalEntrytoPrint => {
     
        renderJournalEntries(journalEntrytoPrint)
   
    })
 } }
export default apiEntries