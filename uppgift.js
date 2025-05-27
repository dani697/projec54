function generateTasks(objSlug){  //skapar en funktion för att skriva ut en lista med uppgifter
    const title = objSlug.replace(/-/g," "); // gör slug till "vanlig" text
    const today = new Date();  //skapar nytt datum
    const year = today.getFullYear(); // hämtar året


    const lista = [];  // skapar lista

    for (let i = 1; i <= 5; i++) {
        const dueDate = new Date()
        dueDate.setDate(dueDate.getDate() + i + i); // tog hjälp av AI med hur man gjorde index + 2 och hur man forkortade datumet
        const formateradDueDate = dueDate.toISOString().split("T")[0]; // förkortar till YYYYMMDD och split tar bort tid
        
        lista.push(  // lägger till nya uppgifter sist i listan
        {
            taskId : `OBJ-${year}-999-T0${i}`, // lägger till en ny siffra varje gång den kör
            title: title,
            dueDate: formateradDueDate
        });
    }
    return lista;
}

console.log(generateTasks("Acquire-High-Paying-Clients"));
