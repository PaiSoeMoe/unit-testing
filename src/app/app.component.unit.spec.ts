import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { from, throwError } from 'rxjs';

// unit testing

describe('AppComponent ngOnInit', () => {
    let component: AppComponent;
    let service: HttpService;
    beforeEach(() => {
        service = new HttpService(null);
        component = new AppComponent(service);
    });

    it('should set data property with the items returned from the server', () => {
        spyOn(service, 'getTweet').and.callFake(() => {
            return from([[1, 2, 3]]);
        });

        component.ngOnInit();

        expect(component.data).toEqual([1, 2, 3]);

    });

    it('should set error property with the error message returned from the server', () => {
        spyOn(service, 'getTweet').and.callFake(() => { return throwError(new Error("Can't connect to server")) })

        component.ngOnInit();

        expect(component.message).toEqual("Can't connect to server");

    });


});






describe('AppComponent onClick, setActive', () => {
    let component: AppComponent;
    let service: HttpService;
    beforeEach(() => {
        service = new HttpService(null);
        component = new AppComponent(service);
    });

    it('should set data property with the items returned from the server', () => {
        spyOn(service, 'getTweet').and.callFake(() => {
            return from([[1, 2, 3]]);
        });

        component.onClick(new Event('click'), '1');

        expect(component.data).toEqual([1, 2, 3]);

    });

    it('should set error property with the error message returned from the server', () => {
        spyOn(service, 'getTweet').and.callFake(() => {
            return throwError(new Error("Can't connect to server"))
        });

        component.onClick(new Event('click'), '1');

        expect(component.message).toEqual("Can't connect to server");

    });
    it('should set active to object with given id', () => {
        let names = [
            { id: '1', name: 'Conor Mcgregor', active: false },
            { id: '2', name: 'Elon Musk', active: false },
            { id: '3', name: 'Burger King', active: true },
            { id: '4', name: 'Wendy\'s', active: false },
            { id: '5', name: 'Chipotle', active: false },
        ];
        component.setActive('3');

        expect(component.names).toEqual(names);

    });


});
