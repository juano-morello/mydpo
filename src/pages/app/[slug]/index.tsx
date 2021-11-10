import {useRouter} from "next/router";
import {useGetBusinessQuery} from "../../../client/graphql/getBusiness.generated";
import {useGetApplicationsQuery} from "../../../client/graphql/getApplications.generated";
import React, {useEffect, useState} from "react";
import {Box, Button, Card, CardActions, CardContent, Grid, TextField, Typography} from "@mui/material";
import Layout from "../../../client/components/Layout";
import {Application} from "../../../client/graphql/types.generated";

function Business() {
    const [appList, setAppList] = useState([])
    const router = useRouter();
    const {slug} = router.query;
    const [{data, fetching, error}] = useGetBusinessQuery({
        variables: {
            id: String(slug)
        }
    })

    console.log('DATA', data)

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;
    // if (data?.business || typeof slug !== "string") return <p>Not found.</p>;

    // useEffect(() => {
    //     if (data != undefined)
    //         // @ts-ignore
    //         setAppList(data.business?.applications)
    // }, [data])

    const filter = (textInput: string) => {
        if (textInput.length > 2) {
            const filtered = data?.business?.applications.filter(app => app?.applicationName.toLowerCase().includes(textInput.toLowerCase()))
            // @ts-ignore
            setAppList(filtered)
        } else {
            // @ts-ignore
            setAppList(applicationData.data?.applications)
        }
    }

    const appCard = (app: Application) => {
        return (
            <Card
                sx={{
                    width: '380px',
                    borderRadius: '10px'
                }}
                key={app.id}
            >
                <CardContent>
                    <Typography variant="h5" component="div">
                        {app.applicationName}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Description
                    </Typography>
                    <Typography variant="body2">
                        {app.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
                        color="success"
                        onClick={() => router.push(`/app/${data?.business?.id}/${app?.id}`)}
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
                >
                    <Grid
                        sx={{
                            marginTop: '40px',
                            marginBottom: '30px',
                            display: 'grid',
                            gap: 20,
                            gridTemplateColumns: 'repeat(2, 1fr)',
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: '#FFFFFF',
                                width: '807px',
                                height: '44px',
                                borderRadius: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <h1
                                style={{marginLeft: '20px'}}
                            >{data?.business?.companyName}</h1>
                        </Box>
                        <Button
                            variant={'contained'}
                            color={'error'}
                            sx={{
                                width: '185px',
                                height: '44px',
                                borderRadius: '50px',
                            }}
                            onClick={() => alert('Coming soon!')}
                        >
                            Edit
                        </Button>
                    </Grid>
                    <Grid
                        sx={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '10px',
                            paddingBottom: '25px',
                            paddingTop: '10px',
                            paddingLeft: '20px',
                            paddingRight: '20px',
                        }}
                    >
                        <Box>
                            <h2>Company Info</h2>
                        </Box>
                        <Grid
                            sx={{
                                marginTop: '70px', display: 'grid',
                                gap: 10,
                                gridTemplateColumns: 'repeat(2, 1fr)',
                            }}
                        >
                            <TextField
                                disabled
                                focused
                                value={data?.business?.companyName}
                                label="Company name"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.companyAddress}
                                label="Company address"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.companyPhone}
                                label="Company phone"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.companyEmail}
                                label="Company email"
                                variant="standard"
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        sx={{
                            marginTop: '25px', display: 'grid',
                            gap: 10,
                            gridTemplateColumns: 'repeat(2, 1fr)',
                        }}
                    >
                        <Grid
                            sx={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '10px',
                                paddingBottom: '25px',
                                paddingTop: '10px',
                                paddingLeft: '20px',
                                paddingRight: '20px',
                                display: 'grid',
                                gap: 10,
                                gridTemplateColumns: 'repeat(1, 1fr)'
                            }}
                        >
                            <Box>
                                <h2>Business Contact</h2>
                            </Box>
                            <TextField
                                disabled
                                focused
                                value={data?.business?.businessContactName}
                                label="Business contact name"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.businessContactPosition}
                                label="Business contact position"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.businessContactPhone}
                                label="Business contact phone"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.businessContactEmail}
                                label="Business contact email"
                                variant="standard"
                            />
                        </Grid>
                        <Grid
                            sx={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '10px',
                                paddingBottom: '25px',
                                paddingTop: '10px',
                                paddingLeft: '20px',
                                paddingRight: '20px',
                                display: 'grid',
                                gap: 10,
                                gridTemplateColumns: 'repeat(1, 1fr)'
                            }}
                        >
                            <Box>
                                <h2>Technical Contact</h2>
                            </Box>
                            <TextField
                                disabled
                                focused
                                value={data?.business?.technicalContactName}
                                label="Technical contact name"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.technicalContactPosition}
                                label="Technical contact position"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.technicalContactPhone}
                                label="Technical contact phone"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.technicalContactEmail}
                                label="Technical contact email"
                                variant="standard"
                            />
                        </Grid>
                        <Grid
                            sx={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '10px',
                                paddingBottom: '25px',
                                paddingTop: '10px',
                                paddingLeft: '20px',
                                paddingRight: '20px',
                                display: 'grid',
                                gap: 10,
                                gridTemplateColumns: 'repeat(1, 1fr)'
                            }}
                        >
                            <Box>
                                <h2>Privacy Liaison Contact</h2>
                            </Box>
                            <TextField
                                disabled
                                focused
                                value={data?.business?.privacyLiaisonContactName}
                                label="Privacy Liaison contact name"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.privacyLiaisonContactPosition}
                                label="Privacy Liaison contact position"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.privacyLiaisonContactPhone}
                                label="Privacy Liaison contact phone"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.privacyLiaisonContactEmail}
                                label="Privacy Liaison contact email"
                                variant="standard"
                            />
                        </Grid>
                        <Grid
                            sx={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '10px',
                                paddingBottom: '25px',
                                paddingTop: '10px',
                                paddingLeft: '20px',
                                paddingRight: '20px',
                                display: 'grid',
                                gap: 10,
                                gridTemplateColumns: 'repeat(1, 1fr)'
                            }}
                        >
                            <Box>
                                <h2>Human Resources Contact</h2>
                            </Box>
                            <TextField
                                disabled
                                focused
                                value={data?.business?.hrContactName}
                                label="Human Resources contact name"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.hrContactPosition}
                                label="Human Resources contact position"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.hrContactPhone}
                                label="Human Resources contact phone"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.hrContactEmail}
                                label="Human Resources contact email"
                                variant="standard"
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        sx={{
                        marginTop: '40px',
                        marginBottom: '30px',
                        display: 'grid',
                        gap: 1,
                        gridTemplateColumns: 'repeat(3, 1fr)',
                    }}>
                        <Box
                            sx={{
                                backgroundColor: '#FFFFFF',
                                width: '318px',
                                height: '44px',
                                borderRadius: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}>
                            <h2 style={{marginLeft: '20px'}}>Company Apps</h2>
                        </Box>
                        <Box
                            sx={{
                                backgroundColor: '#FFFFFF',
                                width: '318px',
                                height: '44px',
                                borderRadius: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}>
                            <TextField
                                onChange={(evt) => filter(evt.target.value)} label="Search" variant="standard"
                            />
                        </Box>
                        <Box
                            sx={{
                                display: 'grid',
                                gap: 5,
                                gridTemplateColumns: 'repeat(3, 1fr)',
                            }}
                        >
                            <Box>
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: '148px',
                                        height: '44px',
                                        borderRadius: '20px'
                                    }}
                                    onClick={() => router.push(`/app/${data?.business?.id}/add-application`)}
                                >
                                    New App
                                </Button>
                            </Box>
                            <Box>
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: '148px',
                                        height: '44px',
                                        borderRadius: '20px'
                                    }}
                                    onClick={() => alert('Coming soon!')}
                                >
                                    Create Map
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        sx={{
                        marginTop: '40px',
                        marginBottom: '30px',
                        display: 'grid',
                        gap: 1,
                        gridTemplateColumns: 'repeat(3, 1fr)',
                    }}>
                        {data?.business?.applications?.map((application) => {
                            return (
                                // @ts-ignore
                                appCard(application)
                            )
                        })}
                    </Grid>
                </Grid>
            </Layout>


            {/*<h1>{businessData.data.business.companyName}</h1>*/}

            {/*<h2>Applications</h2>*/}

            {/*<input type="text" onChange={(evt) => filter(evt.target.value)}/>*/}
            {/*<p>Filtered apps</p>*/}
            {/*{JSON.stringify(appList)}*/}

            {/*{applicationData.data?.applications?.map((application, index) => {*/}
            {/*  return (*/}
            {/*      <div key={index}>*/}
            {/*        <h3>{application?.applicationName}</h3>*/}
            {/*        <Link href={`/app/${business.id}/${application?.id}`}>View app</Link>*/}
            {/*      </div>*/}
            {/*  )*/}
            {/*})}*/}

            {/*<Link href={`/app/${business.id}/add-application`}>Add Application</Link>*/}
        </>
    );
}

export default Business;
