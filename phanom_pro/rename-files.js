import { readdir, rename } from 'fs/promises';
import { join } from 'path';

async function renameFiles(dir) {
  try {
    const files = await readdir(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = join(dir, file.name);
      if (file.isDirectory()) {
        await renameFiles(fullPath);
      } else if (file.name.endsWith('.tsx')) {
        const newPath = fullPath.replace('.tsx', '.jsx');
        await rename(fullPath, newPath);
        console.log(`Renamed ${file.name} to ${file.name.replace('.tsx', '.jsx')}`);
      }
    }
  } catch (error) {
    console.error('Error renaming files:', error);
  }
}

renameFiles('./src');