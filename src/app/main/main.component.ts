import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  redirectState: string;

  constructor(private route: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
    this.route.params.subscribe((params) => {
      this.redirectState = params['state'];
      if (this.redirectState == 'ok') {
        // this.router.navigateByUrl('#contact');
        this.openSnackBar('Thanks, your email was sent successfully.');
      }
    }
    )
  }

  openSnackBar(message) {
    this.snackBar.open(message, '', {
      duration: 5000,
      verticalPosition: 'top'
    })
  }

}
