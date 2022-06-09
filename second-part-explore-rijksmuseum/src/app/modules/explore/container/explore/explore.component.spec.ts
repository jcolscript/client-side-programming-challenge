/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NgxsModule, Store } from '@ngxs/store';
import { GetCollection } from 'src/app/shared/state/collection.actions';
import { CollectionState } from 'src/app/shared/state/collection.state';
import { ExploreComponent } from './explore.component';

describe('ExploreComponent', () => {
  let component: ExploreComponent;
  let fixture: ComponentFixture<ExploreComponent>;
  let store: Store;
  const mockRouter: { navigate: jasmine.Spy } = jasmine.createSpyObj(
    'mockRouter',
    ['navigate']
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreComponent],
      imports: [NgxsModule.forRoot([CollectionState]), HttpClientTestingModule],
      providers: [{ provide: Router, useValue: mockRouter }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with dispatch action getCollection', () => {
    store.dispatch(new GetCollection());

    const data = store.selectSnapshot((state) => state.collection);
    expect(data).toBeTruthy();
  });

  it('should return string with string background url', () => {
    const url =
      'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
    const result =
      'url(https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)';
    expect(component.getBgImgUrl(url)).toEqual(result);
  });

  it('should dispatch when change page', () => {
    const spy = spyOn(store, 'dispatch');
    component.showMore();
    expect(spy).toHaveBeenCalled();
  });
});
