CREATE TABLE IF NOT EXISTS `task` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(25) NOT NULL,
  `description` varchar(60) NOT NULL,
  `status` boolean NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `task` (`id`, `title`, `description`, `status`)
VALUES
  (1, 'Tarefa 1', 'Não Cncluída', FALSE),
  (2, 'Tarefa 2', 'Concluída', TRUE);