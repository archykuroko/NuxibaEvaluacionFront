import {
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from '@mui/material';

function PostsList({ posts, loading, error }) {
  if (loading) {
    return (
      <Stack
        alignItems="center"
        sx={{ marginTop: 3 }}
      >
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

  if (posts.length === 0) {
    return null;
  }

  return (
    <Stack spacing={2} sx={{ marginTop: 3 }}>
      <Typography variant="h4">
        Posts
      </Typography>

      {posts.map((post) => (
        <Card key={post.id}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {post.title}
            </Typography>

            <Typography variant="body1">
              {post.body}
            </Typography>

            <Divider sx={{ marginY: 2 }} />

            <Typography variant="subtitle1" fontWeight="bold">
              Comentarios
            </Typography>

            <Stack spacing={2} sx={{ marginTop: 2 }}>
              {post.comments?.map((comment) => (
                <div key={comment.id}>
                  <Typography variant="subtitle2">
                    {comment.name}
                  </Typography>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {comment.email}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ marginTop: 0.5 }}
                  >
                    {comment.body}
                  </Typography>
                </div>
              ))}
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default PostsList;