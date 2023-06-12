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

const steps = [
  {
    label: "Static Sites Building",
    date: "10-May-2021",
    description: `I had the remote opportunity to contribute to TryHackMe's
      platform by designing and developing their static site for
      cybersecurity courses. Leveraging my expertise in HTML,
      CSS, and JavaScript, I collaborated closely with the
      TryHackMe team to create an engaging and user-friendly
      learning environment`,
    images: [
      "/experience-images/tryhackme/round-1.png",
      "/experience-images/tryhackme/round-2.png",
      "/experience-images/tryhackme/screen-1.png",
    ],
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

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
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          sx={{ color: "white !important" }}
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel sx={{ color: "white !important" }}>
                <Typography variant="h6"> {step.label}</Typography>
                <Typography variant="h6" sx={{ fontSize: ".8rem" }}>
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
                  steps={steps}
                />
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>

      {activeStep === steps.length && (
        <ResetComponent handleReset={handleReset} />
      )}
    </>
  );
}
