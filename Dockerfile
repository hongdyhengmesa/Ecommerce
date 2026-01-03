FROM php:8.2-fpm

# 1️⃣ Install system dependencies
RUN apt update && apt install -y \
    unzip \
    curl \
    git \
    libzip-dev \
    zlib1g-dev \
    ca-certificates

# 2️⃣ Install PHP extensions
RUN docker-php-ext-install zip pdo pdo_mysql

# 3️⃣ Install Composer (SAFE way)
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php \
    && php composer-setup.php --install-dir=/usr/local/bin --filename=composer \
    && rm composer-setup.php

# 4️⃣ Set working directory
WORKDIR /var/www/html
