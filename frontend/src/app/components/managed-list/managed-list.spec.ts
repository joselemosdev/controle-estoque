import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedList } from './managed-list';

describe('ManagedList', () => {
  let component: ManagedList;
  let fixture: ComponentFixture<ManagedList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagedList],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagedList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
