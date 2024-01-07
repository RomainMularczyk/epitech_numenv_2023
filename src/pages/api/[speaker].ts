import type { APIContext } from "astro";
import {
  sendSubscriberRegistrationRequest,
  sendSubscriberUnknownError,
} from "src/utils/requests";

export const POST = async ({ params, request }: APIContext) => {
  if (request.body && params.speaker) {
    const rawData = await request.body.getReader().read();
    const jsonBody = new TextDecoder().decode(rawData.value);

    return sendSubscriberRegistrationRequest(params.speaker, jsonBody);
  } else {
    return sendSubscriberUnknownError();
  }
};

