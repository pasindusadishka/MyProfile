var regExCusID = /^(C00-)[0-9]{3,4}$/;
loadAllCustomer();
loadCustomerID();

function loadCustomerID(){

    if (customerDB.length == 0) {
        $("#txtCusID").val("C00-001");
    } else {
        var tempID = itemDB.length;
        tempID++;
        if (tempID <=9){
            tempID="C00-00"+tempID;
        }else if (tempID <= 99){
            tempID="C00-0"+tempID;
        }else {
            tempID="C00-"+tempID;
        }

        $("#txtCusID").val(tempID);
    }

}

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
    loadCustomerID();


});
function searchCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCustomerID() == id) {
            return customerDB[i];
        }
    }
}
$("#btnSearch").click(function () {
    var searchID = $("#txtCustomerSearch").val();

    var response = searchCustomer(searchID);
    if (response) {
        $("#txtCusID").val(response.getCustomerID());
        $("#txtCusName").val(response.getCustomerName());
        $("#txtCusAddress").val(response.getCustomerAddress());
        $("#txtCusTP").val(response.getCustomerTP());
    } else {
        clearAllInputField();
        alert("No Such a Customer");
    }

});
$("#btnDelete").click(function () {
    var deleteId = $("#txtCusID").val();
    deleteCustomer(deleteId);
    clearAllInputField();
});

function deleteCustomer(id) {
    var index = -1;
    for (var i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCustomerID() == id) {
            index = i;
            alert(customerDB[i].getCustomerID() + " Deleted");
        }
    }

    customerDB.splice(index, 1);
}

function clearAllInputField() {
    $("#txtCusID,#txtCusName,#txtCusAddress,#txtCusTP").val("");
}
$("#btnSaveOrUpdate").click(function () {
    var updateId = $("#txtCusID").val();
    var updateName = $("#txtCusName").val();
    var updateAddress = $("#txtCusAddress").val();
    var updateTp = $("#txtCusTP").val();
    updateCustomer(updateId, updateName, updateAddress, updateTp);
    clearAllInputField();
});

function updateCustomer(id, name, address, tp) {
    for (let i = 0; i < customerDB.length; i++) {
        if (id == customerDB[i].getCustomerID()){
            customerDB[i].setCustomerName(name);
            customerDB[i].setCustomerAddress(address);
            customerDB[i].setCustomerTP(tp);

            alert("Successfully Update ");
        }
    }
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


