import { CartDetailModule } from './cart-detail.module';

describe('CartDetailModule', () => {
  let cartDetailModule: CartDetailModule;

  beforeEach(() => {
    cartDetailModule = new CartDetailModule();
  });

  it('should create an instance', () => {
    expect(cartDetailModule).toBeTruthy();
  });
});
