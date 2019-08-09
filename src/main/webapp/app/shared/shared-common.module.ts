import { NgModule } from '@angular/core';

import { BmsCrsIiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [BmsCrsIiSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [BmsCrsIiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BmsCrsIiSharedCommonModule {}
