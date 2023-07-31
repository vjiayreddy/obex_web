import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import DefaultButton from "../buttons/defaultButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Typography } from "@mui/material";
import AutoCompleteControl from "../formFields/autocomplete";
import { useForm } from "react-hook-form";
import { getOccasionsResponse } from "../../../apollo/hooks/useGetAllOccasions";

const StyledProductsFilterWrapper = styled(Box)(({ theme }) => ({}));

interface ProductsFilterBarProps {
  page?: number | string;
  totalProducts?: number | string;
  limitPerPage?: number | string;
  onClickFilter: () => void;
  occasionsData: getOccasionsResponse[];
  onChangeCategories?: (data: any) => void;
  defaultCategoryValue?: any;
}

const ProductsFilterBar = ({
  page,
  totalProducts,
  limitPerPage,
  onClickFilter,
  occasionsData,
  onChangeCategories,
  defaultCategoryValue,
}: ProductsFilterBarProps) => {
  const { control, reset } = useForm();

  useEffect(() => {
    reset({
      categoryFilter: defaultCategoryValue,
    });
  }, [defaultCategoryValue]);

  return (
    <StyledProductsFilterWrapper pt={1}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs>
          <Box pr={2}>
            <AutoCompleteControl
              size="small"
              onChange={onChangeCategories}
              defaultValues={defaultCategoryValue}
              isEqualValue="_id"
              options={occasionsData}
              control={control}
              id="category-filters"
              name="categoryFilter"
            />
          </Box>
        </Grid>
        <Grid item>
          <Badge
            variant="dot"
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            badgeContent={1}
            color="secondary"
          >
            <DefaultButton
              startIcon={<FilterListIcon />}
              size="medium"
              id="btn-filter"
              label="Filters"
              onClick={onClickFilter}
            />
          </Badge>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">
            Showing {page} - {limitPerPage} of {totalProducts} result
          </Typography>
        </Grid>
      </Grid>
    </StyledProductsFilterWrapper>
  );
};

export default ProductsFilterBar;
