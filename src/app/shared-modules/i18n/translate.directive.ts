import {Directive, ElementRef, Input} from '@angular/core';
import {createSelector, Store} from '@ngrx/store';
import {i18nFeature} from './i18n-store';
import {LanguageResource} from './language-resource';

export type ResourceSelector = (lng: LanguageResource) => string;

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[resource]'
})
export class TranslateDirective {

  constructor(private store: Store, private element: ElementRef) {
  }

  @Input() set resource(value: ResourceSelector) {
    const selectResource = createSelector(
      i18nFeature.selectTranslations,
      i18nFeature.selectCurrentLanguage,
      (res, lng) => value(res[lng])
    );

    // eslint-disable-next-line ngrx/no-store-subscription
    this.store.select(selectResource).subscribe(_ => this.element.nativeElement.innerHTML = _);
  }

}
