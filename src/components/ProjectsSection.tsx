import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const mockProjects = [
  { title: "Proje 1", image: "https://via.placeholder.com/400x250", description: "Modern konut projesi" },
  { title: "Proje 2", image: "https://via.placeholder.com/400x250", description: "Ofis ve ticari alan inşaatı" },
  { title: "Proje 3", image: "https://via.placeholder.com/400x250", description: "Lüks villa inşaatı" },
];

const ProjectsSection = () => (
  <Box id="projects" sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
    <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom align="center">
        Projelerimiz
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Tamamladığımız ve devam eden projelerimizden bazılarına göz atın.
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {mockProjects.map((project, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default ProjectsSection;
