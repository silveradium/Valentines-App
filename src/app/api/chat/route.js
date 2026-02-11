export async function POST() {
  return new Response(JSON.stringify({ error: "Chat is disabled." }), {
    status: 410,
  });
}
