ARG VARIANT=10
FROM node:${VARIANT}
LABEL maintainer="Paulo Gomes da Cruz Junior <paulushc@gmail.com>"

RUN mkdir -p /opt/data
RUN chown -R node:node /opt/data
RUN chmod 755 /opt/data

RUN apk add --update sudo
RUN apk --update add net-tools zip git openssh
RUN npm install -g typescript pm2 serve react-inject-env

ARG GITUSER
ARG GITMAIL

ADD consolerc /consolerc.sh
ADD keys/* /.ssh/
ADD resetgit.sh /usr/local/bin/resetgit
RUN cat /consolerc.sh >> /etc/profile
RUN chmod +x /usr/local/bin/resetgit

RUN git config --global user.name "${GITUSER}"
RUN git config --global user.email "${GITMAIL}"

