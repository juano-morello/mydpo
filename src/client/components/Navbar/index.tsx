import Link from "next/link";
import Image from 'next/image'
import {useGetCurrentUserQuery} from "../../graphql/getCurrentUser.generated";
import {Box, Button, Container, Grid} from "@mui/material";
import {useRouter} from "next/router";

function Navbar() {
    const [{data}] = useGetCurrentUserQuery();
    const router = useRouter();
    const isAuthenticated = !!data?.currentUser;

    return (
        <Grid
            sx={{
                backgroundColor: '#FFFFFF',
            }}
        >
            <Container
                sx={{
                    display: `flex`,
                    justifyContent: `space-between`,
                    height: '111px',
                    alignItems: 'center'
                }}
            >
                <Box>
                    <Image src={'/navbarLogo.png'}
                           width={'76.38px'}
                           height={'70px'}
                           onClick={() => {isAuthenticated ? router.push('/app') : router.push('/')}} />
                </Box>

                <Box
                    sx={{marginTop: '30px'}}
                >
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#F6931E',
                            height: '44px',
                            width: '132px',
                            borderRadius: '50px',
                            fontSize: '13px',
                            fontWeight: 500,
                            marginBottom: '35px',
                            marginRight: '20px'
                        }}
                        onClick={() => router.push('/app/add-business')}
                    >
                        new company
                    </Button>

                    <Image src={'/logout.png'}
                           width={'44px'}
                           height={'44px'}
                           onClick={() => {router.push('/api/auth/logout')}} />
                    {/*{isAuthenticated && <Link href="/api/auth/logout">Logout</Link>}*/}
                </Box>
            </Container>
        </Grid>
    );
}

export default Navbar;
