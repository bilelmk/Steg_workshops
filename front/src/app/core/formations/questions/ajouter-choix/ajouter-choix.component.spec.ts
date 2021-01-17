import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterChoixComponent } from './ajouter-choix.component';

describe('AjouterChoixComponent', () => {
  let component: AjouterChoixComponent;
  let fixture: ComponentFixture<AjouterChoixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterChoixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterChoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
