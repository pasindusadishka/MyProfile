var regExCusID = /^(I-)[0-9]{3,4}$/;


function loadAllItems() {
    $("#itemTable").empty();
    for (let i = 0; i < itemDB.length; i++) {
        let itemCode = itemDB[i].getItemCode();
        let itemName = itemDB[i].getItemName();
        let itemQty = itemDB[i].getItemQTY();
        let itemPrice = itemDB[i].getItemPrice();


        let row = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${itemQty}</td><td>${itemPrice}</td></tr>`;


        $("#itemTable").append(row);
    }
}

$("#btnSaveOrUpdate").click(function ( ){
    saveItem();
    loadAllItems();

});

function clearInputField() {
    $("#txtItemCode,#txtItemName,#txtItemQty,#txtItemPrice").val("");
}

function saveItem(){
    if ($("#txtItemCode").val()!=("") || $("#txtItemName").val()!=("") || $("#txtItemQty").val() != ("") || $("#txtItemPrice").val() != ("")  ) {
        let itemCode = $("#txtItemCode").val();
        let itemName = $("#txtItemName").val();
        let itemQty = $("#txtItemQty").val();
        let itemPrice = $("#txtItemPrice").val();

        var Item = new itemDTO(itemCode, itemName, itemQty, itemPrice);
        itemDB.push(Item);
        clearInputField();
    }else{
        alert("Please Enter Values For each Sections");
    }
}


$("#txtItemCode").keyup(function () {
    let input = $("#txtItemCode").val();
    if (regExCusID.test(input)) {
        $("#txtItemCode").css('border', '2px solid green');
        $("#error").text("");
    } else {
        $("#txtItemCode").css('border', '2px solid red');
        $("#error").text("Wrong format : I-001");
    }
});

