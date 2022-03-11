for (let i = 0; i < customerDB.length; i++) {
    let customerID = customerDB[i].getCustomerID();
    $("#customerID").innerHTML += "<option>"+customerID+"</option>";
}
