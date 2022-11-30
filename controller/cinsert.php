<?php
include '../config.php';
include '../model/minsert.php'; 

if(isset($_GET['confirm']))	{
	$type 		= $_GET['ntype'];
	$ext_guest  = $_GET['ext_guest'];
	$name 		= $_GET['namef'];
	$address 	= $_GET['address'];
	$phone 		= $_GET['phone'];
	$email 		= $_GET['email'];
	$job 		= $_GET['job'];
	$date 		= date("Y/m/d");

		if($_GET['check1'] == ''){
			$invite	= $_GET['check2'];
		}else if($_GET['check2'] == ''){
			$invite	= $_GET['check1'];
		}else{
			$invite = $_GET['check1'] . ', '. $_GET['check2'];
		}	


	$cqueri = "SELECT name,email FROM INFOR";
	$csql  	= mysqli_query($dbConnect, $cqueri);
	while($row = mysqli_fetch_assoc($csql)){
		$dname = $row['name'];
		$dem  = $row['email'];
		if($name==$dname || $email ==$dem){
			$insert = true;
		}else{
			$insert = false;
		}
	}


			if($insert == true){
				echo "            Exist record! <img src='../public/icon/q.png' width='20px' height='20px'/>";		
			}else{
				iregister($name,$address,$phone,$email,$job,$type,$ext_guest,$invite,$date);
				echo "            Success!    <img src='../public/icon/ok.png' width='20px' height='20px'/>";
			}
			
}


//	url('../public/icon/noOk.png')
?>