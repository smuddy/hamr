import {Component} from '@angular/core';
import {ResourceSelector} from '../shared-modules/i18n/text-resource.directive';

@Component({
  selector: 'app-new-qso',
  templateUrl: './new-qso.page.html',
  styleUrls: ['./new-qso.page.scss'],
})
export class NewQsoPage {
  header: ResourceSelector = _ => _.pages.newQso.titleHead;

}
