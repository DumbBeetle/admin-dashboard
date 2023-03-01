import { Typography, Box, useTheme } from "@mui/material";

import React from "react";

const Header = (props) => {
  const theme = useTheme();
  console.log("title");
  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {props.title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary[300]}>
        {props.subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
