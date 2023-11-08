const path = require('path');
const fs = require('fs').promises;

async function copyFile(x) {
    const sourceFilePath = path.join(__dirname, '..', 'Static', 'photo.jpg');
    const baseDestinationPath = path.join(__dirname, '..', 'Static',"Copies");
  
    for (let i = 0; i < x; i++) {
      const destinationFilePath = path.join(baseDestinationPath, `${Date.now()}_${i}.jpg`);
      try {
        const data = await fs.readFile(sourceFilePath);
        await fs.writeFile(destinationFilePath, data);
        console.log(`File ${i + 1} copied successfully to: ${destinationFilePath}`);
      } catch (err) {
        console.error(`Error copying file ${i + 1}:`, err);
      }
    }
  }
  


async function deleteAllFilesInFolder() {
    try {
        const folderPath = path.join(__dirname, '..', 'Static',"Copies");
        const files = await fs.readdir(folderPath);

        for (const file of files) {
            const filePath = path.join(folderPath, file);
            await fs.unlink(filePath);
            console.log(`File ${file} deleted.`);
        }
        console.log('All files in the folder have been deleted.');
    } catch (err) {
        console.error('Error deleting files:', err);
    }
}


async function getSize() {
    let totalSize = 0;
    let folderPath = path.join(__dirname, '..', 'Static',"Copies");
    try {
      const files = await fs.readdir(folderPath);
  
      for (const file of files) {
        const filePath = path.join(folderPath, file);
        const stats = await fs.stat(filePath);
        console.log(stats)

        if (stats.isFile()) {
          totalSize += stats.size;
        }
      }
  
      return totalSize;
    } catch (err) {
      console.error('Error getting folder size:', err);
      return -1; // Return -1 to indicate an error
    }
  }


module.exports = {copyFile,deleteAllFilesInFolder,getSize};