import { TestBed } from '@angular/core/testing';
import{Http, BaseRequestOptions, Response, ConnectionBackend} from '@angular/http';
import { SpotifyService } from './spotify.service';

describe('SpotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyService = TestBed.get(SpotifyService);
    expect(service).toBeTruthy();
  });
});
