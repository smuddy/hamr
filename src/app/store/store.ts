import {ActionReducerMap, createReducer, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {newQsoReducers} from '../new-qso/actions/newQso.actions';


export interface AppState {
  pages: {
    newQso: {
      callSign: string;
      callSignInfo: {
        input: string;
        country: {
          name: string;
          sub: string;
          iso: string;
          flag: string;
        };
      };
    };
  };
}

export const initialAppState: AppState = {
  pages: {
    newQso: {
      callSign: null,
      callSignInfo: {
        input: null,
        country: {
          name: null,
          sub: null,
          iso: null,
          flag: null,
        },
      },
    }
  }
};


export const appReducers: ActionReducerMap<{ app: AppState }> = {
  app: createReducer(
    initialAppState,
    ...newQsoReducers
  )
};


export const appMetaReducers: MetaReducer<{ app: AppState }>[] = !environment.production ? [] : [];
