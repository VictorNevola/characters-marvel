import { atom, selectorFamily } from "recoil";

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

export const favorites = atom({
  key: "favorites",
  default: [] as number[],
  effects: [localStorageEffect("favorites")],
});

export const favoritesHandler = selectorFamily({
  key: "favoritesHandler",
  get:
    (id: number) =>
    ({ get }) =>
      get(favorites).includes(id),
  set:
    (id: number) =>
    ({ get, set }) => {
      const favoritesValues = get(favorites);
      const hasIdInfavorites = favoritesValues.includes(id);

      if (hasIdInfavorites) {
        const newfavoritesValues = favoritesValues.filter(
          (value: number) => value !== id
        );
        return set(favorites, newfavoritesValues);
      }

      return set(favorites, [...favoritesValues, id]);
    },
});
