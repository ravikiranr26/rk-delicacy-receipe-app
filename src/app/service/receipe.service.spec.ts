import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReceipeService } from './receipe.service';

describe('ReceipeService', () => {
  let service: ReceipeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ReceipeService],
    });

    // inject the service
    service = TestBed.get(ReceipeService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should get the all receipe data successful', () => {
    // test goes here
    service.getAllReceipes().subscribe((data: any) => {
      expect(data.name).toBe('CAKE');
    });

    const req = httpMock.expectOne(`http://localhost:8080/api/recipes/all`, 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush({
      name: 'CAKE'
    });

    httpMock.verify();
  });

  it('should get the receipe details data successful', () => {
    // test goes here
    service.getReceipeDetails('test').subscribe((data: any) => {
      expect(data.name).toBe('PASTA');
    });

    const req = httpMock.expectOne(`http://localhost:8080/api/recipes/test`, 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush({
      name: 'PASTA'
    });

    httpMock.verify();
  });

});
