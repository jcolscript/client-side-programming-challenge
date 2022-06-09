/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ArtObejectState } from '../../../../shared/state/artobject.state';
import { GetArtObject } from '../../../../shared/state/artobject.actions';
import { ObjectDetailComponent } from './object-detail.component';

describe('ObjectDetailComponent', () => {
  let component: ObjectDetailComponent;
  let fixture: ComponentFixture<ObjectDetailComponent>;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectDetailComponent],
      imports: [
        NgxsModule.forRoot([ArtObejectState]),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with dispatch action getCollection', () => {
    store.dispatch(new GetArtObject('123'));

    const data = store.selectSnapshot((state) => state.artobject);
    expect(data).toBeTruthy();
  });
});
