import { Typography, Box } from "@mui/material";
import { motion } from "motion/react";

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
        mt: 12,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
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
          I'm Ayaan!
        </Typography>
        <Typography variant="subtitle">
          A multifaceted software engineer
        </Typography>
      </Box>
    </Box>
  );
}

export { Home };
