import Link from "next/link";
import { useRouter } from "next/router";
import UpgradeButton from "../../../client/components/UpgradeButton";
import {useGetBusinessQuery} from "../../../client/graphql/getBusiness.generated";

function Project() {
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

  console.log('BUSINESS DATA', business)

  return (
    <>
      <h1>{business.name}</h1>
      <Link href={`/app/${business.slug}/settings`}>Settings</Link>
    </>
  );
}

export default Project;
