# Step 1: Start from an official Node.js image (alpine = small size)
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json first (so Docker can cache the npm install layer)
COPY package.json ./

# Step 4: Install dependencies
RUN npm install --production

# Step 5: Copy the rest of the app files
COPY . .

# Step 6: Tell Docker which port the app uses
EXPOSE 3000

# Step 7: Command to start the app
CMD ["node", "index.js"]
