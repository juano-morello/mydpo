import Link from "next/link";
import {useRouter} from "next/router";
import {useGetCurrentUserQuery} from "../../client/graphql/getCurrentUser.generated";
import {useState} from "react";
import {Business} from "../../client/graphql/types.generated";

export default function Dashboard() {
    const router = useRouter();
    const [{data, fetching, error}] = useGetCurrentUserQuery();
    const [businessList, setBusinessList] = useState([])

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

    const filter = (textInput: string) => {
        if (textInput.length > 2) {
            const filtered = data.currentUser?.consultancyFirm.businesses.filter(business => business.companyName.toLowerCase().includes(textInput.toLowerCase()))
            // @ts-ignore
            setBusinessList(filtered)
        } else {
            setBusinessList([])
        }
    }

    return (
        <>
            <h1>Hello {data.currentUser.name}!</h1>
            <input type="text" onChange={(evt) => filter(evt.target.value)}/>

            <p>Filtered business</p>
            {JSON.stringify(businessList)}

            {data.currentUser.consultancyFirm.businesses.map((business) => (
                <div key={business.id}>
                    <h3>{business.companyName}</h3>
                    <Link href={`/app/${business.id}`}>{business.companyName}</Link>
                </div>
            ))}
            <Link href={'/app/add-business'}>Add Business</Link>
            <Link href="/app/settings">Settings</Link>
            <Link href="/api/auth/logout">Logout</Link>
        </>
    );
}
