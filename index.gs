// TODO: skriv en funktion för att generera en utskrift på en array
function generateTasks(objSlug){
    // TODO: konvertera slug till text
    const title = objSlug.replace(/-/g," ");
    // TODO: hämta dagens årtal
    const today = new Date();
    const year = today.getFullYear(); 

// TODO: skapa en array med uppgifter
    const lista = [];

    for (let i = 1; i <= 5; i++) {  // går igenom listan tills den skrivit ut 5st
        // TODO: dagens datum, plussar dagar, förkorta datum till YYYYMMDD
        const dueDate = new Date()
        dueDate.setDate(dueDate.getDate() + i); // tog hjälp av AI med hur man gjorde index + 2 och hur man forkortade datumet
        const formateradDueDate = dueDate.toISOString().split("T")[0]; // förkortar till YYYYMMDD och split tar bort tid
        
        // TODO: lägger till uppgifterna sist i listan
        lista.push(
        {
            taskId : `OBJ-${year}-999-T0${i}`,
            title: title,
            dueDate: today
        });
    }
    // TODO: returnera hela listan
    return lista;
}
// TODO: Skriv ut arrayen
console.log(generateTasks("Acquire-High-Paying-Clients"));



