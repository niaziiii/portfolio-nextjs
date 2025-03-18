import { Box, Button } from "@mui/material";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import DoneIcon from "@mui/icons-material/Done";

const NextStepHandlerComponent = ({
  index,
  steps,
  handleBack,
  handleNext,
}: {
  index: any;
  steps: any;
  handleBack: any;
  handleNext: any;
}) => {
  return (
    <Box
      sx={{
        mb: 2,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "stretch", sm: "center" },
        gap: 1,
        mt: 3,
      }}
    >
      <Button
        variant="outlined"
        color="primary"
        onClick={handleNext}
        endIcon={
          index === steps.length - 1 ? <DoneIcon /> : <NavigateNextIcon />
        }
        sx={{
          fontWeight: 600,
          borderRadius: "8px",
          py: 1,
          px: 3,
          boxShadow: "0 2px 8px rgba(0, 255, 10, 0.2)",
          minWidth: { xs: "100%", sm: "auto" },
        }}
      >
        {index === steps.length - 1 ? "Complete Journey" : "Continue"}
      </Button>

      <Button
        disabled={index === 0}
        onClick={handleBack}
        startIcon={<NavigateBeforeIcon />}
        sx={{
          fontWeight: 600,
          borderRadius: "8px",
          py: 1,
          minWidth: { xs: "100%", sm: "auto" },
        }}
      >
        Previous
      </Button>
    </Box>
  );
};

export default NextStepHandlerComponent;
