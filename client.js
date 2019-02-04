let totalCost = 15500;


$(document).ready(onReady);

function onReady(){
    $('#tableBody').on('click', '.deleteButton', deleteButton);
    $('#submit').on('click', submit); 
    $('#totalCost').text(totalCost);
} 

function submit() {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let salary = $('#salary').val();
    totalCost += (salary / 12);
    if (totalCost >= 20000) {
    $('#total').css('background-color', 'red',);
    $('#total').css('color', 'white');
    }
    $('#totalCost').text(totalCost.toFixed(2));
    $('#tableBody').append(`
         <tr>
                <td>${firstName} </td>
                <td>${lastName}</td>
                <td>${id}</td>
                <td>${title}</td>
                <td>${salary}</td>
                 <td><button class="deleteButton" >delete</button></td>
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


