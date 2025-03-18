"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";
import ExperienceImageComponent from "./ExperienceImage";
import NextStepHandlerComponent from "./NextStepHandler";
import ResetComponent from "./ResetMessage";
import { experienceSteps } from "@/assets/data/experience";

// Custom theme for MUI components
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2065d5", // Your main color
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      paper: "#121212",
      default: "#121212",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderLeftWidth: 2,
          borderColor: "#2065d530",
        },
      },
    },
    MuiStepContent: {
      styleOverrides: {
        root: {
          borderLeft: "2px solid #2065d530",
          marginLeft: 12,
          paddingLeft: 24,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: "#2065d5",
          color: "#2065d5",
          "&:hover": {
            backgroundColor: "#2065d520",
            borderColor: "#2065d5",
          },
        },
        text: {
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#ffffff20",
          },
        },
      },
    },
  },
});

// Custom styled components
const StepLabelTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: "1.2rem",
  marginBottom: 4,
  display: "flex",
  alignItems: "center",
  columnGap: "8px",
}));

const StepLabelDate = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  fontSize: "0.875rem",
  marginLeft: 24,
  marginBottom: 8,
}));

const StepDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[300],
  whiteSpace: "pre-line",
  fontSize: "1rem",
  lineHeight: 1.7,
  marginBottom: 16,
}));

// Custom StepIcon component
const CustomStepIcon = styled("div")(
  ({
    theme,
    active,
    completed,
  }: {
    theme?: any;
    active: any;
    completed: any;
  }) => ({
    width: 24,
    height: 24,
    borderRadius: "50%",
    backgroundColor: completed
      ? theme.palette.primary.main
      : active
      ? theme.palette.primary.main
      : theme.palette.grey[700],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border:
      completed || active
        ? `2px solid ${theme.palette.primary.main}`
        : `2px solid ${theme.palette.grey[600]}`,
    transition: "all 0.3s ease",
    boxShadow: active ? `0 0 0 4px ${theme.palette.primary.main}20` : "none",
  })
);

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
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          maxWidth: "100%",
          width: "100%",
          paddingRight: { xs: "8px", md: "16px" },
          marginBottom: 8,
        }}
      >
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          sx={{ pl: { xs: 0, md: 2 } }}
        >
          {experienceSteps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                StepIconComponent={({ active, completed }) => (
                  <CustomStepIcon active={active} completed={completed} />
                )}
              >
                <StepLabelTitle variant="h6">{step.label}</StepLabelTitle>
                <StepLabelDate variant="subtitle2">{step.date}</StepLabelDate>
              </StepLabel>

              <StepContent>
                <StepDescription>{step.description}</StepDescription>

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
    </ThemeProvider>
  );
}
