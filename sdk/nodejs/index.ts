// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export * from "./getKafkaCluster";
export * from "./getKafkaConnector";
export * from "./getKafkaCredential";
export * from "./getKafkaTopic";
export * from "./getQStashEndpoint";
export * from "./getQStashSchedule";
export * from "./getQStashTopic";
export * from "./getRedisDatabase";
export * from "./getTeam";
export * from "./kafkaCluster";
export * from "./kafkaConnector";
export * from "./kafkaCredential";
export * from "./kafkaTopic";
export * from "./provider";
export * from "./qstashEndpoint";
export * from "./qstashSchedule";
export * from "./qstashTopic";
export * from "./redisDatabase";
export * from "./team";

// Export sub-modules:
import * as config from "./config";

export {
    config,
};

// Import resources to register:
import { KafkaCluster } from "./kafkaCluster";
import { KafkaConnector } from "./kafkaConnector";
import { KafkaCredential } from "./kafkaCredential";
import { KafkaTopic } from "./kafkaTopic";
import { QStashEndpoint } from "./qstashEndpoint";
import { QStashSchedule } from "./qstashSchedule";
import { QStashTopic } from "./qstashTopic";
import { RedisDatabase } from "./redisDatabase";
import { Team } from "./team";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "upstash:index/kafkaCluster:KafkaCluster":
                return new KafkaCluster(name, <any>undefined, { urn })
            case "upstash:index/kafkaConnector:KafkaConnector":
                return new KafkaConnector(name, <any>undefined, { urn })
            case "upstash:index/kafkaCredential:KafkaCredential":
                return new KafkaCredential(name, <any>undefined, { urn })
            case "upstash:index/kafkaTopic:KafkaTopic":
                return new KafkaTopic(name, <any>undefined, { urn })
            case "upstash:index/qStashEndpoint:QStashEndpoint":
                return new QStashEndpoint(name, <any>undefined, { urn })
            case "upstash:index/qStashSchedule:QStashSchedule":
                return new QStashSchedule(name, <any>undefined, { urn })
            case "upstash:index/qStashTopic:QStashTopic":
                return new QStashTopic(name, <any>undefined, { urn })
            case "upstash:index/redisDatabase:RedisDatabase":
                return new RedisDatabase(name, <any>undefined, { urn })
            case "upstash:index/team:Team":
                return new Team(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("upstash", "index/kafkaCluster", _module)
pulumi.runtime.registerResourceModule("upstash", "index/kafkaConnector", _module)
pulumi.runtime.registerResourceModule("upstash", "index/kafkaCredential", _module)
pulumi.runtime.registerResourceModule("upstash", "index/kafkaTopic", _module)
pulumi.runtime.registerResourceModule("upstash", "index/qStashEndpoint", _module)
pulumi.runtime.registerResourceModule("upstash", "index/qStashSchedule", _module)
pulumi.runtime.registerResourceModule("upstash", "index/qStashTopic", _module)
pulumi.runtime.registerResourceModule("upstash", "index/redisDatabase", _module)
pulumi.runtime.registerResourceModule("upstash", "index/team", _module)

import { Provider } from "./provider";

pulumi.runtime.registerResourcePackage("upstash", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:upstash") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
