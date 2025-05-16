import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule }        from '@angular/router/testing';
import { HomeAddBikeComponent }       from './home-add-bike.component';

describe('HomeAddBikeComponent', () => {
  let component: HomeAddBikeComponent;
  let fixture: ComponentFixture<HomeAddBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeAddBikeComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAddBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());
});
