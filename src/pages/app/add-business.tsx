import React from "react";
import {Form, Formik, Field} from "formik";
import * as Yup from 'yup';
import {useMutation} from "urql";
import {AddBusinessDocument} from "../../client/graphql/addBusiness.generated";
import {toast} from "react-hot-toast";
import {useRouter} from "next/router";
import Layout from "../../client/components/Layout";
import {Box, Button, Grid} from "@mui/material";
import {TextField} from "formik-mui";

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
        companyPhone: Yup.string()
            .matches(/^[0-9]+$/, "maximum 20 digits")
            .min(5, 'Too short!')
            .max(20, 'Too long!')
            .required('Required!'),
        companyEmail: Yup.string()
            .required()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),

        businessContactName: Yup.string()
            .required()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),
        businessContactPosition: Yup.string()
            .required()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),
        businessContactPhone: Yup.string()
            .required()
            .matches(/^[0-9]+$/, "maximum 20 digits")
            .min(5, 'Too short!')
            .max(20, 'Too long!'),
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
        technicalContactPhone: Yup.string()
            .matches(/^[0-9]+$/, "maximum 20 digits")
            .min(5, 'Too short!')
            .max(20, 'Too long!')
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
        privacyLiaisonContactPhone: Yup.string()
            .matches(/^[0-9]+$/, "maximum 20 digits")
            .min(5, 'Too short!')
            .max(20, 'Too long!')
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
        hrContactPhone: Yup.string()
            .matches(/^[0-9]+$/, "maximum 20 digits")
            .min(5, 'Too short!')
            .max(20, 'Too long!')
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
                            console.log(values)
                            await addBusiness(values)
                            toast.success('Business created successfully!')
                            await router.push('/app')
                        }}
                    >
                        {({errors, touched}) => (
                            <Form>
                                <Grid
                                    sx={{
                                        marginTop: '40px',
                                        marginBottom: '30px',
                                        display: 'grid',
                                        gap: '10px',
                                        gridTemplateColumns: 'repeat(3, 1fr)',
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
                                        sx={{
                                            display: 'grid',
                                            gap: '10px',
                                            gridTemplateColumns: 'repeat(2, 1fr)',
                                        }}
                                    >
                                        <Field
                                            // @ts-ignore
                                            error={errors.companyName && touched.companyName}
                                            component={TextField}
                                            name={'companyName'}
                                            type={'text'}
                                            label="Name"
                                            helperText={errors.companyName}
                                            variant="standard"
                                        />
                                        <Field
                                            // @ts-ignore
                                            error={errors.companyAddress && touched.companyAddress}
                                            component={TextField}
                                            name={'companyAddress'}
                                            type={'text'}
                                            label="Address"
                                            helperText={errors.companyAddress}
                                            variant="standard"
                                        />
                                        <Field
                                            // @ts-ignore
                                            error={errors.companyPhone && touched.companyPhone}
                                            component={TextField}
                                            name={'companyPhone'}
                                            type={'text'}
                                            label="Phone"
                                            helperText={errors.companyPhone}
                                            variant="standard"
					    maxLength={10}
                                        />
                                        <Field
                                            // @ts-ignore
                                            error={errors.companyEmail && touched.companyEmail}
                                            component={TextField}
                                            name={'companyEmail'}
                                            type={'email'}
                                            label="Email"
                                            helperText={errors.companyEmail}
                                            variant="standard"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    sx={{
                                        marginTop: '40px', display: 'grid',
                                        gap: '10px',
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
                                            gap: '10px',
                                            gridTemplateColumns: 'repeat(1, 1fr)'
                                        }}
                                    >
                                        <Box>
                                            <h2>Business Contact</h2>
                                        </Box>
                                        <Field
                                            // @ts-ignore
                                            error={errors.businessContactName && touched.businessContactName}
                                            component={TextField}
                                            name={'businessContactName'}
                                            type={'text'}
                                            label="Name"
                                            helperText={errors.businessContactName}
                                            variant="standard"
                                        />
                                        <Field
                                            // @ts-ignore
                                            error={errors.businessContactPosition && touched.businessContactPosition}
                                            component={TextField}
                                            name={'businessContactPosition'}
                                            type={'text'}
                                            label="Position"
                                            helperText={errors.businessContactPosition}
                                            variant="standard"
                                        />
                                        <Field
                                            // @ts-ignore
                                            error={errors.businessContactPhone && touched.businessContactPhone}
                                            component={TextField}
                                            name={'businessContactPhone'}
                                            type={'text'}
                                            label="Phone"
                                            helperText={errors.businessContactPhone}
                                            variant="standard"
                                        />
                                        <Field
                                            // @ts-ignore
                                            error={errors.businessContactEmail && touched.businessContactEmail}
                                            component={TextField}
                                            name={'businessContactEmail'}
                                            type={'email'}
                                            label="Email"
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
                                            gap: '10px',
                                            gridTemplateColumns: 'repeat(1, 1fr)'
                                        }}
                                    >
                                        <Box>
                                            <h2>Technical Contact</h2>
                                        </Box>
                                        <Field
                                            // @ts-ignore
                                            error={errors.technicalContactName && touched.technicalContactName}
                                            component={TextField}
                                            name={'technicalContactName'}
                                            type={'text'}
                                            label="Name"
                                            helperText={errors.technicalContactName}
                                            variant="standard"
                                        />
                                        <Field
                                            // @ts-ignore
                                            error={errors.technicalContactPosition && touched.technicalContactPosition}
                                            component={TextField}
                                            name={'technicalContactPosition'}
                                            type={'text'}
                                            label="Position"
                                            helperText={errors.technicalContactPosition}
                                            variant="standard"
                                        />
                                        <Field
                                            // @ts-ignore
                                            error={errors.technicalContactPhone && touched.technicalContactPhone}
                                            component={TextField}
                                            name={'technicalContactPhone'}
                                            type={'text'}
                                            label="Phone"
                                            helperText={errors.technicalContactPhone}
                                            variant="standard"
                                        />
                                        <Field
                                            // @ts-ignore
                                            error={errors.technicalContactEmail && touched.technicalContactEmail}
                                            component={TextField}
                                            name={'technicalContactEmail'}
                                            type={'email'}
                                            label="Email"
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
                                            gap: '10px',
                                            gridTemplateColumns: 'repeat(1, 1fr)'
                                        }}
                                    >
                                        <Box>
                                            <h2>Privacy Liaison Contact</h2>
                                        </Box>
                                        <Field
                                            // @ts-ignore
                                            error={errors.privacyLiaisonContactName && touched.privacyLiaisonContactName}
                                            component={TextField}
                                            name={'privacyLiaisonContactName'}
                                            type={'text'}
                                            label="Name"
                                            helperText={errors.privacyLiaisonContactName}
                                            variant="standard"
                                        />
                                        <Field
                                            // @ts-ignore
                                            error={errors.privacyLiaisonContactPosition && touched.privacyLiaisonContactPosition}
                                            component={TextField}
                                            name={'privacyLiaisonContactPosition'}
                                            type={'text'}
                                            label="Position"
                                            helperText={errors.privacyLiaisonContactPosition}
                                            variant="standard"
                                        />
                                        <Field
                                            // @ts-ignore
                                            error={errors.privacyLiaisonContactPhone && touched.privacyLiaisonContactPhone}
                                            component={TextField}
                                            name={'privacyLiaisonContactPhone'}
                                            type={'text'}
                                            label="Phone"
                                            helperText={errors.privacyLiaisonContactPhone}
                                            variant="standard"
                                        />
                                        <Field
                                            // @ts-ignore
                                            error={errors.privacyLiaisonContactEmail && touched.privacyLiaisonContactEmail}
                                            component={TextField}
                                            name={'privacyLiaisonContactEmail'}
                                            type={'email'}
                                            label="Email"
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
                                            gap: '10px',
                                            gridTemplateColumns: 'repeat(1, 1fr)'
                                        }}
                                    >
                                        <Box>
                                            <h2>Human Resources Contact</h2>
                                        </Box>
                                        <Field
                                            // @ts-ignore
                                            error={errors.hrContactName && touched.hrContactName}
                                            component={TextField}
                                            name={'hrContactName'}
                                            type={'text'}
                                            label="Name"
                                            helperText={errors.hrContactName}
                                            variant="standard"
                                        />
                                        <Field
                                            // @ts-ignore
                                            error={errors.hrContactPosition && touched.hrContactPosition}
                                            component={TextField}
                                            name={'hrContactPosition'}
                                            type={'text'}
                                            label="Position"
                                            helperText={errors.hrContactPosition}
                                            variant="standard"
                                        />
                                        <Field
                                            // @ts-ignore
                                            error={errors.hrContactPhone && touched.hrContactPhone}
                                            component={TextField}
                                            name={'hrContactPhone'}
                                            type={'text'}
                                            label="Phone"
                                            helperText={errors.hrContactPhone}
                                            variant="standard"
                                        />
                                        <Field
                                            // @ts-ignore
                                            error={errors.hrContactEmail && touched.hrContactEmail}
                                            component={TextField}
                                            name={'hrContactEmail'}
                                            type={'email'}
                                            label="Email"
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
