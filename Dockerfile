FROM php:7.0-apache
RUN apt-get update && apt-get upgrade -y

#https://gist.github.com/hoandang/88bfb1e30805df6d1539640fc1719d12
RUN docker-php-ext-install mysqli

Expose 80


