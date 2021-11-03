import {objectType} from "nexus";

const Application = objectType({
    name: 'Application',
    definition(t) {
        t.model.id()
        t.model.name()
        t.model.modules()
    }
})

export default [Application]