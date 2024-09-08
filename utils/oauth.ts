import { createGitHubOAuthConfig, createHelpers } from "@deno/kv-oauth";
import type { Plugin } from "$fresh/server.ts";

export const { signIn, handleCallback, signOut, getSessionId } = createHelpers(
  createGitHubOAuthConfig(),
);

export default {
  name: "kv-oauth",
  routes: [
    {
      path: "/signin",
      async handler(req) {
        return await signIn(req);
      },
    },
    {
      path: "/callback",
      async handler(req) {
        const { response } = await handleCallback(req);
        return response;
      },
    },
    {
      path: "/signout",
      async handler(req) {
        return await signOut(req);
      },
    },
    {
      path: "/protected",
      async handler(req) {
        const session = await getSessionId(req);
        return session === undefined
          ? new Response("Unauthorized", { status: 401 })
          : new Response("You are allowed, " + session);
      },
    },
  ],
} as Plugin;
