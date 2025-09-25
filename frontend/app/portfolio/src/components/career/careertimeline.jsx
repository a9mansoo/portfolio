import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { careerInfo } from "./careerinfo";
import * as Icons from "@mui/icons-material";
import { motion } from "motion/react";

export default function CustomizedTimeline() {
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
          pr: "20px"
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
                    sx={{ m: "auto 0", width: "20px", mr: "30px" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    <Typography>{item.date}</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ height: "30px" }} />
                    <TimelineDot>
                      <Icon color="primary" />
                    </TimelineDot>
                    <TimelineConnector sx={{ height: "80px" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2, maxWidth: "80px" }}>
                    <Typography variant="h6" component="span">
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle1">{item.subtitle}</Typography>
                    <br />
                    <Typography variant="subtitle2">
                      {item.subtitle_2}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              </motion.div>
            );
          })}
        </Timeline>
      </Box>
    </Box>
  );
}

export { CustomizedTimeline };
