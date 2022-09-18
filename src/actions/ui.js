import { types } from "../types/types";

export const ui = () => ({
  type: types.uiOpenModals,
});

export const uiClose = () => ({
  type: types.uiCloseModals,
});
