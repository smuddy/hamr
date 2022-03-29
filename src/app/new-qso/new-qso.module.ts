import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {NewQsoPageRoutingModule} from './new-qso-routing.module';

import {NewQsoPage} from './new-qso.page';
import {I18nModule} from '../shared-modules/i18n/i18n.module';
import {CallSignModule} from '../shared-modules/input-components/call-sign/call-sign.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewQsoPageRoutingModule,
    I18nModule,
    CallSignModule,
  ],
  declarations: [NewQsoPage]
})
export class NewQsoPageModule {
}
