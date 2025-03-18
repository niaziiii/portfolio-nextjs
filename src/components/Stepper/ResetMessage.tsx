import { Paper, Typography, Button, Box } from "@mui/material";
import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const ResetComponent = ({ handleReset }: { handleReset: any }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        mt: 8,
        mb: 10,
        color: "white",
        background:
          "linear-gradient(135deg, rgb(3 169 244 / 41%) 0%, rgb(3 169 244 / 0%) 100%)",
        borderRadius: "16px",
        padding: "32px 24px",
        border: "1px solid rgba(0, 255, 10, 0.2)",
        backdropFilter: "blur(5px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "rgba(0, 255, 10, 0.1)",
          filter: "blur(30px)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 8 },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <EmojiEventsIcon color="primary" sx={{ fontSize: 40 }} />
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
              Journey Complete!
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)" }}>
              You've explored my professional experience
            </Typography>
          </Box>
        </Box>

        <Button
          variant="outlined"
          color="primary"
          size="large"
          startIcon={<ReplayIcon />}
          onClick={handleReset}
          sx={{
            fontWeight: 600,
            borderRadius: "8px",
            px: 3,
            py: 1,
            minWidth: { xs: "100%", md: "auto" },
          }}
        >
          Review Again
        </Button>
      </Box>
    </Paper>
  );
};

export default ResetComponent;
