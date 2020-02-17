<?php
$phone=$_POST["phone"];
$pickupl = $_POST["pickupl"];
$pickupd = $_POST["pickupd"];
$pickupt = $_POST["pickupt"];
$dropl = $_POST["dropl"];
$dropd = $_POST["dropd"];


//$msg= "Success from Oneway \nContact:8610080366 Pickup-Location: $pickupl Pickup-Time: $pickupt Droping-Location: $dropl Km:   Amount:  Extra km rs:  Toll, Permit, Hill Charges Extra www.onewayhirecab.com";
	// Authorisation details.
	$username = "lakshmanan.nyxwolves@gmail.com";
	$hash = "da7f0f0aa16268655869993b0fcb7d1bbc0ba94e48a4848c21d1b143dbd865b5";

	// Config variables. Consult http://api.textlocal.in/docs for more info.
	$test = "0";

	// Data for text message. This is the text message data.
	$sender = "ONEWAY"; // This is who the message appears to be from.
	$numbers = $phone; // A single number or a comma-seperated list of numbers
	$message = "Success from Oneway \nContact:8610080366 Pickup-Location: $pickupl Pickup-Time: $pickupt Droping-Location: $dropl Km:   Amount:  Extra km rs:  Toll, Permit, Hill Charges Extra www.onewayhirecab.com";
	// 612 chars or less
	// A single number or a comma-seperated list of numbers
	$message = urlencode($message);
	$data = "username=".$username."&hash=".$hash."&message=".$message."&sender=".$sender."&numbers=".$numbers."&test=".$test;
	$ch = curl_init('http://api.textlocal.in/send/?');
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$result = curl_exec($ch); // This is the result from the API
	curl_close($ch);
?>