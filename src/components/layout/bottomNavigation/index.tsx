import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";

import {
  APP_BAR_ICONS_SIZE,
  bottomNavigationActions,
} from "../../../utils/constants";

interface BottomNavigationComponentProps {
  value: any;
  onChange: (event: React.SyntheticEvent<Element, Event>, value: any) => void;
}

const BottomNavigationComponent = ({
  value,
  onChange,
}: BottomNavigationComponentProps) => {
  return (
    <Box>
      <BottomNavigation showLabels value={value} onChange={onChange}>
        {bottomNavigationActions.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label=""
            icon={<item.icon sx={{ width: APP_BAR_ICONS_SIZE }} />}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavigationComponent;
