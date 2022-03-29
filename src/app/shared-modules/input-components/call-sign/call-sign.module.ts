import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CallSignComponent} from './call-sign.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {I18nModule} from '../../i18n/i18n.module';


@NgModule({
  declarations: [CallSignComponent],
  exports: [CallSignComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    I18nModule
  ]
})
export class CallSignModule {
}
