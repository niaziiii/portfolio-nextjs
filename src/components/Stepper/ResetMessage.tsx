import { Paper, Typography, Button } from "@mui/material";
import React from "react";

const ResetComponent = ({ handleReset }: { handleReset: () => void }) => {
  return (
    <Paper
      square
      elevation={2}
      sx={{
        p: 3,
        width: "100%",
        mt: 12,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        backgroundColor: "transparent",
        color: "white",
      }}
    >
      <Typography sx={{ fontSize: "1.5rem" }}>
        My industrial experience so far.
      </Typography>
      <Button
        sx={{ fontWeight: "700" }}
        variant="outlined"
        onClick={handleReset}
      >
        re-read
      </Button>
    </Paper>
  );
};

export default ResetComponent;
