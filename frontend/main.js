
window.addEventListener('DOMContentLoaded',(event) => {
    getVisitCount();
})

const functionApi = 'https://resume-leela.azurewebsites.net/api/GetResumeCounter?code=RMmzOWiD__TmuFwZN3KaFipZ6GNM0gPX6Fqlm9thFxl-AzFuHhHnNg==';
//const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    }
    );
    return count;
}
