<?PHP include 'session.php';

//tasksjson.php retrives the .JSON data for a given user's tasks from the database. It also includes session.php which validates that the user accessing the database is a valid user.

session_start();

//This checks to see if the credentials needed to validate the account is logged in are there, then will do the validation to make sure it is correct. If it is all valid, it will rectrieve the user's tasks and output it as a JSON format.
if(isset($_SESSION['user_id']) && $_SESSION['user_name'] && $_SESSION['user_password'] && validate($_SESSION['user_name'],$_SESSION['user_password']) == true){
	
	//Sets user to the user ID stored in the session
	$user = $_SESSION['user_id'];

	//Open connection to MySQL database
	$connection = mysqli_connect("localhost","user","pass","database") or die("Error " . mysqli_error($connection));
	
	//Fetch table rows from MySQL database
	$sql = "SELECT * FROM  `database` WHERE `user_id` = ".$user." AND  `done` =  '' AND  `priority` =  'priority' ORDER BY `task`.`date`  ASC LIMIT 0 , 5";
	$result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));
	
	//Create an array
	$emparray = array();
	while($row =mysqli_fetch_assoc($result))
	{
		$emparray[] = $row;
	}
	mysqli_close($connection);
	
	//Output array as JSON
	echo json_encode($emparray);
}
else{
	header('location: /login');
}
?>