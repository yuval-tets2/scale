import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lAstName?: StringNullableFilter;
  phone?: StringNullableFilter;
};
