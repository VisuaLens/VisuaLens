# Verwende das offizielle Bun-Image als Basis
FROM oven/bun:latest

# Installiere Git
RUN apt-get update && apt-get install -y git

# Setze das Arbeitsverzeichnis im Container
WORKDIR /src

# Klon das Repository
RUN git clone https://github.com/VisuaLens/VisuaLens.git .

# Installiere Abhängigkeiten
RUN bun install

# Baue die Next.js-App
RUN cd frontend && bun run build

# Exponiere den Port, auf dem die App läuft
EXPOSE 8000

# Starte die App
CMD ["bun", "run", "start"]