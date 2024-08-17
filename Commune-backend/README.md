## Commands

- Start Zookeper Container and expose PORT `2181`.

```bash
docker run -p 2181:2181 zookeeper
```

- Start Kafka Container, expose PORT `9092` and setup ENV variables.

```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=192.168.1.10:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.10:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```
