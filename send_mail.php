<?php
header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');

foreach($_POST as $key => $value){
    $data = json_decode($key, true);
   
	$to = str_ireplace('_','.',$data['to']);
	$subject = $data['subject'];
	$message = $data['message'];

	var_dump($to, $subject, $message);

	$result = mail($to, $subject, $message);
	var_dump($result);
}



