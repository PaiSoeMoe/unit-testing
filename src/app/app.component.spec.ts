import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { from, throwError } from 'rxjs';
import { By, BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



// Working with TestBed 
// integration testing


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule
      ],
      declarations: [AppComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render name', () => {
    component.names = [{ id: '1', name: "Conor Mcgregor", active: true }]
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.list-group-item'));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain("Conor Mcgregor");
  });
});

