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



