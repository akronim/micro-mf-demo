# Microfrontend Demo with Module Federation and Vue 3

This project demonstrates a microfrontend architecture using Vue 3, TypeScript, Vite, and Module Federation.

## Architecture

- **Host Application**: Main shell application that integrates remote microfrontends
- **Product Catalog**: Remote microfrontend exposing product listing and detail components

## Technology Stack

- Vue 3 (Composition API with `<script setup>` syntax)
- TypeScript
- Vite
- @module-federation/vite

### Prerequisites

- Node.js 20