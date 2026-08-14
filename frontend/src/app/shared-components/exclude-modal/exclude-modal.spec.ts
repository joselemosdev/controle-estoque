import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudModal } from './exclude-modal';

describe('CrudModal', () => {
  let component: CrudModal;
  let fixture: ComponentFixture<CrudModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudModal],
    }).compileComponents();

    fixture = TestBed.createComponent(CrudModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
