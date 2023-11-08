const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const { platform, osType, release, architecture, totalMemory, freeMemory, cpus, homedir, hostname, networkInterfaces,getDiskSpaceInfo, userInfo } = require("./osInfo.js")

const {copyFile, deleteAllFilesInFolder, getSize} = require("./makeCopies.js")

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "..", "Static")));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.get("/", async (req, res) => {
    var template = {
        platform: platform,
        osType: osType,
        release: release,
        architecture: architecture,
        totalMemory: totalMemory,
        freeMemory: freeMemory,
        cpus: cpus,
        homedir : homedir,
        hostname : hostname,
        networkInterfaces : networkInterfaces,
        diskInfo : await getDiskSpaceInfo(),
        userInfo : userInfo,
        size : await getSize()
    }
    // console.log(template)
    res.render(path.join(__dirname, "..", "ClientSide", "index.ejs"),template)
})

app.post("/createCopies/:num",async (req,res)=>{
    // console.log(req.params.num)
    await copyFile(req.params.num)
    res.send("done")
})

app.delete("/deleteCopies",async (req,res)=>{
    await deleteAllFilesInFolder()
    res.send("deleted")
})