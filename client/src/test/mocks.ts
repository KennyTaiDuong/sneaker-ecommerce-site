export const mockElement = () => ({
  mount: vi.fn(),
  destroy: vi.fn(),
  on: vi.fn(),
  update: vi.fn(),
});

export const mockElements = () => {
  const elements: any = {};
  return {
    create: vi.fn((type) => {
      elements[type] = mockElement();
      return elements[type];
    }),
    getElement: vi.fn((type) => {
      return elements[type] || null;
    }),
    update: vi.fn(),
  };
};

export const mockCustomCheckoutSession = () => {
  return {
    lineItems: [],
    currency: 'usd',
    shippingOptions: [],
    total: {
      subtotal: 1099,
      taxExclusive: 0,
      taxInclusive: 0,
      shippingRate: 0,
      discount: 0,
      total: 1099,
    },
    confirmationRequirements: [],
    canConfirm: true,
  };
};

export const mockCustomCheckoutSdk = () => {
  const elements: any = {};

  return {
    changeAppearance: vi.fn(),
    createElement: vi.fn((type) => {
      elements[type] = mockElement();
      return elements[type];
    }),
    getElement: vi.fn((type) => {
      return elements[type] || null;
    }),
    session: vi.fn(() => mockCustomCheckoutSession()),
    applyPromotionCode: vi.fn(),
    removePromotionCode: vi.fn(),
    updateShippingAddress: vi.fn(),
    updateBillingAddress: vi.fn(),
    updatePhoneNumber: vi.fn(),
    updateEmail: vi.fn(),
    updateLineItemQuantity: vi.fn(),
    updateShippingOption: vi.fn(),
    confirm: vi.fn(),
    on: vi.fn(),
  };
};

export const mockEmbeddedCheckout = () => ({
  mount: vi.fn(),
  unmount: vi.fn(),
  destroy: vi.fn(),
});

export const mockStripe = () => {
  const customCheckoutSdk = mockCustomCheckoutSdk();
  return {
    elements: vi.fn(() => mockElements()),
    createToken: vi.fn(),
    createSource: vi.fn(),
    createPaymentMethod: vi.fn(),
    confirmCardPayment: vi.fn(),
    confirmCardSetup: vi.fn(),
    paymentRequest: vi.fn(),
    registerAppInfo: vi.fn(),
    _registerWrapper: vi.fn(),
    initCustomCheckout: vi.fn().mockResolvedValue(customCheckoutSdk),
    initEmbeddedCheckout: vi.fn(() =>
      Promise.resolve(mockEmbeddedCheckout())
    ),
  };
};

export const mockCartElementContext = () => {
  const cartElementContext = {
    cart: null,
    cartState: null,
    setCart: (_: any) => {},
    setCartState: (_: any) => {}
  };
  cartElementContext.setCart = (val) => {
    cartElementContext.cart = val;
  };
  cartElementContext.setCartState = (val) => {
    cartElementContext.cartState = val;
  };
  return cartElementContext
}