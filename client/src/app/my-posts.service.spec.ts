import { TestBed } from '@angular/core/testing';

import { MyPostsService } from './my-posts.service';

describe('MyPostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyPostsService = TestBed.get(MyPostsService);
    expect(service).toBeTruthy();
  });
});
