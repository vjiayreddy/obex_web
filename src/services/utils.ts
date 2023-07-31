import { FieldValues, UseFormGetValues } from "react-hook-form";

export const handleCheckBoxGroup = (
  checkedId: any,
  getValues: UseFormGetValues<FieldValues>
) => {
  const { item_ids: ids } = getValues();
  const newIds = ids?.includes(checkedId)
    ? ids?.filter((id: any) => id !== checkedId)
    : [...(ids ?? []), checkedId];
  return newIds;
};