<?php 
if( isset( $_POST['name'] ) && isset( $_POST['email'] ) && isset( $_POST['subject'] ) && isset( $_POST['message'] ) )
{

	$name=$_POST['name'];
	$email=$_POST['email'];
	$subject=$_POST['subject'];
	$message=nl2br($_POST['message']);
	$to="raselrostock@gmail.com";
	if ( mail($to, $subject, $message) ) 
	{
		echo "success";
	}
	else
	{
		echo "The server failed to send the message";
	}
}

 ?>