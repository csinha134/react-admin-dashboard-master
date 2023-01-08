import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import mockData from "../data/mockData"

const ProgressCircle = ({ progress = "0.5", size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 11deg ${angle}deg, ${colors.greenAccent[500]} ${angle}deg 360deg),
            ${colors.blueAccent[600]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
