import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [TableModule, ButtonModule, AvatarModule, ToastModule],
  exports: [TableModule, ButtonModule, AvatarModule, ToastModule],
})
export class PrimeModule {}
