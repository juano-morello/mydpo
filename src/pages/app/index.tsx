import Link from "next/link";
import {useRouter} from "next/router";
import {useGetCurrentUserQuery} from "../../client/graphql/getCurrentUser.generated";
import {useEffect, useState} from "react";
import Layout from "../../client/components/Layout";
import {Box, Button, Card, CardActions, CardContent, Grid, TextField, Typography} from "@mui/material";
import {Business} from "../../client/graphql/types.generated";

export default function Dashboard() {
    const router = useRouter();
    const [{data, fetching, error}] = useGetCurrentUserQuery();
    const [businessList, setBusinessList] = useState([])

    useEffect(() => {
        if (data != undefined)
        // @ts-ignore
        setBusinessList(data?.currentUser?.consultancyFirm.businesses)
    }, [data])

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
            // @ts-ignore
            setBusinessList(data.currentUser?.consultancyFirm.businesses)
        }
    }

    const businessCard = (business: Business) => {
        return (
            <Card
            sx={{
                width: '380px',
                borderRadius: '10px',
                paddingLeft: '10px',
            }}
            key={business.id}
            >
                <CardContent>
                    <Typography variant="h5" component="div" sx={{marginBottom: '10px'}}>
                        {business.companyName}
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Email
                    </Typography>
                    <Typography variant="body2" sx={{marginBottom: '10px'}}>
                        {business.companyEmail}
                    </Typography>

                    <Box
                        sx={{
                            display: 'grid',
                            gap: 0,
                            gridTemplateColumns: 'repeat(2, 1fr)',
                        }}
                    >
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Phone
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Address
                        </Typography>
                        <Typography variant="body2">
                            {business.companyPhone}
                        </Typography>
                        <Typography variant="body2">
                            {business.companyAddress}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
                        color="success"
                        onClick={() => router.push(`/app/${business.id}`)}
                        sx={{
                            width: '350px',
                            marginTop: '10px',
                            marginBottom: '15px',
                            borderRadius: '20px'
                        }}
                    >
                        View
                    </Button>
                </CardActions>
            </Card>
        )
    }

    return (
        <>
            <Layout>
                <Grid
                sx={{marginTop: '70px'}}
                >
                    <Box
                        sx={{
                            display: 'grid',
                            gap: 24,
                            gridTemplateColumns: 'repeat(2, 1fr)',
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: '#FFFFFF',
                                width: '661px',
                                height: '44px',
                                borderRadius: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <h2
                            style={{marginLeft: '20px'}}
                            >Companies</h2>
                        </Box>

                        <Box
                            sx={{
                                backgroundColor: '#FFFFFF',
                                width: '317px',
                                height: '44px',
                                borderRadius: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <TextField
                                onChange={(evt) => filter(evt.target.value)}
                                label="Search"
                                variant="standard"
                                sx={{marginLeft: '20px', marginRight: '20px'}}
                            />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: 'grid',
                            gap: 1,
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            marginTop: '20px',
                        }}
                    >
                        {businessList.map((business) => (
                            businessCard(business)
                        ))}
                    </Box>
                </Grid>
            </Layout>
        </>
    );
}
