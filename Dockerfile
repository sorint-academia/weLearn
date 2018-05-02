FROM nginx 
COPY dist/* /usr/share/nginx/html/
HEALTHCHECK CMD curl http://127.0.0.1
EXPOSE 80
