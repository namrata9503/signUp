import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PostUserService } from './post-user.service';
let postService: PostUserService;
let httpMock: HttpTestingController;
describe('PostUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostUserService],
    });

    postService = TestBed.inject(PostUserService);
    httpMock = TestBed.inject(HttpTestingController);
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
      password: 'Qu12345678',
    };
    postService
      .postUser({
        firstName: 'Jon',
        lastName: 'Doe',
        email: 'john@gmail.com',
        password: 'Qu12345678',
      })
      .subscribe((res) => {
        console.log(`data : ${res.body.firstName}`);

        expect(res.body.firstName).toEqual('Jon');
        expect(res.body.lastName).toEqual('Doe');
        expect(res.body.email).toEqual('john@gmail.com');
        expect(res.body.password).toEqual('Qu12345678');
      });

    const req = httpMock.expectOne('https://demo-api.now.sh/users');

    expect(req.request.method).toEqual('POST');

    req.flush(mockUser);
  });
});
