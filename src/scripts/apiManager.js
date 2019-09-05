
// gets all data then uses render function imported from DOMPrinter.js
const apiEntries = {
    getAllEntries: ()=>{
return fetch("http://localhost:8088/entries") // Fetch from the API
    .then(responce => responce.json())  // Parse as JSON
    
 },
 postOneEntry: entryObject =>fetch("http://localhost:8088/entries", {
    // Replace "url" with your API's URL
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entryObject)
  }),
  deleteOneEntry: (idofDeleteObject) =>fetch(`http://localhost:8088/entries/${idofDeleteObject}`,{
      method:"DELETE"
  })
 }
export default apiEntries