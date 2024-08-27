import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../styles/CardNews.scss";
import imageCelendar from "../assets/post1.jpg";

function CardNews({ dataPost }) {
  return (
    dataPost && (
      <Card sx={{ maxWidth: 460 }} className="card-news">
        <CardActionArea>
          <CardMedia
            className="card-img"
            component="img"
            height="280"
            image={dataPost.image}
            alt="card new"
          />
          <CardContent>
            <Typography variant="h4" component="div" className="card-title">
              {dataPost.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {dataPost.role} {dataPost.date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  );
}

export default CardNews;
