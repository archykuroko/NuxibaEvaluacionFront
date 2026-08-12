import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Alert,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { createTodo } from '../features/todos/todosSlice';

function TodoForm({ userId }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [createdTodoId, setCreatedTodoId] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    try {
      const newTodo = await dispatch(
        createTodo({
          userId,
          title: title.trim(),
          completed,
        })
      ).unwrap();

      setTitle('');
      setCompleted(false);
      setCreatedTodoId(newTodo.id);
    } catch {
      setCreatedTodoId(null);
    }
  };

  return (
    <Card sx={{ marginTop: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Nueva tarea
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Título"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
                setCreatedTodoId(null);
              }}
              fullWidth
              required
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={completed}
                  onChange={(event) =>
                    setCompleted(event.target.checked)
                  }
                />
              }
              label="Completada"
            />

            <Button
              type="submit"
              variant="contained"
              disabled={!title.trim()}
            >
              Guardar
            </Button>

            {createdTodoId && (
              <Alert severity="success">
                Tarea enviada correctamente. ID generado: {createdTodoId}
              </Alert>
            )}
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
}

export default TodoForm;