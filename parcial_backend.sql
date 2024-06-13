-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-06-2024 a las 02:35:02
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `parcial_backend`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `precio` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `cantidad`, `categoria`, `createdAt`, `updatedAt`) VALUES
(5, 'Monitor LED', 150, 30, 'Electrónica', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Teclado Mecánico', 100, 50, 'Electrónica', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Ratón Inalámbrico', 25, 70, 'Electrónica', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Silla Ergonómica', 200, 20, 'Muebles', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'Escritorio de Oficina', 300, 10, 'Muebles', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'Lámpara de Escritorio', 40, 60, 'Iluminación', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'Altavoces Bluetooth', 120, 40, 'Electrónica', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'Cámara Web HD', 80, 35, 'Electrónica', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'Impresora Láser', 250, 15, 'Oficina', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'Estante para Libros', 75, 25, 'Muebles', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
