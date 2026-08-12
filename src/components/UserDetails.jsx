import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';

function UserDetails({ user, onShowPosts, onShowTodos }) {
  if (!user) {
    return (
      <Card>
        <CardContent>
          <Typography>
            Selecciona un usuario para ver su información.
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {user.name}
        </Typography>

        <Stack spacing={1}>
          <Typography>
            <strong>Username:</strong> {user.username}
          </Typography>

          <Typography>
            <strong>Email:</strong> {user.email}
          </Typography>

          <Typography>
            <strong>Teléfono:</strong> {user.phone}
          </Typography>

          <Typography>
            <strong>Sitio web:</strong> {user.website}
          </Typography>

          <Typography>
            <strong>Compañía:</strong> {user.company?.name}
          </Typography>

          <Typography>
            <strong>Ciudad:</strong> {user.address?.city}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{ marginTop: 3 }}
        >
          <Button
            variant="contained"
            onClick={() => onShowPosts(user.id)}
          >
            Posts
          </Button>

          <Button
            variant="outlined"
            onClick={() => onShowTodos(user.id)}
          >
            Todos
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default UserDetails;