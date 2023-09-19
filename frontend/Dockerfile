# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# add '/app/node_modules/.bin' to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the React app source code to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

#FROM node:14-alpine
#WORKDIR /app
# add '/app/node_modules/.bin' to $PATH
#ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
#COPY package*.json ./
#RUN npm install
#RUN npm install react-scripts -g
# copy app files
#COPY . .

#EXPOSE 3000
#CMD ["npm", "start"]

