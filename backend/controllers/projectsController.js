const Project = require('../models/Project')
const asyncHandler = require('express-async-handler')

const getAllProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find().lean()
    if (!projects) {
        return res.status(400).json({ message: 'Failed to find projects' })
    }
    res.json(projects)

})


const createNewProject = asyncHandler(async (req, res) => {
    const { title, summary, languages, tools, description, demo, github, resource} = req.body

    if (!title || !summary || !languages || !tools || !description) {
        return res.status(400).json({ message: 'Some fields are missing' })
    }

    const projectObject = { title, summary, languages, tools, description, demo, github, resource }
    const project = await Project.create(projectObject)

    if (project) {
        res.status(201).json({ message: 'New project created' })
    } else {
        res.status(400).json({ message: 'Failed to create new project' })
    }
})

const updateProject = asyncHandler(async (req, res) => {
    const { id, title, summary, languages, tools, description, demo, github, resource} = req.body

    if (!id || !title || !summary || !languages || !tools || !description) {
        return res.status(400).json({ message: 'Some fields are missing' })
    }

    const project = await Project.findById(id).exec()
    if (!project) {
        return res.status(400).json({ message: "Project not found" })
    }

    project.title = title
    project.summary = summary
    project.languages = languages
    project.tools = tools
    project.description = description
    project.demo = demo
    project.github = github
    project.resource = resource

    const updatedProject = await project.save()

    if (updatedProject) {
        res.json({ message: 'Project updated' })
    } else {
        res.status(400).json({ message: 'Failed to update new project' })
    }
})

const deleteProject = asyncHandler(async (req, res) => {
    const { id } = req.body
    if (!id) {
        return res.status(400).json({ message: 'ID is required' })
    }

    const project = await Project.findById(id).exec()
    if (!project) {
        return res.status(400).json({ message: 'Project not found' })
    }

    await project.deleteOne()
    res.status(200).json({ message: 'Project deleted' })

})

module.exports = { getAllProjects, createNewProject, updateProject, deleteProject }