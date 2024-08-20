export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer app-AMO5ZtcAdfihrahKMFYOEAbV");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    inputs: {},
    query: `I want to know about ${term}`,
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
    "http://74.225.255.251/v1/chat-messages",
    requestOptions
  );
  const jsonResponse = await res.json();
  const message = jsonResponse.answer;
  console.log(message);

  return Response.json({ message });
}
