import { Fragment } from "react";
import { Container } from "@mui/material";
import HomeBanner from "../src/components/banners/HomeBanner";
import HomeInfoSection from "../src/containers/home/InfoSection/infoSection";
import ShopByProducts from "../src/containers/home/shopByProducts/shopByProducts";
import ShopByOccasions from "../src/containers/home/shopByOccassions/shopByOccasions";
import DiscoverSection from "../src/containers/home/discoverSection/discoverSection";
import ExpertHelp from "../src/containers/home/expertHelp/expertHelp";
import OurClients from "../src/containers/home/ourClients/ourClients";
import FindYourStyle from "../src/containers/home/findYourStyle/findYourStyle";
import ClientTestimonials from "../src/containers/home/clientTestimonials/clientTestimonials";
import apolloClient from "../apollo/apolloClient";
import { GET_ALL_OCCASIONS } from "../apollo/queries/products";

const HomePage = () => {
  return (
    <Fragment>
      <Container disableGutters maxWidth="xl">
        <HomeBanner />
        <HomeInfoSection />
        <ShopByProducts />
        <ShopByOccasions />
        <DiscoverSection />
      </Container>
      <Container disableGutters maxWidth="md">
        <ExpertHelp />
      </Container>
      <Container disableGutters maxWidth="xl">
        <OurClients />
      </Container>
      <Container disableGutters maxWidth="lg">
        <FindYourStyle />
      </Container>
      <Container disableGutters maxWidth="xl">
        <ClientTestimonials />
      </Container>
    </Fragment>
  );
};
export default HomePage;

export const getStaticProps = async () => {
  const client = apolloClient;
  let navMenus = {
    occasions: [],
    regular: [],
    accessories: [],
  };
  try {
    const response = await client.query({
      query: GET_ALL_OCCASIONS,
    });
    if (response?.error && !response.data) {
      return {
        props: {
          navMenus,
        },
      };
    }

    navMenus["regular"] = response.data.getAllOccasions.filter(
      (item) => item._id === "5fc2677bfa7ff20df01ab8ce"
    );
    navMenus["accessories"] = response.data.getAllOccasions.filter(
      (item) => item._id === "6006f48dd47a4914dcd7ea79"
    );
    navMenus["occasions"] = response.data.getAllOccasions.filter(
      (item) =>
        item._id !== "5fc2677bfa7ff20df01ab8ce" &&
        item._id !== "6006f48dd47a4914dcd7ea79"
    );

    return {
      props: {
        navMenus: navMenus,
      },
    };
  } catch (e) {
    return {
      props: {
        navMenus,
      },
    };
  }
};

// <HomeLayout appBarTitle="Home" showCartIcon={true} showUserIcon={true}>
//   <StyledMainBox>
//     <AdsBanner />
//     <TopSellingProducts />
//     <HomeBranches />
//   </StyledMainBox>
// </HomeLayout>
