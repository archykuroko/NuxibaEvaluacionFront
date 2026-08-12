import { Box, Card, CardContent, CircularProgress, Divider, Stack, Typography } from '@mui/material';

function PostsList({ posts, loading, error }) {
  if (loading) {
    return <Stack alignItems="center" sx={{ mt: 4 }}><CircularProgress size={28} /></Stack>;
  }

  if (error) {
    return <Typography color="error" sx={{ mt: 3 }}>{error}</Typography>;
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <Stack spacing={1.5} sx={{ mt: 3 }} className="section-enter">
      <Typography variant="h4" sx={{ mb: 0.5 }}>Posts</Typography>

      {posts.map((post, index) => (
        <Card key={post.id} className="list-card-enter" sx={{ animationDelay: `${Math.min(index * 35, 210)}ms`, transition: 'border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease', '&:hover': { transform: 'translateY(-2px)', borderColor: 'rgba(122, 162, 247, 0.32)', boxShadow: '0 14px 30px rgba(0, 0, 0, 0.21)' } }}>
          <CardContent sx={{ p: { xs: 2, sm: 2.5 } }}>
            <Typography variant="h6" sx={{ textTransform: 'capitalize', mb: 1 }}>{post.title}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>{post.body}</Typography>

            <Divider sx={{ my: 2.25 }} />

            <Typography variant="subtitle2" sx={{ mb: 1.25 }}>Comentarios · {post.comments?.length ?? 0}</Typography>
            <Stack spacing={1}>
              {post.comments?.map((comment) => (
                <Box key={comment.id} sx={{ p: 1.25, borderLeft: 2, borderColor: 'rgba(122, 162, 247, 0.34)', bgcolor: 'rgba(17, 24, 34, 0.38)', borderRadius: '0 8px 8px 0', backdropFilter: 'blur(8px)' }}>
                  <Typography variant="subtitle2" sx={{ fontSize: '0.84rem', textTransform: 'capitalize' }}>{comment.name}</Typography>
                  <Typography variant="caption" color="primary.light">{comment.email}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.6, lineHeight: 1.55 }}>{comment.body}</Typography>
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default PostsList;
