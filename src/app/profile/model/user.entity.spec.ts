import { User } from './user.entity';

describe('UserEntity', () => {
  it('should create an instance', () => {
    const userInstance = new User({ id: 1, name: 'John Doe', email: 'john@example.com', role: 'tenant' });
    expect(userInstance).toBeTruthy();
  });
});
