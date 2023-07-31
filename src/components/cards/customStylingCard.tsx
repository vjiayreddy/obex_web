import React, { Fragment } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import DefaultButton from "../buttons/defaultButton";
import RadioGroup from "@mui/material/RadioGroup";
import { ProductType } from "../../../apollo/hooks/useGetProductsByFilter";
import _ from "lodash";
import { getStylingTags } from "../../services/cart";

interface CustomStylingCardProps {
  data: ProductType;
}

const CustomStylingCard = ({ data }: CustomStylingCardProps) => {
  return (
    <Fragment>
      {getStylingTags(data?.tags).length > 0 && (
        <Card>
          <CardContent>
            <Typography gutterBottom fontWeight={800} variant="h6">
              STYLING
            </Typography>
            <Box>
              <FormControl>
                <RadioGroup
                  row={true}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="customStyling"
                    control={<Radio />}
                    label="Custom"
                  />
                  <FormControlLabel
                    value="standardStyling"
                    control={<Radio />}
                    label="Standard"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Grid container>
              {getStylingTags(data.tags).map((tag, index) => (
                <Grid item key={index} xs={6}>
                  <Typography variant="body1">{tag.label}</Typography>
                  <Typography variant="caption">{tag.name}</Typography>
                </Grid>
              ))}
            </Grid>
            <Typography variant="caption">
              Not satisfied with these options? Want to customize them even
              further?
            </Typography>

            <DefaultButton color="error" id="btn-customize" label="Customize" />
          </CardContent>
        </Card>
      )}
    </Fragment>
  );
};

export default CustomStylingCard;
