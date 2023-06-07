-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Խնամորդը՝ localhost:3306
-- Generation Time: Հնս 07, 2023թ. ժ. 10:26
-- Սպասարկչի տարբերակը՝ 5.7.24
-- PHP-ի տարբերակը՝ 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Տվյալների բազան՝ `hyper_site`
--

-- --------------------------------------------------------

--
-- Աղյուսակի կառուցվածքը `data_hyper_site`
--

CREATE TABLE `data_hyper_site` (
  `type` text NOT NULL,
  `find` text NOT NULL,
  `data` text NOT NULL,
  `userName` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `data_hyper_site`
--

INSERT INTO `data_hyper_site` (`type`, `find`, `data`, `userName`) VALUES
('women', 'watches', '[{\'this_name\':\'name\', \'img\':\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XvTRjeslELtVvuiRlHwGKV74kfSALID31g&usqp=CAU\', \'price\':\'1000$\', \'name\':\'Hayk_Antonyan\'}]', 'Hayk_Antonyan'),
('women', 'watches', '[{\'this_name\':\'name\', \'img\':\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XvTRjeslELtVvuiRlHwGKV74kfSALID31g&usqp=CAU\', \'price\':\'1000$\', \'name\':\'Hayk_Antonyan\'}]', 'Tolic_Antonyan'),
('men', 'watches', '[{\'this_name\':\'name\', \'img\':\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XvTRjeslELtVvuiRlHwGKV74kfSALID31g&usqp=CAU\', \'price\':\'1000$\', \'name\':\'Hayk_Antonyan\'}]', 'Hayk_Antonyan'),
('kids', 'watches', '[{\'this_name\':\'name\', \'img\':\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XvTRjeslELtVvuiRlHwGKV74kfSALID31g&usqp=CAU\', \'price\':\'1000$\', \'name\':\'Hayk_Antonyan\'}]', 'Kid');

-- --------------------------------------------------------

--
-- Աղյուսակի կառուցվածքը `data_users`
--

CREATE TABLE `data_users` (
  `userName` text NOT NULL,
  `userPassword` text NOT NULL,
  `userPost` text NOT NULL,
  `userAddToCart` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
