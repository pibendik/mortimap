# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock
COPY package*.json yarn.lock ./

# Install project dependencies
RUN yarn install

# Copy the rest of the application source code
COPY . .

# Expose port 8080 for the Vue CLI development server
EXPOSE 8080

# Start the Vue CLI development server
CMD ["yarn", "serve"]