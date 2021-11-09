import {extendType, intArg, nonNull, objectType, stringArg} from "nexus";
import prisma from "../../db/prisma";
import arg from "arg";
import cuid from "cuid";

const Business = objectType({
    name: 'Business',
    definition(t) {
        t.model.id()

        t.model.companyName()
        t.model.companyAddress()
        t.model.companyPhone()
        t.model.companyEmail()

        t.model.businessContactName()
        t.model.businessContactPosition()
        t.model.businessContactPhone()
        t.model.businessContactEmail()

        t.model.technicalContactName()
        t.model.technicalContactPosition()
        t.model.technicalContactPhone()
        t.model.technicalContactEmail()

        t.model.slug()
    }
})

const queries = extendType({
    type: "Query",
    definition: (t) => {
        t.field("business", {
            type: "Business",
            args: {
                slug: stringArg(),
            },
            // @ts-ignore
            resolve: async (_, {slug}, ctx) => {
                if (!ctx.user?.id) return null

                // @ts-ignore
                const business = await prisma.business.findUnique({
                    where: {
                        // @ts-ignore
                        slug: slug,
                    },
                });

                const currentUser = await prisma.user.findUnique({
                    where: {
                        id: ctx.user.id,
                    },
                });

                // @ts-ignore
                if (currentUser.consultancyFirmId != business.consultancyFirmId) return null

                return business
            },
        });
    },
});

const mutations = extendType({
    type: 'Mutation',
    definition: (t) => {
        t.nullable.field('addBusiness', {
            type: 'Business',
            args: {
                companyName: nonNull(stringArg()),
                companyAddress: nonNull(stringArg()),
                companyPhone: nonNull(intArg()),
                companyEmail: nonNull(stringArg()),

                businessContactName: nonNull(stringArg()),
                businessContactPosition: nonNull(stringArg()),
                businessContactPhone: nonNull(intArg()),
                businessContactEmail: nonNull(stringArg()),

                technicalContactName: nonNull(stringArg()),
                technicalContactPosition: nonNull(stringArg()),
                technicalContactPhone: nonNull(intArg()),
                technicalContactEmail: nonNull(stringArg()),
            },
            // @ts-ignore
            resolve: async (_, args, ctx) => {
                if (!ctx.user?.id) return null;

                const user = await prisma.user.findUnique({
                    where: {
                        id: ctx.user.id
                    }
                })

                return await prisma.business.create({
                    data: {
                        companyName: args.companyName,
                        companyAddress: args.companyAddress,
                        companyPhone: args.companyPhone,
                        companyEmail: args.companyEmail,

                        businessContactName: args.businessContactName,
                        businessContactPosition: args.businessContactPosition,
                        businessContactPhone: args.businessContactPhone,
                        businessContactEmail: args.businessContactEmail,

                        technicalContactName: args.technicalContactName,
                        technicalContactPosition: args.technicalContactPosition,
                        technicalContactPhone: args.technicalContactPhone,
                        technicalContactEmail: args.technicalContactEmail,

                        consultancyFirmId: user?.consultancyFirmId,
                        slug: cuid()
                    }
                })
            }
        })
    }
})

export default [Business, queries, mutations]