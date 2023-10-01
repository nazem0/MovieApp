import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'SafeURL'
})
export class SafeURLPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}
  transform(url:string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
  