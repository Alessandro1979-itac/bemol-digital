import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPageUserComponent } from './list-page-user.component';

describe('ListPageUserComponent', () => {
  let component: ListPageUserComponent;
  let fixture: ComponentFixture<ListPageUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPageUserComponent]
    });
    fixture = TestBed.createComponent(ListPageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
