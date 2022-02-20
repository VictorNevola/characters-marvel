import { atom, AtomEffect, selectorFamily } from "recoil";

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any, _: any, isReset: any) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const wishlist = atom({
  key: "wishlist",
  default: [] as number[],
  effects: [localStorageEffect("wishlist")],
});

export const wishlistHandler = selectorFamily({
  key: "wishlistHandler",
  get:
    (id: number) =>
    ({ get }) =>
      get(wishlist).includes(id),
  set:
    (id: number) =>
    ({ get, set }) => {
      const wishlistValues = get(wishlist);
      const hasIdInWishList = wishlistValues.includes(id);

      if (hasIdInWishList) {
        const newWishlistValues = wishlistValues.filter(
          (value: number) => value !== id
        );
        return set(wishlist, newWishlistValues);
      }

      return set(wishlist, [...wishlistValues, id]);
    },
});
