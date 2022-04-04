import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '@mfe-poc/mfe-poc-services-lib';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
      },
    ]),
  ],
  providers: [AuthGuard],
  exports: [RemoteEntryComponent],

})
export class RemoteEntryModule {}
