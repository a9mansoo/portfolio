import {
  ListItem,
  List,
  ListItemText,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { certificationsInfo } from "./certificationsinfo";
import { motion } from "motion/react";

function CertificationsList() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        textAlign: "center",
        mt: 12,
      }}
      component={motion.div}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.2, once: true }}
      transition={{ duration: 0.8 }}
    >
      <Typography variant="h4" sx={{ ml: 1 }}>
        Certifications
      </Typography>
      <List>
        {certificationsInfo.map((cert) => {
          return (
            <ListItem key={cert.id}>
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                }}
              >
                <ListItemText
                  primary={cert.name}
                  secondary={cert.date}
                ></ListItemText>
              </Paper>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export { CertificationsList };
