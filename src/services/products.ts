import _ from "lodash";
import { getOccasionsResponse } from "../../apollo/hooks/useGetAllOccasions";
import {
  FilterType,
  OccasionConfigResponse,
  colorFiltersType,
} from "../../apollo/hooks/useGetOccasionConfig";
import router, { NextRouter } from "next/router";

export const DEFAULT_CATEGORY = "products";
export const getOccasionByCategoryName = (
  allOccasions: getOccasionsResponse[],
  categoryName: string
) => {
  let getSingleOccasion: getOccasionsResponse;
  if (allOccasions?.length > 0) {
    getSingleOccasion = allOccasions.find(
      (occasion) =>
        occasion.name === categoryName || occasion.name === DEFAULT_CATEGORY
    );
  }
  return getSingleOccasion;
};

export const getFilteredFabricIds = (query: any, filterParams: any) => {
  let fabricIds: string[] = [];
  const sleetedFabrics = query?.fabric?.split(",") || [];
  const fabricFilters = filterParams.sideFilters?.fabricFilters || [];
  if (sleetedFabrics.length > 0) {
    sleetedFabrics.forEach((element) => {
      const fabricItem = _.find(fabricFilters, (item) => item.name === element);
      if (fabricItem) {
        fabricIds.push(fabricItem._id);
      }
    });
  }
  return fabricIds;
};

export const getFabricFilterNamesByIds = (
  allFabricFilters: FilterType[],
  ids: string[]
) => {
  const fabricsNames = [];
  if (ids.length > 0) {
    ids.map((id) => {
      const fabric = _.find(allFabricFilters, (f) => f._id === id);
      if (fabric) {
        fabricsNames.push(fabric.name);
      }
    });
  }
  return fabricsNames;
};

const equalsCheck = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

export const getPatternFiltersNamesByIds = (
  allPatternFilters: FilterType[],
  ids: string[]
) => {
  const patternFiltersNames = [];
  if (ids.length > 0) {
    ids.map((id) => {
      const pattern = _.find(allPatternFilters, (f) => {
        if (equalsCheck(f._id, id)) {
          return f;
        }
      });
      if (pattern) {
        patternFiltersNames.push(pattern.name);
      }
    });
  }
  return patternFiltersNames;
};

export const getColorsFilterNamesByIds = (
  allColors: colorFiltersType[],
  ids: string[]
) => {
  const colorNames = [];
  if (ids.length > 0) {
    ids.map((id) => {
      const color: colorFiltersType = _.find(allColors, (f) => f._id === id);
      if (color) {
        colorNames.push(color.colorname);
      }
    });
  }
  return colorNames;
};

export const getProductFiltersRouterQueries = (
  occasionConfigData: OccasionConfigResponse,
  formData: any
) => {
  const fabricNames = getFabricFilterNamesByIds(
    occasionConfigData?.sideFilters.fabricFilters,
    formData?.fabrics
  );
  const patternNames = getPatternFiltersNamesByIds(
    occasionConfigData?.sideFilters.patternFilters,
    formData?.patterns
  );
  const colors = getColorsFilterNamesByIds(
    occasionConfigData?.sideFilters.colorFilters,
    formData?.colors
  );

  const routerQuery = {
    fabrics: fabricNames.join(","),
    patterns: patternNames.join(","),
    colors: colors.join(","),
  };

  return routerQuery;
};

export const getFiltersDefaultValues = (
  occasionConfigData: OccasionConfigResponse,
  router: NextRouter
) => {
  let fabricIds = [];
  let colorIds = [];
  let patternIds = [];
  const queryFabrics = router?.query?.fabrics as string;
  const queryPatterns = router?.query?.patterns as string;
  const queryColors = router?.query?.colors as string;
  if (!_.isEmpty(queryFabrics)) {
    const fabricsNames: string[] = queryFabrics.split(",");
    fabricsNames.map((item) => {
      const fabric = _.find(
        occasionConfigData?.sideFilters?.fabricFilters,
        (f) => f.name === item
      );
      if (!_.isEmpty(fabric)) {
        fabricIds.push(fabric._id);
      }
    });
  }
  if (!_.isEmpty(queryPatterns)) {
    const patternNames: string[] = queryPatterns.split(",");
    patternNames.map((item) => {
      const pattern = _.find(
        occasionConfigData?.sideFilters?.patternFilters,
        (f) => f.name === item
      );
      if (!_.isEmpty(pattern)) {
        patternIds.push(pattern._id);
      }
    });
  }
  if (!_.isEmpty(queryColors)) {
    const colorNames: string[] = queryColors.split(",");
    colorNames.map((item) => {
      const color = _.find(
        occasionConfigData?.sideFilters?.colorFilters,
        (f) => f.colorname === item
      );
      if (!_.isEmpty(color)) {
        colorIds.push(color._id);
      }
    });
  }
  return {
    fabricIds,
    colorIds,
    patternIds,
  };
};
