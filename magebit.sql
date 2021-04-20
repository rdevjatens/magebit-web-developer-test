-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               5.7.24 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for magebit
CREATE DATABASE IF NOT EXISTS `magebit` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `magebit`;

-- Dumping structure for table magebit.emails
CREATE TABLE IF NOT EXISTS `emails` (
  `email` varchar(45) DEFAULT NULL,
  `host` varchar(45) DEFAULT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table magebit.emails: ~4 rows (approximately)
/*!40000 ALTER TABLE `emails` DISABLE KEYS */;
INSERT INTO `emails` (`email`, `host`, `date`) VALUES
	('test@gmail.com', 'gmail.com', '2021-04-20'),
	('example@gmail.com', 'gmail.com', '2021-04-20'),
	('sample@yahoo.com', 'yahoo.com', '2021-04-19'),
	('newemail@test.com', 'test.com', '2021-04-15');
/*!40000 ALTER TABLE `emails` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
