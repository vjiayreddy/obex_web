import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useRouter } from "next/router";
import { APP_ROUTES } from "../../services/enums";
interface ProductCardProps {
  imgUrl: string;
  title: string;
  price: number;
  name: string;
  onClickCartIcon?: () => void;
}

const StyledImageBoxWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
}));

const StyledCardTile = styled(Typography)(({ theme }) => ({
  minHeight: theme.spacing(4),
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
}));

const ProductCard: React.FC<ProductCardProps> = ({
  imgUrl,
  title,
  price,
  onClickCartIcon,
  name,
}) => {
  const router = useRouter();
  const handleViewProduct = () => {
    router.push(`${APP_ROUTES.SHOP}/${name}`);
  };

  return (
    <StyledImageBoxWrapper>
      <Card sx={{ height: "100%" }}>
        <Box sx={{ height: "220px", position: "relative" }}>
          <Image
            alt={title}
            src={imgUrl ? imgUrl : "/assets/images/placeholder.png"}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            placeholder="blur"
            blurDataURL={imgUrl ? imgUrl : "/assets/images/placeholder.png"}
          />
        </Box>
        <Grid p={1} container spacing={1}>
          <Grid item xs={12}>
            <StyledCardTile variant="body2">{title}</StyledCardTile>
          </Grid>
          <Grid xs={12} container item alignItems="center">
            <Grid item xs>
              <Typography variant="body1" component="p">
                {price}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={handleViewProduct} size="small">
                <VisibilityIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={onClickCartIcon} size="small">
                <LocalMallIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </StyledImageBoxWrapper>
  );
};

export default ProductCard;
