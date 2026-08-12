import {
  Card,
  CardContent,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material';

function TodosList({ todos, loading, error }) {
  if (loading) {
    return (
      <Stack alignItems="center" sx={{ marginTop: 3 }}>
        <CircularProgress />
      </Stack>
    );
  }

  if (error) {
    return (
      <Typography color="error" sx={{ marginTop: 3 }}>
        {error}
      </Typography>
    );
  }

  if (todos.length === 0) {
    return null;
  }

  const orderedTodos = [...todos].sort((a, b) => b.id - a.id);

  return (
    <Stack spacing={2} sx={{ marginTop: 3 }}>
      <Typography variant="h4">
        Todos
      </Typography>

      {orderedTodos.map((todo) => (
        <Card key={todo.id}>
          <CardContent>
            <FormControlLabel
              control={
                <Checkbox
                  checked={todo.completed}
                  disabled
                />
              }
              label={todo.title}
            />
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default TodosList;