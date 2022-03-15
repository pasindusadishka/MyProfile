var regExItemID = /^(I-)[0-9]{3,4}$/;
loadItemID();

function loadItemID(){

        if (itemDB.length == 0) {
            $("#txtItemCode").val("I-001");
        } else {
            var tempID = itemDB.length;
            tempID++;
            if (tempID <=9){
                tempID="I-00"+tempID;
            }else if (tempID <= 99){
                tempID="I-0"+tempID;
            }else {
                tempID="I-"+tempID;
            }

            $("#txtItemCode").val(tempID);
        }

}
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

$("#btnISaveOrUpdate").click(function ( ){
    saveItem();
    loadAllItems();
    loadItemID();

})
$("#btnItemSearch").click(function () {
    var searchID = $("#txtItemSearch").val();

    var response = searchItem(searchID);
    if (response) {
        $("#txtItemCode").val(response.getItemCode());
        $("#txtItemName").val(response.getItemName());
        $("#txtItemQty").val(response.getItemQTY());
        $("#txtItemPrice").val(response.getItemPrice());
    } else {
        clearInputField();
        alert("No Such a Item");
    }
});

function searchItem(id) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getItemCode() == id) {
            return itemDB[i];
        }
    }
}
$("#btnDelete").click(function () {
    var deleteId = $("#txtItemCode").val();
    deleteItem(deleteId);
    clearInputField();
});

function deleteItem(id) {
    var index = -1;
    for (var i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getItemCode() == id) {
            index = i;
            alert(itemDB[i].getItemCode() + " Deleted");
        }
    }

    itemDB.splice(index, 1);
}
$("#btnSaveOrUpdate").click(function (){
    var updateItemId=$("#txtItemCode").val();
    var updateItemName=$("#txtItemName").val();
    var updateItemQty=$("#txtItemQty").val();
    var updateItemPrice=$("#txtItemPrice").val();
    updateItem(updateItemId,updateItemName,updateItemQty,updateItemPrice);
    clearInputField();
});

function updateItem(id,name,qty,price){
    for (let j=0;j<itemDB.length;j++){
        if (id==itemDB[j].getItemCode()){
            itemDB[j].setItemName(name);
            itemDB[j].setItemQTY(qty);
            itemDB[j].setItemPrice(price);

            alert("Successfully Updated.");
        }
    }
}

function clearInputField() {
    $("#txtItemCode,#txtItemName,#txtItemQty,#txtItemPrice").val("");
}

function saveItem(){
    console.log("hey ");
    if ($("#txtItemCode").val()!=("") || $("#txtItemName").val()!=("") || $("#txtItemQty").val() != ("") || $("#txtItemPrice").val() != (" ")) {
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
/*
function saveItem() {
    //gather Item information
    let itemId = $("#txtItemCode").val();
    let itemName = $("#txtItemName").val();
    let itemQTY = $("#txtItemQty").val();
    let itemPrice = $("#txtItemPrice").val();

    //create Object
    var item= new itemDTO();
    item.setItemCode(itemId);
    item.setItemName(itemName);
    item.setItemQTY(itemQTY);
    item.setItemPrice(itemPrice);


    itemDB.push(item);
    alert("Item Saved");
}
*/


$("#txtItemCode").keyup(function () {
    let input = $("#txtItemCode").val();
    if (regExItemID.test(input)) {
        $("#txtItemCode").css('border', '2px solid green');
        $("#error").text("");
    } else {
        $("#txtItemCode").css('border', '2px solid red');
        $("#error").text("Wrong format : I-001");
    }
});

