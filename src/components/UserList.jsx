import {
  Avatar,
  Box,
  Card,
  CardContent,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

function UserList({ users, onSelectUser, selectedUserId }) {
  return (
    <Card sx={{ position: { md: 'sticky' }, top: { md: 24 }, overflow: 'hidden' }}>
      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
        <Box sx={{ px: 2.5, pt: 2.5, pb: 1.5 }}>
          <Typography variant="h5">Usuarios</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.4 }}>
            {users.length} perfiles disponibles
          </Typography>
        </Box>

        <List disablePadding sx={{ px: 1, pb: 1 }}>
          {users.map((user) => (
            <ListItemButton
              key={user.id}
              selected={selectedUserId === user.id}
              onClick={() => onSelectUser(user)}
              sx={{
                borderRadius: 2,
                mb: 0.35,
                px: 1.5,
                py: 1.15,
                border: '1px solid transparent',
                transition: 'background-color 180ms ease, border-color 180ms ease, transform 180ms ease',
                '&:hover': { backgroundColor: 'rgba(122, 162, 247, 0.075)', borderColor: 'rgba(166, 190, 223, 0.1)', transform: 'translateX(1px)' },
                '&.Mui-selected': { backgroundColor: 'rgba(103, 143, 203, 0.17)', borderColor: 'rgba(141, 177, 229, 0.24)', boxShadow: 'inset 3px 0 0 rgba(147, 181, 231, 0.8), 0 0 18px rgba(70, 108, 165, 0.1)' },
                '&.Mui-selected:hover': { backgroundColor: 'rgba(103, 143, 203, 0.21)' },
              }}
            >
              <ListItemAvatar sx={{ minWidth: 42 }}>
                <Avatar sx={{ width: 30, height: 30, fontSize: '0.78rem', fontWeight: 700, bgcolor: selectedUserId === user.id ? 'primary.main' : 'rgba(154, 169, 186, 0.16)', color: selectedUserId === user.id ? '#10151d' : 'text.secondary' }}>
                  {user.name.slice(0, 1)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={user.name}
                secondary={user.email}
                primaryTypographyProps={{ fontWeight: 600, fontSize: '0.91rem', noWrap: true }}
                secondaryTypographyProps={{ variant: 'caption', noWrap: true }}
              />
            </ListItemButton>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default UserList;
