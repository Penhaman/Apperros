FROM postgres

RUN apt-get update && apt-get install unzip

COPY ./1_LOAD_DDL.sql /docker-entrypoint-initdb.d/
COPY ./2_LOAD_DATA.zip /var/app/

RUN unzip /var/app/2_LOAD_DATA.zip -d /docker-entrypoint-initdb.d/