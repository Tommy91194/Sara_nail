import azure.functions as func
import json
import logging

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Processing a new booking request.')

    try:
        # Get data from the JavaScript fetch
        req_body = req.get_json()
        name = req_body.get('name')
        phone = req_body.get('phone')
        email = req_body.get('email')
        message = req_body.get('message')

        # Create a friendly response
        response_data = {
            "status": "success",
            "message": f"Chào {name}! SARA.nail has received your message. We will contact you at {phone} soon."
        }

        return func.HttpResponse(
            json.dumps(response_data),
            status_code=200,
            mimetype="application/json"
        )

    except ValueError:
        return func.HttpResponse(
             "Invalid request data",
             status_code=400
        )
