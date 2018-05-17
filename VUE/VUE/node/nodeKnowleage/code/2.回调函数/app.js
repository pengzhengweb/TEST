// 回调函数
function orderAndWait(orderNumber) {
    console.log("第" + orderNumber + "个病人准备看病");

    checkAndDeliverPatient(function () {
        console.log("第" + orderNumber + "个病人看完病了");
    });
}

function checkAndDeliverPatient(callback) {
    setTimeout(callback,500000);
}

// orderAndWait(1);
// orderAndWait(2);
// orderAndWait(3);
// orderAndWait(4);
// orderAndWait(5);
// orderAndWait(6);


function getRequest(url,completeCallback,errorCallback) {
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET",url,true);

    xmlHttp.onreadystatechange= function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            if (completeCallback){
                completeCallback(xmlHttp.response);
            }
        }else{
            if (errorCallback){
                errorCallback(xmlHttp.responseText);
            }
        }
    }

    xmlHttp.send();
}
var url = "php/selectInfo.php";
getRequest(url,completeCallback,errorCallback);

function completeCallback(response) {
    console.log(response);
}

function errorCallback(error) {
    console.log(error);
}















