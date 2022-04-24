var regExCusID = /^(C00-)[0-9]{3,4}$/;
loadAllCustomer();

function loadAllCustomer() {
    $("#customerTable").empty();
    for (let i = 0; i < customerDB.length; i++) {
        let customerID = customerDB[i].getCustomerID();
        let customerName =customerDB[i].getCustomerName();
        let customerAddress = customerDB[i].getCustomerAddress();
        let customerTP = customerDB[i].getCustomerTP();


        let row = `<tr><td>${customerID}</td><td>${customerName}</td><td>${customerAddress}</td><td>${customerTP}</td></tr>`;


        $("#customerTable").append(row);    }
}

$("#btnSaveOrUpdate").click(function ( ){
    saveCustomer();
    loadAllCustomer();

});

function clearAllInputField() {
    $("#txtCusID,#txtCusName,#txtCusAddress,#txtCusTP").val("");
}

function saveCustomer(){
   if ($("#txtCusID").val()!=("") || $("#txtCusName").val()!=("") || $("#txtCusAddress").val() != ("") || $("#txtCusTP").val() != ("")) {

       let customerID = $("#txtCusID").val();
       let customerName = $("#txtCusName").val();
       let customerAddress = $("#txtCusAddress").val();
       let customerTP = $("#txtCusTP").val();

       var Customer = new customerDTO(customerID, customerName, customerAddress, customerTP);
       customerDB.push(Customer);
       clearAllInputField();
   }else {
       alert("Please Enter Values For each Sections");
   }
}


    $("#txtCusID").keyup(function () {
        let input = $("#txtCusID").val();
        if (regExCusID.test(input)) {
            $("#txtCusID").css('border', '2px solid green');
            $("#error").text("");
        } else {
            $("#txtCusID").css('border', '2px solid red');
            $("#error").text("Wrong format : C00-001");
        }
    });
$("#customers").setAttribute()

