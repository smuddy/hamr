import {createFeature, createReducer} from '@ngrx/store';
import {LanguageResource} from './language-resource';
import {language as de} from '../../../locale/de';
import {language as en} from '../../../locale/en';
import {flatResource} from './i18n.helpers';


// import * as BookListPageActions from './book-list-page.actions';
// import * as BooksApiActions from './books-api.actions';

export type FlatResource = ({ [resourceKey: string]: string });

interface AppState {
  i18n: I18nState;
}

interface I18nState {
  translations: ({ [lngCode: string]: LanguageResource });
  flattenedTranslationResource: FlatResource;
  currentLanguage: string;
}

const initialI18nState: I18nState = {
  translations: {de, en},
  flattenedTranslationResource: flatResource(de),
  currentLanguage: 'de',
};

export const i18nFeature = createFeature({
  name: 'i18n',
  reducer: createReducer(
    initialI18nState,
    // on(BookListPageActions.enter, (state) => ({
    //   ...state,
    //   loading: true,
    // })),
    // on(BooksApiActions.loadBooksSuccess, (state, { books }) => ({
    //   ...state,
    //   books,
    //   loading: false,
    // }))
  )

});

export const {
  name,
  reducer,
  selectI18nState,
  selectCurrentLanguage,
  selectTranslations,
} = i18nFeature;
