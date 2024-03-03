import { Elysia } from "elysia";
import fs from "fs";
import path from "path";

// Function to generate a random string
function generateRandomString(length: number): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const app = new Elysia();
const uploadFolder = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}

app
  .get('/', () => "Elysia is running")
  
  .post('/v1/upload/image', ({ body }) => {
    const { imageBase64 } = body as { imageBase64: string };
    const filename = `image_${generateRandomString(30)}.png`; // Random filename
    const filePath = path.join(uploadFolder, filename);
    fs.writeFileSync(filePath, Buffer.from(imageBase64, 'base64'));
    const fileUrl = `http://${app.server?.hostname}:${app.server?.port}/${filename}`;
    return {
      message: "Image uploaded successfully",
      filename,
      fileUrl,
    };
  })
  .listen(8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
