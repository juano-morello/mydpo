import Link from "next/link";
import Image from 'next/image'
import {useGetCurrentUserQuery} from "../../graphql/getCurrentUser.generated";
import {Box, Button, Container, Grid} from "@mui/material";
import {useRouter} from "next/router";
import { FaBeer, FaLevelDownAlt, FaPlus } from 'react-icons/fa';

function Navbar() {
    const [{data}] = useGetCurrentUserQuery();
    const router = useRouter();
    const isAuthenticated = !!data?.currentUser;
    const hasHistory = window.history.length > 2;

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

<Box sx={{ marginLeft: '66%'}}>
<Image src={'/navbarBack.svg'} sx={{position: 'static',marginBottom: '10px', marginRight: '15px'}} width={'24px'} height={'15px'}
onClick={() => {hasHistory ? window.history.back() : router.push('/')}} />
</Box>

                <Box
                    sx={{marginTop: '30px'}}
                >
      <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#F6931E',
                            height: '44px',
                            width: '170px',
                            borderRadius: '50px',
                            fontSize: '13px',
                            fontWeight: 500,
                            marginBottom: '35px',
                            marginRight: '20px',
				marginLeft: '22px'
                        }}
                        onClick={() => router.push('/app/add-business')}
                    >

<span  style={{color:'white',border:'2px solid white',  padding: '2px', borderRadius: '20px', marginRight: '10px', padding: '0px 2px 0px 2px', height: '17px'}}>
<FaPlus sx={{color:'white',border:'2px solid white',  padding: '2px', marginRight: '10px' }} />
</span><span> new company </span>
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
