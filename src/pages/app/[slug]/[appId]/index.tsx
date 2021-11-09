import React from "react";
import {useRouter} from "next/router";
import {useGetApplicationQuery} from "../../../../client/graphql/getApplication.generated";

const Application: React.FC = () => {
    const router = useRouter();
    const { appId } = router.query;
    const [{data, fetching, error}] = useGetApplicationQuery({
        variables: {
            id: String(appId)
        }
    })

    return (
        <div>
            <h1>{data?.application?.applicationName}</h1>
            <p>{JSON.stringify(data?.application)}</p>
        </div>
    )
}

export default Application