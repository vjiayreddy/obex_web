import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Variant } from "@mui/material/styles/createTypography";
import React from "react";

interface ServedCardProps {
  label: string;
  content: string;
  labelVariant?: Variant;
  contentVariant?: Variant;
}

const ServedCard = ({
  label,
  content,
  labelVariant,
  contentVariant,
}: ServedCardProps) => {
  return (
    <Card>
      <CardContent>
        <Grid
          container
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography textAlign="center" variant={labelVariant || "h4"}>
            {label}
          </Typography>
          <Typography textAlign="center" variant={contentVariant || 'subtitle1'}>
            {content}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ServedCard;
