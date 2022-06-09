import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ArtObject } from 'src/app/shared/interfaces/collection.interface';
import {
  ChangeFilter,
  ChangePage,
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
  filterColorState = false;
  filterSortState = false;
  sortColelctionSelected = '';

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(new GetCollection());

    this.objOfCollection$?.subscribe((res) => (this.artObcjects = res));
  }

  getBgImgUrl(url: string): string {
    return `url(${url})`;
  }

  showMore() {
    this.store.dispatch(new ChangePage(this.number + 1));
    this.number++;
  }

  toggleFilterSort() {
    this.filterSortState = !this.filterSortState;
  }

  sortColelction(sort: string) {
    this.sortColelctionSelected = sort;
    this.store.dispatch(new ChangeFilter(sort));
    this.toggleFilterSort();
  }

  openDetail(id: string) {
    this.router.navigate(['/explore/object-detail', id]);
  }
}
