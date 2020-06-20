## HOW TO: run

You just need to run:

`$ docker-compose up -d`

A server on port 3000 will be started. Just go to http://localhost:3000.

---

To get logs from server, do:

`$ docker-compose logs -f`

---

To access the container shell

`$ docker-compose run--rm web sh`