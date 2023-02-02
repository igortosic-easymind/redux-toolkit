import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/SongsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

// const songsSlice = createSlice({
//     name: "song",
//     initialState: [],
//     reducers: {
//       addSong(state, action) {
//         state.push(action.payload)
//       },
//       removeSong(state, action) {
//           const index = state.indexOf(action.payload);
//           state.splice(index, 1)
//       }
//     }
//   });

// const store = configureStore({
//     reducer: {
//       songs: songsSlice.reducer
//     }
//   });

  const store = configureStore({
    reducer: {
      songs: songsReducer,
      movies: moviesReducer
    }
  });

//testing things
// const startingState = store.getState();
// console.log(startingState);
// //we don't need type we can do with actions from createSlice
// // store.dispatch({
// //   type: "song/addSong",
// //   payload: "new song!!!"
// // })
// store.dispatch(songsSlice.actions.addSong("new song!!!"))
// const finalState = store.getState();
// console.log(finalState);
// console.log(songsSlice.actions.addSong());


export { store };
//export const { addSong, removeSong } = songsSlice.actions;
export { reset, addSong, removeSong, addMovie, removeMovie };