import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodosByUser = createAsyncThunk(
  'todos/fetchTodosByUser',
  async (userId) => {
    const response = await fetch(`${API_URL}?userId=${userId}`);

    if (!response.ok) {
      throw new Error('No se pudieron obtener las tareas');
    }

    return await response.json();
  }
);

const todosSlice = createSlice({
  name: 'todos',

  initialState: {
    todos: [],
    loading: false,
    error: null,
  },

  reducers: {
    clearTodos: (state) => {
      state.todos = [];
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosByUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchTodosByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })

      .addCase(fetchTodosByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearTodos } = todosSlice.actions;

export default todosSlice.reducer;

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async ({ userId, title, completed }) => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          userId,
          title,
          completed,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('No se pudo crear la tarea');
    }

    return await response.json();
  }
);