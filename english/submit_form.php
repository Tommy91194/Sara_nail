<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Collect and sanitize the form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate the form data (basic validation)
    if (empty($name) || empty($email) || empty($message)) {
        // If any of the fields are empty, display an error
        echo "All fields are required.";
        exit;
    }

    // Set the email recipient (this is where the email will be sent)
    $to = "youremail@example.com";  // Change this to your email address
    $subject = "New message from Sara.nail contact form";
    
    // Create the email content
    $email_content = "You have received a new message from your website contact form.\n\n";
    $email_content .= "Name: " . $name . "\n";
    $email_content .= "Email: " . $email . "\n";
    $email_content .= "Message: " . $message . "\n";
    
    // Set the email headers
    $headers = "From: no-reply@sara-nail.com\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Thank you for contacting us! We'll get back to you shortly.";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    // If the form was not submitted, redirect the user back to the contact page
    header("Location: index.html#contact");
    exit;
}
?>
