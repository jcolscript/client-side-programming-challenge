/* tslint:disable:no-unused-variable */
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));

  it('should change image when click in roman number', fakeAsync(() => {
    const debugElement = fixture.debugElement;
    const romanNumbers = debugElement.queryAll(By.css('.roman-numbers'));
    fixture.detectChanges();

    const romansNumberClicked = romanNumbers[2].nativeElement;
    romansNumberClicked.click();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.imgIndex).toEqual(2);
    });
  }));

  it('should close alert of oculus rift', () => {
    const debugElement = fixture.debugElement;

    const closeAlert = debugElement.query(By.css('.close-alert')).nativeElement;
    closeAlert.click();

    expect(component.isAlertVisible).toEqual(false);
  });
});
