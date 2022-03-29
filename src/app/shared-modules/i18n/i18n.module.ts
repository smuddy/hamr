import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {i18nFeature} from './i18n-store';
import {TextResourceDirective} from './text-resource.directive';
import {EffectsModule} from '@ngrx/effects';
import {I18nEffects} from './i18n.effects';
import {TextResourceService} from './text-resource.service';


@NgModule({
  declarations: [TextResourceDirective],
  exports: [TextResourceDirective],
  providers: [TextResourceService],
  imports: [
    CommonModule,
    StoreModule.forFeature(i18nFeature),
    EffectsModule.forFeature([I18nEffects])
  ]
})
export class I18nModule {
}
