import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DefaultButton from "../buttons/defaultButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartItemType } from "../../services/types";

const StyledItemCard = styled(Card)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  borderRadius: 0,
}));

const StyledCartActionContainer = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[500]}`,
  display: "flex",
  maxWidth: 110,
}));

interface CartItemCardProps {
  cardData: CartItemType;
  onClickCustomization: (index: any) => void;
  onAddQuantity: (item: CartItemType) => void;
  onDeleteQuantity: (item: CartItemType) => void;
  onDeleteCartItem: (item: CartItemType) => void;
  disabled?: boolean;
}

const CartItemCard = ({
  cardData,
  onClickCustomization,
  onAddQuantity,
  onDeleteQuantity,
  onDeleteCartItem,
  disabled,
}: CartItemCardProps) => {
  return (
    <StyledItemCard>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <img width="60px" src={cardData.images[0]} />
              <Box>
                <DefaultButton
                  size="small"
                  id="btn-customize"
                  label="Customize"
                  variant="text"
                  onClick={onClickCustomization}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs container>
            <Grid mb={1} item xs={12} container>
              <Grid item xs>
                <Typography variant="body2" gutterBottom>
                  {cardData.name}
                </Typography>
              </Grid>
              <Grid pl={3} item>
                <Typography variant="subtitle1">{cardData.price}</Typography>
              </Grid>
              <Grid item alignItems="flex-end" xs={12} container>
                <Grid xs item>
                  <StyledCartActionContainer>
                    <IconButton
                      disabled={disabled}
                      size="small"
                      onClick={() => onDeleteQuantity(cardData)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Box
                      flexGrow={1}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography variant="body2">{cardData.qty}</Typography>
                    </Box>
                    <IconButton
                      disabled={disabled}
                      size="small"
                      onClick={() => onAddQuantity(cardData)}
                    >
                      <AddIcon />
                    </IconButton>
                  </StyledCartActionContainer>
                </Grid>
                <Grid item>
                  <IconButton
                    disabled={disabled}
                    size="small"
                    onClick={() => {
                      onDeleteCartItem(cardData);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </StyledItemCard>
  );
};

export default CartItemCard;
