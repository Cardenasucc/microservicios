FROM node:20

USER root

RUN apt-get update && apt-get install -y \
    wget \
    nano

RUN npm cache clear --force
RUN npm install -g npm@8.12.1
RUN npm install prisma -g \
    && npm install cors -g \
    && npm install dotenv -g \
    && npm install express -g \
    && npm install jsonwebtoken -g \
    && npm install nodemon -g \
    && npm install @prisma/client -g

# Create directories for each folder
RUN mkdir -p /usr/userAPI
RUN mkdir -p /ord/ordersAPI
RUN mkdir -p /mem/membershipsAPI

# Set working directory for each folder
WORKDIR /usr/userAPI
WORKDIR /ord/ordersAPI
WORKDIR /mem/membershipsAPI

# Copy package.json files for each folder
COPY users/package*.json /usr/userAPI/
COPY orders/package*.json /ord/ordersAPI/
COPY memberships/package*.json /mem/membershipsAPI/

# Install dependencies for each folder
RUN npm install
RUN npm install dotenv --save--dev

# Copy files for each folder
COPY users /usr/userAPI/
COPY orders /ord/ordersAPI/
COPY memberships /mem/membershipsAPI/

# Generate Prisma schema for each folder
RUN prisma generate

# Set command to run nodemon for each folder
CMD ["nodemon", "app.js"]