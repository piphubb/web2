var xhr = createRequest();
function getContent(dataSource, divID,atype)  {
	if(xhr) {
		var place = document.getElementById(divID);
	    var url = dataSource+"?ntype="+atype;
	    xhr.open("GET", url, true);
	    xhr.onreadystatechange = function() {
		    //alert(xhr.readyState);
			if (xhr.readyState == 4 && xhr.status == 200) {
			place.innerHTML = xhr.responseText;
		    } // end if
	    } // end anonymous call-back function
	    xhr.send(null);
	} // end if
} // end function getData()

function getTypeStudent(type){
	var a = document.getElementById(type).value;
	getContent('vgetTypeStudent.php','job',a);
	
}
function getContentAdmin(){
	getContent('admin.php','content');
		
	setTimeout("searchBy('vgetRecord.php','here','attendee')",100);

}



function iregister(dataSource,reg,aName,aAddress,aPhone,aEmail,aJob,aType,aExt_guest,aCheck1,aCheck2){
	//alert(aEmail);
		if(xhr) {
		    var place = document.getElementById(reg);
		    //var url = dataSource+"?name="+aName+"&address"+aAddress+"&phone"+aPhone+"&email"+aEmail+"&job"+aJob+"&ntype"+nType+"&ext_guest"+aExt_guest+"&check"+aCheck;
		    url = dataSource+"?confirm=2"+"&namef="+aName+"&address="+aAddress+"&phone="+aPhone+"&email="+aEmail+"&job="+aJob+"&ntype="+aType+"&ext_guest="+aExt_guest+"&check1="+aCheck1+"&check2="+aCheck2;
		    xhr.open("GET", url, true);
		    xhr.onreadystatechange = function() {
			    //alert(xhr.readyState);
				if (xhr.readyState == 4 && xhr.status == 200) {
				place.innerHTML = xhr.responseText;
			    } // end if
		    } // end anonymous call-back function
		    xhr.send(null);
		} // end if
		return true;

}





function searchByAll(){
	var jtype = document.getElementById('ntype').value;
	searchBy('../controller/csearchByAll.php','res',jtype)
}



function rresearcher(){
	var jresearch = document.getElementById('researcher').value;
	searchBy("vgetRecord.php",'here',jresearch);
	//alert(jresearch);
}
function aattendee(){
	var jresearch = document.getElementById('attendee').value;
	searchBy("vgetRecord.php",'here',jresearch);
	//alert(jresearch);
}
function sstudent(){
	var jresearch = document.getElementById('student').value;
	searchBy("vgetRecord.php",'here',jresearch);
	//alert(jresearch);
}
function iindividual(){
	var jresearch = document.getElementById('individual').value;
	
	searchBy("vgetRecord.php",'here',jresearch);
}



function searchBy(dataSource,here,aAll)  {
	
		if(xhr) {
		    var place = document.getElementById(here);
		    var url = dataSource+"?here=1&nBy="+aAll;
		    xhr.open("GET", url, true);
		    xhr.onreadystatechange = function() {
			    //alert(xhr.readyState);
				if (xhr.readyState == 4 && xhr.status == 200) {
				place.innerHTML = xhr.responseText;
			    } // end if
		    } // end anonymous call-back function
		    xhr.send(null);
		} // end if
		return true;

} // end function getData()