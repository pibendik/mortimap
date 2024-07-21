# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Bundle app source inside the Docker image
COPY . .

# Build the app for production
RUN npm run build

# Expose port 80 to the outside world
EXPOSE 80

# Serve the app using a simple HTTP server
CMD [ "npx", "serve", "-s", "dist", "-l", "80" ]