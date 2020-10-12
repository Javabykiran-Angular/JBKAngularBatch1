import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TDFDemoComponent } from './tdfdemo.component';

describe('TDFDemoComponent', () => {
  let component: TDFDemoComponent;
  let fixture: ComponentFixture<TDFDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDFDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDFDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
