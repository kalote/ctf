FROM ubuntu:16.04

RUN apt-get -y update && \
    apt-get install apache2 php libapache2-mod-php php-mcrypt php-curl curl cron -y

COPY src/ /var/www/html/

EXPOSE 80 443

RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
RUN apt-get install nodejs -y

COPY cron/browserbot /etc/cron.d/browserbot

CMD ["apachectl", "-D", "FOREGROUND"]
