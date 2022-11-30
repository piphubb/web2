<?php
	include '../controller/cgetRecord.php'; 

 if(mysqli_num_rows($getByrecord)>0){
?>
<table border ="1">
    <tr>
        <th>Num</th>
        <th width="100">Name</th>
        <th width="110">Address</th>
        <th width="100">Telephone</th>
        <th>Email</th>
        <th width="100">Att's Job</th>
        <th width="100">Att's Type</th>
        <th width="100">Guests</th>
        <th width="230">Invite</th>
        <th width="100">Date</th>
    </tr>
<?php 
    $i =1;
    while($row = mysqli_fetch_assoc($getByrecord)) {
?>
    <tr>
        <td><?php echo $i;?></td>
        <td><?php echo $row['name'];?></td>
        <td><?php echo $row['address'];?></td>
        <td><?php echo $row['phone'];?></td>
        <td><?php echo $row['email'];?></td>
        <td><?php echo $row['possition'];?></td>
        <td><?php echo $row['attendee'];?></td>
        <td><?php echo $row['ext_guest'];?></td>
        <td><?php echo $row['invite'];?></td>
        <td><?php echo date('d-m-Y', strtotime($row['date']));?></td>
    </tr>
    <?php  $i++ ;}?>
</table>
<?php }else{
    echo "No record show!";
}
?>