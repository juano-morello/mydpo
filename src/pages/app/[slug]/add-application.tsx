import React, {useState} from "react";
import { useRouter } from "next/router";
import * as Yup from "yup";
import {Field, Form, Formik} from "formik";
import {useMutation} from "urql";
import {AddApplicationDocument} from "../../../client/graphql/addApplication.generated";
import {toast} from "react-hot-toast";

const addApplication: React.FC = () => {
    const router = useRouter();
    const { slug } = router.query;

    const [, addApplication] = useMutation(AddApplicationDocument)

    const validationSchema = Yup.object().shape({
        applicationName: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),
        description: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),
        applicationHostingEntity: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),
        applicationOwner: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),
        technologyOwner: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .required('Required!'),
        comments: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
    })

    return (
        <div>
            <h1>New Application</h1>
            <Formik
                initialValues={{
                    applicationName: '',
                    applicableRegulations: [],
                    description: '',
                    applicationHostingType: 'self',
                    applicationHostingManagement: '',
                    applicationHostingEntity: '',
                    applicationOwner: '',
                    technologyOwner: '',
                    applicationRegionStored: 'SA',
                    hasDRHosting: false,
                    applicationDRRegionStored: 'SA',
                    modules: [],
                    applicationType: '',
                    businessId: '',

                    storedDataTypes: [],
                    connectionType: 'filetransfer',
                    encryptedDataTransfer: '',
                    dataRetentionReq: '1 year',
                    comments: '',
                    applicationId: 'TEST',
                }}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    // @ts-ignore
                    const data = {
                        applicationName: values.applicationName,
                        applicableRegulations: values.applicableRegulations,
                        description: values.description,
                        applicationHostingType: values.applicationHostingType,
                        applicationHostingManagement: values.applicationHostingManagement,
                        applicationHostingEntity: values.applicationHostingEntity,
                        applicationOwner: values.applicationOwner,
                        technologyOwner: values.technologyOwner,
                        applicationRegionStored: values.applicationRegionStored,
                        // @ts-ignore
                        hasDRHosting: JSON.parse(values.hasDRHosting),
                        applicationDRRegionStored: values.applicationDRRegionStored,
                        modules: values.modules,
                        applicationType: values.applicationType,
                        businessId: slug,

                        hasNameAndInitials: values.storedDataTypes.filter(value => value == 'hasNameAndInitials').length > 0,
                        hasIdNumbers: values.storedDataTypes.filter(value => value == 'hasIdNumbers').length > 0,
                        hasBirthdate: values.storedDataTypes.filter(value => value == 'hasBirthdate').length > 0,
                        hasAge: values.storedDataTypes.filter(value => value == 'hasAge').length > 0,
                        hasGender: values.storedDataTypes.filter(value => value == 'hasGender').length > 0,
                        hasHomeAddress: values.storedDataTypes.filter(value => value == 'hasHomeAddress').length > 0,
                        hasTelephoneNumber: values.storedDataTypes.filter(value => value == 'hasTelephoneNumber').length > 0,
                        hasMobileNumber: values.storedDataTypes.filter(value => value == 'hasMobileNumber').length > 0,
                        hasEmailAddress: values.storedDataTypes.filter(value => value == 'hasEmailAddress').length > 0,
                        hasDriversLicenceNumber: values.storedDataTypes.filter(value => value == 'hasDriversLicenceNumber').length > 0,
                        hasMedicalInfo: values.storedDataTypes.filter(value => value == 'hasMedicalInfo').length > 0,
                        hasFinancialInfo: values.storedDataTypes.filter(value => value == 'hasFinancialInfo').length > 0,
                        hasHealthInfo: values.storedDataTypes.filter(value => value == 'hasHealthInfo').length > 0,
                        hasStudentInfo: values.storedDataTypes.filter(value => value == 'hasStudentInfo').length > 0,
                        hasMinorInfo: values.storedDataTypes.filter(value => value == 'hasMinorInfo').length > 0,
                        hasMaritalStatus: values.storedDataTypes.filter(value => value == 'hasMaritalStatus').length > 0,
                        hasNationality: values.storedDataTypes.filter(value => value == 'hasNationality').length > 0,
                        hasSexualBehaviour: values.storedDataTypes.filter(value => value == 'hasSexualBehaviour').length > 0,
                        hasPhysicalCharacteristics: values.storedDataTypes.filter(value => value == 'hasPhysicalCharacteristics').length > 0,
                        hasEthnicOrigin: values.storedDataTypes.filter(value => value == 'hasEthnicOrigin').length > 0,
                        hasReligiousPhilosophicalPoliticalBeliefs: values.storedDataTypes.filter(value => value == 'hasReligiousPhilosophicalPoliticalBeliefs').length > 0,
                        hasTradeUnionMembership: values.storedDataTypes.filter(value => value == 'hasTradeUnionMembership').length > 0,
                        hasBiometricData: values.storedDataTypes.filter(value => value == 'hasBiometricData').length > 0,
                        hasHouseholdInfo: values.storedDataTypes.filter(value => value == 'hasHouseholdInfo').length > 0,
                        hasBillingHistory: values.storedDataTypes.filter(value => value == 'hasBillingHistory').length > 0,
                        hasUniqueDeviceId: values.storedDataTypes.filter(value => value == 'hasUniqueDeviceId').length > 0,
                        hasLocation: values.storedDataTypes.filter(value => value == 'hasLocation').length > 0,
                        hasCriminalInfo: values.storedDataTypes.filter(value => value == 'hasCriminalInfo').length > 0,
                        hasCivilJusticeInfo: values.storedDataTypes.filter(value => value == 'hasCivilJusticeInfo').length > 0,
                        hasSocialMedia: values.storedDataTypes.filter(value => value == 'hasSocialMedia').length > 0,
                        connectionType: values.connectionType,
                        encryptedDataTransfer: JSON.parse(values.encryptedDataTransfer),
                        dataRetentionReq: values.dataRetentionReq,
                        comments: values.comments,
                        applicationId: values.applicationId,
                    }
                    console.log('DATA', data)
                    addApplication(data)
                        .then(_ => {
                        toast.success('Application added successfully!')
                        router.push(`/app/${slug}`)
                    }).catch(reason => console.log('ERROR', reason))

                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <div>
                            <label>Application Name</label>
                            <Field name="applicationName" type="text"/>
                            {errors.applicationName && touched.applicationName ? (
                                <div>{errors.applicationName}</div>
                            ) : null}
                            <br/>
                            <label>Applicable Regulations</label>
                            <div role="group" aria-labelledby="checkbox-group">
                                <label>
                                    <Field type="checkbox" name="applicableRegulations" value="One"/>
                                    One
                                </label>
                                <label>
                                    <Field type="checkbox" name="applicableRegulations" value="Two"/>
                                    Two
                                </label>
                                <label>
                                    <Field type="checkbox" name="applicableRegulations" value="Three"/>
                                    Three
                                </label>
                            </div>
                            <label>Description</label>
                            <Field name="description" type="text"/>
                            {errors.description && touched.description ? (
                                <div>{errors.description}</div>
                            ) : null}

                            <label>Modules or Subservices</label>
                            <div role="group" aria-labelledby="checkbox-group">
                                <label>
                                    <Field type="checkbox" name="modules" value="One"/>
                                    One
                                </label>
                                <label>
                                    <Field type="checkbox" name="modules" value="Two"/>
                                    Two
                                </label>
                                <label>
                                    <Field type="checkbox" name="modules" value="Three"/>
                                    Three
                                </label>
                            </div>
                            <label>Service or Application</label>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label>
                                    <Field type="radio" name="applicationType" value="One"/>
                                    One
                                </label>
                                <label>
                                    <Field type="radio" name="applicationType" value="Two"/>
                                    Two
                                </label>
                            </div>
                            <label>Cloud or On Premise</label>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label>
                                    <Field type="radio" name="applicationHostingType" value="One"/>
                                    One
                                </label>
                                <label>
                                    <Field type="radio" name="applicationHostingType" value="Two"/>
                                    Two
                                </label>
                            </div>
                            <label>
                                Type of Hosting
                            </label>
                            <Field as="select" name="applicationHostingManagement">
                                <option value="self" defaultChecked>Self Hosted</option>
                                <option value="managed" label="Managed">Managed Hosting</option>
                            </Field>
                            <label>Hosting Entity</label>
                            <Field name="applicationHostingEntity" type="text"/>
                            {errors.applicationHostingEntity && touched.applicationHostingEntity ? (
                                <div>{errors.applicationHostingEntity}</div>
                            ) : null}
                            <label>Application Owner</label>
                            <Field name="applicationOwner" type="text"/>
                            {errors.applicationOwner && touched.applicationOwner ? (
                                <div>{errors.applicationOwner}</div>
                            ) : null}
                            <label>Application Owner</label>
                            <Field name="technologyOwner" type="text"/>
                            {errors.technologyOwner && touched.technologyOwner ? (
                                <div>{errors.technologyOwner}</div>
                            ) : null}
                            <label>
                                Region Stored
                            </label>
                            <Field as="select" name="applicationRegionStored">
                                <option value="SA" defaultChecked>South America</option>
                                <option value="NA">North America</option>
                            </Field>
                            <label>DR hosting</label>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label>
                                    <Field type="radio" name="hasDRHosting" value="true"/>
                                    Yes
                                </label>
                                <label>
                                    <Field type="radio" name="hasDRHosting" value="false"/>
                                    No
                                </label>
                            </div>
                            <label>
                                Region Stored
                            </label>
                            <Field as="select" name="applicationDRRegionStored">
                                <option value="SA" defaultChecked>South America</option>
                                <option value="NA">North America</option>
                            </Field>
                        </div>
                        <div>
                            <h3>Type of Data Stored</h3>
                            <label>Name and Initials in any combination</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasNameAndInitials"/>
                            <label>Identification Numbers (e.g., Social Security Number)</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasIdNumbers"/>
                            <label>Birthdate</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasBirthdate"/>
                            <label>Age</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasAge"/>
                            <label>Gender</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasGender"/>
                            <label>Home Address</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasHomeAddress"/>
                            <label>Home Telephone Number</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasTelephoneNumber"/>
                            <label>Personal Cellular, Mobile or Wireless Number</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasMobileNumber"/>
                            <label>Personal E-mail Address</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasEmailAddress"/>
                            <label>Drivers' Licence Number</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasDriversLicenceNumber"/>
                            <label>Information on Medical or Health Conditions</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasMedicalInfo"/>
                            <label>Financial Information (credit cards, billing info, account info)</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasFinancialInfo"/>
                            <label>Health Information</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasHealthInfo"/>
                            <label>Student Information</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasStudentInfo"/>
                            <label>Minor/Youth Information</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasMinorInfo"/>
                            <label>Marital Status</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasMaritalStatus"/>
                            <label>Nationality</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasNationality"/>
                            <label>Sexual Behaviour or Sexual Preference</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasSexualBehaviour"/>
                            <label>Physical Characteristics</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasPhysicalCharacteristics"/>
                            <label>Racial or Ethnic Origin</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasEthnicOrigin"/>
                            <label>Religious, Philosophical or Political Beliefs</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasReligiousPhilosophicalPoliticalBeliefs"/>
                            <label>Trade Union Membership</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasTradeUnionMembership"/>
                            <label>Biometric Data</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasBiometricData"/>
                            <label>Household Information</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasHouseholdInfo"/>
                            <label>Consumer Purchase or Billing History</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasBillingHistory"/>
                            <label>Unique Devide Identifiers (IP/MAC addresses)</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasUniqueDeviceId"/>
                            <label>Location (e.g., GPS)</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasLocation"/>
                            <label>Criminal Information</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasCriminalInfo"/>
                            <label>Civil Justice Information</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasCivilJusticeInfo"/>
                            <label>Social Media</label>
                            <Field type="checkbox" name="storedDataTypes" value="hasSocialMedia"/>

                            <label>
                                Application is linked to
                            </label>
                            <Field as="select" name="applicationId">
                                <option value="test1" defaultChecked>Test1</option>
                                <option value="test2">Test2</option>
                                <option value="test3">Test3</option>
                            </Field>
                            <label>
                                Type of connection
                            </label>
                            <Field as="select" name="connectionType">
                                <option value="filetransfer" defaultChecked>File Transfer</option>
                                <option value="api">API</option>
                            </Field>
                            <label>Data transfer encrypted</label>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label>
                                    <Field type="radio" name="encryptedDataTransfer" value="true"/>
                                    Yes
                                </label>
                                <label>
                                    <Field type="radio" name="encryptedDataTransfer" value="false"/>
                                    No
                                </label>
                            </div>
                            <label>
                                Data Retention requirements
                            </label>
                            <Field as="select" name="dataRetentionReq">
                                <option value="1 year" defaultChecked>1 years</option>
                                <option value="3 years">3 years</option>
                                <option value="5 years">5 years</option>
                            </Field>
                            <label>Comments (optional)</label>
                            <Field name="comments" type="text"/>
                            {errors.comments && touched.comments ? (
                                <div>{errors.comments}</div>
                            ) : null}
                        </div>
                        <button type="submit">Save</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default addApplication