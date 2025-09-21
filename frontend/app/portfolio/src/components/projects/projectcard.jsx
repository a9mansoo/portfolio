import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Backdrop, Box, ButtonGroup, Icon, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { motion } from "motion/react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

function ProjectCard({ proj, handleViewMore }) {
  return (
    <Card
      sx={{
        maxHeight: 450,
        flexGrow: 1,
        maxWidth: 275,
        boxShadow: "0 2px 5px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
      }}
      key={proj.id}
      layout
      layoutId={proj.id}
      component={motion.div}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
      variant="outlined"
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          image={proj.getImageSrc()}
          alt={proj.title}
          height="194"
        ></CardMedia>
        <Typography align="center" variant="h6">
          {proj.title}
        </Typography>
        <Typography align="center" variant="subtitle1">
          {proj.date}
        </Typography>
        <Typography align="center" variant="body1">
          {proj.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
        <a href={proj.link} target="_blank">
          <IconButton>
            <GitHubIcon></GitHubIcon>
          </IconButton>
        </a>
        <IconButton onClick={() => handleViewMore(proj.id)}>
          <OpenInFullIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
function ProjectCardMoreInfo({ proj }) {
  return (
    <Card
      style={{
        position: "fixed",
        width: "100%",
        maxWidth: 800,
        overflowY: "auto",
        maxHeight: "calc(100vh - 40px)",
        cursor: "pointer"
      }}
      layout
      layoutId={proj.id}
      component={motion.div}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
      variant="outlined"
    >
      <Paper elevation={1}>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography sx={{ textAlign: "center" }} variant="h6">
            {proj.title}
          </Typography>
          <CardMedia
            component="img"
            image={proj.getImageSrc()}
            alt={proj.title}
            sx={{
              width: "100%",
              maxHeight: 300,
              objectFit: "cover",
              borderRadius: 1,
            }}
          ></CardMedia>
          {proj.extendedInfo.map((info) => (
            <Typography variant="body1" wordBreak="break-word">
              {info}
            </Typography>
          ))}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            {proj.chips.map((chip) => (
              <Chip
                style={{ background: "#e0e0e0" }}
                label={chip}
                variant="outlined"
              />
            ))}
          </Box>
        </CardContent>
      </Paper>
    </Card>
  );
}
export { ProjectCard, ProjectCardMoreInfo };
