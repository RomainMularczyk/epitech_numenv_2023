import type { Challenge } from "src/types/form";
import { formatSpeaker, removeTrailingSlash } from "./string-formatting";
const ENVNUM_API_HOST = import.meta.env.PUBLIC_ENVNUM_API_HOST;

export const registerSubscriber = (challenge: Challenge) => {
  const form = document.getElementById("form") as HTMLFormElement;
  form?.addEventListener("submit", async (e: SubmitEvent) => {
    e.preventDefault();

    const formData = new FormData(form);
    const jsonBody = Object.fromEntries(formData.entries());
    const originalPath = removeTrailingSlash(window.location.pathname);
    const path = originalPath.replace("subscribe", "api");

    const body = {
      ...jsonBody,
      ...challenge,
    }

    try {
      const response = await fetch(path, {
        method: "POST",
        body: JSON.stringify(body),
        redirect: "follow",
      });

      const data = await response.json();

      if (data.message.includes("Subscriber is already registered to this session.")) {
        window.location.href = `${originalPath}/registered`;
      } else if (data.message.includes("Max number of subscribers")) {
        window.location.href = `${originalPath}/full`
      } else if (response.ok) {
        window.location.href = `${originalPath}/confirmation`;
      }
    } catch (err) {
      window.location.href = `${originalPath}/error`;
    }
  });
};

export const sendSubscriberRegistrationRequest = async (
  speaker: string,
  body: string,
) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const formattedSpeaker = formatSpeaker(speaker);

  try {
    const response = await fetch(
      `${ENVNUM_API_HOST}/subscribe/${formattedSpeaker}`, {
        method: 'post',
        headers: headers,
        credentials: 'include',
        body: body,
        redirect: 'follow',
    });

    return handleSubscriberRegistrationResponses(response)
  } catch (err) {
    const errorMsg = {
      message: "Provided path parameter is invalid.",
    };
    return new Response(
      JSON.stringify(errorMsg), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }
};

export const sendSubscriberUnknownError = () => {
  const responsedata = {
    message: "Unknown error happened when trying to register the subscriber.",
  }
  return new Response(
    JSON.stringify(responsedata), {
      status: 500,
      headers: {
        "content-type": "application/json",
      },
    }
  )
};

const handleSubscriberRegistrationResponses = async (response: Response) => {
  try {
    const data = await response.json();

    if (response.ok) {
      return new Response(
        JSON.stringify(data), {
          status: 200,
          headers: {
            "content-type": "application/json",
          },
        }
      )
    } else if (data.message.includes("Subscriber is already registered")) {
      const responseData = {
        message: "Subscriber is already registered to this session.",
      };
      return new Response(
        JSON.stringify(responseData), {
          status: 308,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    } else if (data.message.includes("Max number of subscribers reached")) {
      const errMsg = {
        message: "Max number of subscribers for this session.",
      };
      return new Response(
        JSON.stringify(errMsg), {
          status: 503,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    } else {
      const responsedata = {
        message: "Unknown error happened when trying to register the subscriber.",
      };
      return new Response(
        JSON.stringify(errMsg), {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    }
  } catch (err) {
    const responseData = {
      message: "Could not parse the server response.",
    };
    return new Response(
      JSON.stringify(responseData), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }
};

