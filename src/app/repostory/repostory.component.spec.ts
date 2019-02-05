import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepostoryComponent } from './repostory.component';

describe('RepostoryComponent', () => {
  let component: RepostoryComponent;
  let fixture: ComponentFixture<RepostoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepostoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepostoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
