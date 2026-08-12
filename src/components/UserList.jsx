import {
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

function UserList({ users, onSelectUser, selectedUserId }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Usuarios
        </Typography>

        <List>
          {users.map((user) => (
            <ListItemButton
              key={user.id}
              selected={selectedUserId === user.id}
              onClick={() => onSelectUser(user)}
            >
              <ListItemText
                primary={user.name}
                secondary={user.email}
              />
            </ListItemButton>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default UserList;