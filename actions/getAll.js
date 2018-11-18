import * as types from "./types";

export function getAllHubs(text) {
   return {
      type: types.APP_START_HUBS_GETALL,
      hubs: text
   };
}
