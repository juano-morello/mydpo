import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "urql";
import { useGetCurrentUserQuery } from "../../client/graphql/getCurrentUser.generated";

export default function Dashboard() {
  const router = useRouter();
  const [{ data, fetching, error }] = useGetCurrentUserQuery();
  // const [, createProject] = useMutation(CreateProjectDocument);
  const [name, setName] = useState("");

  if (fetching) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  if (!data?.currentUser) {
    if (process.browser) router.push("/login");
    return (
      <p>
        Redirecting to <Link href="/login">/login</Link>
        ...
      </p>
    );
  }

  return (
    <>
      <h1>Hello {data.currentUser.name}!</h1>
      <ul>
        {data.currentUser.consultancyFirm.businesses.map((business) => (
          <li key={business.slug}>
            <Link href={`/app/${business.slug}`}>{business.name}</Link>
          </li>
        ))}
      </ul>
      <input
        placeholder="Kreitech Inc"
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      />
      <button
        disabled={!name}
        // onClick={() => {
        //   createProject({
        //     name,
        //   }).then((result) => {
        //     const slug = result.data?.createProject?.slug;
        //     if (slug) router.push(`/app/${slug}`);
        //   });
        // }}
      >
        Add Business
      </button>
      <Link href="/app/settings">Settings</Link>
      <Link href="/api/auth/logout">Logout</Link>
    </>
  );
}
