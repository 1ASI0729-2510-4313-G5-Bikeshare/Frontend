import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule }        from '@angular/router/testing';
import { HomeCustomerComponent }      from './home-customer.component';

describe('HomeCustomerComponent', () => {
  let component: HomeCustomerComponent;
  let fixture: ComponentFixture<HomeCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeCustomerComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
