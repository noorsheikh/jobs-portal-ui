FROM node:12.11.1-alpine

RUN npx create-react-app jobs-portal --typescript

WORKDIR /jobs-portal

EXPOSE 3000

CMD ["yarn", "start"]
