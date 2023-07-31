import React from "react";
import Box from "@mui/material/Box";
import useGetAllOccasions from "../../../../apollo/hooks/useGetAllOccasions";
import Grid from "@mui/material/Grid";
import CircularLoadingIndication from "../../../components/loadingIndicators/circularLoadingIndication";
import CategoryCard from "../../../components/cards/categoryCard";

const ProductCategories = () => {
  const { occasionsData, loadingAllOccasions, errorAllOccasions } =
    useGetAllOccasions();

  return (
    <>
      {loadingAllOccasions && !occasionsData && <CircularLoadingIndication />}
      {!loadingAllOccasions && occasionsData.length > 0 && (
        <Grid p={1} container alignItems="stretch" spacing={1}>
          {occasionsData.map((occasion, index) => (
            <Grid key={index} item xs={6}>
              <CategoryCard title={occasion.label} onClick={() => {}} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default ProductCategories;
