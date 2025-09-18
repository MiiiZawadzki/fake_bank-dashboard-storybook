# Fake _ Bank Dashboard Panel 

An interactive bank dashboard demo built with Vue 3, Vite, and Storybook. The dashboard displays user information, account balance, recent transactions, and more, using modular and reusable UI components.

<img width="1920" height="1206" alt="image" src="https://github.com/user-attachments/assets/2a538478-8b3f-4afa-b74a-7e660646808e" />


## Getting Started

### Install dependencies
```sh
npm install
```

### Run the app locally
```sh
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Storybook
To view UI components in isolation:
```sh
npm run storybook
```
Storybook will start on [http://localhost:6006](http://localhost:6006) by default:

<img width="2064" height="1212" alt="image" src="https://github.com/user-attachments/assets/e49de1b6-2f72-4e85-931d-942e6cf601cc" />


## Project Structure

- `src/components/` — Vue components and their Storybook stories
- `src/views/` — Main dashboard view
- `src/data/` — Static JSON data for user, balance, transactions, and options
- `public/` — Static assets (e.g., logo)
- `src/style.css` — Global styles
