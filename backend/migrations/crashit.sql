-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 29. Sep 2019 um 12:25
-- Server-Version: 10.4.6-MariaDB
-- PHP-Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `crashit`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `aggrieved`
--

CREATE TABLE `aggrieved` (
  `id` int(12) NOT NULL,
  `isDriver` tinyint(1) NOT NULL,
  `carType` int(3) NOT NULL,
  `owner` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `bankaccount`
--

CREATE TABLE `bankaccount` (
  `iban` varchar(30) NOT NULL,
  `bic` varchar(30) NOT NULL,
  `institute` varchar(200) NOT NULL,
  `owner` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `incedent`
--

CREATE TABLE `incedent` (
  `externalId` int(90) NOT NULL,
  `aggrieved` int(11) NOT NULL,
  `branch` int(8) NOT NULL,
  `accident` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `testperson`
--

CREATE TABLE `testperson` (
  `id` int(12) NOT NULL,
  `firstName` varchar(60) DEFAULT NULL,
  `lastName` varchar(60) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `pass` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `testperson`
--

INSERT INTO `testperson` (`id`, `firstName`, `lastName`, `email`, `pass`) VALUES
(1, 'otherName', 'sffsefes', 'stfefesfring', 'fefsfsefesfefesfe');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `testperson_seq`
--

CREATE TABLE `testperson_seq` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `bankaccount`
--
ALTER TABLE `bankaccount`
  ADD PRIMARY KEY (`iban`);

--
-- Indizes für die Tabelle `incedent`
--
ALTER TABLE `incedent`
  ADD PRIMARY KEY (`externalId`),
  ADD UNIQUE KEY `unique_index` (`aggrieved`,`branch`,`accident`);

--
-- Indizes für die Tabelle `testperson`
--
ALTER TABLE `testperson`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `testperson_seq`
--
ALTER TABLE `testperson_seq`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `testperson`
--
ALTER TABLE `testperson`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT für Tabelle `testperson_seq`
--
ALTER TABLE `testperson_seq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
