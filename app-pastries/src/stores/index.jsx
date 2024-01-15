// import de la fonction 
import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'

// définit un state données initiales du store
const initialState = { messages: ['a', 'b'] }

// un store
const messageSlice = createSlice({
// clé permettant d'identifier le reducer spécifique 
  name: 'message',
  initialState,
  // gestions des actions dans le/les reducer(s) du state
  reducers: {
    addMessage(state, action) {
      state.messages.push( action.payload ) // fonction qui permet de modifier le store  
    }
  },
})

// async retourne une promesse
export const fetchPastries = createAsyncThunk("get/pastries", async () => {
  const response = await fetch("http://localhost:3001/game/pastries");
  const pastries = await response.json();

  return pastries;
});


export const pastriesSLiceAsync = createSlice({
  name: "pastriesAsync",
  initialState : { pastries : []},
  reducers: {
    
  },
  // gestion de la promesse
  extraReducers: (builder) => {
    builder.addCase(fetchPastries.pending, (state, action) => {
        
      });
    builder.addCase(fetchPastries.fulfilled, (state, action) => {
      state.pastries = action.payload;
    });
  },
});

// Définition du store avec ses reducers => grand angare de store
const store = configureStore({
     reducer: {
       m : messageSlice.reducer, // les reducers algo 
       p : pastriesSLiceAsync.reducer
    }
});

// fonction utiles dans l'application
export const { addMessage } = messageSlice.actions

// pour contextualiser le store dans l'arbre React
export default store;