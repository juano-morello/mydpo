import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import {useMutation} from "urql";
import {AddBusinessDocument} from "../../client/graphql/addBusiness.generated";
import {toast} from "react-hot-toast";
import { useRouter } from "next/router";

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
    })

    return (
        <div>
            <h1>New Company</h1>
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
                        <div>
                            <h1>Company Data</h1>
                            <label>Company name</label>
                            <Field name="companyName" type="text" />
                            {errors.companyName && touched.companyName ? (
                                <div>{errors.companyName}</div>
                            ) : null}
                            <label>Company address</label>
                            <Field name="companyAddress" type="text" />
                            {errors.companyAddress && touched.companyAddress ? (
                                <div>{errors.companyAddress}</div>
                            ) : null}
                            <label>Company phone</label>
                            <Field name="companyPhone" type="number" />
                            {errors.companyPhone && touched.companyPhone ? (
                                <div>{errors.companyPhone}</div>
                            ) : null}
                            <label>Company email</label>
                            <Field name="companyEmail" type="email" />
                            {errors.companyEmail && touched.companyEmail ? (
                                <div>{errors.companyEmail}</div>
                            ) : null}
                        </div>
                        <div>
                            <h1>Business Contact</h1>
                            <label>Business contact name</label>
                            <Field name="businessContactName" type="text" />
                            {errors.businessContactName && touched.businessContactName ? (
                                <div>{errors.businessContactName}</div>
                            ) : null}
                            <label>Business contact position</label>
                            <Field name="businessContactPosition" type="text" />
                            {errors.businessContactPosition && touched.businessContactPosition ? (
                                <div>{errors.businessContactPosition}</div>
                            ) : null}
                            <label>Business contact phone</label>
                            <Field name="businessContactPhone" type="number" />
                            {errors.businessContactPhone && touched.businessContactPhone ? (
                                <div>{errors.businessContactPhone}</div>
                            ) : null}
                            <label>Business contact email</label>
                            <Field name="businessContactEmail" type="email" />
                            {errors.businessContactEmail && touched.businessContactEmail ? (
                                <div>{errors.businessContactEmail}</div>
                            ) : null}
                        </div>
                        <div>
                            <h1>Technical Contact</h1>
                            <label>Technical contact name</label>
                            <Field name="technicalContactName" type="text" />
                            {errors.technicalContactName && touched.technicalContactName ? (
                                <div>{errors.technicalContactName}</div>
                            ) : null}
                            <label>Technical contact position</label>
                            <Field name="technicalContactPosition" type="text" />
                            {errors.technicalContactPosition && touched.technicalContactPosition ? (
                                <div>{errors.technicalContactPosition}</div>
                            ) : null}
                            <label>Technical contact phone</label>
                            <Field name="technicalContactPhone" type="number" />
                            {errors.technicalContactPhone && touched.technicalContactPhone ? (
                                <div>{errors.technicalContactPhone}</div>
                            ) : null}
                            <label>Technical contact email</label>
                            <Field name="technicalContactEmail" type="email" />
                            {errors.technicalContactEmail && touched.technicalContactEmail ? (
                                <div>{errors.technicalContactEmail}</div>
                            ) : null}
                        </div>
                        <button >Cancel</button>
                        <button type="submit">Save</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default addBusiness