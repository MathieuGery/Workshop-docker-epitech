#Workshop docker - Seedbox
---
#Installation de Docker & Docker-compose

##Docker Installation (debian 10 buster)
Intall dependencies:
```console
apt install apt-transport-https ca-certificates curl software-properties-common -y
```

Add docker repository:
```console
apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
apt -y install apt-transport-https ca-certificates curl gnupg2 software-properties-common
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
add-apt-repository \\n   "deb [arch=amd64] https://download.docker.com/linux/debian \\n   $(lsb_release -cs) \\n   stable"
Update packages:
```
```console
apt update
```

Install Docker:
```console
apt -y install docker-ce docker-ce-cli containerd.io
```

Link of the doc:
https://docs.docker.com/install/linux/docker-ce/debian/

Or simply use this script :-)
```console
curl -sSL https://get.docker.com | sh
```

Add user to docker group (no need sudo for each docker commands):
```console
sudo usermod -aG docker $USER
```

##Docker-compose installation

Install Docker-compose:
```console
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
```

## Install Transmission into docker container

Create docker folder:
```console
mkdir /home/docker/transmission
```
