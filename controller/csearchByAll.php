<?php
	
if(isset($_GET['here'])){
	if($_GET['nBy']=='all'){
		echo "
			<form>
				<input type='radio' name='role' value='researcher' id='researcher' onclick='rresearcher()'>All researchers
				<input type='radio' name='role' value='attendee' id='attendee' onclick='aattendee()'>All attendees
				<input type='radio' name='role' value='student' id='student' onclick='sstudent()'>All students	
			</form>
		";
	}else if($_GET['nBy']=='individual'){
		echo "
			<form>
				<input type='text' value='' name='ndividual' id='individual'/>
				<input type='button' name='ind_search' value='search' onclick='iindividual()'/>
			</form>
		";
	}	
}
?>



