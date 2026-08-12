import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert, Button, Card, CardContent, Checkbox, FormControlLabel, Stack, TextField, Typography } from '@mui/material';
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
      const newTodo = await dispatch(createTodo({ userId, title: title.trim(), completed })).unwrap();
      setTitle('');
      setCompleted(false);
      setCreatedTodoId(newTodo.id);
    } catch {
      setCreatedTodoId(null);
    }
  };

  return (
    <Card sx={{ mt: 3 }} className="section-enter">
      <CardContent sx={{ p: { xs: 2.25, sm: 2.5 } }}>
        <Typography variant="h5" sx={{ mb: 2.25 }}>Nueva tarea</Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={1.75}>
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
              control={<Checkbox checked={completed} onChange={(event) => setCompleted(event.target.checked)} size="small" />}
              label={<Typography variant="body2">Marcar como completada</Typography>}
            />

            <Button type="submit" variant="contained" disabled={!title.trim()} sx={{ alignSelf: { sm: 'flex-start' }, px: 2.5 }}>
              Guardar tarea
            </Button>

            {createdTodoId && (
              <Alert severity="success" variant="outlined" className="section-enter" sx={{ py: 0, borderColor: 'rgba(91, 185, 140, 0.42)', bgcolor: 'rgba(91, 185, 140, 0.08)' }}>
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
