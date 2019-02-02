console.log('client.js has been loaded');


let startingCost = 15500;

$(document).ready(onReady);

function onReady(){
    console.log('document is ready');
    $('#submit').on('click', submit); 
    $('#totalCost').text(startingCost);
    

}


function submit() {
    console.log('adding employee!');
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let salary = $('#salary').val();
    $('#totalCost').text(startingCost);
    startingCost + salary;

    $('#tableBody').append(`
         <tr>
                <td>${firstName} </td>
                <td>${lastName}</td>
                <td>${id}</td>
                <td>${title}</td>
                <td>${salary}</td>
            </tr>
    `)
}


