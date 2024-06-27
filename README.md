# Portfolio Setup Guide

This guide will walk you through setting up your portfolio on your local machine.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Installation Steps

1. **Fork the Repository**
   - Fork the repository on GitHub by clicking the "Fork" button on the repository page.
   - Clone the forked repository to your local machine:
     ```bash
     git clone <your_forked_repository_url>
     cd <repository_directory>
     ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   This will install the necessary libraries, including the `rough-notation` library.

3. **Build Tailwind CSS**
   ```bash
   npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch
   ```
   This command does the following:
   - `npx tailwindcss`: Runs the Tailwind CSS CLI tool.
   - `-i ./src/input.css`: Specifies the input file where your Tailwind CSS configurations are written.
   - `-o ./dist/style.css`: Specifies the output file where the compiled CSS will be written.
   - `--watch`: Watches for changes in the input file and automatically recompiles the CSS when changes are detected.

4. **Set Up Live Server in VS Code**
   - Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code.
   - Open `index.html` in VS Code.
   - Click on the "Go Live" button in the status bar at the bottom to start the live server.
   - You can now make live changes and see them reflected in real-time.

## Modifying the Portfolio

Feel free to modify the content, styles, and functionality as per your requirements. Any changes made to the files will be automatically reflected in the live server.
