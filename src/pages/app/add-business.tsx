import React from "react";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {useMutation} from "urql";
import {AddBusinessDocument} from "../../client/graphql/addBusiness.generated";
import {toast} from "react-hot-toast";
import {useRouter} from "next/router";
import Layout from "../../client/components/Layout";
import {Box, Button, Container, Grid, TextField} from "@mui/material";

const addBusiness: React.FC = () => {
    const [, addBusiness] = useMutation(AddBusinessDocument)
    const router = useRouter();

    const validationSchema = Yup.object().shape({
        companyName: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),
        companyAddress: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),
        companyPhone: Yup.number()
            .min(2, 'Too short!')
            .required('Required!'),
        companyEmail: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),

        businessContactName: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),
        businessContactPosition: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),
        businessContactPhone: Yup.number()
            .min(2, 'Too short!')
            .required('Required!'),
        businessContactEmail: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),

        technicalContactName: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),
        technicalContactPosition: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),
        technicalContactPhone: Yup.number()
            .min(2, 'Too short!')
            .required('Required!'),
        technicalContactEmail: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),

        privacyLiaisonContactName: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),
        privacyLiaisonContactPosition: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),
        privacyLiaisonContactPhone: Yup.number()
            .min(2, 'Too short!')
            .required('Required!'),
        privacyLiaisonContactEmail: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),

        hrContactName: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),
        hrContactPosition: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),
        hrContactPhone: Yup.number()
            .min(2, 'Too short!')
            .required('Required!'),
        hrContactEmail: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),
    })

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
                            gap: 10,
                            gridTemplateColumns: 'repeat(3, 1fr)',}}
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
                            <h1
                                style={{marginLeft: '20px'}}
                            >New Company</h1>
                        </Box>
                        <Button
                            variant={'contained'}
                            color={'error'}
                            sx={{
                                width: '149px',
                                height: '44px',
                                borderRadius: '50px',
                            }}
                            onClick={() => router.push('/app')}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant={'contained'}
                            color={'success'}
                            type={'submit'}
                            sx={{
                                width: '149px',
                                height: '44px',
                                borderRadius: '50px',
                            }}
                        >
                            Save
                        </Button>
                    </Grid>
                    <Formik
                        initialValues={{
                            companyName: '',
                            companyAddress: '',
                            companyPhone: '',
                            companyEmail: '',

                            businessContactName: '',
                            businessContactPosition: '',
                            businessContactPhone: '',
                            businessContactEmail: '',

                            technicalContactName: '',
                            technicalContactPosition: '',
                            technicalContactPhone: '',
                            technicalContactEmail: '',

                            privacyLiaisonContactName: '',
                            privacyLiaisonContactPosition: '',
                            privacyLiaisonContactPhone: '',
                            privacyLiaisonContactEmail: '',

                            hrContactName: '',
                            hrContactPosition: '',
                            hrContactPhone: '',
                            hrContactEmail: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={async (values) => {
                            await addBusiness(values)
                            toast.success('Business created successfully!')
                            await router.push('/app')
                        }}
                    >
                        {({errors, touched}) => (
                            <Form>
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
                                            <h2>Company Data</h2>
                                        </Box>
                                        <Grid
                                            sx={{marginTop: '70px',display: 'grid',
                                                gap: 10,
                                                gridTemplateColumns: 'repeat(2, 1fr)',}}
                                        >
                                            <TextField
                                                // @ts-ignore
                                                error={errors.companyName && touched.companyName}
                                                name={'companyName'}
                                                type={'text'}
                                                label="Company name"
                                                helperText={errors.companyName}
                                                variant="standard"
                                            />
                                            <TextField
                                                // @ts-ignore
                                                error={errors.companyAddress && touched.companyAddress}
                                                Address={'companyAddress'}
                                                type={'text'}
                                                label="Company address"
                                                helperText={errors.companyAddress}
                                                variant="standard"
                                            />
                                            <TextField
                                                // @ts-ignore
                                                error={errors.companyPhone && touched.companyPhone}
                                                Phone={'companyPhone'}
                                                type={'number'}
                                                label="Company phone"
                                                helperText={errors.companyPhone}
                                                variant="standard"
                                            />
                                            <TextField
                                                // @ts-ignore
                                                error={errors.companyEmail && touched.companyEmail}
                                                Email={'companyEmail'}
                                                type={'email'}
                                                label="Company email"
                                                helperText={errors.companyEmail}
                                                variant="standard"
                                            />
                                        </Grid>
                                    </Grid>
                                <Grid
                                    sx={{marginTop: '25px',display: 'grid',
                                        gap: 10,
                                        gridTemplateColumns: 'repeat(2, 1fr)',}}
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
                                            // @ts-ignore
                                            error={errors.businessContactName && touched.businessContactName}
                                            name={'businessContactName'}
                                            type={'text'}
                                            label="Business contact name"
                                            helperText={errors.businessContactName}
                                            variant="standard"
                                        />
                                        <TextField
                                            // @ts-ignore
                                            error={errors.businessContactPosition && touched.businessContactPosition}
                                            name={'businessContactPosition'}
                                            type={'text'}
                                            label="Business contact position"
                                            helperText={errors.businessContactPosition}
                                            variant="standard"
                                        />
                                        <TextField
                                            // @ts-ignore
                                            error={errors.businessContactPhone && touched.businessContactPhone}
                                            name={'businessContactPhone'}
                                            type={'number'}
                                            label="Business contact phone"
                                            helperText={errors.businessContactPhone}
                                            variant="standard"
                                        />
                                        <TextField
                                            // @ts-ignore
                                            error={errors.businessContactEmail && touched.businessContactEmail}
                                            name={'businessContactEmail'}
                                            type={'email'}
                                            label="Business contact email"
                                            helperText={errors.businessContactEmail}
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
                                            // @ts-ignore
                                            error={errors.technicalContactName && touched.technicalContactName}
                                            name={'technicalContactName'}
                                            type={'text'}
                                            label="Technical contact name"
                                            helperText={errors.technicalContactName}
                                            variant="standard"
                                        />
                                        <TextField
                                            // @ts-ignore
                                            error={errors.technicalContactPosition && touched.technicalContactPosition}
                                            name={'technicalContactPosition'}
                                            type={'text'}
                                            label="Technical contact position"
                                            helperText={errors.technicalContactPosition}
                                            variant="standard"
                                        />
                                        <TextField
                                            // @ts-ignore
                                            error={errors.technicalContactPhone && touched.technicalContactPhone}
                                            name={'technicalContactPhone'}
                                            type={'number'}
                                            label="Technical contact phone"
                                            helperText={errors.technicalContactPhone}
                                            variant="standard"
                                        />
                                        <TextField
                                            // @ts-ignore
                                            error={errors.technicalContactEmail && touched.technicalContactEmail}
                                            name={'technicalContactEmail'}
                                            type={'email'}
                                            label="Technical contact email"
                                            helperText={errors.technicalContactEmail}
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
                                            // @ts-ignore
                                            error={errors.privacyLiaisonContactName && touched.privacyLiaisonContactName}
                                            name={'privacyLiaisonContactName'}
                                            type={'text'}
                                            label="Privacy Liaison contact name"
                                            helperText={errors.privacyLiaisonContactName}
                                            variant="standard"
                                        />
                                        <TextField
                                            // @ts-ignore
                                            error={errors.privacyLiaisonContactPosition && touched.privacyLiaisonContactPosition}
                                            name={'privacyLiaisonContactPosition'}
                                            type={'text'}
                                            label="Privacy Liaison contact position"
                                            helperText={errors.privacyLiaisonContactPosition}
                                            variant="standard"
                                        />
                                        <TextField
                                            // @ts-ignore
                                            error={errors.privacyLiaisonContactPhone && touched.privacyLiaisonContactPhone}
                                            name={'privacyLiaisonContactPhone'}
                                            type={'number'}
                                            label="Privacy Liaison contact phone"
                                            helperText={errors.privacyLiaisonContactPhone}
                                            variant="standard"
                                        />
                                        <TextField
                                            // @ts-ignore
                                            error={errors.privacyLiaisonContactEmail && touched.privacyLiaisonContactEmail}
                                            name={'privacyLiaisonContactEmail'}
                                            type={'email'}
                                            label="Privacy Liaison contact email"
                                            helperText={errors.privacyLiaisonContactEmail}
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
                                            // @ts-ignore
                                            error={errors.hrContactName && touched.hrContactName}
                                            name={'hrContactName'}
                                            type={'text'}
                                            label="Human Resources contact name"
                                            helperText={errors.hrContactName}
                                            variant="standard"
                                        />
                                        <TextField
                                            // @ts-ignore
                                            error={errors.hrContactPosition && touched.hrContactPosition}
                                            name={'hrContactPosition'}
                                            type={'text'}
                                            label="Human Resources contact position"
                                            helperText={errors.hrContactPosition}
                                            variant="standard"
                                        />
                                        <TextField
                                            // @ts-ignore
                                            error={errors.hrContactPhone && touched.hrContactPhone}
                                            name={'hrContactPhone'}
                                            type={'number'}
                                            label="Human Resources contact phone"
                                            helperText={errors.hrContactPhone}
                                            variant="standard"
                                        />
                                        <TextField
                                            // @ts-ignore
                                            error={errors.hrContactEmail && touched.hrContactEmail}
                                            name={'hrContactEmail'}
                                            type={'email'}
                                            label="Human Resources contact email"
                                            helperText={errors.hrContactEmail}
                                            variant="standard"
                                        />
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Layout>
        </>
    )
}

export default addBusiness