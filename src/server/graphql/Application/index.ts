import {booleanArg, extendType, list, nonNull, objectType, stringArg} from "nexus";
import prisma from "../../db/prisma";

const Application = objectType({
    name: 'Application',
    definition(t) {
        t.model.id()
        t.model.applicationName()
        t.model.applicableRegulations()
        t.model.description()
        t.model.applicationHostingType()
        t.model.applicationHostingManagement()
        t.model.applicationHostingEntity()
        t.model.applicationOwner()
        t.model.technologyOwner()
        t.model.applicationRegionStored()
        t.model.hasDRHosting()
        t.model.applicationDRRegionStored()
        t.model.modules()
        t.model.applicationType()
        t.model.businessId()
        t.model.hasNameAndInitials()
        t.model.hasIdNumbers()
        t.model.hasBirthdate()
        t.model.hasAge()
        t.model.hasGender()
        t.model.hasHomeAddress()
        t.model.hasTelephoneNumber()
        t.model.hasMobileNumber()
        t.model.hasEmailAddress()
        t.model.hasDriversLicenceNumber()
        t.model.hasMedicalInfo()
        t.model.hasFinancialInfo()
        t.model.hasHealthInfo()
        t.model.hasStudentInfo()
        t.model.hasMinorInfo()
        t.model.hasMaritalStatus()
        t.model.hasNationality()
        t.model.hasSexualBehaviour()
        t.model.hasPhysicalCharacteristics()
        t.model.hasEthnicOrigin()
        t.model.hasReligiousPhilosophicalPoliticalBeliefs()
        t.model.hasTradeUnionMembership()
        t.model.hasBiometricData()
        t.model.hasHouseholdInfo()
        t.model.hasBillingHistory()
        t.model.hasUniqueDeviceId()
        t.model.hasLocation()
        t.model.hasCriminalInfo()
        t.model.hasCivilJusticeInfo()
        t.model.hasSocialMedia()
        t.model.applicationLinkedTo()
        t.model.connectionType()
        t.model.encryptedDataTransfer()
        t.model.dataRetentionReq()
        t.model.comments()
        t.model.applicationId()
    }
})

const queries = extendType({
    type: 'Query',
    definition: (t) => {
        t.field('application', {
            type: 'Application',
            args: {
                id: stringArg()
            },
            // @ts-ignore
            resolve: async (_, {id}, ctx) => {
                if (!ctx.user?.id) return null
                return await prisma.application.findUnique({
                    where: {
                        // @ts-ignore
                        id: id
                    }
                })
            }
        })
    }
})

const mutations = extendType({
    type: 'Mutation',
    definition: (t) => {

        t.field('addApplication', {
            type: 'Application',
            args: {
                applicationName: nonNull(stringArg()),
                applicableRegulations: list(stringArg()),
                description: nonNull(stringArg()),
                applicationHostingType: nonNull(stringArg()),
                applicationHostingManagement: nonNull(stringArg()),
                applicationHostingEntity: nonNull(stringArg()),
                applicationOwner: nonNull(stringArg()),
                technologyOwner: nonNull(stringArg()),
                applicationRegionStored: nonNull(stringArg()),
                hasDRHosting: nonNull(booleanArg()),
                applicationDRRegionStored: nonNull(stringArg()),
                modules: list(stringArg()),
                applicationType: nonNull(stringArg()),
                businessId: nonNull(stringArg()),
                hasNameAndInitials: nonNull(booleanArg()),
                hasIdNumbers: nonNull(booleanArg()),
                hasBirthdate: nonNull(booleanArg()),
                hasAge: nonNull(booleanArg()),
                hasGender: nonNull(booleanArg()),
                hasHomeAddress: nonNull(booleanArg()),
                hasTelephoneNumber: nonNull(booleanArg()),
                hasMobileNumber: nonNull(booleanArg()),
                hasEmailAddress: nonNull(booleanArg()),
                hasDriversLicenceNumber: nonNull(booleanArg()),
                hasMedicalInfo: nonNull(booleanArg()),
                hasFinancialInfo: nonNull(booleanArg()),
                hasHealthInfo: nonNull(booleanArg()),
                hasStudentInfo: nonNull(booleanArg()),
                hasMinorInfo: nonNull(booleanArg()),
                hasMaritalStatus: nonNull(booleanArg()),
                hasNationality: nonNull(booleanArg()),
                hasSexualBehaviour: nonNull(booleanArg()),
                hasPhysicalCharacteristics: nonNull(booleanArg()),
                hasEthnicOrigin: nonNull(booleanArg()),
                hasReligiousPhilosophicalPoliticalBeliefs: nonNull(booleanArg()),
                hasTradeUnionMembership: nonNull(booleanArg()),
                hasBiometricData: nonNull(booleanArg()),
                hasHouseholdInfo: nonNull(booleanArg()),
                hasBillingHistory: nonNull(booleanArg()),
                hasUniqueDeviceId: nonNull(booleanArg()),
                hasLocation: nonNull(booleanArg()),
                hasCriminalInfo: nonNull(booleanArg()),
                hasCivilJusticeInfo: nonNull(booleanArg()),
                hasSocialMedia: nonNull(booleanArg()),
                connectionType: nonNull(stringArg()),
                encryptedDataTransfer: nonNull(booleanArg()),
                dataRetentionReq: nonNull(stringArg()),
                comments: nonNull(stringArg()),
                applicationId: nonNull(stringArg()),
            },
            // @ts-ignore
            resolve: async (_, args, ctx) => {
                if (!ctx.user?.id) return null;

                return await prisma.application.create({
                    data: {
                        applicationName: args.applicationName,
                        // @ts-ignore
                        applicableRegulations: args.applicableRegulations,
                        description: args.description,
                        applicationHostingType: args.applicationHostingType,
                        applicationHostingManagement: args.applicationHostingManagement,
                        applicationHostingEntity: args.applicationHostingEntity,
                        applicationOwner: args.applicationOwner,
                        technologyOwner: args.technologyOwner,
                        applicationRegionStored: args.applicationRegionStored,
                        hasDRHosting: args.hasDRHosting,
                        applicationDRRegionStored: args.applicationDRRegionStored,
                        // @ts-ignore
                        modules: args.modules,
                        applicationType: args.applicationType,
                        // @ts-ignore
                        businessId: args.businessId,
                        hasNameAndInitials: args.hasNameAndInitials,
                        hasIdNumbers: args.hasIdNumbers,
                        hasBirthdate: args.hasBirthdate,
                        hasAge: args.hasAge,
                        hasGender: args.hasGender,
                        hasHomeAddress: args.hasHomeAddress,
                        hasTelephoneNumber: args.hasTelephoneNumber,
                        hasMobileNumber: args.hasMobileNumber,
                        hasEmailAddress: args.hasEmailAddress,
                        hasDriversLicenceNumber: args.hasDriversLicenceNumber,
                        hasMedicalInfo: args.hasMedicalInfo,
                        hasFinancialInfo: args.hasFinancialInfo,
                        hasHealthInfo: args.hasHealthInfo,
                        hasStudentInfo: args.hasStudentInfo,
                        hasMinorInfo: args.hasMinorInfo,
                        hasMaritalStatus: args.hasMaritalStatus,
                        hasNationality: args.hasNationality,
                        hasSexualBehaviour: args.hasSexualBehaviour,
                        hasPhysicalCharacteristics: args.hasPhysicalCharacteristics,
                        hasEthnicOrigin: args.hasEthnicOrigin,
                        hasReligiousPhilosophicalPoliticalBeliefs: args.hasReligiousPhilosophicalPoliticalBeliefs,
                        hasTradeUnionMembership: args.hasTradeUnionMembership,
                        hasBiometricData: args.hasBiometricData,
                        hasHouseholdInfo: args.hasHouseholdInfo,
                        hasBillingHistory: args.hasBillingHistory,
                        hasUniqueDeviceId: args.hasUniqueDeviceId,
                        hasLocation: args.hasLocation,
                        hasCriminalInfo: args.hasCriminalInfo,
                        hasCivilJusticeInfo: args.hasCivilJusticeInfo,
                        hasSocialMedia: args.hasSocialMedia,
                        connectionType: args.connectionType,
                        encryptedDataTransfer: args.encryptedDataTransfer,
                        dataRetentionReq: args.dataRetentionReq,
                        comments: args.comments,
                        applicationId: args.applicationId,
                    }
                })
            }
        })
    }
})

export default [Application, queries, mutations]