CREATE DATABASE IF NOT EXISTS noodler;

USE noodler;

DROP TABLE IF EXISTS `users_table`;

DROP TABLE IF EXISTS `noodles_table`;

CREATE TABLE `users_table` (
                               `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
                               `username` varchar(255),
                               `description` varchar(500),
                               `email` varchar(255),
                               `password` varchar(255),
                               PRIMARY KEY(`id`)
);

CREATE TABLE `noodles_table` (
                                 `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
                                 `user_id`int(11) unsigned NOT NULL,
                                 `date` DATE NOT NULL,
                                 `time` TIMESTAMP NOT NULL,
                                 `noodle` VARCHAR(500),
                                 PRIMARY KEY(`id`),
                                 CONSTRAINT `fk_users_table` FOREIGN KEY (user_id) REFERENCES `users_table`(`id`)

);
