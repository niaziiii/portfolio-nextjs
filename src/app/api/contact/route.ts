export async function GET() {
  return Response.json({ message: "Hello World" });
}

export async function POST(req: Request) {
  console.log({ body: req.body });

  return Response.json({ message: "Hello World", data: req.body });
}
