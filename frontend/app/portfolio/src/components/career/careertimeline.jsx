import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";
import { careerInfo } from "./careerinfo";
import * as Icons from "@mui/icons-material";
import { motion } from "motion/react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "5px",
};

export default function CustomizedTimeline() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleModalOpen = (description) => {
    setModalContent(description);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        textAlign: "center",
        mt: 5,
      }}
    >
      <Typography variant="h4" sx={{ ml: 4 }}>
        Career
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          py: 4,
        }}
      >
        <Timeline
          position="alternate"
          sx={{
            maxWidth: 200,
            width: "100%",
          }}
        >
          {careerInfo.map((item) => {
            let Icon = Icons[item.icon];
            return (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.8 }}
                key={item.id}
              >
                <TimelineItem sx={{ mb: 3, p: 3 }}>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0", width: "20px", mr: "10px" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    <Typography>{item.date}</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ height: "30px" }} />
                    <TimelineDot>
                      <IconButton
                        onClick={() => handleModalOpen(item.description)}
                        color="inherit"
                        component={motion.div}
                        whileHover={{
                          scale: 1.3,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <Icon color="primary" />
                      </IconButton>
                    </TimelineDot>
                    <TimelineConnector sx={{ height: "80px" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2, maxWidth: "80px" }}>
                    <Typography variant="h6" component="span">
                      {item.title}
                    </Typography>
                    <Typography>{item.subtitle}</Typography>
                  </TimelineContent>
                </TimelineItem>
              </motion.div>
            );
          })}
        </Timeline>
        <Modal open={modalOpen} onClose={handleModalClose}>
          <Box sx={style}>
            <Typography variant="h6">Experience</Typography>
            <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
              {modalContent}
            </Typography>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}

export { CustomizedTimeline };
