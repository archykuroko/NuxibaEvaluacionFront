import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Obtiene los posts de un usuario
export const fetchPostsByUser = createAsyncThunk(
  'posts/fetchPostsByUser',
  async (userId) => {
    // Obtenemos los posts del usuario
    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    if (!postsResponse.ok) {
      throw new Error('No se pudieron obtener los posts');
    }

    const posts = await postsResponse.json();

    // Obtenemos los comentarios de cada post
    const postsWithComments = await Promise.all(
      posts.map(async (post) => {
        const commentsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
        );

        if (!commentsResponse.ok) {
          throw new Error(
            `No se pudieron obtener los comentarios del post ${post.id}`
          );
        }

        const comments = await commentsResponse.json();

        return {
          ...post,
          comments,
        };
      })
    );

    return postsWithComments;
  }
);

const postsSlice = createSlice({
  name: 'posts',

  initialState: {
    posts: [],
    loading: false,
    error: null,
  },

  reducers: {
    clearPosts: (state) => {
      state.posts = [];
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsByUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchPostsByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })

      .addCase(fetchPostsByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearPosts } = postsSlice.actions;

export default postsSlice.reducer;