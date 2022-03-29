import {Injectable} from '@angular/core';
import {createSelector, Store} from '@ngrx/store';
import {ResourceSelector} from './text-resource.directive';
import {Observable} from 'rxjs';
import {i18nFeature} from './i18n-store';

@Injectable()
export class TextResourceService {

  constructor(private store: Store) {
  }

  public translate$(resourceSelector: ResourceSelector): Observable<string> {
    const selectResource = createSelector(
      i18nFeature.selectTranslations,
      i18nFeature.selectCurrentLanguage,
      (res, lng) => resourceSelector(res[lng])
    );

    return this.store.select(selectResource);
  }

}
