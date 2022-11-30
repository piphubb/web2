<?php
	include '../model/mgetRecord.php'; 
if(isset($_GET['here'])){
	if($_GET['nBy'] == 'researcher'){
		//echo $rol = $_GET['nBy'];
		$where = "WHERE a.attendee='researcher'";
        $getByrecord = getByrecord($where);
    }else if($_GET['nBy'] == 'student'){    
    	$where = "WHERE a.attendee='student'";
        $getByrecord = getByrecord($where);
    }else if($_GET['nBy'] == 'attendee'){    
    	$where = "";
        $getByrecord = getByrecord($where);    
    }else{
    	$roles = $_GET['nBy'];
    	$where = "WHERE i.name like '%$roles%'";
        $getByrecord = getByrecord($where);
    }    
}	




?>



