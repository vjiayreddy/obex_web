import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { Fragment } from "react";
import { ProductType } from "../../../apollo/hooks/useGetProductsByFilter";
import _ from "lodash";

interface ProductDetailsCardProps {
  data: ProductType;
}

const ProductDetailsCard = ({ data }: ProductDetailsCardProps) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body1">Product Id</Typography>
            <Typography variant="caption">{data.pidSerial}</Typography>
          </Grid>
          {data?.tags.map((tag, index) => (
            <Fragment key={index}>
              {tag?.isVisible && !_.isEmpty(tag?.name) && (
                <Grid item xs={6}>
                  <Typography variant="body1">{tag.label}</Typography>
                  <Typography variant="caption">{tag.name}</Typography>
                </Grid>
              )}
            </Fragment>
          ))}
          {data.fabric && (
            <Grid item xs={6}>
              <Typography variant="body1">Fabric</Typography>
              <Typography variant="caption">{data.fabric.name}</Typography>
            </Grid>
          )}
          {data.fabric && (
            <Grid item xs={6}>
              <Typography variant="body1">Color</Typography>
              <Typography variant="caption">{data.secondaryColor.label}</Typography>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductDetailsCard;
