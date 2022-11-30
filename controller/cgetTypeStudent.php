<?php
	

	include '../model/mselect_option.php'; 
	
if(isset($_GET['ntype'])){
	echo $_GET['ntype'];
	if($_GET['ntype']=='3'){
        $where = "WHERE pid='1'";
    }else{
    	$where = "WHERE pid<>'1'";
    }
}



?>



