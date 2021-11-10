import Navbar from "../Navbar";
import {Container, Grid} from "@mui/material";

interface Props {
    children: React.ReactNode;
}

export default function Layout({children}: Props) {
    return (
        <>
            <Navbar/>
            <Container>
                <Grid item xs={3}>
                    {children}
                </Grid>
            </Container>
            {/*<Navbar />*/}

            {/*<Footer />*/}
        </>
    );
}
