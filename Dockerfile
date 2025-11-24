FROM node:20-slim AS builder

WORKDIR /app

# COPY package.json ./

RUN npm install

COPY . .

# STAGE 2: Production runtime image
FROM node:20-slim

WORKDIR /app

# Copy necessary files from the build stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/index.js ./

EXPOSE 8080

CMD ["index.js"] 