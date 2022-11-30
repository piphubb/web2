function chExt_guest(ext_guest,vext_guest) {
    var ext_guest = document.getElementById(ext_guest);
  	var vext_guest = document.getElementById(vext_guest);  	
  	vext_guest.innerHTML = '';
  	ext_guest.removeAttribute('style');
  	var numExt =  /^[0-9]{1,3}$/;
  					
		if (ext_guest.value=="" || ext_guest.value== '0'){
		     vext_guest.innerHTML = "num must be filled out";
		     vext_guest.style.color = 'red';
		     ext_guest.setAttribute("style", "background-image: url('../public/icon/noOk.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			 return false;
		}else if (ext_guest.value.length > 3){
		    vext_guest.innerHTML = "Guest cannot be more than 999";
		    vext_guest.style.color = 'red';
		    ext_guest.setAttribute("style", "background-image: url('../public/icon/noOk.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			return false;
		}else if (!numExt.test(ext_guest.value)){
		    vext_guest.innerHTML = "Guest can only contain number only";
		    vext_guest.style.color = 'red';
		   	ext_guest.setAttribute("style", "background-image: url('../public/icon/noOk.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			return false;
		}else{
		    vext_guest.innerHTML = '    is valid Guest';
		    //ext_guest.value = ext_guest.value.toUpperCase();
		    vext_guest.style.color = 'green';
		    ext_guest.setAttribute("style", "background-image: url('../public/icon/ok.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			return true;
		}
			
}

function chPhone(ext_guest,vext_guest) {
    var ext_guest = document.getElementById(ext_guest);
  	var vext_guest = document.getElementById(vext_guest);  	
  	vext_guest.innerHTML = '';
  	ext_guest.removeAttribute('style');
  	var numExt =  /^[0-9]{9,10}$/;
  					
		if (ext_guest.value==""){
		     vext_guest.innerHTML = "num must be filled out";
		     vext_guest.style.color = 'red';
		     ext_guest.setAttribute("style", "background-image: url('../public/icon/noOk.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			return false;
		}else if (ext_guest.value.length > 10){
		    vext_guest.innerHTML = "Number cannot be more than 10 number";
		    vext_guest.style.color = 'red';
		    ext_guest.setAttribute("style", "background-image: url('../public/icon/noOk.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			return false;
		}else if (!numExt.test(ext_guest.value)){
		    vext_guest.innerHTML = "Number can only contain number only";
		    vext_guest.style.color = 'red';
		   	ext_guest.setAttribute("style", "background-image: url('../public/icon/noOk.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			return false;
		}else{
		    vext_guest.innerHTML = '    is valid number';
		    //ext_guest.value = ext_guest.value.toUpperCase();
		    vext_guest.style.color = 'green';
		    ext_guest.setAttribute("style", "background-image: url('../public/icon/ok.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			/*text0_3 = ext_guest.value.substring(0, 3);
    		text3_6 = ext_guest.value.substring(3, 6);
    		text6_10 = ext_guest.value.substring(6, 10);
    		ext_guest.value = text0_3+'-'+text3_6+'-'+text6_10;*/
			return true;
		}
}

function chDinner(ch1,ch2,vInvite) {
    var ch1 = document.getElementById(ch1);
    var ch2 = document.getElementById(ch2);
    var tch = document.getElementById("tch");
    var vInvite = document.getElementById(vInvite);  	
  	vInvite.innerHTML = '';  	
  	tch.removeAttribute('style');
  					
		if (ch1.checked || ch2.checked){
		     vInvite.innerHTML = "    Has been checked";
		     vInvite.style.color = 'green';
		     tch.setAttribute("style", "background-image: url('../public/icon/ok.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
		     return true;
		}else if(!ch1.checked || !ch2.checked){
		     vInvite.innerHTML = "    Pleases Check!";
		     vInvite.style.color = 'red';
		     tch.setAttribute("style", "background-image: url('../public/icon/noOk.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
		     return false;
		}
		
}

function chName(ext_guest,vext_guest) {
    var ext_guest = document.getElementById(ext_guest);
  	var vext_guest = document.getElementById(vext_guest);  	
  	vext_guest.innerHTML = '';
  	ext_guest.removeAttribute('style');
  	var numExt =  /^\w+[a-zA-Z_]+?$/;
  	var numExt0 = /^[a-zA-Z]{2,}\s[a-zA-Z]+?$/;	
  					
		if (ext_guest.value=="" || ext_guest.value== '0'){
		     vext_guest.innerHTML = "Name must be filled out";
		     vext_guest.style.color = 'red';
		     ext_guest.setAttribute("style", "background-image: url('../public/icon/noOk.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			 return false;
		}else if (ext_guest.value.length > 25){
		    vext_guest.innerHTML = "Name cannot be more than 25 character";
		    vext_guest.style.color = 'red';
		    ext_guest.setAttribute("style", "background-image: url('../public/icon/noOk.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			return false;
		}else if (!numExt.test(ext_guest.value) && !numExt0.test(ext_guest.value)){
		    vext_guest.innerHTML = "Name can only contain character only";
		    vext_guest.style.color = 'red';
		   	ext_guest.setAttribute("style", "background-image: url('../public/icon/noOk.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			return false;
		}else{
		    vext_guest.innerHTML = '    is valid name';
		    //ext_guest.value = ext_guest.value.toUpperCase();
		    vext_guest.style.color = 'green';
		    ext_guest.setAttribute("style", "background-image: url('../public/icon/ok.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			return true;
		}
			
}

function chVemail(ext_guest,vext_guest) {
    var ext_guest = document.getElementById(ext_guest);
  	var vext_guest = document.getElementById(vext_guest);  	
  	vext_guest.innerHTML = '';
  	ext_guest.removeAttribute('style');
  	var numExt =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  					
		if (ext_guest.value=="" || ext_guest.value== '0'){
		     vext_guest.innerHTML = "Email must be filled out";
		     vext_guest.style.color = 'red';
		     ext_guest.setAttribute("style", "background-image: url('../public/icon/noOk.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			 return false;
		}else if (ext_guest.value.length > 25){
		    vext_guest.innerHTML = "Email cannot be more than 25 character";
		    vext_guest.style.color = 'red';
		    ext_guest.setAttribute("style", "background-image: url('../public/icon/noOk.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			return false;
		}else if (!numExt.test(ext_guest.value)){
		    vext_guest.innerHTML = "Email can only contain character only";
		    vext_guest.style.color = 'red';
		   	ext_guest.setAttribute("style", "background-image: url('../public/icon/noOk.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			return false;
		}else{
		    vext_guest.innerHTML = '    is valid email';
		    //ext_guest.value = ext_guest.value.toUpperCase();
		    vext_guest.style.color = 'green';
		    ext_guest.setAttribute("style", "background-image: url('../public/icon/ok.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			return true;
		}
			
}


function chAddress(ext_guest,vext_guest) {
    var ext_guest = document.getElementById(ext_guest);
  	var vext_guest = document.getElementById(vext_guest);  	
  	vext_guest.innerHTML = '';
  	ext_guest.removeAttribute('style');
  	var numExt =  /^\w+[a-zA-Z_]+?$/;
  	var numExt0 = /^[a-zA-Z]{2,}\s[a-zA-Z]+?$/;				
		if (ext_guest.value=="" || ext_guest.value== '0'){
		     vext_guest.innerHTML = "Address must be filled out";
		     vext_guest.style.color = 'red';
		     ext_guest.setAttribute("style", "background-image: url('../public/icon/noOk.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			 return false;
		}else if (ext_guest.value.length > 25){
		    vext_guest.innerHTML = "Address cannot be more than 25 character";
		    vext_guest.style.color = 'red';
		    ext_guest.setAttribute("style", "background-image: url('../public/icon/noOk.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			return false;
		}else if (!numExt.test(ext_guest.value) && !numExt0.test(ext_guest.value)){
		    vext_guest.innerHTML = "Address can only contain character only";
		    vext_guest.style.color = 'red';
		   	ext_guest.setAttribute("style", "background-image: url('../public/icon/noOk.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			return false;
		}else{
		    vext_guest.innerHTML = '    is valid address';
		    //ext_guest.value = ext_guest.value.toUpperCase();
		    vext_guest.style.color = 'green';
		    ext_guest.setAttribute("style", "background-image: url('../public/icon/ok.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			return true;
		}
			
}


function chSelect(){
	var type1 = document.getElementById('type');
	var vtype = document.getElementById('vtype');
	//alert(type1.value);
	if (type1.value == 'None'){ 
			vtype.innerHTML = "Pleases chooseone";
		    vtype.style.color = 'red';
		    //ext_guest.setAttribute("style", "background-image: url('../public/icon/noOk.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			return false;
	}else {
			vtype.innerHTML = "Has been choosen!";
		    vtype.style.color = 'green';
		    //ext_guest.setAttribute("style", "background-image: url('../public/icon/Ok.png');background-repeat: no-repeat;background-size: 20px 20px;background-position: right;padding-right:20px;");
			return true;
	}
}

function iCheck(){
	//var chExt_guest = false;

if(chExt_guest('ext_guest','vext_guest') && chPhone('phone','vphone') && chDinner('ch1','ch2','vInvite') && chName("name",'vname') && chVemail("email","vemail") && chAddress("address","vaddress") && chSelect()){
		//alert("has been checked!");

		var jtype = document.getElementById('type').value;
		var jext_guest = document.getElementById('ext_guest').value;
		var jname = document.getElementById('name').value;
		var jphone = document.getElementById('phone').value;
		var jemail = document.getElementById('email').value;
		var jjob = document.getElementById('job').value;
		var jaddress= document.getElementById('address').value;
			var jch1 = document.getElementById('ch1');
			var jch2 = document.getElementById('ch2');
			if(ch1.checked){
				jch1= 'Attending dinner';
			}else if(!ch1.checked){
				jch1= '';
			}

			if(ch2.checked){
				jch2='Receiving paper';
			}else if(!ch2.checked){
				jch2='';
			}





		iregister('../controller/cinsert.php','reg',jname,jaddress,jphone,jemail,jjob,jtype,jext_guest,jch1,jch2); 
}
}

 //           register_info('../controller/cregister_info.php','reg',namef.value,address.value,phone.value,email.value,job.value,ntype.value,ext_guest.value,check1.value,check2.value); 
