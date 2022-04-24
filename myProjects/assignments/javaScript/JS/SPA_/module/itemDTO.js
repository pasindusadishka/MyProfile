function itemDTO(itemCode,itemName,itemQTY,itemPrice){
    var __itemCode=itemCode;
    var __itemName=itemName;
    var __itemQTY=itemQTY;
    var __itemPrice=itemPrice;

    this.setItemCode=function (itemCode){
        this.__itemCode=itemCode;
    }
    this.getItemCode=function (){
        return __itemCode;
    }
    this.setItemName=function (itemName){
        this.__itemName=itemName;
    }
    this.getItemName=function (){
        return __itemName;
    }
    this.setItemQTY=function (itemQTY){
        this.__itemQTY=itemQTY;
    }
    this.getItemQTY=function (){
        return __itemQTY;
    }
    this.setItemPrice=function (itemPrice){
        this.__itemPrice=itemPrice;
    }
    this.getItemPrice=function (){
        return __itemPrice;
    }


}