import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        translate.addLangs(['fa','en', 'fr', 'ur', 'es']);
        translate.setDefaultLang('fa');
        // const browserLang = translate.getBrowserLang();
        translate.use('fa');
        this.rltAndLtr();
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
}
