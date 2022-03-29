import {ActionCreator, createAction, createSelector, on, props, ReducerTypes} from '@ngrx/store';
import produce from 'immer';
import {AppState, initialAppState} from '../../store/store';
import {getCountryByCallSign} from '../../shared-modules/input-components/call-sign/call-sign.helper';

export const newQsoActions = {
  user: {
    changedCallSign: createAction('[NEW QSO] user changed callSign', props<{ value: string }>()),
    changedCallSignLive: createAction('[NEW QSO] user changed callSign live', props<{ value: string }>()),
  },
};

export const newQsoReducers: ReducerTypes<AppState, readonly ActionCreator[]>[] = [
  on(newQsoActions.user.changedCallSign, (state, payload) => produce(state, s => {
    s.pages.newQso.callSign = payload.value.toUpperCase();
  })),
  on(newQsoActions.user.changedCallSignLive, (state, payload) => produce(state, s => {
    s.pages.newQso.callSignInfo.input = payload.value.toUpperCase();
    const country = getCountryByCallSign(payload.value);
    s.pages.newQso.callSignInfo.country = country ? {
      name: country.COUNTRY_NAME,
      sub: country.COUNTRY_SUB,
      iso: country.ISO,
      flag: country.EMOJI,
    } : initialAppState.pages.newQso.callSignInfo.country;
  })),
];

const selectFeature = (state: { app: AppState }) => state.app.pages.newQso;
export const selectNewQso = {
  store: createSelector(selectFeature, _ => _),
  callSign: createSelector(selectFeature, _ => _.callSign),
  callSignInfo: createSelector(selectFeature, _ => _.callSignInfo),
};
