const service = process.env.NEXT_PUBLIC_SEARCH_STATISTICS_API_URL;

export async function getNewId() {
  const url = `${service}getNewId`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  const responseBody = await response.json();
  const newId = responseBody.newId;
  return newId;
}

export function sendRequest(id, request) {
  const url = `${service}sendRequest`;

  fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      id: id,
      request: request,
    }),
  });
}
