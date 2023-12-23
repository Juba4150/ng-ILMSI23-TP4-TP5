import { NgModule } from '@angular/core';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [AddComponent, ListComponent],
  imports: [UserRoutingModule, SharedModule],
})
export class UsersModule {}
