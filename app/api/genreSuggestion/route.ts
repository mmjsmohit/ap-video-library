export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const genre = searchParams.get("genre");

  const res = await fetch(
    `https://ap-video-library.azurewebsites.net/api/getaisuggestion?genre=${genre}`,
    {
      method: "GET",
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );

  const message = await res.text();

  return Response.json({ message });
}
