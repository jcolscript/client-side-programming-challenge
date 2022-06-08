import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ArtObject } from 'src/app/shared/interfaces/collection.interface';
import {
  ChangeFilters,
  GetCollection,
} from 'src/app/shared/state/collection.actions';
import { CollectionState } from 'src/app/shared/state/collection.state';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
})
export class ExploreComponent implements OnInit {
  @Select(CollectionState.getObjOfCollection) objOfCollection$:
    | Observable<ArtObject[]>
    | undefined;
  @Select(CollectionState.isLoading) isLoading$:
    | Observable<boolean>
    | undefined;
  public artObcjects: ArtObject[] = [];
  number = 1;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetCollection());

    this.objOfCollection$?.subscribe((res) => (this.artObcjects = res));
  }

  getBgImgUrl(url: string): string {
    return `url(${url})`;
  }

  onScroll() {
    this.store.dispatch(new ChangeFilters({ page: this.number + 1 }));
    this.number++;
  }
}
