
  import makeJournalEntryComponent from './singleJournalEntry.js'
  const renderJournalEntries = (entries) => {
  
    entries.forEach(
        singleEntry => {document.querySelector(".entryLog").innerHTML +=
        makeJournalEntryComponent.buildEntryCard(singleEntry)}
    )
    }
export default renderJournalEntries
