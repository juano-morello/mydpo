import Link from "next/link";
import { useRouter } from "next/router";
import {useGetBusinessQuery} from "../../../client/graphql/getBusiness.generated";
import {useGetApplicationsQuery} from "../../../client/graphql/getApplications.generated";
import {useState} from "react";

function Business() {
  const [appList, setAppList] = useState([])
  const router = useRouter();
  const { slug } = router.query;
  const [businessData] = useGetBusinessQuery({
    variables: {
      id: String(slug)
    }
  })
  const [applicationData] = useGetApplicationsQuery({
    variables: {
      businessId: String(slug)
    }
  })

  if (applicationData.fetching || businessData.fetching) return <p>Loading...</p>;

  if (businessData.error) return <p>{businessData.error.message}</p>;
  if (applicationData.error) return <p>{applicationData.error.message}</p>;

  if (!businessData.data?.business || typeof slug !== "string") return <p>Not found.</p>;

  const {business} = businessData.data

  const filter = (textInput: string) => {
    if (textInput.length > 2) {
      const filtered = applicationData.data?.applications?.filter(app => app?.applicationName.toLowerCase().includes(textInput.toLowerCase()))
      // @ts-ignore
      setAppList(filtered)
    } else {
      setAppList([])
    }
  }

  return (
    <>
      <h1>{businessData.data.business.companyName}</h1>

      <h2>Applications</h2>

      <input type="text" onChange={(evt) => filter(evt.target.value)}/>
      <p>Filtered apps</p>
      {JSON.stringify(appList)}

      {applicationData.data?.applications?.map((application, index) => {
        return (
            <div key={index}>
              <h3>{application?.applicationName}</h3>
              <Link href={`/app/${business.id}/${application?.id}`}>View app</Link>
            </div>
        )
      })}

      <Link href={`/app/${business.id}/add-application`}>Add Application</Link>
    </>
  );
}

export default Business;
