import boto3
import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders

def lambda_handler(event, context):
    # S3 and SNS details from event
    s3 = boto3.client('s3')

    # Replace with your bucket name and object key
    bucket_name = 'cypress-bdd-framework'
    object_key = 'Cypress_Framework-BDD/index.html'

    # Download the artifact from S3
    download_path = f'/tmp/{os.path.basename(object_key)}'
    s3.download_file(bucket_name, object_key, download_path)

    # Email sending parameters
    sender = 'mahajavi@amazon.com'
    recipient = 'mahajavi@amazon.com'
    subject = 'Cypress BDD Framework Build and Test Run Status'
    body = 'Please find the Cypress BDD Framework Test Run Status attached.'

    # Prepare the email
    msg = MIMEMultipart()
    msg['From'] = sender
    msg['To'] = recipient
    msg['Subject'] = subject
    msg['Body'] = body

    msg.attach(MIMEText(body, 'plain'))

    # Attach the artifact
    attachment = open(download_path, 'rb')
    part = MIMEBase('application', 'octet-stream')
    part.set_payload(attachment.read())
    encoders.encode_base64(part)
    part.add_header('Content-Disposition', f'attachment; filename= {os.path.basename(object_key)}')

    msg.attach(part)

    # Send the email using SES (or any SMTP server)
    ses_client = boto3.client('ses')
    response = ses_client.send_raw_email(
        Source=sender,
        Destinations=[recipient],
        RawMessage={'Data': msg.as_string()}
    )

    return {
        'statusCode': 200,
        'body': f'Email sent! Message ID: {response["MessageId"]}'
    }
