import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create(
  persist(
    (set, get) => ({
      cart: [],
      orders: [],
      loading: false,

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

      increase: (id) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
          ),
        }));
      },

      decrease: (id) => {
        set((state) => {
          const updatedCart = state.cart
            .map((item) =>
              item.id === id
                ? { ...item, qty: (item.qty || 1) - 1 }
                : item
            )
            .filter((item) => item.qty > 0);

          return { cart: updatedCart };
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
        get().cart.reduce((total, product) => total + product.qty, 0),


      
      checkout: async () => {
        const cart = get().cart;

        if (cart.length === 0) return;

        set({ loading: true });

        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));

          set((state) => ({
            loading: false,
            orders: [
              ...state.orders,
              {
                id: Date.now(),
                items: cart,
                total: cart.reduce(
                  (t, p) => t + p.price * p.qty,
                  0
                ),
              },
            ],
            cart: [],
          }));
        } catch (error) {
          console.error("Checkout failed:", error);
          set({ loading: false });
        }
      },
    }),
    {
      name: "cart-storage",
    }
  )
);