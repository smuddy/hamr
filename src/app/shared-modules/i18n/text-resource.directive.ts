import {Directive, ElementRef, Input} from '@angular/core';
import {LanguageResource} from '../../../locale/language-resource';
import {TextResourceService} from './text-resource.service';

export type ResourceSelector = (lng: LanguageResource) => string;

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[resource]'
})
export class TextResourceDirective {

  constructor(private textResourceService: TextResourceService, private element: ElementRef) {
  }

  @Input() set resource(selector: ResourceSelector) {
    this.textResourceService.translate$(selector).subscribe(_ => this.element.nativeElement.innerHTML = _);
  }

}
