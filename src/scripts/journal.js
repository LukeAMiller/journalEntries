
import apiEntries from './apiManager.js'
import renderJournalEntries from './DOMPrinter.js'

apiEntries.getAllEntries()
.then(parsedEntries =>{
  renderJournalEntries.PrintEntriesToDOM(parsedEntries)
})
//add eventlistener to Submit button once button is clicked get values of  inputs and turns all input values into an object
const SubmitButton = document.querySelector("#record-journal-entry")
console.log(SubmitButton)
SubmitButton.addEventListener("click", function(){
  const dateValue = document.querySelector("#journalDate").value;
console.log(dateValue)
const concepts = document.querySelector("#conceptCovered").value;
console.log(concepts)
const journal = document.querySelector("#journalEntry").value;
console.log(journal)
const moody = document.querySelector("#journalMood" ).value;
const entryObject  = {
  "concept": concepts,
  "date": dateValue,
  "entry": journal,
  "mood": moody
}
apiEntries.postOneEntry(entryObject)
.then(apiEntries.getAllEntries)
.then(parsedEntries => {
  renderJournalEntries.PrintEntriesToDOM(parsedEntries)
})});
document.querySelector("body").addEventListener("click", ()=>{
  if (event.target.id.includes("delete")){
    const journalArray = event.target.id.split("-");
    const idofDeleteObject = journalArray[1]
    console.log(idofDeleteObject)
    apiEntries.deleteOneEntry(idofDeleteObject)
    .then(()=>{
      apiEntries.getAllEntries()
      .then(parsedEntries =>{
        renderJournalEntries.PrintEntriesToDOM(parsedEntries);
      })
    })
    // const idofDeleteObject = journalArray[1]
  }
})


// calls upon the final function to getAllEntries
apiEntries.getAllEntries()