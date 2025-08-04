<?php
session_start();

// CSRF token validation
if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    http_response_code(403);
    echo "<h2>Invalid CSRF token. Please try again.</h2>";
    exit;
}

// Validate and sanitize inputs (no deprecated FILTER_SANITIZE_STRING)
$title = trim(filter_input(INPUT_POST, 'title', FILTER_UNSAFE_RAW));
$title = htmlspecialchars($title, ENT_QUOTES, 'UTF-8');

$artist = trim(filter_input(INPUT_POST, 'artist', FILTER_UNSAFE_RAW));
$artist = htmlspecialchars($artist, ENT_QUOTES, 'UTF-8');

$lyrics = trim(filter_input(INPUT_POST, 'lyrics', FILTER_UNSAFE_RAW));
$lyrics = htmlspecialchars($lyrics, ENT_QUOTES, 'UTF-8');

$submitter_name = trim(filter_input(INPUT_POST, 'submitter_name', FILTER_UNSAFE_RAW));
$submitter_name = htmlspecialchars($submitter_name, ENT_QUOTES, 'UTF-8');

$submitter_email = trim(filter_input(INPUT_POST, 'submitter_email', FILTER_SANITIZE_EMAIL));

if (empty($title) || empty($artist) || empty($lyrics)) {
    http_response_code(400);
    echo "<h2>Please fill out all fields.</h2>";
    exit;
}

if (mb_strlen($title) < 2 || mb_strlen($artist) < 2 || mb_strlen($lyrics) < 10) {
    http_response_code(400);
    echo "<h2>Invalid input: Title and artist must be at least 2 characters, lyrics at least 10 characters.</h2>";
    exit;
}

// Email configuration
$to = "ronald.t.lasule@gmail.com, ronard.t.lasule@gmail.com";
$subject = "New Lyrics Submission - ZaburiHub";
$message = "Song Title: $title\n";
$message .= "Artist: $artist\n\n";
$message .= "Lyrics:\n$lyrics\n\n";
if ($submitter_name) {
    $message .= "Submitted by: $submitter_name\n";
}
if ($submitter_email) {
    $message .= "Submitter Email: $submitter_email\n";
}
$headers = "From: noreply@zaburihub.com\r\n";
$headers .= "Reply-To: noreply@zaburihub.com\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $message, $headers)) {
    http_response_code(200);
    echo "<h2>Thank you! Your lyrics have been submitted for review.</h2>";
} else {
    http_response_code(500);
    echo "<h2>Sorry, there was a problem sending your submission. Please try again later.</h2>";
}
?>