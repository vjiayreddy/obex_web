import React, { useEffect } from "react";
import DefaultContainer from "../../src/components/common/defaultContainer";
import PersonalizationForm from "../../src/forms/personalizationForm";
import { useSession } from "next-auth/react";
import useGetPersonalizeFormByFormId from "../../apollo/hooks/useGetPersonalizeFormByFormId";
import { DP_FORM_IDS } from "../../src/services/enums";
import CircularLoadingIndication from "../../src/components/loadingIndicators/circularLoadingIndication";

const OnBoardingPage = () => {
  const { data: session } = useSession();
  const { gqlGetPersonalizeFormById, loadingGPF, errorGPF, dataGPF } =
    useGetPersonalizeFormByFormId();

  useEffect(() => {
    gqlGetPersonalizeFormById({ Id: DP_FORM_IDS.FORM_6_ID }).then((_) => {});
  }, []);

  return (
    <DefaultContainer disableGutters>
      {loadingGPF && <CircularLoadingIndication />}
      {session?.user && dataGPF?.getPersonalizeForm && !loadingGPF && (
        <PersonalizationForm
          componentData={dataGPF?.getPersonalizeForm?.screens || []}
        />
      )}
    </DefaultContainer>
  );
};

export default OnBoardingPage;
