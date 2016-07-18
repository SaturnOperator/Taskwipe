<?PHP
function validate($user,$pass){
	//Open connection to MySQL database
	$connection = mysqli_connect("localhost","user","pass","database") or die("Error " . mysqli_error($connection));
	
	//Fetch table rows from MySQL database
	$sql = "SELECT * FROM  `users` WHERE `username` = '".$user."' AND  `password` =  '".$pass."'";
	$result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));
	$row =mysqli_fetch_assoc($result);
	$num_rows = mysql_num_rows($result);
	
	//If credentials are valid the function returns true
	if($pass == $row['user_name'] && $row['user_password'])
	{
		return true;
		}
	//Otherwise it will delete the session if it exists and returns false
	else{
		session_start();
		session_unset();
		session_destroy();
		return false;
		}
	
	mysqli_close($connection);
}
?>
