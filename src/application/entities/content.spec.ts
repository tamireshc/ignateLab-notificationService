import { Content } from './content';

describe('notification content', () => {
  it('should be able to create a notifications content', () => {
    const content = new Content('você recebeu uma solicitação de amizade');
    expect(content).toBeTruthy();
  });

  it('should not be able to create a notifications content whit less than 5 characteres', () => {
    expect(() => new Content('ola')).toThrow();
  });

  it('should not be able to create a notifications content whit more than 240 characteres', () => {
    expect(() => new Content('o'.repeat(241))).toThrow();
  });
});
