import { isArray, isEmpty, isObject } from "underscore";

export const cleanObjectArray = (object: any): any => {
  return Object.keys(object)
    ?.filter(
      (key) =>
        object[key] !== null && object[key] !== undefined && object[key] !== ""
    )
    ?.reduce((obj: any, key) => {
      if (Array.isArray(object[key])) {
        obj[key] = object[key]?.filter(
          (item: any) => item !== null && item !== undefined && item !== ""
        );
      } else {
        obj[key] = object[key];
      }
      return obj;
    }, {});
};

export const convertObjectToQueryString = (object: any): string => {
  if (isEmpty(object)) {
    return "";
  }
  const queryString = Object.keys(object)
    .map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]);
    })
    .join("&");

  return queryString;
};
