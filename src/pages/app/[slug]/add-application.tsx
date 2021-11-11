import React from "react";
import {useRouter} from "next/router";
import * as Yup from "yup";
import {Field, Form, Formik} from "formik";
import {useMutation} from "urql";
import {AddApplicationDocument} from "../../../client/graphql/addApplication.generated";
import {toast} from "react-hot-toast";
import Layout from "../../../client/components/Layout";
import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    Chip,
    FormControl,
    FormControlLabel, FormGroup,
    FormLabel,
    Grid, InputLabel, MenuItem, Radio, RadioGroup, Select,
    TextField
} from "@mui/material";

const addApplication: React.FC = () => {
    const router = useRouter();
    const {slug} = router.query;

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
        <>
            <Layout>
                <Grid
                    sx={{
                        backgroundColor: '#FFFFFF'}}
                >
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
                                <Grid
                                    sx={{
                                        marginTop: '40px',
                                        marginBottom: '30px',
                                        display: 'grid',
                                        gap: 10,
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
                                        >New App</h1>
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
                                        marginTop: '40px',
                                        marginBottom: '30px',
                                    }}
                                >
                                    <Grid
                                        sx={{
                                            display: 'grid',
                                            gap: 10,
                                            gridTemplateColumns: 'repeat(2, 1fr)',
                                        }}
                                    >
                                        <TextField
                                            // @ts-ignore
                                            error={errors.applicationName && touched.applicationName}
                                            name={'applicationName'}
                                            type={'text'}
                                            label="Application name"
                                            helperText={errors.applicationName}
                                            variant="standard"
                                        />
                                        <Autocomplete
                                            multiple
                                            options={['GDPR', 'CCPA', 'Nevada Privacy Act', 'HIPAA', 'Swiss Data Protection Act']}
                                            getOptionLabel={(option) => option.toString()}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    variant="standard"
                                                    label="Applicable Regulations"
                                                />
                                            )}

                                        />
                                    </Grid>

                                    <Grid
                                        sx={{
                                            display: 'grid',
                                            gap: 10,
                                            gridTemplateColumns: 'repeat(2, 1fr)',
                                            marginBottom: '20px',
                                        }}>
                                        <TextField
                                            // @ts-ignore
                                            error={errors.description && touched.description}
                                            name={'description'}
                                            type={'text'}
                                            label="Description"
                                            helperText={errors.description}
                                            variant="standard"
                                        />

                                        <Autocomplete
                                            multiple
                                            id="tags-standard"
                                            options={[1, 2, 3]}
                                            getOptionLabel={(option) => option.toString()}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    variant="standard"
                                                    label="Modules or Subservices"
                                                />
                                            )}
                                        />
                                    </Grid>

                                    <Grid
                                        sx={{
                                        display: 'grid',
                                        gap: 10,
                                        gridTemplateColumns: 'repeat(3, 1fr)',
                                        marginBottom: '20px',
                                    }}>
                                        <Box>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Service or Application</FormLabel>
                                                <RadioGroup row name="applicationType">
                                                    <FormControlLabel name={'applicationType'} value={'service'} control={<Radio />} label="Service" />
                                                    <FormControlLabel name={'applicationType'} value={'application'} control={<Radio />} label="Application" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Box>
                                        <Box>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Cloud or On Premise</FormLabel>
                                                <RadioGroup row name="applicationHostingType">
                                                    <FormControlLabel name={'applicationHostingType'} value={'cloud'} control={<Radio />} label="Cloud" />
                                                    <FormControlLabel name={'applicationHostingType'} value={'onpremise'} control={<Radio />} label="On Premise" />
                                                    <FormControlLabel name={'applicationHostingType'} value={'colocation'} control={<Radio />} label="Co-Location" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Box>
                                        <Box>
                                            <FormControl fullWidth>
                                                <InputLabel>Type of Hosting</InputLabel>
                                                <Select
                                                    // value={applicationHostingManagement}
                                                    label="Type of Hosting"
                                                    name={'applicationHostingManagement'}
                                                    // onChange={handleChange}
                                                >
                                                    <MenuItem value={'self'}>Self Hosted</MenuItem>
                                                    <MenuItem value={'managed'}>Managed Hosting</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Grid>

                                    <Grid
                                        sx={{
                                            display: 'grid',
                                            gap: 10,
                                            gridTemplateColumns: 'repeat(3, 1fr)',
                                            marginBottom: '20px',
                                        }}
                                    >
                                        <TextField
                                            // @ts-ignore
                                            error={errors.applicationHostingEntity && touched.applicationHostingEntity}
                                            name={'applicationHostingEntity'}
                                            type={'text'}
                                            label="Hosting Entity"
                                            helperText={errors.applicationHostingEntity}
                                            variant="standard"
                                        />
                                        <TextField
                                            // @ts-ignore
                                            error={errors.applicationOwner && touched.applicationOwner}
                                            name={'applicationOwner'}
                                            type={'text'}
                                            label="Application Owner"
                                            helperText={errors.applicationOwner}
                                            variant="standard"
                                        />
                                        <TextField
                                            // @ts-ignore
                                            error={errors.technologyOwner && touched.technologyOwner}
                                            name={'technologyOwner'}
                                            type={'text'}
                                            label="Technology Owner"
                                            helperText={errors.technologyOwner}
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid
                                        sx={{
                                            display: 'grid',
                                            gap: 10,
                                            gridTemplateColumns: 'repeat(3, 1fr)',
                                            marginBottom: '20px',
                                        }}
                                    >
                                        <Box>
                                            <FormControl fullWidth>
                                                <InputLabel>DR Region Stored</InputLabel>
                                                <Select
                                                    // value={applicationHostingManagement}
                                                    label="Region Stored"
                                                    name={'applicationRegionStored'}
                                                    // onChange={handleChange}
                                                >
                                                    <MenuItem value={'eastus'}>East US</MenuItem>
                                                    <MenuItem value={'centus'}>Central US</MenuItem>
                                                    <MenuItem value={'westus'}>West US</MenuItem>
                                                    <MenuItem value={'africa'}>Africa</MenuItem>
                                                    <MenuItem value={'asia'}>Asia</MenuItem>
                                                    <MenuItem value={'canada'}>Canada</MenuItem>
                                                    <MenuItem value={'europe'}>Europe</MenuItem>
                                                    <MenuItem value={'mideast'}>Middle East</MenuItem>
                                                    <MenuItem value={'southam'}>South America</MenuItem>
                                                    <MenuItem value={'govcloud'}>Government Cloud</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                        <Box>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">DR Hosting</FormLabel>
                                                <RadioGroup row name="hasDRHosting">
                                                    <FormControlLabel name={'hasDRHosting'} value={'true'} control={<Radio />} label="Yes" />
                                                    <FormControlLabel name={'hasDRHosting'} value={'false'} control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Box>
                                        <Box>
                                            <FormControl fullWidth>
                                                <InputLabel>DR Region Stored</InputLabel>
                                                <Select
                                                    // value={applicationHostingManagement}
                                                    label="Region Stored"
                                                    name={'applicationDRRegionStored'}
                                                    // onChange={handleChange}
                                                >
                                                    <MenuItem value={'eastus'}>East US</MenuItem>
                                                    <MenuItem value={'centus'}>Central US</MenuItem>
                                                    <MenuItem value={'westus'}>West US</MenuItem>
                                                    <MenuItem value={'africa'}>Africa</MenuItem>
                                                    <MenuItem value={'asia'}>Asia</MenuItem>
                                                    <MenuItem value={'canada'}>Canada</MenuItem>
                                                    <MenuItem value={'europe'}>Europe</MenuItem>
                                                    <MenuItem value={'mideast'}>Middle East</MenuItem>
                                                    <MenuItem value={'southam'}>South America</MenuItem>
                                                    <MenuItem value={'govcloud'}>Government Cloud</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Grid>
                                </Grid>

                                <Grid
                                    sx={{
                                        marginTop: '40px',
                                        marginBottom: '30px',
                                        backgroundColor: '#FFFFFF'
                                    }}
                                >
                                    <h2>Type of Data Stored</h2>
                                    <Grid
                                    sx={{
                                        display: 'grid',
                                        gap: 10,
                                        gridTemplateColumns: 'repeat(3, 1fr)',
                                    }}
                                    >
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasNameAndInitials'} control={<Checkbox name={'storedDataTypes'} value={'hasNameAndInitials'} />} label="Names and Initials in any combination" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasIdNumbers'} control={<Checkbox name={'storedDataTypes'} value={'hasIdNumbers'} />} label="Identification Numbers (e.g., Social Security Number)" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasBirthdate'} control={<Checkbox name={'storedDataTypes'} value={'hasBirthdate'} />} label="Birthdate" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasAge'} control={<Checkbox name={'storedDataTypes'} value={'hasAge'} />} label="Age" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasGender'} control={<Checkbox name={'storedDataTypes'} value={'hasGender'} />} label="Gender" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasHomeAddress'} control={<Checkbox name={'storedDataTypes'} value={'hasHomeAddress'} />} label="Home Address" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasTelephoneNumber'} control={<Checkbox name={'storedDataTypes'} value={'hasTelephoneNumber'} />} label="Telephone Number" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasMobileNumber'} control={<Checkbox name={'storedDataTypes'} value={'hasMobileNumber'} />} label="Personal Cellular, Mobile or Wireless Number" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasEmailAddress'} control={<Checkbox name={'storedDataTypes'} value={'hasEmailAddress'} />} label="Personal E-mail Address" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasDriversLicenceNumber'} control={<Checkbox name={'storedDataTypes'} value={'hasDriversLicenceNumber'} />} label="Drivers' Licence Number" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasMedicalInfo'} control={<Checkbox name={'storedDataTypes'} value={'hasMedicalInfo'} />} label="Information on Medical or Health Conditions" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasFinancialInfo'} control={<Checkbox name={'storedDataTypes'} value={'hasFinancialInfo'} />} label="Financial Information (credit cards, billing info, account info)" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasHealthInfo'} control={<Checkbox name={'storedDataTypes'} value={'hasHealthInfo'} />} label="Health Information" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasStudentInfo'} control={<Checkbox name={'storedDataTypes'} value={'hasStudentInfo'} />} label="Student Information" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasMinorInfo'} control={<Checkbox name={'storedDataTypes'} value={'hasMinorInfo'} />} label="Minor/Youth Information" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasMaritalStatus'} control={<Checkbox name={'storedDataTypes'} value={'hasMaritalStatus'} />} label="Marital Status" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasNationality'} control={<Checkbox name={'storedDataTypes'} value={'hasNationality'} />} label="Nationality" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasSexualBehaviour'} control={<Checkbox name={'storedDataTypes'} value={'hasSexualBehaviour'} />} label="Sexual Behaviour or Sexual Preference" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasPhysicalCharacteristics'} control={<Checkbox name={'storedDataTypes'} value={'hasPhysicalCharacteristics'} />} label="Physical Characteristics" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasEthnicOrigin'} control={<Checkbox name={'storedDataTypes'} value={'hasEthnicOrigin'} />} label="Racial or Ethnic Origin" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasReligiousPhilosophicalPoliticalBeliefs'} control={<Checkbox name={'storedDataTypes'} value={'hasReligiousPhilosophicalPoliticalBeliefs'} />} label="Religious, Philosophical or Political Beliefs" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasTradeUnionMembership'} control={<Checkbox name={'storedDataTypes'} value={'hasTradeUnionMembership'} />} label="Trade Union Membership" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasBiometricData'} control={<Checkbox name={'storedDataTypes'} value={'hasBiometricData'} />} label="Biometric Data" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasHouseholdInfo'} control={<Checkbox name={'storedDataTypes'} value={'hasHouseholdInfo'} />} label="Household Information" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasBillingHistory'} control={<Checkbox name={'storedDataTypes'} value={'hasBillingHistory'} />} label="Consumer Purchase or Billing History" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasUniqueDeviceId'} control={<Checkbox name={'storedDataTypes'} value={'hasUniqueDeviceId'} />} label="Unique Device Identifiers (IP/MAC addresses)" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasLocation'} control={<Checkbox name={'storedDataTypes'} value={'hasLocation'} />} label="Location (e.g., GPS)" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasCriminalInfo'} control={<Checkbox name={'storedDataTypes'} value={'hasCriminalInfo'} />} label="Criminal Information" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasCivilJusticeInfo'} control={<Checkbox name={'storedDataTypes'} value={'hasCivilJusticeInfo'} />} label="Civil Justice Information" />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel name={'storedDataTypes'} value={'hasSocialMedia'} control={<Checkbox name={'storedDataTypes'} value={'hasSocialMedia'} />} label="Social Media" />
                                        </FormGroup>
                                    </Grid>
                                    <div>

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
                                </Grid>




                                <button type="submit">Save</button>
                            </Form>
                        )}

                    </Formik>
                </Grid>
            </Layout>

        </>
    )
}

export default addApplication