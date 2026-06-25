export async function submitContact(payload) {
  console.info('[submitContact] stub received payload:', payload);
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { ok: true };
}
