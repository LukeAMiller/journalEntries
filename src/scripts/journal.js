
import apiEntries from './apiManager.js'



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
  concept: concepts,
  date: dateValue,
  entry: journal,
  mood: moody
}
// turns entryObject into json
fetch("http://localhost:8088/entries", {
    // Replace "url" with your API's URL
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entryObject)
  })

})
// calls upon the final function to getAllEntries
apiEntries.getAllEntries()