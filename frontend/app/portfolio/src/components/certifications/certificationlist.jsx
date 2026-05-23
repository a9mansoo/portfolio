import {
  ListItem,
  List,
  ListItemText,
  Typography,
  Box,
  Paper,
  Link
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
      <List sx={{ width: "100%", maxWidth: 700 }}>
        {certificationsInfo.map((cert) => {
          return (
            <ListItem key={cert.id}>
              <Paper
                elevation={2}
                sx={{
                  width: "100%",
                  p: 3,
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6">
                  {cert.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  Issued: {cert.date}
                </Typography>

                <Typography sx={{ mb: 1 }}>
                  Score: {cert.score}%
                </Typography>

                <Link
                  href={cert.credly}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  View Credential
                </Link>
              </Paper>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export { CertificationsList };
