import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterThemeComponent } from './ajouter-theme.component';

describe('AjouterThemeComponent', () => {
  let component: AjouterThemeComponent;
  let fixture: ComponentFixture<AjouterThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
