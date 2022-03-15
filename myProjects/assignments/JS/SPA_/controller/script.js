$("#dashBoard").css("display", "block");
$("#customerForm").css("display", "none");
$("#itemForm").css("display", "none");
$("#orderForm").css("display", "none");
console.log("Hi bitch");

$("#linkDashBoard").click(function () {
    $("#dashBoard").css("display", "block");
    $("#customerForm").css("display", "none");
    $("#itemForm").css("display", "none");
    $("#orderForm").css("display", "none");
    console.log("Hey bitch");


     $("#homePageCustomers").text(customerDB.length);
     $("#homePageAmount").text(itemDB.length);
     $("#homePageOrders").text(orderDB.length);
});

$("#linkCustomerForm").click(function () {
    $("#dashBoard").css("display", "none");
    $("#customerForm").css("display", "block");
    $("#itemForm").css("display", "none");
    $("#orderForm").css("display", "none");
    console.log("Hey !!!!!!!!!///////////!!!1bitch");

});

$("#linkItemForm").click(function () {
    $("#dashBoard").css("display", "none");
    $("#customerForm").css("display", "none");
    $("#itemForm").css("display", "block");
    $("#orderForm").css("display", "none");
    console.log("Hey !!!!!!44444444444!!!!!!1bitch");

});

$("#linkOrderForm").click(function () {
    $("#dashBoard").css("display", "none");
    $("#customerForm").css("display", "none");
    $("#itemForm").css("display", "none");
    $("#orderForm").css("display", "block");
    console.log("Hey !!!!777777777777777777!!!!!!!!1bitch");
    loadCustomerId();
    loadItemId();


});