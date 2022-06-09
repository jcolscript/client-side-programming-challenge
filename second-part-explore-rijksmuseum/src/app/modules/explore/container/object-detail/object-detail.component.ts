import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ArtObject } from 'src/app/shared/interfaces/artobject.interface';
import { GetArtObject } from 'src/app/shared/state/artobject.actions';
import { ArtObejectState } from 'src/app/shared/state/artobject.state';

@Component({
  selector: 'app-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrls: ['./object-detail.component.css'],
})
export class ObjectDetailComponent implements OnInit {
  id!: string;
  @Select(ArtObejectState.getObjSelected) objSelected$:
    | Observable<ArtObject>
    | undefined;
  @Select(ArtObejectState.isLoading) isLoading$:
    | Observable<boolean>
    | undefined;
  public artObcjectSelected!: ArtObject;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(new GetArtObject(this.id));

    this.objSelected$?.subscribe((res) => (this.artObcjectSelected = res));
  }
}
