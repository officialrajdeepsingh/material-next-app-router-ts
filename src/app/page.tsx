import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Container,
} from "@mui/material";
export default function MultiActionAreaCard() {
  return (
    <Container>
      <Box sx={{ display: "flex",justifyContent:"center", marginTop:"70px" }}>
      <Card sx={{ display: "flex", maxWidth:"30rem" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/thunderstorm.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Thunder Storm
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Read more
              </Button>
            </CardActions>
          </CardContent>
        </Box>
      </Card>
    </Box>
    </Container>
 );
}
