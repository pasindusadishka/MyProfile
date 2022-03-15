function customerDTO(customerID,customerName,customerAddress,customerTP){
    var __customerID=customerID;
    var __customerName=customerName;
    var __customerAddress=customerAddress;
    var __customerTP=customerTP;

    this.setCustomerID=function (customerID){
        this.__customerID=customerID;
    }
    this.getCustomerID=function (){
        return __customerID;
    }
    this.setCustomerName=function (customerName){
        this.__customerName=customerName;
    }
    this.getCustomerName=function (){
        return __customerName;
    }
    this.setCustomerAddress=function (customerAddress){
        this.__customerAddress=customerAddress;
    }
    this.getCustomerAddress=function (){
        return __customerAddress;
    }
    this.setCustomerTP=function (customerTP){
        this.__customerTP=customerTP;
    }
    this.getCustomerTP=function (){
        return __customerTP;
    }


}