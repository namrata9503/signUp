import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostUserService } from './post-user.service';

let postService: PostUserService;
let httpMock: HttpTestingController;
describe('PostUserService', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        PostUserService
      ],
    });

    postService = TestBed.get(PostUserService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(postService).toBeTruthy();
  });
});

describe('postUser()', () => {
  it('returned Observable should match the right data', () => {
    const mockUser = {
      firstName: 'Jon',
      lastName: 'Doe',
      email: 'john@gmail.com',
      password: 'Qu12345678'
    };

    postService.postUser({ firstName: 'Jon', lastName: 'Doe', email: 'john@gmail.com', password: 'Qu12345678' })
      .subscribe((data: any) => {
        console.log('data : ', data.body.firstName);

        expect(data.body.firstName).toEqual('Jon');
        expect(data.body.lastName).toEqual('Doe');
        expect(data.body.email).toEqual('john@gmail.com');
        expect(data.body.password).toEqual('Qu12345678');
      });

    const req = httpMock.expectOne('https://demo-api.now.sh/users');

    expect(req.request.method).toEqual('POST');

    req.flush(mockUser);
  });
});
