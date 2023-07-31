import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import DefaultButton from "../buttons/defaultButton";
import Box from "@mui/material/Box";
import BackupIcon from "@mui/icons-material/Backup";

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledUploadIndicationBox = styled(Box)(({ theme }) => ({
  width: 180,
  height: 180,
  border: `2px dashed ${theme.palette.grey[500]}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

interface FileUploadCardProps {
  onSelectFile: () => void;
}

const FileUploadCard = ({ onSelectFile }: FileUploadCardProps) => {
  return (
    <Card>
      <StyledCardContent>
        <StyledUploadIndicationBox m={2}>
          <BackupIcon sx={{ fontSize: 50 }} />
        </StyledUploadIndicationBox>
        <DefaultButton
          onClick={onSelectFile}
          label="Select File For Upload"
          id="btn-file-upload"
        />
      </StyledCardContent>
    </Card>
  );
};

export default FileUploadCard;
