# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install
RUN npm install cors
RUN npm install -g nodemon
# Copy the rest of your application code to the working directory
COPY . .

# Expose the port that your Node.js application will listen on
EXPOSE 3001

# Command to start your Node.js application
#CMD ["npm", "start"]
CMD ["nodemon", "start"]
