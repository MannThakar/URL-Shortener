import * as yup from "yup";
import { URL_MESSAGE } from "../utils/message";

export const schema = yup.object().shape({
  userInputLink: yup
    .string()
    .url(URL_MESSAGE.INVALID)
    .required(URL_MESSAGE.REQUIRED),
});
