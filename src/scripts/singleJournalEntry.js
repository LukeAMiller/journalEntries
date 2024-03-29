// Build what my DOM objects will look like
const makeJournalEntryComponent =  {
    buildEntryCard:(singleJournalObject)=>{
      // Create your own HTML structure for a journal entry
      return `
      <article id = "card-${singleJournalObject.id}">
    <h3>${singleJournalObject.date}</h3>
    <h4>${singleJournalObject.concept}</h4>
    <p>${singleJournalObject.entry}</p>
    <h6>${singleJournalObject.mood}</h6>
    <button id ="delete-${singleJournalObject.id}">Delete</button>
    <button id = "edit-${singleJournalObject.id}">Edit</button>
    </article>
      `;}
    }
    export default makeJournalEntryComponent