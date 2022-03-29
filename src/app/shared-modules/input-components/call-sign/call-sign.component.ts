import {Component} from '@angular/core';
import {newQsoActions, selectNewQso} from '../../../new-qso/actions/newQso.actions';
import {Store} from '@ngrx/store';
import {ResourceSelector} from '../../i18n/text-resource.directive';

@Component({
  selector: 'app-call-sign',
  templateUrl: './call-sign.component.html',
  styleUrls: ['./call-sign.component.scss'],
})
export class CallSignComponent {
  public callSign$ = this.store.select(selectNewQso.callSign);
  public callSignInfo$ = this.store.select(selectNewQso.callSignInfo);

  constructor(private store: Store) {
  }

  labelCallSign: ResourceSelector = _ => _.pages.newQso.labelCallSign;


  public callSignChanged(value: FocusEvent) {
    this.store.dispatch(newQsoActions.user.changedCallSign({value: (value.currentTarget as unknown as { value: string }).value}));
  }

  public callSignChangedLive(value: string) {
    this.store.dispatch(newQsoActions.user.changedCallSignLive({value}));
  }

}
