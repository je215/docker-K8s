# Use an official Node.js runtime as the base image
FROM node:14-alpine
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to the container
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the backend source code to the container
COPY . .
# Expose the port the Express app runs on
EXPOSE 3001
# Start the Express app
CMD ["node", "server.js"]

#FROM node:10-alpine
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#EXPOSE 3001
#CMD ["node", "server.js"]

