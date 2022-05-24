import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExploreComponent } from './container/explore/explore.component';
import { ExploreRoutingModule } from './explore-routing.module';

@NgModule({
  imports: [CommonModule, ExploreRoutingModule],
  declarations: [ExploreComponent],
})
export class ExplorerModule {}
