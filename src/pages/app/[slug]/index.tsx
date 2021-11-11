import {useRouter} from "next/router";
import {useGetBusinessQuery} from "../../../client/graphql/getBusiness.generated";
import React, {useState} from "react";
import {Box, Button, Card, CardActions, CardContent, Grid, TextField, Typography} from "@mui/material";
import Layout from "../../../client/components/Layout";
import {Application} from "../../../client/graphql/types.generated";

function Business() {
    const router = useRouter();
    const {slug} = router.query;
    const [{data, fetching, error}] = useGetBusinessQuery({
        variables: {
            id: String(slug)
        }
    })
    const [appList, setAppList] = useState([])

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;
    // if (data?.business || typeof slug !== "string") return <p>Not found.</p>;

    const filter = (textInput: string) => {
        if (textInput.length > 2) {
            const filtered = data?.business?.applications.filter(app => app?.applicationName.toLowerCase().includes(textInput.toLowerCase()))
            // @ts-ignore
            setAppList(filtered)
        } else {
            // @ts-ignore
            setAppList(data?.business?.applications)
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
                            borderRadius: '20px',
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
                                label="Name"
                                variant="standard"
                                sx={{
                                    marginBottom: '20px'
                                }}
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.businessContactPosition}
                                label="Position"
                                variant="standard"
                                sx={{
                                    marginBottom: '20px'
                                }}
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.businessContactPhone}
                                label="Phone"
                                variant="standard"
                                sx={{
                                    marginBottom: '20px'
                                }}
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.businessContactEmail}
                                label="Email"
                                variant="standard"
                                sx={{
                                    marginBottom: '20px'
                                }}
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
                                label="Name"
                                variant="standard"
                                sx={{
                                    marginBottom: '20px'
                                }}
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.technicalContactPosition}
                                label="Position"
                                variant="standard"
                                sx={{
                                    marginBottom: '20px'
                                }}
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.technicalContactPhone}
                                label="Phone"
                                variant="standard"
                                sx={{
                                    marginBottom: '20px'
                                }}
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.technicalContactEmail}
                                label="Email"
                                variant="standard"
                                sx={{
                                    marginBottom: '20px'
                                }}
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
                                label="Name"
                                variant="standard"
                                sx={{
                                    marginBottom: '20px'
                                }}
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.privacyLiaisonContactPosition}
                                label="Position"
                                variant="standard"
                                sx={{
                                    marginBottom: '20px'
                                }}
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.privacyLiaisonContactPhone}
                                label="Phone"
                                variant="standard"
                                sx={{
                                    marginBottom: '20px'
                                }}
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.privacyLiaisonContactEmail}
                                label="Email"
                                variant="standard"
                                sx={{
                                    marginBottom: '20px'
                                }}
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
                                label="Name"
                                variant="standard"
                                sx={{
                                    marginBottom: '20px'
                                }}
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.hrContactPosition}
                                label="Position"
                                variant="standard"
                                sx={{
                                    marginBottom: '20px'
                                }}
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.hrContactPhone}
                                label="Phone"
                                variant="standard"
                                sx={{
                                    marginBottom: '20px'
                                }}
                            />
                            <TextField
                                disabled
                                focused
                                value={data?.business?.hrContactEmail}
                                label="Email"
                                variant="standard"
                                sx={{
                                    marginBottom: '20px'
                                }}
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
                        {
                            appList.length < 1 ? data?.business?.applications?.map((application) => {
                            return (
                                // @ts-ignore
                                appCard(application)
                            )
                        }) : appList.map((application) => {
                                return (
                                    // @ts-ignore
                                    appCard(application)
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Layout>
        </>
    );
}

export default Business;
