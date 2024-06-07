import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'src', 'images');
const outputFilePath = path.join(process.cwd(), 'src', 'imageData.js');

const scanDirectory = (dir, fileList = [], relativeDir = 'images') => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const relativePath = path.join(relativeDir, file);
    if (fs.statSync(filePath).isDirectory()) {
      scanDirectory(filePath, fileList, relativePath);
    } else if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
      fileList.push(relativePath.replace(/\\/g, '/'));
    }
  });
  return fileList;
};

const generateImageData = () => {
  const images = scanDirectory(imagesDir);
  const imports = images.map((image, index) => `import art${index + 1} from './${image}';`).join('\n');
  const imageArray = `const images = [\n${images.map((_, index) => `  art${index + 1}`).join(',\n')}\n];\n`;
  const exportStatement = `export default images;\n`;

  const content = `${imports}\n\n${imageArray}\n${exportStatement}`;
  fs.writeFileSync(outputFilePath, content, 'utf8');
  console.log('Image data generated successfully.');
};

generateImageData();
