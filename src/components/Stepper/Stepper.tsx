"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import ExperienceImageComponent from "./ExperienceImage";
import NextStepHandlerComponent from "./NextStepHandler";
import ResetComponent from "./ResetMessage";
import { experienceSteps } from "@/assets/data/experience";

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Box sx={{ maxWidth: "calc(100% - 10%)" }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {experienceSteps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel sx={{ color: "white !important" }}>
                <Typography variant="h6" className="text-main">
                  {step.label}
                </Typography>
                <Typography
                  variant="h6"
                  className="text-main"
                  sx={{ fontSize: ".8rem", ml: 3 }}
                >
                  {step?.date}
                </Typography>
              </StepLabel>

              <StepContent>
                <Typography>{step.description}</Typography>
                {step?.images && (
                  <ExperienceImageComponent images={step.images} />
                )}

                <NextStepHandlerComponent
                  handleBack={handleBack}
                  handleNext={handleNext}
                  index={index}
                  steps={experienceSteps}
                />
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>

      {activeStep === experienceSteps.length && (
        <ResetComponent handleReset={handleReset} />
      )}
    </>
  );
}
