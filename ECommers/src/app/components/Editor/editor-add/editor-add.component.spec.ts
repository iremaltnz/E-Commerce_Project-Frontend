import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorAddComponent } from './editor-add.component';

describe('EditorAddComponent', () => {
  let component: EditorAddComponent;
  let fixture: ComponentFixture<EditorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
