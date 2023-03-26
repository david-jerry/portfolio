import threading
import base64
from threading import Thread

from django.conf import settings
from django.utils.safestring import mark_safe
from django.core.mail import send_mail, EmailMessage
from django.templatetags.static import static
from django.template.loader import get_template
from django.template import Context

import mailtrap as mt

client = mt.MailtrapClient(token=settings.MAILTRAP_TOKEN)
logo = static("images/favicons/logo.png")

class EmailThread(Thread):
    def __init__(self, subject, html_content, pdf, variables, category, text_content, name, username, from_email, recipient_list):
        self.subject = subject
        self.name = name
        self.pdf = pdf or None
        self.username = username
        self.recipient_list = recipient_list
        self.html_content = html_content
        self.variables = variables
        self.from_email = from_email if from_email != "" else settings.DEFAULT_FROM_EMAIL
        self.text_content = text_content
        self.category = category
        Thread.__init__(self)

    def run (self):
        msg = mt.Mail(
            sender=mt.Address(email=self.from_email or "Jeremiah David <noreply@jeremiahedavid.space>", name=self.name or "Jeremiah David"),
            to=[mt.Address(email=self.recipient_list or "hello@jeremiahedavid.space", name=self.username or "Jeremiah David")],
            subject=self.subject,
            text=self.text_content or None,
            html=self.html_content or None,
            category=self.category or None,
            attachments=[
                mt.Attachment(
                content=base64.b64encode(logo),
                filename="logo.png",
                disposition=mt.Disposition.INLINE,
                mimetype="image/png",
                content_id="logo.png"),
                mt.Attachment(
                content=base64.b64encode(self.pdf),
                filename="quote.pdf",
                disposition=mt.Disposition.INLINE,
                mimetype="application/pdf",
                content_id="quote.pdf")
            ] or None,
            custom_variables=self.variables or {'company_name':"Jeremiah David"}
        )
        client.send(msg)

def send_mt_mail(subject, html_content, pdf, variables, category, text_content, name, username, from_email, recipient_list):
    EmailThread(subject, html_content, pdf, variables, category, text_content, name, username, from_email, recipient_list).start()



class SMTP_EMAIL(Thread):
    def __init__(self, subject: str, template: str, from_email: str, context: dict, to_email: list, reply_to: str, attachment: str):
        """_summary_

        Args:
            subject (str): AN email subject
            template (str): template name from the templates folder to use for sending the email as HTML
            from_email (str): email address from usually a username tied to the verified domain on mailtrap
            context (dict): A dictionary to contain all context variables for the html template
            to_email (List[str]): A list of email addresses to send to
            reply_to (str): an email address to reply emails to
            attachment (str): an attachment file
        """
        self.subject = subject
        self.body = get_template(template_name=template).render(Context(context)) or None
        self.from_email = from_email or "Jeremiah David <noreply@jeremiahedavid.space>"
        self.to_email = to_email or ["hello@jeremiahedavid.space"]
        self.reply_to = reply_to
        self.attachment = attachment or None
        Thread.__init__(self)

    def run(self):
        mail = EmailMessage(
            subject=self.subject,
            body=self.body,
            from_email=self.from_email,
            to=self.to_email,
            reply_to=self.reply_to
        )
        mail.content_subtype = "html"
        mail.attach('logo.png', logo, 'image/png')
        # attach a file from the backend to be sent with teh email to a user via email
        if self.attachment is not None :
            mail.attach_file(self.attachment)
        mail.send()

def send_smtp_mail(subject: str, template: str, from_email: str, context: dict, to_email: list, reply_to: str, attachment: str):
    """_summary_

    Args:
        subject (str): AN email subject
        template (str): template name from the templates folder to use for sending the email as HTML
        from_email (str): email address from usually a username tied to the verified domain on mailtrap
        context (dict): A dictionary to contain all context variables for the html template
        to_email (List[str]): A list of email addresses to send to
        reply_to (str): an email address to reply emails to
        attachment (str): an attachment file
    """
    SMTP_EMAIL(subject, template, from_email, context, to_email, reply_to, attachment)
