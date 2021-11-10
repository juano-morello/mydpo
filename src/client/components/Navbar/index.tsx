import Link from "next/link";
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
                    <Link href={isAuthenticated ? `/app` : `/`}>MyDPO</Link>
                </Box>

                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#F6931E',
                            height: '44px',
                            width: '132px',
                            borderRadius: '50px',
                            fontSize: '13px',
                            fontWeight: 500,
                        }}
                        onClick={() => router.push('/app/add-business')}
                    >
                        new company
                    </Button>


                    {isAuthenticated && <Link href="/api/auth/logout">Logout</Link>}
                </Box>
            </Container>
        </Grid>
    );
}

export default Navbar;
