import type { Challenge } from "src/types/form";
import { removeTrailingSlash } from "./string-formatting";

export const getAltchaChallenge = async (): Promise<Challenge|void> => {
  const originalPath = removeTrailingSlash(window.location.pathname);

  try {
    const response = await fetch(`/api/altcha`, {
      method: "GET",
      redirect: "follow",
      headers: {
        "content-type": "application/json",
      },
    });
    const challenge: Challenge = await response.json();

    if (response.ok) {
      return challenge
    } else {
      window.location.href = `${originalPath}/error`;
    }

  } catch (err) {
    window.location.href = `${originalPath}/error`;
  }
};

export const appendAltchaWidget = (
  element: HTMLElement,
  challenge: Challenge,
) => {
  const altcha = document.createElement("altcha-widget");
  altcha.setAttribute("challengejson", JSON.stringify(challenge));
  element.insertAdjacentElement("beforebegin", altcha);
};

