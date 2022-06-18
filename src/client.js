import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "140jq61n",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "sk3ANoNyvLQWOUDtKvebKVun5T5tSO1pvQ5L1jNg3zFE3q5EWge8cOVT1dGrVtE9YNES82Ea0s5evmZB7jywX66Xc6Ip2Y0vd0j96165dg4ofQUot96jFxnfdt3l7axed0hD5HJrl40OoMfn3IU9qzx6SdXkEyXuXe3ME51MYBNc2sltU3vJ",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
