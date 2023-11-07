import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNoteComponent } from './form-note.component';

describe('FormNoteComponent', () => {
  let component: FormNoteComponent;
  let fixture: ComponentFixture<FormNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormNoteComponent]
    });
    fixture = TestBed.createComponent(FormNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
