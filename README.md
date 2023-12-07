# eduSphere

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

eduSphere is a social media platform designed for students and administrators of our institution. It aims to enhance communication, collaboration, and engagement within the school community.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **Profiles:** Students and administrators can create and customize their profiles.
- **Messaging:** Real-time private messaging and group messaging.
- **Groups:** Create, join, and interact within groups based on interests or courses.
- **Announcements:** Administrators can send school-wide announcements.
- **Events:** Calendar view of upcoming school events with RSVP functionality.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) (Node Package Manager) installed
- [postgreSQL](https://www.postgresql.org/) set up and running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/eduSphere.git
   ```

2. Navigate to the project directory:

   ```bash
   cd eduSphere
   ```

3. Install dependencies for the server:

   ```bash
   npm install
   ```

4. Navigate to the client directory:

   ```bash
   cd client
   ```

5. Install dependencies for the client:

   ```bash
   npm install
   ```

6. Configure your database settings in `config/database.js`.

7. Start the application:

   ```bash
   npm run dev
   ```

   The application should now be running at `http://localhost:3000`.

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Log in or sign up to access the platform features.
3. Explore groups, send messages, and stay connected with the school community.

## Technologies

- Frontend: HTML, CSS, JavaScript (React)
- Backend: Node.js (Express)
- Database: PostgreSQL
- Real-time Messaging: WebSocket
- Hosting: AWS (Amazon Web Services)

## Project Structure

```
eduSphere/
|-- client/
|   |-- public/
|   |-- src/
|       |-- components/
|       |-- static/
|       |-- templates/
|-- config/
|-- migrations/
|-- .gitignore
|-- LICENSE
|-- README.md
|-- package.json
|-- requirements.txt
|-- server.js
```

## Contributing

Contributions are welcome! Please follow our [Contribution Guidelines](CONTRIBUTING.md). Still Loading (you can send a message to aishatadewoyin@outlook.com to show your interest in contributing. Thank you)..

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to:
-
- Blessing Udeji
- and Chibuike Nwafor
- for there contributions to this project.
