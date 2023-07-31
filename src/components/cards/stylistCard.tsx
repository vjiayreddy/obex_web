import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from '@mui/icons-material/Email';

const StyledAvatar = styled(Box)(({ theme }) => ({
  height: 100,
  width: 100,
  backgroundColor: theme.palette.grey[500],
  borderRadius: "10%",
}));

const StyledCardDescription = styled(Typography)(({}) => ({
  minHeight: "40px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
}));

const StylistCard = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <StyledAvatar></StyledAvatar>
          </Grid>
          <Grid item xs>
            <Typography variant="h6">I’m Priya Jaiswal</Typography>
            <Typography gutterBottom variant="caption">
              Your Personal Stylist
            </Typography>
            <Box mt={1}>
              <IconButton sx={{ padding: 0 }}>
                <WhatsAppIcon />
              </IconButton>
              <IconButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
                <CallIcon />
              </IconButton>
              <IconButton sx={{ padding: 0 }}>
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StylistCard;
