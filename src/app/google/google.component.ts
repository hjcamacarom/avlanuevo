import { Component, OnInit  } from '@angular/core';
import { DomSanitizer , SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {
  constructor( private sanitizer: DomSanitizer ) {
    
   }

  gcsesearch: SafeHtml;

  ngOnInit() {
    this.gcsesearch = this.sanitizer.bypassSecurityTrustHtml("<gcse:search></gcse:search>");

    var cx = '012366552177618066513:l9xl0mdtsiu';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  }
}