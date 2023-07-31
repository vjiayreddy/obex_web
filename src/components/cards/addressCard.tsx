import React from "react";
import { AddressType } from "../../services/types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface AddressCardProps {
  data: AddressType;
  onDelete?: (id: string) => void;
  onEdit?: (address: AddressType) => void;
}

const StyledCard = styled(Card)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const AddressCard = ({ data, onDelete, onEdit }: AddressCardProps) => {
  return (
    <StyledCard sx={{ borderRadius: 0 }}>
      <CardContent>
        <Grid container>
          <Grid item xs>
            <Typography variant="h6">
              {data.firstName} {data.lastName}
            </Typography>
            <Typography variant="caption">Email : {data.email}</Typography>
          </Grid>
          <Grid item>
            <Chip label="Home" />
          </Grid>
          {data.phone && (
            <Grid item xs={12}>
              <Typography variant="caption">Phone : {data.phone}</Typography>
            </Grid>
          )}
          <Grid mt={1} item xs={12} container>
            <Grid item xs>
              <Typography gutterBottom variant="body1">
                Address
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                size="small"
                onClick={() => {
                  onEdit(data);
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => {
                  onDelete(data._id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
            <Typography variant="caption">
              {data.streetAddress + ","}
              {data.city + ","}
              {data.state + ","}
              {data.country + ","}
              {data.postalCode}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default AddressCard;
