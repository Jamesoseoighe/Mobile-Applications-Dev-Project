import { ComponentFixture, TestBed ,waitForAsync} from '@angular/core/testing';
import { ContactPage } from './contact.page';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
describe('ContactPage', () => {
  let component: ContactPage;
  let fixture: ComponentFixture<ContactPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPage ],
      providers: [ FormBuilder ] // Add FormBuilder as a provider
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
