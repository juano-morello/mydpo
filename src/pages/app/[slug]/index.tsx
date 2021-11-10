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

    // useEffect(() => {
    //     if (applicationData.data != undefined)
    //         // @ts-ignore
    //         setAppList(applicationData.data)
    // }, [applicationData])

    const filter = (textInput: string) => {
        if (textInput.length > 2) {
            const filtered = applicationData.data?.applications?.filter(app => app?.applicationName.toLowerCase().includes(textInput.toLowerCase()))
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
                        onClick={() => router.push(`/app/${business.id}/${app?.id}`)}
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
                            >{business?.companyName}</h1>
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
                                value={business?.companyName}
                                label="Company name"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={business?.companyAddress}
                                label="Company address"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={business?.companyPhone}
                                label="Company phone"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={business?.companyEmail}
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
                                value={business?.businessContactName}
                                label="Business contact name"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={business?.businessContactPosition}
                                label="Business contact position"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={business?.businessContactPhone}
                                label="Business contact phone"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={business?.businessContactEmail}
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
                                value={business?.technicalContactName}
                                label="Technical contact name"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={business?.technicalContactPosition}
                                label="Technical contact position"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={business?.technicalContactPhone}
                                label="Technical contact phone"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={business?.technicalContactEmail}
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
                                value={business?.privacyLiaisonContactName}
                                label="Privacy Liaison contact name"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={business?.privacyLiaisonContactPosition}
                                label="Privacy Liaison contact position"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={business?.privacyLiaisonContactPhone}
                                label="Privacy Liaison contact phone"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={business?.privacyLiaisonContactEmail}
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
                                value={business?.hrContactName}
                                label="Human Resources contact name"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={business?.hrContactPosition}
                                label="Human Resources contact position"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={business?.hrContactPhone}
                                label="Human Resources contact phone"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                focused
                                value={business?.hrContactEmail}
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
                                    onClick={() => router.push(`/app/${business.id}/add-application`)}
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
                        {applicationData.data?.applications?.map((application) => {
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
