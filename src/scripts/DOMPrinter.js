
  import makeJournalEntryComponent from './singleJournalEntry.js'
  // loops through entries array and builds a cards for each entry and add it to the HTML
  const renderJournalEntries = (entries) => {
  
    entries.forEach(
        singleEntry => {document.querySelector(".entryLog").innerHTML +=
        makeJournalEntryComponent.buildEntryCard(singleEntry)}
    )
    }
export default renderJournalEntries
