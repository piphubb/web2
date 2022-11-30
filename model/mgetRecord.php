 <?php
    //include '../config.php';
    function getByrecord($where=''){
        include '../config.php';
         $queri = "SELECT i.name, i.address, i.phone, i.email, p.possition, a.attendee, i.ext_guest, i.invite, i.date
			FROM infor as i
			inner join attendees AS a ON i.type=a.atid
			inner join possitions AS p ON i.job=p.pid $where ORDER BY i.id DESC";
       	$sql    = mysqli_query($dbConnect, $queri);
        return $sql;
    }

/*    i.name, i.address, i.phone, i.email, p.possition, a.attendee, i.ext_guest, i.invite, i.date
			FROM infor as i
    		inner join attendees AS a ON i.type=a.atid
    		inner join possitions AS p ON i.job=p.pid*/
?>

