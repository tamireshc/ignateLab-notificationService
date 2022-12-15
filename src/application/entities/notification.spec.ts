import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notifications', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'exemple-recipient-Id',
    });
    expect(notification).toBeTruthy();
  });
});
