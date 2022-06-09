import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './container/explore/explore.component';
import { ObjectDetailComponent } from './container/object-detail/object-detail.component';

const routes: Routes = [
  { path: '', component: ExploreComponent },
  { path: 'object-detail/:id', component: ObjectDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreRoutingModule {}
