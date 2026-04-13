import azure.functions as func
import json
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        req_body = req.get_json()
        name = req_body.get('name')
        phone = req_body.get('phone')
        email = req_body.get('email')
        message = req_body.get('message')

        # 1. Create the Email
        email_content = f"New Booking from: {name}\nPhone: {phone}\nEmail: {email}\nMessage: {message}"
        
        mail = Mail(
            from_email='quangpham91194@domain.com', # Must match SendGrid sender
            to_emails='quangpham91194@gmail.com', # Where YOU want to receive the notification
            subject=f'New Nail Shop Booking: {name}',
            plain_text_content=email_content
        )

        # 2. Send the Email using the API Key stored in Azure Settings
        sg = SendGridAPIClient(os.environ.get('SendGrid_API_Key'))
        sg.send(mail)

        return func.HttpResponse(
            json.dumps({"status": "success", "message": "Email notification sent!"}),
            status_code=200
        )

    except Exception as e:
        return func.HttpResponse(f"Error: {str(e)}", status_code=500)
