import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create((set, get) => ({
  cart: [],

  addToCart: (product) => {
    
    set((state) => {
      const exists = state.cart.find((p) => p.id === product.id);

      if (exists) {
        return {
          cart: state.cart.map((prod) =>
            prod.id === product.id
              ? { ...prod, qty: prod.qty + 1 }
              : prod
          ),
        };
      }

      return {
        cart: [...state.cart, { ...product, qty: 1 }],
      };
    });
  },

  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
  },

  clearCart: () => set({ cart: [] }),

  getTotalPrice: () =>
    get().cart.reduce(
      (total, product) => total + product.price * product.qty,
      0
    ),

  getTotalQty: () =>
    get().cart.reduce((total, product) =>   total + product.qty, 0),
}));