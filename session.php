<?PHP

//Session.php helps validates the user is still logged in while browsing the site, otherwise it signs them out. This file is included to already existing PHP files and inserts a function called validate(a,b) which takes a username (a) and a password (b), then returns if that is a valid user from the database.

function validate($user,$pass){
	//Convert username to all lowercase
	$user = strtolower($user);

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
