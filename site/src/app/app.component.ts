import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})

export class AppComponent implements OnInit {
  @ViewChild('fullpageRef') fp_directive: ElementRef;
  config;
  fullpage_api;

  constructor(private renderer: Renderer2) {

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['welcome', 'timeline', 'funfacts', 'artdetective'],
      menu: '#menu',
      navigation: true,
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke'],

      // events callback
      afterLoad: (origin, destination, direction) => {
        // console.log(destination);
      },
      afterRender: () => {
        // console.log('afterRender');
      },
      afterResize: (width, height) => {
        // console.log('afterResize' + width + ' ' + height);
      },
      afterSlideLoad: (section, origin, destination, direction) => {
        // console.log(destination);
      }
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}