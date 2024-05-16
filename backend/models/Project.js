const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        summary: {
            type: String,
            required: true
        },
        languages: [{
            type: String
        }],
        tools: [{
            type: String
        }],
        description: [{
            type: String
        }],
        demo: String,
        github: String,
        resource: String
    }
)

module.exports = mongoose.model('Project', projectSchema)