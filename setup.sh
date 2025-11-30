#! /usr/bin/env bash

echo "Initializing Walter Farm Next.js Project..."

pnpm create next-app@latest. --typescript --tailwind --eslint --src-dir --app

echo "Installing base dependencies..."
pnpm install @prisma/client prisma

Echo "Set up complete!"
