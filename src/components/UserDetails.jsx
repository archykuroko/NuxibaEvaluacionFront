import { Button, Card, CardContent, Divider, Stack, Typography } from '@mui/material';

function UserDetails({ user, onShowPosts, onShowTodos }) {
  if (!user) {
    return (
      <Card sx={{ minHeight: 248, display: 'grid', placeItems: 'center', borderStyle: 'dashed', boxShadow: 'none' }}>
        <CardContent sx={{ textAlign: 'center', py: 5 }}>
          <Typography variant="h5" sx={{ mb: 0.75 }}>Ningún usuario seleccionado</Typography>
          <Typography color="text.secondary">Selecciona un usuario para ver su información.</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="section-enter">
      <CardContent sx={{ p: { xs: 2.25, sm: 3 } }}>
        <Typography variant="h4">{user.name}</Typography>

        <Divider sx={{ my: 2.5 }} />

        <Stack spacing={1.15} sx={{ '& strong': { display: 'inline-block', minWidth: { xs: 88, sm: 104 }, color: 'text.secondary', fontWeight: 500 }, '& .MuiTypography-root': { fontSize: '0.93rem' } }}>
          <Typography><strong>Usuario</strong> {user.username}</Typography>
          <Typography><strong>Email</strong> {user.email}</Typography>
          <Typography><strong>Teléfono</strong> {user.phone}</Typography>
          <Typography><strong>Sitio web</strong> {user.website}</Typography>
          <Typography><strong>Compañía</strong> {user.company?.name}</Typography>
          <Typography><strong>Ciudad</strong> {user.address?.city}</Typography>
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ mt: 3, pt: 2.5, borderTop: 1, borderColor: 'divider' }}>
          <Button variant="contained" onClick={() => onShowPosts(user.id)} sx={{ px: 2.25 }}>Posts</Button>
          <Button variant="outlined" onClick={() => onShowTodos(user.id)} sx={{ px: 2.25 }}>Todos</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default UserDetails;
