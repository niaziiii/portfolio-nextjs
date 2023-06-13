import { Box, Button } from "@mui/material";
import React from "react";

const NextStepHandlerComponent = ({
  index,
  steps,
  handleBack,
  handleNext,
}: {
  index: any;
  steps: any;
  handleBack: () => void;
  handleNext: () => void;
}) => {
  return (
    <Box sx={{ mb: 2 }}>
      <div>
        <Button
          variant="outlined"
          onClick={handleNext}
          sx={{ mt: 1, mr: 1, fontWeight: 700 }}
        >
          {index === steps.length - 1 ? "Finish" : "Continue"}
        </Button>
        <Button
          disabled={index === 0}
          onClick={handleBack}
          sx={{ mt: 1, mr: 1, fontWeight: 700 }}
        >
          Back
        </Button>
      </div>
    </Box>
  );
};

export default NextStepHandlerComponent;
