console.log('client.js has been loaded');


let startingCost = 15500;
let employees = 3;

$(document).ready(onReady);

function onReady(){
    console.log('document is ready');
    $('#submit').on('click', submit); 
    $('#totalCost').text(startingCost);
    $('#tableBody').on('click', '.deleteButton', deleteButton);

}


function submit() {
    console.log('adding employee!');
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let salary = $('#salary').val();
    startingCost += (salary/12);
    if (startingCost >= 20000) {
      $('#totalCost').css('color', 'red');
    }
    $('#totalCost').text(startingCost);
  
    


    $('#tableBody').append(`
         <tr>
                <td>${firstName} </td>
                <td>${lastName}</td>
                <td>${id}</td>
                <td>${title}</td>
                <td>${salary}</td>
                 <td><button>delete</button></td>
            </tr>
    `)
    // clear fields
    $('#firstName').val('');  
    $('#lastName').val('');   
    $('#id').val('');   
    $('#title').val('');   
    $('#salary').val('');     
}


function deleteButton (){
    console.log('delete button!');
    $(this).closest('tr').remove();
}