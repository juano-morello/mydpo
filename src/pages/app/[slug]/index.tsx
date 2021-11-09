import Link from "next/link";
import { useRouter } from "next/router";
import {useGetBusinessQuery} from "../../../client/graphql/getBusiness.generated";

function Business() {
  const router = useRouter();
  const { slug } = router.query;
  const [{data, fetching, error}] = useGetBusinessQuery({
    variables: {
      slug: String(slug)
    }
  })

  if (fetching) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  if (!data?.business || typeof slug !== "string") return <p>Not found.</p>;

  const { business } = data;

  return (
    <>
      <h1>{business?.companyName}</h1>
      <Link href={`/app/${business.slug}/settings`}>Settings</Link>
      <Link href={`/app/${business.slug}/add-application`}>Add Application</Link>
    </>
  );
}

export default Business;
