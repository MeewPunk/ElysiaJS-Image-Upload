# Elysia Image Upload API
# This repository contains a simple Node.js application utilizing the Elysia library for handling HTTP requests. The application provides an endpoint for uploading images in base64 format. The uploaded images are saved in a designated "uploads" folder with unique filenames.
# Elysia with Bun runtime

## Getting Started
Clone
```bash
git clone https://github.com/MeewPunk/ElysiaJS-Image-Upload.git
```

## Development
To start the development server run:
```bash
bun run dev
```

HTTP Request py

import requests

url = "http://localhost:8080/v1/upload/image"

payload = {"imageBase64" : "/9j/4AAQSkZJRgABAQAAAQABAAD<base64>lCNiU7kShsTkCYUEXIoR8gppEwjYhLIrEZ5MSmcmKG"}
headers = {
  'Content-Type': 'text/plain'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
