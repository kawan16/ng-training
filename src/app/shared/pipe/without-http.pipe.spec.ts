import { WithoutHttpPipe } from './without-http.pipe';

describe('WithoutHttpPipe', () => {
  it('create an instance', () => {
    const pipe = new WithoutHttpPipe();
    expect(pipe).toBeTruthy();
  });
});
