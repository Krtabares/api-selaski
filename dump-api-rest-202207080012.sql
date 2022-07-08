-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: api-rest
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `idOrder` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `idUser` mediumint(8) unsigned DEFAULT NULL,
  `OrderNumber` mediumint(9) DEFAULT NULL,
  `DateTime` varchar(255) DEFAULT NULL,
  `ProviderName` varchar(255) DEFAULT NULL,
  `Observation` text DEFAULT NULL,
  `TotalValue` varchar(100) DEFAULT NULL,
  `Status` varchar(255) DEFAULT NULL,
  `DateCreated` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idOrder`),
  KEY `orders_FK` (`idUser`),
  CONSTRAINT `orders_FK` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (3,5,13,'05/02/2022','Parturient Foundation','placerat eget, venenatis a, magna. Lorem','$7044.06','1','08/22/2022'),(4,2,90,'2022-07-14','At Pretium Industries','non magna. Nam ligula','$5132.12','1','09/18/2022'),(5,3,97,'02/23/2023','Proin Vel LLC','at pede. Cras vulputate velit eu sem. Pellentesque ut','$5695.47','1','05/22/2022'),(16,2,2342,'2022-07-07','Quis Accumsan Convallis Ltde','sed, sapien. Nunc pulvinar arcu et2s','287.91','1','2022-07-07 21:57:44');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordersproducts`
--

DROP TABLE IF EXISTS `ordersproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordersproducts` (
  `idOrdersProducts` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `idOrder` mediumint(8) unsigned DEFAULT NULL,
  `ValueUnit` varchar(100) DEFAULT NULL,
  `Unit` text DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `SKU` varchar(255) DEFAULT NULL,
  `Quantity` mediumint(9) DEFAULT NULL,
  `QtyBox` mediumint(9) DEFAULT NULL,
  `Weight` varchar(100) DEFAULT NULL,
  `Volumen` varchar(100) DEFAULT NULL,
  `Mark` varchar(255) DEFAULT NULL,
  `Status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idOrdersProducts`),
  KEY `ordersproducts_FK_1` (`idOrder`),
  CONSTRAINT `ordersproducts_FK_1` FOREIGN KEY (`idOrder`) REFERENCES `orders` (`idOrder`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordersproducts`
--

LOCK TABLES `ordersproducts` WRITE;
/*!40000 ALTER TABLE `ordersproducts` DISABLE KEYS */;
INSERT INTO `ordersproducts` VALUES (2,5,'100','cm','sed, sapien. Nunc pulvinar arcu et','YGY51WZI6YJ',8,1,'6.66','2.20','Mus Proin Vel Industries','1'),(3,5,'$29.16','kg','placerat eget, venenatis a, magna. Lorem','JSL05UNJ7HJ',6,1,'6.54','1.10','Nunc Interdum PC','1');
/*!40000 ALTER TABLE `ordersproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `idUser` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `estatus` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Risa Andrews','ut@protonmail.ca','0'),(2,'Anika West','ridiculus@aol.org','1'),(3,'Nita Sharpe','duis.mi@icloud.edu','1'),(4,'Ciara Armstrong','tincidunt.nunc@google.com','0'),(5,'Gabriel George','nec.diam@aol.com','1');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'api-rest'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-08  0:12:07
