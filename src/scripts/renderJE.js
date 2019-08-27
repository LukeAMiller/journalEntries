

  const renderJournalEntries = (entries) => {
    const entryLog =document.querySelector(".entryLog")
    let journalEntries = ""
  for(let i = 0;i<entries.length;i++){
  
     journalEntries += makeJournalEntryComponent.buildEntryCard(entries[i])
  }
  entryLog.innerHTML = journalEntries
  }
  
