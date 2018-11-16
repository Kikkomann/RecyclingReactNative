import types from "../../constants/actionTypes";

// export function getAllHubs(text) {
//    return {
//       type: APP_START_HUBS_GETALL,
//       hubs: text
//    };
// }

const fetchHubsStart = () => ({
   type: types.APP_START_HUBS_GETALL,
 });

 const fetchHubsFinished = data => ({
   type: types.FETCH_POSTS_FINISHED,
   data,
 });

 const fetchHubsError = error => ({
   type: types.FETCH_POSTS_ERROR,
   error,
 });

export const getAllHubs = async => (dispatch, getState) => {
   dispatch(fetchHubsStart());
   try {
     const response = { ok: true };
     if (!response.ok) {
       throw new Error(response.statusMessage);
     }
     dispatch(fetchHubsFinished(response));
   } catch (error) {
     dispatch(fetchHubsError(error));
   }
 };