import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@mui/material';

import { fetchUsers } from './features/users/usersSlice';

import {
  clearPosts,
  fetchPostsByUser,
} from './features/posts/postsSlice';

import {
  clearTodos,
  fetchTodosByUser,
} from './features/todos/todosSlice';

import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import PostsList from './components/PostsList';
import TodosList from './components/TodosList';
import TodoForm from './components/TodoForm';

function App() {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector(
    (state) => state.users
  );

  const {
    posts,
    loading: postsLoading,
    error: postsError,
  } = useSelector(
    (state) => state.posts
  );

  const {
    todos,
    loading: todosLoading,
    error: todosError,
  } = useSelector(
    (state) => state.todos
  );

  const [selectedUser, setSelectedUser] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSelectUser = (user) => {
    setSelectedUser(user);

    dispatch(clearPosts());
    dispatch(clearTodos());

    if (activeSection === 'posts') {
      dispatch(fetchPostsByUser(user.id));
    }

    if (activeSection === 'todos') {
      dispatch(fetchTodosByUser(user.id));
    }
  };

  const handleShowPosts = (userId) => {
    setActiveSection('posts');

    dispatch(clearTodos());
    dispatch(fetchPostsByUser(userId));
  };

  const handleShowTodos = (userId) => {
    setActiveSection('todos');

    dispatch(clearPosts());
    dispatch(fetchTodosByUser(userId));
  };

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Container sx={{ paddingY: 4 }}>
      <Typography variant="h3" gutterBottom>
        Gestión de usuarios
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <UserList
            users={users}
            selectedUserId={selectedUser?.id}
            onSelectUser={handleSelectUser}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <UserDetails
            user={selectedUser}
            onShowPosts={handleShowPosts}
            onShowTodos={handleShowTodos}
          />

          {activeSection === 'posts' && (
            <PostsList
              posts={posts}
              loading={postsLoading}
              error={postsError}
            />
          )}

          {activeSection === 'todos' && (
            <>
              <TodoForm userId={selectedUser.id} />

              <TodosList
                todos={todos}
                loading={todosLoading}
                error={todosError}
              />
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;