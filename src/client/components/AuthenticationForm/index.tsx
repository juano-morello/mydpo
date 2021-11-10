import {useRouter} from "next/router";
import {useState} from "react";
import {Box, Button, Grid, TextField} from "@mui/material";

/**
 * Used on the Login and Sign Up screens to handle authentication. Can be shared between those as Passport.js doesn't differentiate between logging in and signing up.
 */
export default function AuthenticationForm() {
    const [email, setEmail] = useState("");
    const router = useRouter();
    const {r} = router.query;
    const redirect = r?.toString();

    return (
        <form
            onSubmit={(evt) => {
                evt.preventDefault();
                // POST a request with the users email or phone number to the server
                fetch(`/api/auth/magiclink`, {
                    method: `POST`,
                    body: JSON.stringify({
                        redirect,
                        destination: email,
                    }),
                    headers: {"Content-Type": "application/json"},
                })
                    .then((res) => res.json())
                    .then((json) => {
                        if (json.success) {
                            // Add the email and security code to the query params so we can show them on the /check-mailbox page
                            router.push(
                                `/check-mailbox?e=${encodeURIComponent(email)}&c=${json.code}`
                            );
                        }
                    });
            }}
        >
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <TextField
                        type={'email'}
                        label="Email Address"
                        variant="standard"
                        style={{width: '394px'}}
                        value={email}
                        onChange={(evt) => setEmail(evt.target.value)}
                    />
                    <br />
                    <Button
                        style={{
                            backgroundColor: '#F6931E',
                            height: '42px',
                            width: '394px',
                            borderRadius: '50px',
                            marginTop: '30px',
                        }}
                        variant="contained"
                        type={'submit'}
                    >
                        Sign in
                    </Button>
                    <Box sx={{ textAlign: 'center', marginTop: '150px'}}>Privacy policy & Terms and conditions</Box>
                </Grid>
            </Grid>
        </form>
    );
}
