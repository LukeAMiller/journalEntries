
  import makeJournalEntryComponent from './singleJournalEntry.js'
  // loops through entries array and builds a cards for each entry and add it to the HTML
  const renderJournalEntries = {
    PrintEntriesToDOM:arrayofEntriesParam => {
  document.querySelector(".entryLog").innerHTML = "";

    arrayofEntriesParam.forEach(
        singleEntry => {document.querySelector(".entryLog").innerHTML +=
        makeJournalEntryComponent.buildEntryCard(singleEntry)}
    )
    }};
export default renderJournalEntries
