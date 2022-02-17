import { atom } from "recoil";

export enum orderByEnum {
  "asc" = "name",
  "desc" =  "-name",
};

export const orderByState = atom({
  key: "orderBy",
  default: orderByEnum.asc,
});
