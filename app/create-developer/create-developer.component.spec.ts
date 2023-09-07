import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeveloperComponent } from './create-developer.component';

describe('CreateDeveloperComponent', () => {
  let component: CreateDeveloperComponent;
  let fixture: ComponentFixture<CreateDeveloperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDeveloperComponent]
    });
    fixture = TestBed.createComponent(CreateDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
