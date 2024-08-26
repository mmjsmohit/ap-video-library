// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const genre = searchParams.get("genre");

import next from "next";

//   const res = await fetch(
//     `https://ap-video-library.azurewebsites.net/api/getaisuggestion?genre=${genre}`,
//     {
//       method: "GET",
//       next: {
//         revalidate: 60 * 60 * 24,
//       },
//     }
//   );

//   const message = await res.text();

//   return Response.json({ message });
// }
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const genre = searchParams.get("genre");

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${process.env.DIFY_API_KEY}`);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    inputs: {},
    query: `I want to know about ${genre}`,
    response_mode: "blocking",
    user: "ap-assistant",
  });

  var requestOptions = {
    method: "POST",
    next: {
      revalidate: 60 * 60 * 24,
    },
    headers: myHeaders,
    body: raw,
    redirect: "follow" as RequestRedirect,
  };

  const res = await fetch(
    `${process.env.DIFY_BASE_URL}/v1/chat-messages`,
    requestOptions
  );
  const jsonResponse = await res.json();
  const message = jsonResponse.answer;
  console.log(message);
  console.log(raw);
  console.log(res);
  return Response.json({ message });
}
