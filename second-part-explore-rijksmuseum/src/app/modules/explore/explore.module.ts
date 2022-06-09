import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExploreComponent } from './container/explore/explore.component';
import { ObjectDetailComponent } from './container/object-detail/object-detail.component';
import { ExploreRoutingModule } from './explore-routing.module';

@NgModule({
  imports: [CommonModule, ExploreRoutingModule],
  declarations: [ExploreComponent, ObjectDetailComponent],
})
export class ExplorerModule {}
