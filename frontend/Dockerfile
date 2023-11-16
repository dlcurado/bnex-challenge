FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY ./productsapp .

# Installing modules
RUN npm install
# RUN npm install react-router-dom 
# RUN npm install react-hot-toast 
# RUN npm install axios 
# RUN npm install react-hook-form


# Expose port
EXPOSE 5173

#CMD [ "npm", "start" ]