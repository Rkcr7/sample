import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercompleteComponent } from './registercomplete.component';

describe('RegistercompleteComponent', () => {
  let component: RegistercompleteComponent;
  let fixture: ComponentFixture<RegistercompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistercompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistercompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
