# Scalable Real-Time Chat: Enterprise Communication Reinvented

## Project Overview

This project is a robust enterprise-level chat application designed to deliver seamless real-time communication. Inspired by Slack, the application is built to support high concurrency, scalability, and secure messaging, making it ideal for large organizations that require reliable and efficient communication channels.

## Features

- **Real-Time Messaging**: Messages are delivered instantly across all connected clients using WebSocket technology.
- **Scalable Architecture**: NGINX load balancing and Redis Pub/Sub ensure the system handles high traffic efficiently.
- **Reliable Message Delivery**: Kafka is integrated to provide asynchronous messaging with fault tolerance, ensuring no message loss even during peak loads.
- **Security**: Full authentication and authorization mechanisms protect user data and ensure only authorized access to specific channels.
- **Modern Tech Stack**: Built with Node.js, Express, React, Mongo DB, Redis, Kafka, Docker.

## Technology Stack

- **Backend**: Node.js, Express.js
- **Frontend**: React, WebSocket, TypeScript
- **Database**: Mongo DB
- **Messaging**: Kafka, Redis Pub/Sub
- **Load Balancing**: NGINX
- **Infrastructure**: Docker

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   https://github.com/yash7xm/Commune.git
   cd Commune
   ```

2. **Install dependencies** for both frontend and backend:

   ```bash
   npm install
   cd client
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env` file in the root directory and add the necessary environment variables for your database, Redis, Kafka, and other services.
   - Example `.env` file:
     ```
     DATABASE_URL=your_database_url
     REDIS_URL=your_redis_url
     KAFKA_BROKER_URL=your_kafka_broker_url
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the application**:

   ```bash
   npm run dev
   ```

5. **Build and run with Docker** (optional):
   ```bash
   docker-compose up --build
   ```

## Usage

Once the application is running, you can:

- **Register** a new user or **log in** with existing credentials.
- **Join or create channels** to start conversations.
- **Send messages** and see them instantly appear in the chat.
- **Monitor message delivery** in real-time, even under heavy loads.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m 'Add some feature'
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature-name
   ```
5. **Open a pull request**.
