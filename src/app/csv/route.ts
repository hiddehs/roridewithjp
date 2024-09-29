import { db } from "@vercel/postgres";

export async function GET(request: Request) {
  const unauthResponse = new Response("Auth Required.", { status: 401 });
  unauthResponse.headers.append(
    "WWW-authenticate",
    'Basic realm="Secure Area"'
  );

  const auth = request.headers.get("Authorization");
  if (!auth) {
    return unauthResponse;
  } else {
    const uspw = atob(auth.split("Basic ")[1]);
    console.log(uspw);
    if (!uspw.includes(":")) {
      return unauthResponse;
    }
    if (uspw !== process.env["AUTH"]) {
      return unauthResponse;
    }
  }

  const results = await db.query("SELECT * FROM credits");

  if (results.rows.length > 0) {
    let csv = "";

    csv += Object.keys(results.rows[0]) + "\n";

    for (let index = 0; index < results.rows.length; index++) {
      const element = results.rows[index];
      csv += Object.values(element).join(",") + "\n";
    }
    return new Response(csv, { headers: { "Content-type": "text/csv" } });
  }

  return Response.error();
}
