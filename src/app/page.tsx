"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button
        className="bg-white text-black my-3 py-3 rounded-md"
        onClick={() => signIn("github")}
      >
        Sign in using Github
      </button>
      <br />
      <button
        className="bg-white text-black my-3 py-3 rounded-md"
        onClick={() => signIn("google")}
      >
        Sign in using Google
      </button>
    </>
  );
}
