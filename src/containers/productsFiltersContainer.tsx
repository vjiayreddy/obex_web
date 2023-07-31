import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import CheckBoxControlGroup from "../components/formFields/checkBoxGroup";
import { useForm, useWatch } from "react-hook-form";
import { OccasionConfigResponse } from "../../apollo/hooks/useGetOccasionConfig";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import DefaultButton from "../components/buttons/defaultButton";
import SidlerControl from "../components/formFields/sidlerControl";
import Chip from "@mui/material/Chip";
import RadioGroupControl from "../components/formFields/radioGroup";
import { getFiltersDefaultValues } from "../services/products";
import { useRouter } from "next/router";

interface FilterSectionHeaderProps {
  title: string;
  badgeCount?: number;
}

interface ProductsFiltersContainerProps {
  filtersData: OccasionConfigResponse;
  onSubmit?: (data: any) => void;
  onCancel?: () => void;
}

const StyledDialogMainView = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflowX: "hidden",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
}));

const StyledDialogFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const ProductsFiltersContainer = ({
  filtersData,
  onSubmit,
  onCancel,
}: ProductsFiltersContainerProps) => {
  const router = useRouter();
  const { control, handleSubmit, getValues, reset } = useForm({
    mode: "all",
  });
  const watchFiltersChanges = useWatch({
    control,
  });

  const handleCheck = (checkedId: any, fieldName: string) => {
    const { [fieldName]: ids } = getValues();
    const newIds = ids?.includes(checkedId)
      ? ids?.filter((id: any) => id !== checkedId)
      : [...(ids ?? []), checkedId];
    return newIds;
  };

  const FilterSectionHeader = ({
    badgeCount,
    title,
  }: FilterSectionHeaderProps) => {
    return (
      <Grid container alignItems="center" alignContent="space-around">
        <Grid item xs>
          <Typography>{title}</Typography>
        </Grid>
        {badgeCount > 0 && (
          <Grid item>
            <Chip size="small" label={badgeCount} color="success" />
          </Grid>
        )}
      </Grid>
    );
  };

  useEffect(() => {
    reset({
      fabrics: getFiltersDefaultValues(filtersData, router).fabricIds,
      colors: getFiltersDefaultValues(filtersData, router).colorIds,
      patterns: getFiltersDefaultValues(filtersData, router).patternIds,
    });
  }, []);

  return (
    <>
      <StyledDialogMainView>
        <Grid container>
          <Grid item xs={12}>
            <Box display="block" pl={2} pr={2} pt={1} pb={1}>
              <FilterSectionHeader
                title="Categories"
                badgeCount={watchFiltersChanges?.categories?.length > 0 ? 1 : 0}
              />
            </Box>
            <Divider />
          </Grid>
          <Grid p={1} mb={2} item xs={12}>
            <RadioGroupControl
              variant="IMAGE"
              options={filtersData?.categories || []}
              gridItemProps={{
                xs: 3,
                sm: 4,
                md: 3,
                lg: 3,
                xl: 3,
              }}
              imageCardProps={{
                cardHeight: 100,
              }}
              control={control}
              name={`categories`}
              id={"filter-categories"}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
            <Box pl={2} pr={2} pt={1} pb={1}>
              <FilterSectionHeader
                title="Fabrics"
                badgeCount={watchFiltersChanges?.fabrics?.length}
              />
            </Box>
            <Divider />
          </Grid>
          <Grid p={1} mb={2} item xs={12}>
            <CheckBoxControlGroup
              gridItemProps={{
                xs: 6,
              }}
              labelName="name"
              variant="NORMAL"
              defaultValues={
                getFiltersDefaultValues(filtersData, router).fabricIds || []
              }
              options={filtersData?.sideFilters?.fabricFilters || []}
              control={control}
              name={`fabrics`}
              onChange={handleCheck}
              id={"filter-fabrics"}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
            <Box pl={2} pr={2} pt={1} pb={1}>
              <FilterSectionHeader
                title="Patterns"
                badgeCount={watchFiltersChanges?.patterns?.length}
              />
            </Box>
            <Divider />
          </Grid>
          <Grid p={1} mb={2} item xs={12}>
            <CheckBoxControlGroup
              gridItemProps={{
                xs: 6,
              }}
              labelName="name"
              variant="NORMAL"
              defaultValues={
                getFiltersDefaultValues(filtersData, router).patternIds || []
              }
              options={filtersData?.sideFilters?.patternFilters || []}
              control={control}
              name={`patterns`}
              onChange={handleCheck}
              id={"filter-patterns"}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
            <Box pl={2} pr={2} pt={1} pb={1}>
              <Typography>Price</Typography>
            </Box>
            <Divider />
          </Grid>
          <Grid p={1} item xs={12}>
            <Box pl={1} pr={2}>
              <SidlerControl
                maxValue={filtersData?.sideFilters.maxPrice}
                minValue={filtersData?.sideFilters.minPrice}
                name="price"
                control={control}
                defaultValues={[
                  filtersData?.sideFilters.minPrice,
                  filtersData?.sideFilters.maxPrice,
                ]}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider />
            <Box pl={2} pr={2} pt={1} pb={1}>
              <FilterSectionHeader
                title="Colors"
                badgeCount={watchFiltersChanges?.colors?.length}
              />
            </Box>
            <Divider />
          </Grid>
          <Grid p={1} mb={2} item xs={12}>
            <CheckBoxControlGroup
              gridItemProps={{
                xs: 2,
              }}
              labelName={null}
              variant="COLOR_BOX"
              defaultValues={
                getFiltersDefaultValues(filtersData, router).colorIds || []
              }
              options={filtersData?.sideFilters?.colorFilters || []}
              control={control}
              name={`colors`}
              onChange={handleCheck}
              colorBoxSx={{
                minHeight: 50,
                borderRadius: 2,
              }}
              id={"filter-colors"}
            />
          </Grid>
        </Grid>
      </StyledDialogMainView>
      <StyledDialogFooter>
        <DefaultButton
          sx={{ marginRight: "10px" }}
          onClick={onCancel}
          color="error"
          id="btn-cancel"
          label="Cancel"
        />
        <DefaultButton
          onClick={handleSubmit(onSubmit)}
          id="btn-submit"
          label="Submit"
        />
      </StyledDialogFooter>
    </>
  );
};

export default ProductsFiltersContainer;
