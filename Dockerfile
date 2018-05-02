FROM nginx 
COPY dist/* /usr/share/nginx/html/
RUN apt-get update \
    apt-get install -y curl \
    apt-get clean
HEALTHCHECK CMD curl http://127.0.0.1
EXPOSE 80
