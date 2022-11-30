-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2015 at 03:14 AM
-- Server version: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `aw`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendees`
--

CREATE TABLE IF NOT EXISTS `attendees` (
`atid` int(5) NOT NULL,
  `attendee` varchar(20) NOT NULL DEFAULT '0'
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `attendees`
--

INSERT INTO `attendees` (`atid`, `attendee`) VALUES
(1, 'Researcher'),
(2, 'Presenter'),
(3, 'student');

-- --------------------------------------------------------

--
-- Table structure for table `infor`
--

CREATE TABLE IF NOT EXISTS `infor` (
`id` int(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `phone` int(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `job` int(5) NOT NULL,
  `type` int(5) NOT NULL,
  `ext_guest` int(10) NOT NULL,
  `invite` varchar(50) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=51 ;

--
-- Dumping data for table `infor`
--

INSERT INTO `infor` (`id`, `name`, `address`, `phone`, `email`, `job`, `type`, `ext_guest`, `invite`, `date`) VALUES
(1, 'KANHA', 'PHNOM PENH', 10123456, 'KANHA@YAHOO.COM', 1, 3, 10, 'Attending dinner, receiving paper', '2015-10-26'),
(2, 'DIMAN', 'PHNOM PENH', 96553456, 'DIMAN@YAHOO.COM', 1, 3, 10, 'Attending dinne', '2015-10-26'),
(3, 'SITHON', 'PHNOM PENH', 88555556, 'SITHON@GMAIL.COM', 1, 3, 23, 'Attending dinne', '2015-10-26'),
(4, 'CHANTREA', 'TAKEO', 96551111, 'CHANTREA@YMAIL.COM', 4, 1, 18, 'Attending dinne', '2015-10-26'),
(5, 'PHINA', 'BATDOM BONG', 12332211, 'PHINA@YMAIL.COM', 4, 2, 28, 'receiving paper', '2015-10-26'),
(6, 'KIM', 'SIEMREAP', 12332211, 'KIM@HOTMAIL.COM', 5, 2, 8, 'receiving paper', '2015-10-26'),
(7, 'TELA', 'SIEMREAP', 96969696, 'TELA@HOTMAIL.COM', 5, 2, 30, 'YESreceiving paper', '2015-10-26'),
(8, 'nano', 'TAKEO', 11222331, 'nano@gmail.com', 3, 1, 0, 'receiving paper', '2015-10-26'),
(9, 'doll', 'TAKEO', 11222121, 'doll@yahoo.com', 3, 1, 0, 'receiving paper', '2015-10-26'),
(10, 'john', 'KANDAL', 69222333, 'john@ymail.com', 3, 1, 0, 'Attending dinner, receiving paper', '2015-10-26'),
(11, 'vi', 'KANDAL', 12222111, 'limvichet917@gmail.com', 1, 3, 10, 'Attending dinner Receiving paper', '2015-10-26'),
(12, 'smey', 'KANDAL', 70111444, 'smey@everyday.com', 1, 3, 0, 'Attending dinner, receiving paper', '2015-10-26'),
(13, 'vi', 'Pursat', 12856917, 'aseventh@live.com', 2, 1, 1, 'Attending dinner', '2015-11-10'),
(14, 'vi vao', 'siem riep', 12856917, 'ntxtrojan@gmail.com', 2, 1, 1, 'Attending dinner', '2015-11-10'),
(15, 'vi va', 'phnom penh', 12856917, 'ntxtrojan@gmail.com', 2, 1, 1, 'Attending dinner', '2015-11-10'),
(16, 'vo vai', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 1, 'Attending dinner', '2015-11-10'),
(17, 'vo vai', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 1, 'Attending dinner', '2015-11-10'),
(18, 'vo vai', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 1, 'Attending dinner', '2015-11-10'),
(19, 'vo vai', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 1, 'Attending dinner', '2015-11-10'),
(20, 'vo vai', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 1, 'Attending dinner', '2015-11-10'),
(21, 'vo vai', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 1, 'Attending dinner', '2015-11-10'),
(22, 'vo vai', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 1, 'Attending dinner', '2015-11-10'),
(23, 'vo vai', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 1, 'Attending dinner', '2015-11-10'),
(24, 'vo vai', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 1, 'Attending dinner', '2015-11-10'),
(25, 'vo vai', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 1, 'Attending dinner', '2015-11-10'),
(26, 'vo vai', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 1, 'Attending dinner', '2015-11-10'),
(27, 'vo vai', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 1, 'Attending dinner', '2015-11-10'),
(28, 'vo vai', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 1, 'Attending dinner', '2015-11-10'),
(29, 'vo vai', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 1, 'Attending dinner', '2015-11-10'),
(30, 'vo vai', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 1, 'Attending dinner', '2015-11-10'),
(31, 'ya ya', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 11, 'Attending dinner', '2015-11-10'),
(32, 'ya ya', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 11, 'Attending dinner', '2015-11-10'),
(33, 'ya ya', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 11, 'Attending dinner', '2015-11-10'),
(34, 'ya ya', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 11, 'Attending dinner', '2015-11-10'),
(35, 'ya ya', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 11, 'Attending dinner', '2015-11-10'),
(36, 'ya ya', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 11, 'Attending dinner', '2015-11-10'),
(37, 'ya ya', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 11, 'Attending dinner', '2015-11-10'),
(38, 'ya ya', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 11, 'Attending dinner', '2015-11-10'),
(39, 'ya ya', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 11, 'Attending dinner', '2015-11-10'),
(40, 'ya ya', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 11, 'Attending dinner', '2015-11-10'),
(41, 'ya ya', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 11, 'Attending dinner', '2015-11-10'),
(42, 'ya ya', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 11, 'Attending dinner', '2015-11-10'),
(43, 'ya ya', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 11, 'Attending dinner', '2015-11-10'),
(44, 'ya ya', 'phnom penh', 12856917, 'aseventh@live.com', 2, 1, 11, 'Attending dinner', '2015-11-10'),
(45, 'ya yaya', 'phnom penh', 12856917, 'asevent111h@live.com', 2, 1, 11, 'Attending dinner', '2015-11-10'),
(46, 'va vi', 'phnom penh', 12856917, 'liyakonpa@gmail.com', 5, 1, 1, 'Attending dinner', '2015-11-12'),
(47, 'ya vi', 'phnom penh', 12856917, 'liyakonpa1@gmail.com', 5, 1, 1, 'Attending dinner', '2015-11-12'),
(48, 'ya viv', 'phnom penh', 12856917, 'liyakonpa@gmail.com', 5, 1, 1, 'Attending dinner', '2015-11-12'),
(49, 'dada', 'ppppp', 12123123, 'liyak@gmail.com', 2, 1, 1, 'Attending dinner', '2015-11-14'),
(50, 'dadaqq', 'ppppp', 12123123, 'liyakaaa@gmail.com', 2, 1, 1, 'Attending dinner', '2015-11-14');

-- --------------------------------------------------------

--
-- Table structure for table `possitions`
--

CREATE TABLE IF NOT EXISTS `possitions` (
`pid` int(5) NOT NULL,
  `possition` varchar(20) NOT NULL DEFAULT '0'
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `possitions`
--

INSERT INTO `possitions` (`pid`, `possition`) VALUES
(1, 'student'),
(2, 'employee'),
(3, 'teacher'),
(4, 'private'),
(5, 'none');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE IF NOT EXISTS `status` (
`id` int(5) NOT NULL,
  `status` varchar(200) NOT NULL DEFAULT '0',
  `author` int(5) NOT NULL DEFAULT '0'
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `status`, `author`) VALUES
(1, 'Advance Web Develop Advance Web Develop Advance Web Develop', 1),
(2, 'Computer Science Computer Science  Computer Science  Computer Science ', 1),
(3, 'Telecomunicate Telecomunicate Telecomunicate Telecomunicate', 2),
(4, 'Welcome to my net Welcome to my net  Welcome to my net  Welcome to my net ', 3),
(5, 'bless you ', 1),
(6, 'Successfully connected to the database server.\r\n\r\nSuccessfully opened the database.Successfully connected to the database server.\r\n\r\nSuccessfully opened the database.Successfully connected to the data', 3),
(7, 'welcome, Mr. roger..logout...welcome, Mr. roger..logout...welcome, Mr. roger..logout...welcome, Mr. roger..logout...welcome, Mr. roger..logout...welcome, Mr. roger..logout...welcome, Mr. roger..logout', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`uid` int(5) NOT NULL,
  `user` varchar(25) NOT NULL DEFAULT '0'
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `user`) VALUES
(1, 'vi'),
(2, 'roger'),
(3, 'john');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendees`
--
ALTER TABLE `attendees`
 ADD PRIMARY KEY (`atid`);

--
-- Indexes for table `infor`
--
ALTER TABLE `infor`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `possitions`
--
ALTER TABLE `possitions`
 ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendees`
--
ALTER TABLE `attendees`
MODIFY `atid` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `infor`
--
ALTER TABLE `infor`
MODIFY `id` int(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=51;
--
-- AUTO_INCREMENT for table `possitions`
--
ALTER TABLE `possitions`
MODIFY `pid` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
MODIFY `id` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `uid` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
