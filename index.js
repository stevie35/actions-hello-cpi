const core = require("@actions/core")
const github = require("@actions/github")
try {
    console.log("Hello")
    console.log(github)
} catch (error) {
    core.setFailed(error.message)
}