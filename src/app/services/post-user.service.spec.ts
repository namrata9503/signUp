import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostUserService } from './post-user.service';

describe('PostUserService', () => {
  let postService: PostUserService;
  let httpMock: HttpTestingController;
 
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

  it('should be created', () => {
    expect(postService).toBeTruthy();
  });
});
