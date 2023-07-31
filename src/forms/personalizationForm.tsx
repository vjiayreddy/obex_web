import React, { Fragment, useEffect, useState } from "react";
import MobileDeviceStepper from "../components/mobileStepper/mobileDeviceStepper";
import Grid from "@mui/material/Grid";
import HeadingWithContent from "../components/headings/headingWithContent";
import CheckBoxControlGroup from "../components/formFields/checkBoxGroup";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import RadioGroupControl from "../components/formFields/radioGroup";
import { useRouter } from "next/router";
import { APP_ROUTES, optionsTypeIds } from "../services/enums";
import FormInputField from "../components/formFields/textField";
import FileUploadCard from "../components/cards/fileUploadCard";
import Dialog from "@mui/material/Dialog";
import FileUploadControl from "../components/fileUpload/uppyUpload";

interface PersonalizationFormProps {
  componentData: any[];
}

const PersonalizationForm = ({ componentData }: PersonalizationFormProps) => {
  const { control, handleSubmit, getValues, reset } = useForm();
  const [open, setOpen] = useState(false);
  const [screen, setScreen] = useState<any>(null);
  const router = useRouter();
  const handleCheck = (checkedId: any, fieldName: string) => {
    const { [fieldName]: ids } = getValues();
    const newIds = ids?.includes(checkedId)
      ? ids?.filter((id: any) => id !== checkedId)
      : [...(ids ?? []), checkedId];
    return newIds;
  };

  useEffect(() => {
    if (!router?.query?.step) {
      router.push({
        pathname: APP_ROUTES.ON_BOARDING,
        query: { step: 1 },
      });
      setScreen(componentData[0]);
    } else {
      setScreen(componentData[Number(router?.query?.step) - 1]);
    }
  }, [router]);

  const onSubmit = (data) => {
    router.push({
      pathname: APP_ROUTES.ON_BOARDING,
      query: { step: Number(router?.query?.step) + 1 },
    });
  };

  const handleStepperBack = () => {
    router.push({
      pathname: APP_ROUTES.ON_BOARDING,
      query: { step: Number(router?.query?.step) - 1 },
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MobileDeviceStepper
        mobileStepperActiveStep={
          router?.query?.step ? Number(router?.query?.step) - 1 : 0
        }
        mobileStepperContent={
          <Box p={2}>
            {componentData && (
              <Grid pt={2} container>
                {screen?.questions.map((screen, index) => (
                  <Fragment key={index}>
                    <Grid mb={2} item xs={12}>
                      <HeadingWithContent
                        hideHelpIcon={false}
                        heading={screen?.question?.input}
                        content={screen?.question?.description}
                      />
                    </Grid>
                    {screen?.question?.optionTypeId ===
                      optionsTypeIds.IMAGE_GROUP &&
                      screen?.question?.isMultipleChoice &&
                      screen?.question?.optionsData?.length > 0 && (
                        <Grid mb={2} item xs={12}>
                          <CheckBoxControlGroup
                            variant="IMAGE"
                            gridItemProps={{
                              xs: 4,
                              sm: 4,
                              md: 3,
                              lg: 3,
                              xl: 3,
                            }}
                            defaultValues={screen?.question?.value || []}
                            options={screen?.question?.optionsData}
                            control={control}
                            name={`screen_${screen?.questionId}`}
                            onChange={handleCheck}
                            id={screen?.question?.input}
                          />
                        </Grid>
                      )}

                    {screen?.question?.optionTypeId ===
                      optionsTypeIds.IMAGE_GROUP &&
                      !screen?.question?.isMultipleChoice &&
                      screen?.question?.optionsData?.length > 0 && (
                        <Grid mb={2} item xs={12}>
                          <RadioGroupControl
                            variant="IMAGE"
                            options={screen?.question?.optionsData}
                            gridItemProps={{
                              xs: 4,
                              sm: 4,
                              md: 3,
                              lg: 3,
                              xl: 3,
                            }}
                            control={control}
                            name={`screen_${screen?.questionId}`}
                            id={screen?.question?.input}
                          />
                        </Grid>
                      )}

                    {optionsTypeIds.CHIP_GROUP(
                      screen?.question?.optionTypeId
                    ) &&
                      screen?.question?.isMultipleChoice &&
                      screen?.question?.optionsData?.length > 0 && (
                        <Grid mb={2} item xs={12}>
                          <CheckBoxControlGroup
                            variant="CHIP"
                            defaultValues={screen?.question?.value || []}
                            options={screen?.question?.optionsData}
                            control={control}
                            name={`screen_${screen?.questionId}`}
                            onChange={handleCheck}
                            id={screen?.question?.input}
                          />
                        </Grid>
                      )}

                    {optionsTypeIds.CHIP_GROUP(
                      screen?.question?.optionTypeId
                    ) &&
                      !screen?.question?.isMultipleChoice &&
                      screen?.question?.optionsData?.length > 0 && (
                        <Grid mb={2} item xs={12}>
                          <RadioGroupControl
                            variant="CHIP"
                            options={screen?.question?.optionsData}
                            control={control}
                            name={`screen_${screen?.questionId}`}
                            id={screen?.question?.input}
                          />
                        </Grid>
                      )}

                    {screen?.question?.optionTypeId ===
                      optionsTypeIds.TEXT_FIELD && (
                      <Grid mb={2} item xs={12}>
                        <FormInputField
                          name={`screen_${screen?.questionId}`}
                          rules={{
                            required: true,
                          }}
                          control={control}
                          textFieldProps={{
                            multiline: true,
                            rows: 5,
                            placeholder: "Write a brief introduction your self",
                          }}
                        />
                      </Grid>
                    )}
                    {screen?.question?.optionTypeId ===
                      optionsTypeIds.UPLOAD_PICTURE && (
                      <Grid mb={2} item xs={12}>
                        <FileUploadCard onSelectFile={handleClickOpen} />
                      </Grid>
                    )}
                  </Fragment>
                ))}
              </Grid>
            )}
          </Box>
        }
        mobileStepperSteps={componentData.length}
        mobileStepperOnClickNext={handleSubmit(onSubmit)}
        mobileStepperOnClickPrevious={handleStepperBack}
      />
      <Dialog
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <FileUploadControl uploadPath="/" onCompleted={(result) => {}} />
      </Dialog>
    </>
  );
};

export default PersonalizationForm;
