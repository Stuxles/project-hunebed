-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2019 at 01:21 PM
-- Server version: 10.1.39-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hunebed`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `Email` varchar(50) NOT NULL,
  `Difficulty_Level_ID` int(11) DEFAULT NULL,
  `Password` varchar(50) DEFAULT NULL,
  `Theme_ID` int(11) DEFAULT NULL,
  `Active_account` int(11) DEFAULT NULL,
  `SecureLink` varchar(50) DEFAULT NULL,
  `Log_attemps` int(11) DEFAULT NULL,
  `Last_active` datetime DEFAULT NULL,
  `Geo_location` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `account_question`
--

CREATE TABLE `account_question` (
  `Email` varchar(50) DEFAULT NULL,
  `Question_ID` int(11) DEFAULT NULL,
  `Progress` int(11) DEFAULT NULL,
  `Question_log` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `account_staffrole`
--

CREATE TABLE `account_staffrole` (
  `Role_ID` int(11) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `account_userrole`
--

CREATE TABLE `account_userrole` (
  `UserRole_ID` int(11) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `Category_ID` int(11) NOT NULL,
  `Category_count` int(11) DEFAULT NULL,
  `CategoryName` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `difficulty_level`
--

CREATE TABLE `difficulty_level` (
  `Difficulty_Level_ID` int(11) NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Level` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `editpage`
--

CREATE TABLE `editpage` (
  `EditPage_ID` int(11) NOT NULL,
  `Page_ID` int(11) DEFAULT NULL,
  `File_edit` varchar(50) DEFAULT NULL,
  `header_edit` varchar(50) DEFAULT NULL,
  `Links_edit` varchar(50) DEFAULT NULL,
  `ApprovedPage_edit` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `editquestion`
--

CREATE TABLE `editquestion` (
  `EditQuestion_ID` int(11) NOT NULL,
  `Question_ID` int(11) DEFAULT NULL,
  `Difficulty_Level_ID` int(11) DEFAULT NULL,
  `Completed_edit` int(11) DEFAULT NULL,
  `QuestionName_edit` varchar(50) DEFAULT NULL,
  `Question_Descr_edit` varchar(50) DEFAULT NULL,
  `Question_answer_edit` varchar(50) DEFAULT NULL,
  `ApprovedQuestion_edit` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `knowledgehub`
--

CREATE TABLE `knowledgehub` (
  `Hub_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `knowledgehub_account`
--

CREATE TABLE `knowledgehub_account` (
  `Hub_ID` int(11) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `knowledgehub_category`
--

CREATE TABLE `knowledgehub_category` (
  `Hub_ID` int(11) DEFAULT NULL,
  `Category_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `knowledgehub_wikipage`
--

CREATE TABLE `knowledgehub_wikipage` (
  `Hub_ID` int(11) DEFAULT NULL,
  `Page_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `Question_ID` int(11) NOT NULL,
  `Difficulty_Level_ID` int(11) DEFAULT NULL,
  `Completed` int(11) DEFAULT NULL,
  `QuestionName` varchar(50) DEFAULT NULL,
  `Question_Descr` varchar(50) DEFAULT NULL,
  `Question_answer` varchar(50) DEFAULT NULL,
  `ApprovedQuestion` int(11) DEFAULT NULL,
  `Picture` varchar(50) DEFAULT NULL,
  `Score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `right`
--

CREATE TABLE `right` (
  `Right_ID` int(11) NOT NULL,
  `Right_Name` char(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `staffrole`
--

CREATE TABLE `staffrole` (
  `Role_ID` int(11) NOT NULL,
  `RoleName` char(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `theme`
--

CREATE TABLE `theme` (
  `Theme_ID` int(11) NOT NULL,
  `Theme_color` varchar(50) DEFAULT NULL,
  `Theme_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `userrole`
--

CREATE TABLE `userrole` (
  `UserRole_ID` int(11) NOT NULL,
  `RoleName` char(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `userrole_right`
--

CREATE TABLE `userrole_right` (
  `UserRole_ID` int(11) DEFAULT NULL,
  `Right_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `wikipage`
--

CREATE TABLE `wikipage` (
  `Page_ID` int(11) NOT NULL,
  `Page_text` mediumtext,
  `Page_header` varchar(50) DEFAULT NULL,
  `Links` varchar(50) DEFAULT NULL,
  `ApprovedPage` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `wikipage_category`
--

CREATE TABLE `wikipage_category` (
  `Page_ID` int(11) DEFAULT NULL,
  `Category_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`Email`),
  ADD KEY `Difficulty_Level_ID` (`Difficulty_Level_ID`),
  ADD KEY `Theme_ID` (`Theme_ID`);

--
-- Indexes for table `account_question`
--
ALTER TABLE `account_question`
  ADD KEY `Email` (`Email`),
  ADD KEY `Question_ID` (`Question_ID`);

--
-- Indexes for table `account_staffrole`
--
ALTER TABLE `account_staffrole`
  ADD KEY `Email` (`Email`),
  ADD KEY `Role_ID` (`Role_ID`);

--
-- Indexes for table `account_userrole`
--
ALTER TABLE `account_userrole`
  ADD KEY `UserRole_ID` (`UserRole_ID`),
  ADD KEY `Email` (`Email`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`Category_ID`);

--
-- Indexes for table `difficulty_level`
--
ALTER TABLE `difficulty_level`
  ADD PRIMARY KEY (`Difficulty_Level_ID`);

--
-- Indexes for table `editpage`
--
ALTER TABLE `editpage`
  ADD PRIMARY KEY (`EditPage_ID`),
  ADD KEY `Page_ID` (`Page_ID`);

--
-- Indexes for table `editquestion`
--
ALTER TABLE `editquestion`
  ADD PRIMARY KEY (`EditQuestion_ID`),
  ADD KEY `Question_ID` (`Question_ID`),
  ADD KEY `Difficulty_Level_ID` (`Difficulty_Level_ID`);

--
-- Indexes for table `knowledgehub`
--
ALTER TABLE `knowledgehub`
  ADD PRIMARY KEY (`Hub_ID`);

--
-- Indexes for table `knowledgehub_account`
--
ALTER TABLE `knowledgehub_account`
  ADD KEY `Email` (`Email`),
  ADD KEY `Hub_ID` (`Hub_ID`);

--
-- Indexes for table `knowledgehub_category`
--
ALTER TABLE `knowledgehub_category`
  ADD KEY `Hub_ID` (`Hub_ID`),
  ADD KEY `Category_ID` (`Category_ID`);

--
-- Indexes for table `knowledgehub_wikipage`
--
ALTER TABLE `knowledgehub_wikipage`
  ADD KEY `Hub_ID` (`Hub_ID`),
  ADD KEY `Page_ID` (`Page_ID`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`Question_ID`),
  ADD KEY `Difficulty_Level_ID` (`Difficulty_Level_ID`);

--
-- Indexes for table `right`
--
ALTER TABLE `right`
  ADD PRIMARY KEY (`Right_ID`);

--
-- Indexes for table `staffrole`
--
ALTER TABLE `staffrole`
  ADD PRIMARY KEY (`Role_ID`);

--
-- Indexes for table `theme`
--
ALTER TABLE `theme`
  ADD PRIMARY KEY (`Theme_ID`);

--
-- Indexes for table `userrole`
--
ALTER TABLE `userrole`
  ADD PRIMARY KEY (`UserRole_ID`);

--
-- Indexes for table `userrole_right`
--
ALTER TABLE `userrole_right`
  ADD KEY `UserRole_ID` (`UserRole_ID`),
  ADD KEY `Right_ID` (`Right_ID`);

--
-- Indexes for table `wikipage`
--
ALTER TABLE `wikipage`
  ADD PRIMARY KEY (`Page_ID`);

--
-- Indexes for table `wikipage_category`
--
ALTER TABLE `wikipage_category`
  ADD KEY `Page_ID` (`Page_ID`),
  ADD KEY `Category_ID` (`Category_ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `account`
--
ALTER TABLE `account`
  ADD CONSTRAINT `account_ibfk_1` FOREIGN KEY (`Difficulty_Level_ID`) REFERENCES `difficulty_level` (`Difficulty_Level_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `account_ibfk_2` FOREIGN KEY (`Theme_ID`) REFERENCES `theme` (`Theme_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `account_question`
--
ALTER TABLE `account_question`
  ADD CONSTRAINT `account_question_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `account` (`Email`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `account_question_ibfk_2` FOREIGN KEY (`Question_ID`) REFERENCES `question` (`Question_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `account_staffrole`
--
ALTER TABLE `account_staffrole`
  ADD CONSTRAINT `account_role_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `account` (`Email`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `account_role_ibfk_2` FOREIGN KEY (`Role_ID`) REFERENCES `staffrole` (`Role_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `account_userrole`
--
ALTER TABLE `account_userrole`
  ADD CONSTRAINT `accountuser_ibfk_1` FOREIGN KEY (`UserRole_ID`) REFERENCES `userrole` (`UserRole_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `accountuser_ibfk_2` FOREIGN KEY (`Email`) REFERENCES `account` (`Email`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `editpage`
--
ALTER TABLE `editpage`
  ADD CONSTRAINT `editpage_ibfk_1` FOREIGN KEY (`Page_ID`) REFERENCES `wikipage` (`Page_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `editquestion`
--
ALTER TABLE `editquestion`
  ADD CONSTRAINT `editquestion_ibfk_1` FOREIGN KEY (`Question_ID`) REFERENCES `question` (`Question_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `editquestion_ibfk_2` FOREIGN KEY (`Difficulty_Level_ID`) REFERENCES `difficulty_level` (`Difficulty_Level_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `knowledgehub_account`
--
ALTER TABLE `knowledgehub_account`
  ADD CONSTRAINT `knowledgehub_account_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `account` (`Email`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `knowledgehub_account_ibfk_2` FOREIGN KEY (`Hub_ID`) REFERENCES `knowledgehub` (`Hub_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `knowledgehub_category`
--
ALTER TABLE `knowledgehub_category`
  ADD CONSTRAINT `knowledgehub_category_ibfk_1` FOREIGN KEY (`Hub_ID`) REFERENCES `knowledgehub` (`Hub_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `knowledgehub_category_ibfk_2` FOREIGN KEY (`Category_ID`) REFERENCES `category` (`Category_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `knowledgehub_wikipage`
--
ALTER TABLE `knowledgehub_wikipage`
  ADD CONSTRAINT `knowledgehub_wikipage_ibfk_1` FOREIGN KEY (`Hub_ID`) REFERENCES `knowledgehub` (`Hub_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `knowledgehub_wikipage_ibfk_2` FOREIGN KEY (`Page_ID`) REFERENCES `wikipage` (`Page_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`Difficulty_Level_ID`) REFERENCES `difficulty_level` (`Difficulty_Level_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userrole_right`
--
ALTER TABLE `userrole_right`
  ADD CONSTRAINT `accountright_ibfk_1` FOREIGN KEY (`UserRole_ID`) REFERENCES `userrole` (`UserRole_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `accountright_ibfk_2` FOREIGN KEY (`Right_ID`) REFERENCES `right` (`Right_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `wikipage_category`
--
ALTER TABLE `wikipage_category`
  ADD CONSTRAINT `wikipage_category_ibfk_1` FOREIGN KEY (`Page_ID`) REFERENCES `wikipage` (`Page_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `wikipage_category_ibfk_2` FOREIGN KEY (`Category_ID`) REFERENCES `category` (`Category_ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
