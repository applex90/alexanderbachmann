import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  mailSent: boolean = false;
  /**
   * This is bind to ngForm's InputFields in Template File
   */
  contact = {
    name: '', //Bind  to InputField name="name"
    email: '', //Bind to InputField name="email"
    message: '', //Bind to InputField name="message"
  };

  /**
   * A post request construct configuration
   */
  post = {
    endPoint: 'https://www.alexander-bachmann-portfolio.de/send_mail.php',
    // What to send, notice JSON.stringify
    body: (payload: any) => JSON.stringify(payload),
    // How to send, notice Content-Type and responseType
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  /**
   * Do not forget to import FormsModule in app.module.ts
   */
  onSubmit(ngForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => {
            console.log('response');
            // Here Message was send
          },
          error: (error) => {
            console.error(error);
            // Here Message was not send!!!!!
          },
          complete: () => {
            console.info('send post complete'),
            this.mailSent = true;
            setTimeout(() => {
              this.mailSent = false;
            }, 10000);
          }
          
        });
    }
  }
}