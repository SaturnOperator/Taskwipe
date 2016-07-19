<?PHP
//Login validation: This document serves as the login form and validates the login information found in the database.

//If any login credentials is received, proceed to validation

if(isset($_POST['submit']) && isset($_POST['username']) && isset($_POST['password'])){
	//Received username and password are stored as temp variables 
	$user = $_POST['username'];
	$pass = $_POST['password'];
	
	
	//Open connection to MySQL database
	$connection = mysqli_connect("localhost","user","pass","database") or die("Error " . mysqli_error($connection));
	
	//Fetch table rows from MySQL database
	$sql = "SELECT * FROM  `users` WHERE `username` = '".$user."' AND  `password` =  '".$pass."'";
	$result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));
	$row =mysqli_fetch_assoc($result);
	mysqli_close($connection);
	
	//If credentials the results in the database, add user credentials and ID to the session. Otherwise, redirect to login.
	if($user == $row['user_name'] && $pass == $row['user_password'])
	{
		echo "Login successful";
		//Destroying any existing sessions
		session_start();
		session_unset();
		session_destroy();
		
		//Starting a new session with the account details
		session_start();
		$_SESSION['user_name'] = $row['user_name'];
		$_SESSION['user_password'] = $row['user_password'];
		$_SESSION['user_id'] = $row['user_id'];
		$_SESSION['user_first'] = $row['user_first'];
		
		//Automatically direct to main site
		header('location: /');
		}
	else{
		//When incorrect, they will be redirected back to the login page showing an error. Also clears the session.
		header('location: /login?error=invalid');
		session_start();
		session_unset();
		session_destroy();
				
		}
	}	

?>
