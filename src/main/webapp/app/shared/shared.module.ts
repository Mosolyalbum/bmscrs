import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BmsCrsIiSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [BmsCrsIiSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [BmsCrsIiSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BmsCrsIiSharedModule {
  static forRoot() {
    return {
      ngModule: BmsCrsIiSharedModule
    };
  }
}
