import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="LAst Name" source="lAstName" />
        <TextInput label="Phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
