import * as React from 'react';
const CartContext = React.createContext();

export function cartReducer(state, action) {
  switch (action.type) {
    case 'addToCart': {
      const productId = action.payload;
      console.log(state);
      return { ...state, items: [...state.items, productId] };
    }

    case 'removeFromCart': {
      const productId = action.payload;
      const filteredItems = state.items.filter(i => i !== productId);
      return { ...state, items: [...filteredItems] };
    }

    case 'emptyCart': {
      return { ...state, items: [] };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function CartProvider({ children }) {
  const [state, dispatch] = React.useReducer(cartReducer, { items: [] });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export { CartProvider, useCart };
