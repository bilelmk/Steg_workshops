import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFormateurComponent } from './delete-formateur.component';

describe('DeleteFormateurComponent', () => {
  let component: DeleteFormateurComponent;
  let fixture: ComponentFixture<DeleteFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
