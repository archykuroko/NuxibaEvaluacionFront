import { Card, CardContent, Checkbox, CircularProgress, FormControlLabel, Stack, Typography } from '@mui/material';

function TodosList({ todos, loading, error }) {
  if (loading) {
    return <Stack alignItems="center" sx={{ mt: 4 }}><CircularProgress size={28} /></Stack>;
  }

  if (error) {
    return <Typography color="error" sx={{ mt: 3 }}>{error}</Typography>;
  }

  if (todos.length === 0) {
    return null;
  }

  const orderedTodos = [...todos].sort((a, b) => b.id - a.id);

  return (
    <Stack spacing={1} sx={{ mt: 3 }} className="section-enter">
      <Typography variant="h4" sx={{ mb: 0.5 }}>Todos</Typography>

      {orderedTodos.map((todo, index) => (
        <Card key={todo.id} className="list-card-enter" sx={{ animationDelay: `${Math.min(index * 26, 200)}ms`, boxShadow: 'none', transition: 'border-color 180ms ease, background-color 180ms ease, transform 180ms ease', ...(todo.completed && { borderColor: 'rgba(91, 185, 140, 0.28)', bgcolor: 'rgba(91, 185, 140, 0.045)' }), '&:hover': { transform: 'translateY(-1px)', borderColor: todo.completed ? 'rgba(91, 185, 140, 0.45)' : 'rgba(122, 162, 247, 0.32)' } }}>
          <CardContent sx={{ py: 0.8, px: { xs: 1.25, sm: 1.75 }, '&:last-child': { pb: 0.8 } }}>
            <FormControlLabel
              sx={{ m: 0, minWidth: 0, '& .MuiFormControlLabel-label': { overflow: 'hidden', textOverflow: 'ellipsis', ...(todo.completed && { color: 'text.secondary', textDecoration: 'line-through' }) } }}
              control={<Checkbox checked={todo.completed} disabled size="small" sx={{ mr: 0.5, '&.Mui-disabled': { color: todo.completed ? 'success.main' : 'rgba(154, 169, 186, 0.38)' } }} />}
              label={todo.title}
            />
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default TodosList;
