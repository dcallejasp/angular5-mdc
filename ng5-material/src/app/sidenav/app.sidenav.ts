/** @title Sidenav open & close behavior */
import { Component } from '@angular/core';

@Component({
    selector: 'sidenav',
    templateUrl: 'app.sidenav.html',
    styleUrls: ['app.sidenav.css'],
})

export class SidenavOpenCloseExample {
    events = ["peras", "Manzanas", "uvas"];

    shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}