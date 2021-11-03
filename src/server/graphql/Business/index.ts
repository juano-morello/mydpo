import {extendType, objectType, stringArg} from "nexus";
import prisma from "../../db/prisma";
import arg from "arg";

const Business = objectType({
    name: 'Business',
    definition(t) {
        t.model.id()
        t.model.name()
        t.model.slug()
        t.model.applications()
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
            resolve: async (_, {slug}, ctx) => {
                if (!ctx.user?.id) return null

                const business = await prisma.business.findUnique({
                    where: {
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

export default [Business, queries]