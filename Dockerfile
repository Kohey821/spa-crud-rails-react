FROM ruby:3.0.2

RUN apt update && apt upgrade -y && apt install -y \
  sqlite3 \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY ./backend/Gemfile .
COPY ./backend/Gemfile.lock .
RUN bundle install
