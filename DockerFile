FROM node:12.14.1
EXPOSE 3000:3000
COPY . /app
WORKDIR /app
RUN npm install
CMD ["node", "--max_old_space_size=4112", "scripts/start.js"]
