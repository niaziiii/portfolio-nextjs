import { Paper, Typography, Button } from "@mui/material";
import React from "react";

const ResetComponent = ({ handleReset }: { handleReset: () => void }) => {
  return (
    <Paper
      square
      elevation={2}
      className="w-full flex flex-col md:flex-row items-center justify-center text-center gap-2 md:gap-5 p-1 md:p-3 "
      sx={{ mt: 12, color: "white", background: "transparent" }}
    >
      <Typography className="text-lg md:text-2xl ">
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
