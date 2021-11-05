import React, { FC } from "react";
import { TextField } from "@mui/material";
import { useField, FieldAttributes, FieldInputProps } from "formik";

type props = { name: string; label: string } & FieldAttributes<{}>;

const TextfieldWrapper: FC<props> = ({ name, ...otherProps }) => {
  const [field, mata] = useField(name);

  const configTextfield: any = {
    ...field,
    ...otherProps,
    fullWidth: true,
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return <TextField {...configTextfield} />;
};

export default TextfieldWrapper;
