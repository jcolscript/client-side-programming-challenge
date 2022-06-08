import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { ExploreComponent } from './container/explore/explore.component';
import { ExploreRoutingModule } from './explore-routing.module';

@NgModule({
  imports: [CommonModule, ExploreRoutingModule],
  declarations: [ExploreComponent, InfiniteScrollComponent],
})
export class ExplorerModule {}
