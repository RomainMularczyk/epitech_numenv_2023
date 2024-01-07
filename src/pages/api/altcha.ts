import type { APIContext } from "astro";
const ENVNUM_API_HOST = import.meta.env.PUBLIC_ENVNUM_API_HOST;

export const GET = async ({}: APIContext) => {
  try {
    const response = await fetch(`${ENVNUM_API_HOST}/altcha`, {
      method: "GET",
    });

    try {
      const data = await response.json();
      return new Response(
        JSON.stringify(data), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
    } catch (err) {
      const errMsg = {
        "message": "Altcha challenge could not be parsed.",
      }
      return new Response(
        JSON.stringify(errMsg), {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    }

  } catch (err) {
    const errMsg = {
      "message": "Altcha challenge could not be retrieved.",
    }
    return new Response(
      JSON.stringify(errMsg), {
        status: 503,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  }
}
