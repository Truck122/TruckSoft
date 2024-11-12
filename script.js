function updateKm()
{
    let start = document.getElementById("startKm").value;
    let end = document.getElementById("endKm").value;
   
    let total = 0;

    if(start !== "" && end !== "")
    {
        start = parseInt(start);
        end = parseInt(end);
       
        total = end - start;
        document.getElementById("totalKm").innerText = total
    }
    

}

function updateH()
{
     // Get values from the time input fields
     const startTime = document.getElementById('startTime').value;
     const endTime = document.getElementById('endTime').value;
 
     // If either time is not entered, show an error
     if (startTime !== "" && endTime !== "") {
    

     // Convert the time strings to Date objects (use a fixed date to avoid time zone issues)
     const start = new Date(`1970-01-01T${startTime}:00Z`);
     const end = new Date(`1970-01-01T${endTime}:00Z`);
 
     // Calculate the difference in milliseconds
     let diffMilliseconds = end - start;
 
     // If the end time is earlier than the start time, add 24 hours (for cases spanning midnight)
     if (diffMilliseconds < 0) {
         diffMilliseconds += 24 * 60 * 60 * 1000; // Add 24 hours in milliseconds
     }
 
     // Convert milliseconds to hours
     const diffHours = diffMilliseconds / (1000 * 60 * 60);
 
     // Display the result
     document.getElementById('totalH').innerText = `${diffHours.toFixed(1)}`;

     }
 
}

function setTodayDate() {
    // Get today's date
    const today = new Date();

    // Get the year, month, and day
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
    const day = String(today.getDate()).padStart(2, '0'); // Add leading zero for single digits

    // Format the date as yyyy-mm-dd
    const formattedDate = `${year}-${month}-${day}`;

    // Set the formatted date in the input field
    document.getElementById('dateInp').value = formattedDate;
    document.getElementById('troskoviDate').value = formattedDate;
    document.getElementById('freeDayInp').value = formattedDate;
}

setTodayDate()

function setCurrentMonth() {
    const monthInput = document.getElementById("monthInput");
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Get current month, padding with 0 if needed
    const currentMonth = `${year}-${month}`; // Format in YYYY-MM format
    monthInput.value = currentMonth;
}
setCurrentMonth()


function printReport()
{
    let month = document.getElementById('monthInput').value;
    window.location = 'printReport.html?month='+month;
}