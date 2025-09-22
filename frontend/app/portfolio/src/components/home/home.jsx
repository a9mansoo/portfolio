import { Typography, Box } from "@mui/material";
import { motion } from "motion/react";
import { Link } from "react-router";
import { skillSet, ProfileName } from "./skillset";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "100vh",
        gap: 2,
        mt: 30,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
        component={motion.div}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3">
          Hi
          <motion.span
            style={{ display: "inline-block" }}
            animate={{ scale: 1, rotate: [0, 15, -15, 0] }}
            transition={{
              duration: 1,
              delay: 0.5,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            👋🏾
          </motion.span>
          I'm {ProfileName}!
        </Typography>
        <Typography variant="subtitle1">
          A multifaceted software engineer, focused on DevOps and automation
          tooling.
          <motion.span
            style={{ display: "inline-block" }}
            animate={{ scale: 1.2, rotate: 15 }}
            transition={{
              type: "spring",
              stiffness: 300,
              duration: 1,
              delay: 0.5,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            🚀
          </motion.span>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: 20,
          flexDirection: "column",
          gap: 3,
        }}
        component={motion.div}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 2 }}
      >
        <Typography variant="h3">Skill Set</Typography>
        <List >
          {skillSet.map((item, index)=> (
            <ListItemText primary={item} key={index}></ListItemText>
          ))}
          </List>
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: 20,
          flexDirection: "column",
          gap: 3,
        }}
        component={motion.div}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 2 }}
      >
        <Typography variant="h3">See More</Typography>
        <Typography variant="body1">
          Check out my{" "}
          <Link to="/career" style={{ textDecoration: "none" }}>
            Career Timeline
          </Link>{" "}
          or{" "}
          <Link to="/projects" style={{ textDecoration: "none" }}>
            Projects!
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export { Home };
