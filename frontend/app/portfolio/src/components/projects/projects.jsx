import { ProjectCard, ProjectCardMoreInfo } from "./projectcard";
import { projectsInfo } from "./projectinfo";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Paper, Backdrop } from "@mui/material";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

function Projects() {
  const [id, setId] = useState(null);

  const handleViewMore = (id) => {
    console.log(id);
    setId(id);
  };

  const onClose = () => {
    setId(null);
  };

  return (
    <>
    <AnimatePresence mode="wait">
        <Backdrop open={Boolean(id)} onClick={onClose} sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1300
            }}
          >
           {id && (   
              <ProjectCardMoreInfo
                proj={projectsInfo.find((p) => p.id === id)}
                onClose={onClose}
              />
             
            )}
        </Backdrop>   
        </AnimatePresence>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 5,
          textAlign: "center",
        }}
      >
        <Typography variant="h4">Projects</Typography>
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mt: 5,
            ml: 5,
            mr: 5,
            gap: 2,
            minHeight: "100vh",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {projectsInfo.map((proj) => (
            <ProjectCard
              proj={proj}
              handleViewMore={handleViewMore}
              onClose={onClose}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export { Projects };
