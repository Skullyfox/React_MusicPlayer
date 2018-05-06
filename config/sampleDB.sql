SET AUTOCOMMIT = 0;
START TRANSACTION;
CREATE DATABASE IF NOT EXISTS `node_react_sample_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `node_react_sample_db`;
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(150) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
COMMIT;
