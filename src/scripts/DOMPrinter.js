
  import makeJournalEntryComponent from './singleJournalEntry.js'
  // loops through entries array and builds a cards for each entry and add it to the HTML
  const renderJournalEntries = {
    PrintEntriesToDOM:arrayofEntriesParam => {
  document.querySelector(".entryLog").innerHTML = "";

    arrayofEntriesParam.forEach(
        singleEntry => {document.querySelector(".entryLog").innerHTML +=
        makeJournalEntryComponent.buildEntryCard(singleEntry)}
    )
    },
    printJournalForm: (JournalObjectToEdit) => {

      const targetCard = document.querySelector(`#card-${JournalObjectToEdit.id}`)
      targetCard.innerHTML = `<section>
        <input id="concept-${JournalObjectToEdit.id}" type="text" value="${JournalObjectToEdit.concept}">
        <input id ="date-${JournalObjectToEdit.id}" type ="text" value ="${JournalObjectToEdit.date}">
        <input id ="entry-${JournalObjectToEdit.id}" type ="text" value ="${JournalObjectToEdit.entry}">
        <input id ="mood-${JournalObjectToEdit.id}" type ="text" value ="${JournalObjectToEdit.mood}">
        <button id="save-${JournalObjectToEdit.id}">Save</button>
      </section>`

  }
};
export default renderJournalEntries
