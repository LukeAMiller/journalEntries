//color pickers

// const journalEntry = {
//     date:"journalDate",
//     conceptsCovered:"javascript conditionals",
//     journalEntry:"Computer logic operations",
//     Mood:"melancholy",


// }
// console.log(journalEntry)
var arrayofjournalentries = [
  ]
// arrayofjournalentries.push(journalEntry);
// console.log(arrayofjournalentries)

/*
  Purpose: To create, and return, a string template that
  represents a single journal entry object as HTML

  Arguments: journalEntry (object)
*/
// const makeJournalEntryComponent = (journalEntries) => {
//   // Create your own HTML structure for a journal entry
//   return `
//   <article>
// <h3>${journalEntries.date}</h3>
// <h4>${journalEntries.concept}</h4>
// <p>${journalEntries.entry}</p>
// <h6>${journalEntries.mood}</h6>
// </article>
//   `
// }
const entryLog =document.querySelector(".entryLog")
// entryLog.innerHTML = makeJournalEntryComponent(journalEntries[0])




// Invoke the render function

//add eventlistener to Submit button once button is clicked get values of  inputs and turn to object and push object into journal entries array
// const SubmitButton = document.querySelector("#record-journal-entry")
// console.log(SubmitButton)
// SubmitButton.addEventListener("click", function(){
//   const dateValue = document.querySelector("#journalDate").value;
// console.log(dateValue)
// const concepts = document.querySelector("#conceptCovered").value;
// console.log(concepts)
// const journal = document.querySelector("#journalEntry").value;
// const moody = document.querySelector("#journalMood" ).value;
// })
// // const newjournalentryobject = {
//   concept:concepts,
//   date: dateValue,
//   entry: journal,
//   mood:moody,
// }
// console.log(newjournalentryobject)
// entries.push(newjournalentryobject)
// concept: "Array methods",
// date: "07/24/2018",
// entry: "We learned about array methods, but only forEach made sense",
// mood: "Ok"
// renderJournalEntries(journalEntries)
// }
apiEntries.getAllEntries()