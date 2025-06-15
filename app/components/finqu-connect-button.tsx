export function ConnectFinquButton() {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: process.env.FINQU_CLIENT_ID!,
    redirect_uri: process.env.FINQU_REDIRECT_URI!,
    scope: "products_read orders_write", // choose scopes wisely
    state: crypto.randomUUID(),
  });

  const url = `${process.env.FINQU_AUTH_URL}?${params.toString()}`;

  return <a href={url}>Connect Finqu</a>;
}
