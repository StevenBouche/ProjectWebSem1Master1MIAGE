import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumitemComponent } from './forumitem.component';

describe('ForumitemComponent', () => {
  let component: ForumitemComponent;
  let fixture: ComponentFixture<ForumitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
