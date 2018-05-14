/*var cellphone = $('#inputNumber');
var password = $('#inputPassword');
var aBtn = document.getElementById('btn');
var footer = document.getElementById('footer');
var warn = document.getElementById('warn');

aBtn.addEventListener('click',function(){
	warn.style.display = "block";
	footer.className = "false"
},false)
*/
var oLogin = $('.btn-login');
var oUser = $('.user')[0];
var oKey = $('.key')[0];
var oError = $('.error');
var regUser = /^[1]\d{10}$/g;
var regkey = /^[A-Z]\w{5,}/g;

oLogin.on('click',function(){
	var username = oUser.value;
	var password = oKey.value;
	
	if(regUser.test(username) && regKey.test(password)){
		oLogin.html('登陆中...');		
	}else{
		oError.removeClass('hide');
	}
})

$('ul').on('click',function(){
	oLogin.text('登录');
	oError.addClass('hide');
});
