import {Component} from '@angular/core';
import {ResourceSelector} from './shared-modules/i18n/text-resource.directive';
import {TextResourceService} from './shared-modules/i18n/text-resource.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: this.textResourceService.translate$(_ => _.pages.newQso.titleMenu), url: '/new-qso', icon: 'enter'},
  ];

  constructor(private textResourceService: TextResourceService) {
  }

  appName: ResourceSelector = _ => _.header.appName;
  appSlogan: ResourceSelector = _ => _.header.appSlogan;
}
