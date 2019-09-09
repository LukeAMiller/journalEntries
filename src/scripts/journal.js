
import apiEntries from './apiManager.js'
import renderJournalEntries from './DOMPrinter.js'

apiEntries.getAllEntries()
.then(parsedEntries =>{
  renderJournalEntries.PrintEntriesToDOM(parsedEntries)
})
//add eventlistener to Submit button once button is clicked get values of  inputs and turns all input values into an object
const SubmitButton = document.querySelector("#record-journal-entry")
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
// click event for delete button
document.querySelector("body").addEventListener("click", ()=>{
  if (event.target.id.includes("delete")){
    const journalArray = event.target.id.split("-");
    const idofDeleteObject = journalArray[1]
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
// click event for edit button
document.querySelector("body").addEventListener("click", ()=>{
  if (event.target.id.includes("edit-")){
    const journalArray = event.target.id.split("-");
  
    const idofEditObject = journalArray[1];

    apiEntries.getOneEntry(idofEditObject)

    .then(singleJournalEntry=>{
     renderJournalEntries.printJournalForm(singleJournalEntry)
  
    })
  }
})
document.querySelector("body").addEventListener("click", ()=>{
  if (event.target.id.includes("save-")){
    const journalArray = event.target.id.split("-");
    const idofEditObject = journalArray[1]
    const editedConceptValue = document.querySelector(`#concept-${idofEditObject}`).value;
const editedDateValue = document.querySelector(`#date-${idofEditObject}`).value;
const editedEntryValue = document.querySelector(`#entry-${idofEditObject}`).value;
const editedMoodValue = document.querySelector(`#mood-${idofEditObject}`).value;
    // Put the input value into an object
    const editedJournalObj = {
      concept:editedConceptValue,
      date: editedDateValue,
      entry: editedEntryValue,
      mood: editedMoodValue
    };
   
    apiEntries.editOneEntry(idofEditObject,editedJournalObj)
    .then(()=>{
      apiEntries.getAllEntries()
      .then(parsedEntries =>{
        renderJournalEntries.PrintEntriesToDOM(parsedEntries);
      })
    })
  }
})
// calls upon the final function to getAllEntries
apiEntries.getAllEntries()