/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:33061
 Source Schema         : db_controlestacionamiento

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 24/08/2021 18:38:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sys_ta_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_ta_menu`;
CREATE TABLE `sys_ta_menu` (
  `id_menu` int NOT NULL AUTO_INCREMENT,
  `nombre_menu` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `url_menu` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `orden_menu` int DEFAULT NULL,
  `id_menu_depende` int DEFAULT NULL,
  `estado_menu` int DEFAULT NULL,
  `background_menu` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `nombre_menu_aux` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_menu`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- ----------------------------
-- Records of sys_ta_menu
-- ----------------------------
BEGIN;
INSERT INTO `sys_ta_menu` VALUES (1, 'Inicio', '#/inicio', 1, 0, 1, NULL, 'Inicio');
INSERT INTO `sys_ta_menu` VALUES (2, 'Ingreso Vehículo', '#/ingresoVehiculo', 2, 0, 1, 'background-color:#0a1f87', 'Ingreso Vehiculo');
INSERT INTO `sys_ta_menu` VALUES (3, 'Buscar Ticket', '#/buscarTicket', 3, 0, 1, 'background-color:#a20101', 'Buscar Ticket');
INSERT INTO `sys_ta_menu` VALUES (4, 'Administración', '#/administracion', 4, 0, 1, 'background-color:#0c6027', 'Administracion');
INSERT INTO `sys_ta_menu` VALUES (5, 'Usuarios', '#/usuarios', 5, 3, 1, NULL, 'Usuarios');
INSERT INTO `sys_ta_menu` VALUES (6, 'Estacionamientos', '#/estacionamientos', 6, 3, 1, NULL, 'Estacionamientos');
INSERT INTO `sys_ta_menu` VALUES (7, 'Cerrar Sesión', '#/login', 7, 0, 1, 'background-color:#5a615c', 'Cerrar Sesion');
COMMIT;

-- ----------------------------
-- Table structure for sys_ta_menu_copy1
-- ----------------------------
DROP TABLE IF EXISTS `sys_ta_menu_copy1`;
CREATE TABLE `sys_ta_menu_copy1` (
  `id_menu` int NOT NULL AUTO_INCREMENT,
  `nombre_menu` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `url_menu` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `orden_menu` int DEFAULT NULL,
  `id_menu_depende` int DEFAULT NULL,
  `estado_menu` int DEFAULT NULL,
  PRIMARY KEY (`id_menu`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- ----------------------------
-- Records of sys_ta_menu_copy1
-- ----------------------------
BEGIN;
INSERT INTO `sys_ta_menu_copy1` VALUES (1, 'Administración', NULL, 4, 0, 1);
INSERT INTO `sys_ta_menu_copy1` VALUES (2, 'Usuarios', '#/usuarios', 5, 1, 1);
INSERT INTO `sys_ta_menu_copy1` VALUES (3, 'Bitácora de Sistema', '#/bitacora', 6, 1, 0);
INSERT INTO `sys_ta_menu_copy1` VALUES (4, 'Eventos', '#/eventos', 1, 0, 1);
INSERT INTO `sys_ta_menu_copy1` VALUES (5, 'Consultas', '#/consultas', 2, 0, 0);
INSERT INTO `sys_ta_menu_copy1` VALUES (6, 'Cambio de Clave', '#/cambioclave', 3, 0, 1);
INSERT INTO `sys_ta_menu_copy1` VALUES (7, 'Grupo o Zonas', '#/grupos', 7, 1, 1);
INSERT INTO `sys_ta_menu_copy1` VALUES (8, 'Files', '#/files', 8, 1, 1);
COMMIT;

-- ----------------------------
-- Table structure for sys_ta_perfil
-- ----------------------------
DROP TABLE IF EXISTS `sys_ta_perfil`;
CREATE TABLE `sys_ta_perfil` (
  `id_perfil` int NOT NULL AUTO_INCREMENT,
  `nombre_perfil` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcion_perfil` varchar(200) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `estado_perfil` int DEFAULT NULL,
  PRIMARY KEY (`id_perfil`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- ----------------------------
-- Records of sys_ta_perfil
-- ----------------------------
BEGIN;
INSERT INTO `sys_ta_perfil` VALUES (1, 'ADMINISTRADOR', NULL, 1);
INSERT INTO `sys_ta_perfil` VALUES (2, 'USUARIO', NULL, 1);
COMMIT;

-- ----------------------------
-- Table structure for sys_ta_perfil_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_ta_perfil_menu`;
CREATE TABLE `sys_ta_perfil_menu` (
  `id_perfil_menu` int NOT NULL AUTO_INCREMENT,
  `perfil_id_perfil` int NOT NULL,
  `menu_id_menu` int NOT NULL,
  `estado_perfil_menu` int DEFAULT NULL,
  PRIMARY KEY (`id_perfil_menu`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- ----------------------------
-- Records of sys_ta_perfil_menu
-- ----------------------------
BEGIN;
INSERT INTO `sys_ta_perfil_menu` VALUES (1, 1, 1, 1);
INSERT INTO `sys_ta_perfil_menu` VALUES (2, 1, 2, 1);
INSERT INTO `sys_ta_perfil_menu` VALUES (3, 1, 3, 1);
INSERT INTO `sys_ta_perfil_menu` VALUES (4, 1, 4, 1);
INSERT INTO `sys_ta_perfil_menu` VALUES (5, 1, 5, 1);
INSERT INTO `sys_ta_perfil_menu` VALUES (6, 1, 6, 1);
INSERT INTO `sys_ta_perfil_menu` VALUES (7, 1, 7, 1);
INSERT INTO `sys_ta_perfil_menu` VALUES (8, 2, 1, 1);
INSERT INTO `sys_ta_perfil_menu` VALUES (9, 2, 2, 1);
INSERT INTO `sys_ta_perfil_menu` VALUES (10, 2, 3, 0);
INSERT INTO `sys_ta_perfil_menu` VALUES (11, 2, 4, 0);
INSERT INTO `sys_ta_perfil_menu` VALUES (12, 2, 5, 0);
INSERT INTO `sys_ta_perfil_menu` VALUES (13, 2, 6, 0);
INSERT INTO `sys_ta_perfil_menu` VALUES (14, 2, 7, 1);
COMMIT;

-- ----------------------------
-- Table structure for sys_ta_perfil_roles
-- ----------------------------
DROP TABLE IF EXISTS `sys_ta_perfil_roles`;
CREATE TABLE `sys_ta_perfil_roles` (
  `id_perfil_rol` int NOT NULL AUTO_INCREMENT,
  `perfil_id_perfil` int NOT NULL,
  `roles_id_rol` int NOT NULL,
  `estado_perfil_rol` int DEFAULT NULL,
  PRIMARY KEY (`id_perfil_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- ----------------------------
-- Records of sys_ta_perfil_roles
-- ----------------------------
BEGIN;
INSERT INTO `sys_ta_perfil_roles` VALUES (1, 1, 1, 1);
INSERT INTO `sys_ta_perfil_roles` VALUES (2, 1, 2, 1);
INSERT INTO `sys_ta_perfil_roles` VALUES (3, 1, 3, 1);
INSERT INTO `sys_ta_perfil_roles` VALUES (4, 1, 4, 1);
INSERT INTO `sys_ta_perfil_roles` VALUES (5, 1, 5, 1);
INSERT INTO `sys_ta_perfil_roles` VALUES (6, 1, 6, 1);
INSERT INTO `sys_ta_perfil_roles` VALUES (7, 1, 7, 1);
INSERT INTO `sys_ta_perfil_roles` VALUES (8, 1, 8, 1);
INSERT INTO `sys_ta_perfil_roles` VALUES (9, 2, 1, 0);
INSERT INTO `sys_ta_perfil_roles` VALUES (10, 2, 2, 0);
INSERT INTO `sys_ta_perfil_roles` VALUES (11, 2, 3, 0);
INSERT INTO `sys_ta_perfil_roles` VALUES (12, 2, 4, 0);
INSERT INTO `sys_ta_perfil_roles` VALUES (13, 2, 5, 1);
INSERT INTO `sys_ta_perfil_roles` VALUES (14, 2, 6, 1);
INSERT INTO `sys_ta_perfil_roles` VALUES (15, 2, 7, 1);
INSERT INTO `sys_ta_perfil_roles` VALUES (16, 2, 8, 1);
COMMIT;

-- ----------------------------
-- Table structure for sys_ta_recursos_sistema
-- ----------------------------
DROP TABLE IF EXISTS `sys_ta_recursos_sistema`;
CREATE TABLE `sys_ta_recursos_sistema` (
  `id_recurso_sistema` int NOT NULL AUTO_INCREMENT,
  `tipo_recurso_sistema` varchar(50) DEFAULT NULL,
  `referencia_objeto` varchar(50) DEFAULT NULL,
  `id_referencia_objeto` varchar(50) DEFAULT NULL,
  `id_depende_recurso_sistema` int DEFAULT NULL,
  `estado_recurso_sistema` int DEFAULT NULL,
  PRIMARY KEY (`id_recurso_sistema`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of sys_ta_recursos_sistema
-- ----------------------------
BEGIN;
INSERT INTO `sys_ta_recursos_sistema` VALUES (1, 'EVENTOS', NULL, NULL, 0, 1);
INSERT INTO `sys_ta_recursos_sistema` VALUES (2, 'USUARIOS', NULL, NULL, 0, 1);
COMMIT;

-- ----------------------------
-- Table structure for sys_ta_roles
-- ----------------------------
DROP TABLE IF EXISTS `sys_ta_roles`;
CREATE TABLE `sys_ta_roles` (
  `id_rol` int NOT NULL AUTO_INCREMENT,
  `nombre_rol` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `recurso_sistema_id_recurso_sistema` int DEFAULT NULL,
  `estado_rol` int DEFAULT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- ----------------------------
-- Records of sys_ta_roles
-- ----------------------------
BEGIN;
INSERT INTO `sys_ta_roles` VALUES (1, 'CREAR USUARIOS', 2, 1);
INSERT INTO `sys_ta_roles` VALUES (2, 'EDITAR USUARIOS', 2, 1);
INSERT INTO `sys_ta_roles` VALUES (3, 'ELIMINAR USUARIOS', 2, 1);
INSERT INTO `sys_ta_roles` VALUES (4, 'LISTAR USUARIOS', 2, 1);
INSERT INTO `sys_ta_roles` VALUES (5, 'CREAR EVENTOS', 1, 1);
INSERT INTO `sys_ta_roles` VALUES (6, 'EDITAR EVENTOS', 1, 1);
INSERT INTO `sys_ta_roles` VALUES (7, 'ELIMINAR EVENTOS', 1, 1);
INSERT INTO `sys_ta_roles` VALUES (8, 'LISTAR EVENTOS', 1, 1);
COMMIT;

-- ----------------------------
-- Table structure for ta_bitacora
-- ----------------------------
DROP TABLE IF EXISTS `ta_bitacora`;
CREATE TABLE `ta_bitacora` (
  `id_bitacora` int NOT NULL AUTO_INCREMENT,
  `rut_usuario_bitacora` varchar(15) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `dv_usuario_bitacora` varchar(1) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `date_time_bitacora` datetime DEFAULT NULL,
  `evento_etapa_bitacora` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcion_bitacora` text CHARACTER SET utf8 COLLATE utf8_spanish_ci,
  `sql_bitacora` text CHARACTER SET utf8 COLLATE utf8_spanish_ci,
  `ips_acceso_bitacora` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `marca_bitacora` char(2) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `estado_bitacora` int DEFAULT NULL,
  `id_centro_operacion` int DEFAULT NULL,
  PRIMARY KEY (`id_bitacora`)
) ENGINE=InnoDB AUTO_INCREMENT=444 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- ----------------------------
-- Records of ta_bitacora
-- ----------------------------
BEGIN;
INSERT INTO `ta_bitacora` VALUES (2, '11111111', '1', '2018-09-06 04:16:39', 'INICIO SESION', 'INGRESO AL SISTEMA', 'USER: 11111111', '172.16.13.1', NULL, 1, NULL);
INSERT INTO `ta_bitacora` VALUES (3, '15215890', '4', '2018-09-06 04:17:01', 'INICIO SESION', 'INGRESO AL SISTEMA', 'USER: 15215890', '172.16.13.1', NULL, 1, NULL);
INSERT INTO `ta_bitacora` VALUES (4, '15215890', '4', '2018-09-06 04:19:34', 'CAMBIO DE CLAVE', 'USUARIO HACE CAMBIO DE CONTRASEÑA', 'CAMBIO CONTRASEÑA: 15215890', '172.16.13.1', NULL, 1, NULL);
INSERT INTO `ta_bitacora` VALUES (5, '15215890', '4', '2018-09-06 04:19:51', 'INICIO SESION', 'INGRESO AL SISTEMA', 'USER: 15215890', '172.16.13.1', NULL, 1, NULL);
INSERT INTO `ta_bitacora` VALUES (6, '15215890', '4', '2018-09-06 04:20:18', 'CAMBIO DE CLAVE', 'USUARIO HACE CAMBIO DE CONTRASEÑA', 'CAMBIO CONTRASEÑA: 15215890', '172.16.13.1', NULL, 1, NULL);
INSERT INTO `ta_bitacora` VALUES (7, '15215890', '4', '2018-09-06 04:20:22', 'INICIO SESION', 'INGRESO AL SISTEMA', 'USER: 15215890', '172.16.13.1', NULL, 1, NULL);
INSERT INTO `ta_bitacora` VALUES (8, '15215890', '4', '2018-09-06 12:18:57', 'INICIO SESION', 'INGRESO AL SISTEMA', 'USER: 15215890', '172.16.13.1', NULL, 1, NULL);
INSERT INTO `ta_bitacora` VALUES (9, '15215890', '4', '2018-09-06 13:01:29', 'INICIO SESION', 'INGRESO AL SISTEMA', 'USER: 15215890', '172.16.13.1', NULL, 1, NULL);
INSERT INTO `ta_bitacora` VALUES (10, '15215890', '4', '2018-09-06 14:38:49', 'CAMBIO DE CLAVE', 'USUARIO HACE CAMBIO DE CONTRASEÑA', 'CAMBIO CONTRASEÑA: 15215890', '172.16.13.1', NULL, 1, NULL);
COMMIT;

-- ----------------------------
-- Table structure for ta_centro_operacion
-- ----------------------------
DROP TABLE IF EXISTS `ta_centro_operacion`;
CREATE TABLE `ta_centro_operacion` (
  `id_centro_operacion` int NOT NULL AUTO_INCREMENT,
  `nombre_centro_operacion` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `sigla_centro_operacion` varchar(25) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `id_depende_centro_operacion` int DEFAULT NULL,
  `estructura_id_estructura_centro_operacion` int DEFAULT NULL,
  `estado_centro_operacion` int DEFAULT NULL,
  PRIMARY KEY (`id_centro_operacion`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- ----------------------------
-- Records of ta_centro_operacion
-- ----------------------------
BEGIN;
INSERT INTO `ta_centro_operacion` VALUES (1, 'ARAUCO 842', NULL, 0, 1, 1);
INSERT INTO `ta_centro_operacion` VALUES (2, '18 DE SEPTIEMBRE 1235', NULL, 0, 1, 1);
COMMIT;

-- ----------------------------
-- Table structure for ta_estructura_centro_operacion
-- ----------------------------
DROP TABLE IF EXISTS `ta_estructura_centro_operacion`;
CREATE TABLE `ta_estructura_centro_operacion` (
  `id_estructura_centro_operacion` int NOT NULL AUTO_INCREMENT,
  `nombre_estructura_centro_operacion` varchar(50) DEFAULT NULL,
  `estado_estructura_centro_operacion` int DEFAULT NULL,
  PRIMARY KEY (`id_estructura_centro_operacion`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of ta_estructura_centro_operacion
-- ----------------------------
BEGIN;
INSERT INTO `ta_estructura_centro_operacion` VALUES (1, 'ESTACIONAMIENTOS', 1);
COMMIT;

-- ----------------------------
-- Table structure for ta_ingreso_vehiculo
-- ----------------------------
DROP TABLE IF EXISTS `ta_ingreso_vehiculo`;
CREATE TABLE `ta_ingreso_vehiculo` (
  `id_ingreso` int NOT NULL AUTO_INCREMENT,
  `fecha_ingreso` date DEFAULT NULL,
  `hora_ingreso` time DEFAULT NULL,
  `id_centro_operacion` int DEFAULT NULL,
  `patente_ingreso` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha_hora_creacion` datetime DEFAULT NULL,
  `fecha_hora_ultima_modificacion` datetime DEFAULT NULL,
  `estado_ingreso` int DEFAULT NULL,
  PRIMARY KEY (`id_ingreso`) USING BTREE,
  KEY `id_ingreso_index` (`id_ingreso`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- ----------------------------
-- Records of ta_ingreso_vehiculo
-- ----------------------------
BEGIN;
INSERT INTO `ta_ingreso_vehiculo` VALUES (1, '2020-08-05', '00:00:00', 1, 'GSGJ53', '2020-08-05 08:07:31', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (2, '2020-08-05', '13:57:00', 1, 'ascasd', '2020-08-05 10:55:34', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (3, '2020-08-05', '14:00:00', 1, 'asdads', '2020-08-05 10:57:43', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (4, '2020-08-05', '14:00:00', 1, 'adasd', '2020-08-05 10:58:00', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (5, '2020-08-05', '14:00:00', 1, 'adasd', '2020-08-05 10:58:05', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (6, '2020-08-05', '14:00:00', 1, 'cbdfgdg', '2020-08-05 10:58:28', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (7, '2020-08-05', '14:01:00', 1, 'ASDASD', '2020-08-05 10:59:29', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (8, '2020-08-05', '14:02:21', 1, 'ADADS', '2020-08-05 11:00:08', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (9, '2020-08-05', '14:03:56', 1, 'SDFSFS', '2020-08-05 11:07:08', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (10, '2020-08-05', '22:57:34', 1, 'HFHJ', '2020-08-05 19:55:37', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (11, '2020-08-05', '22:57:37', 1, 'AA4567', '2020-08-05 19:55:47', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (12, '2020-08-07', '15:34:26', 1, 'SDFSDF', '2020-08-07 12:32:16', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (13, '2020-08-08', '12:10:10', 1, 'SSDFS', '2020-08-08 09:07:52', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (14, '2020-08-08', '12:17:28', 1, 'DSSDW', '2020-08-08 09:15:09', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (15, '2020-08-10', '21:43:04', 1, 'GJGS53', '2020-08-10 18:40:52', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (16, '2020-08-10', '22:12:25', 1, 'GFTY55', '2020-08-10 19:10:36', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (17, '2020-08-10', '22:13:12', 1, 'TYFF77', '2020-08-10 19:10:56', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (18, '2020-08-10', '22:15:14', 1, 'HGYU55', '2020-08-10 19:13:10', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (19, '2020-08-10', '22:16:20', 2, 'FGYT66', '2020-08-10 19:14:11', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (20, '2020-08-11', '09:36:22', 1, 'SDFSD', '2020-08-11 06:34:15', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (21, '2020-08-11', '11:54:06', 2, 'FDSFSDF', '2020-08-11 08:51:50', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (22, '2020-08-12', '00:23:51', 1, 'DASDASDA', '2020-08-11 21:21:37', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (23, '2020-08-12', '07:38:27', 1, 'HYZH85', '2020-08-12 04:36:21', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (24, '2020-08-12', '18:06:33', 1, 'HDFHFH', '2020-08-12 15:04:18', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (25, '2020-08-12', '18:07:26', 2, 'HFHHGHJ', '2020-08-12 15:05:11', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (26, '2020-10-21', '13:01:38', 1, 'SFSFSD', '2020-10-21 09:59:05', NULL, 1);
INSERT INTO `ta_ingreso_vehiculo` VALUES (27, '2021-08-20', '18:17:43', 1, 'ZZ5289', '2021-08-20 18:17:50', NULL, 1);
COMMIT;

-- ----------------------------
-- Table structure for ta_usuario_centro_operacion
-- ----------------------------
DROP TABLE IF EXISTS `ta_usuario_centro_operacion`;
CREATE TABLE `ta_usuario_centro_operacion` (
  `id_usuario_centro_operacion` int NOT NULL AUTO_INCREMENT,
  `usuario_id_usuario_perfil` int DEFAULT NULL,
  `centro_operacion_id_centro_operacion` int DEFAULT NULL,
  `estado_usuario_centro_operacion` int DEFAULT NULL,
  PRIMARY KEY (`id_usuario_centro_operacion`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of ta_usuario_centro_operacion
-- ----------------------------
BEGIN;
INSERT INTO `ta_usuario_centro_operacion` VALUES (1, 1, 1, 1);
INSERT INTO `ta_usuario_centro_operacion` VALUES (2, 1, 2, 1);
INSERT INTO `ta_usuario_centro_operacion` VALUES (3, 2, 1, 1);
INSERT INTO `ta_usuario_centro_operacion` VALUES (4, 2, 2, 0);
INSERT INTO `ta_usuario_centro_operacion` VALUES (5, 3, 1, 1);
INSERT INTO `ta_usuario_centro_operacion` VALUES (6, 3, 2, 0);
INSERT INTO `ta_usuario_centro_operacion` VALUES (7, 4, 1, 1);
INSERT INTO `ta_usuario_centro_operacion` VALUES (8, 4, 2, 1);
COMMIT;

-- ----------------------------
-- Table structure for ta_usuario_menu
-- ----------------------------
DROP TABLE IF EXISTS `ta_usuario_menu`;
CREATE TABLE `ta_usuario_menu` (
  `id_usuario_menu` int NOT NULL AUTO_INCREMENT,
  `usuario_perfiles_id_usuario_perfil` int NOT NULL,
  `menu_id_menu` int NOT NULL,
  `estado_usuario_menu` int DEFAULT NULL,
  PRIMARY KEY (`id_usuario_menu`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- ----------------------------
-- Records of ta_usuario_menu
-- ----------------------------
BEGIN;
INSERT INTO `ta_usuario_menu` VALUES (1, 1, 1, 1);
INSERT INTO `ta_usuario_menu` VALUES (2, 1, 2, 1);
INSERT INTO `ta_usuario_menu` VALUES (3, 1, 3, 1);
INSERT INTO `ta_usuario_menu` VALUES (4, 1, 4, 1);
INSERT INTO `ta_usuario_menu` VALUES (5, 1, 5, 1);
INSERT INTO `ta_usuario_menu` VALUES (6, 1, 6, 1);
INSERT INTO `ta_usuario_menu` VALUES (7, 1, 7, 1);
INSERT INTO `ta_usuario_menu` VALUES (8, 2, 1, 1);
INSERT INTO `ta_usuario_menu` VALUES (9, 2, 2, 1);
INSERT INTO `ta_usuario_menu` VALUES (10, 2, 3, 1);
INSERT INTO `ta_usuario_menu` VALUES (11, 2, 4, 0);
INSERT INTO `ta_usuario_menu` VALUES (12, 2, 5, 0);
INSERT INTO `ta_usuario_menu` VALUES (13, 2, 6, 0);
INSERT INTO `ta_usuario_menu` VALUES (14, 2, 7, 1);
INSERT INTO `ta_usuario_menu` VALUES (15, 3, 1, 1);
INSERT INTO `ta_usuario_menu` VALUES (16, 3, 2, 1);
INSERT INTO `ta_usuario_menu` VALUES (17, 3, 3, 1);
INSERT INTO `ta_usuario_menu` VALUES (18, 3, 4, 0);
INSERT INTO `ta_usuario_menu` VALUES (19, 3, 5, 0);
INSERT INTO `ta_usuario_menu` VALUES (20, 3, 6, 0);
INSERT INTO `ta_usuario_menu` VALUES (21, 3, 7, 1);
INSERT INTO `ta_usuario_menu` VALUES (22, 4, 1, 1);
INSERT INTO `ta_usuario_menu` VALUES (23, 4, 2, 1);
INSERT INTO `ta_usuario_menu` VALUES (24, 4, 3, 1);
INSERT INTO `ta_usuario_menu` VALUES (25, 4, 4, 1);
INSERT INTO `ta_usuario_menu` VALUES (26, 4, 5, 1);
INSERT INTO `ta_usuario_menu` VALUES (27, 4, 6, 1);
INSERT INTO `ta_usuario_menu` VALUES (28, 4, 7, 1);
COMMIT;

-- ----------------------------
-- Table structure for ta_usuario_perfiles
-- ----------------------------
DROP TABLE IF EXISTS `ta_usuario_perfiles`;
CREATE TABLE `ta_usuario_perfiles` (
  `id_usuario_perfil` int NOT NULL AUTO_INCREMENT,
  `usuarios_id_usuario` int NOT NULL,
  `perfil_id_perfil` int NOT NULL,
  `fecha_habilitacion` date DEFAULT NULL,
  `fecha_deshabilitacion` date DEFAULT NULL,
  `estado_usuario_perfil` int DEFAULT NULL,
  PRIMARY KEY (`id_usuario_perfil`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- ----------------------------
-- Records of ta_usuario_perfiles
-- ----------------------------
BEGIN;
INSERT INTO `ta_usuario_perfiles` VALUES (1, 1, 1, NULL, NULL, 1);
INSERT INTO `ta_usuario_perfiles` VALUES (2, 2, 2, NULL, NULL, 1);
INSERT INTO `ta_usuario_perfiles` VALUES (3, 3, 2, NULL, NULL, 1);
INSERT INTO `ta_usuario_perfiles` VALUES (4, 4, 1, NULL, NULL, 1);
COMMIT;

-- ----------------------------
-- Table structure for ta_usuario_roles
-- ----------------------------
DROP TABLE IF EXISTS `ta_usuario_roles`;
CREATE TABLE `ta_usuario_roles` (
  `id_rol_usuario` int NOT NULL AUTO_INCREMENT,
  `usuario_perfiles_id_usuario_perfil` int NOT NULL,
  `roles_id_rol` int NOT NULL,
  `estado_rol_usuario` int DEFAULT NULL,
  PRIMARY KEY (`id_rol_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- ----------------------------
-- Records of ta_usuario_roles
-- ----------------------------
BEGIN;
INSERT INTO `ta_usuario_roles` VALUES (1, 1, 1, 1);
INSERT INTO `ta_usuario_roles` VALUES (2, 1, 2, 1);
INSERT INTO `ta_usuario_roles` VALUES (3, 1, 3, 1);
INSERT INTO `ta_usuario_roles` VALUES (4, 1, 4, 1);
INSERT INTO `ta_usuario_roles` VALUES (5, 1, 5, 1);
INSERT INTO `ta_usuario_roles` VALUES (6, 1, 6, 1);
INSERT INTO `ta_usuario_roles` VALUES (7, 1, 7, 1);
INSERT INTO `ta_usuario_roles` VALUES (8, 1, 8, 1);
COMMIT;

-- ----------------------------
-- Table structure for ta_usuarios
-- ----------------------------
DROP TABLE IF EXISTS `ta_usuarios`;
CREATE TABLE `ta_usuarios` (
  `id_usua` int NOT NULL AUTO_INCREMENT,
  `rut_usua` longblob,
  `dv_usua` longblob,
  `nombres_usua` longblob,
  `apPaterno_usua` longblob,
  `apMaterno_usua` longblob,
  `password_usua` longblob,
  `email_usua` longblob,
  `create_date_time_usuario` datetime DEFAULT NULL,
  `estado_usua` int DEFAULT NULL,
  PRIMARY KEY (`id_usua`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- ----------------------------
-- Records of ta_usuarios
-- ----------------------------
BEGIN;
INSERT INTO `ta_usuarios` VALUES (1, 0xAA0218A53BC75E617062DB389DB73BAA, 0xD7288DBEB7E3F45EA82BCBAB826FDDD7, 0xAB89E04A343DC3844A0348E145BF056A, 0x7BFB1E534316FBA20CCDD57E24F756EA, 0x66DA8988EE51A36FC7391FBA29C11209, 0x1FC96A0E35FB39C36B5AD6EA9DC74426, 0x0880868F739C781754A40392C7B4325CD69DAF021C9F5D51F7C9CDE67731F8C2, '2018-07-27 15:37:15', 1);
INSERT INTO `ta_usuarios` VALUES (2, 0x0B2A1A12CEEC4D0C28D6D1A9A7867FD6, 0xE1AEC039BDB06A4748706326528835A9, 0x47BD5A68C2ED1D1133521B99F4FD765A, 0x9CEFEB0A58824A722095BAB0EB2492E9, 0x9CEFEB0A58824A722095BAB0EB2492E9, 0x1FC96A0E35FB39C36B5AD6EA9DC74426, 0x3804E6D1BE4DF0CBE9234BF6245137E712504742BAF507279942D61CBDB85BE1, '2018-08-21 09:06:02', 1);
INSERT INTO `ta_usuarios` VALUES (3, 0x8720FA3969AE8B035481D6608245987F, 0xD7288DBEB7E3F45EA82BCBAB826FDDD7, 0xDA244FF856DB729EB4718E53ED5F28960A152ECBB7ED40B4DA972209BA9CE5A8, 0xA1E9B893DA37C47EBD668580286B0889, 0x9C500012FBE5092BEFE3513423B301CA, 0x1FC96A0E35FB39C36B5AD6EA9DC74426, 0x97F6BF3CEB0D3A53923B1116F532F9F557AE56DBFA7BB869D5CE7B92040E71B6, '2020-08-10 19:22:08', 1);
INSERT INTO `ta_usuarios` VALUES (4, 0x45B21991C51183D5A70F0E966F442D95, 0x4420D2E1597BD98D94BD198ABE6EDA46, 0x76979F181B3771623E01934E6AB788E6, 0xA1E9B893DA37C47EBD668580286B0889, 0x1547E73201E9E5559777A5B8062A9029, 0x1FC96A0E35FB39C36B5AD6EA9DC74426, 0x766E189BC6720523D0F9C1F5E48799B380DB59FE7EB7A52D40D05D0768A86AFF, '2020-08-11 06:27:37', 1);
COMMIT;

-- ----------------------------
-- View structure for vw_listar_ingresos
-- ----------------------------
DROP VIEW IF EXISTS `vw_listar_ingresos`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `vw_listar_ingresos` AS select `ta_ingreso_vehiculo`.`id_ingreso` AS `id_ingreso`,`ta_ingreso_vehiculo`.`fecha_ingreso` AS `fecha_ingreso`,`ta_ingreso_vehiculo`.`hora_ingreso` AS `hora_ingreso`,`ta_ingreso_vehiculo`.`id_centro_operacion` AS `id_centro_operacion`,`ta_ingreso_vehiculo`.`patente_ingreso` AS `patente_ingreso`,`ta_ingreso_vehiculo`.`fecha_hora_creacion` AS `fecha_hora_creacion`,`ta_ingreso_vehiculo`.`fecha_hora_ultima_modificacion` AS `fecha_hora_ultima_modificacion`,`ta_ingreso_vehiculo`.`estado_ingreso` AS `estado_ingreso`,`ta_centro_operacion`.`nombre_centro_operacion` AS `nombre_centro_operacion` from (`ta_ingreso_vehiculo` join `ta_centro_operacion` on((`ta_ingreso_vehiculo`.`id_centro_operacion` = `ta_centro_operacion`.`id_centro_operacion`)));

-- ----------------------------
-- View structure for vw_listar_perfiles
-- ----------------------------
DROP VIEW IF EXISTS `vw_listar_perfiles`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `vw_listar_perfiles` AS select `sys_ta_perfil`.`id_perfil` AS `id_perfil`,`sys_ta_perfil`.`nombre_perfil` AS `nombre_perfil`,`sys_ta_perfil`.`descripcion_perfil` AS `descripcion_perfil`,`sys_ta_perfil`.`estado_perfil` AS `estado_perfil` from `sys_ta_perfil`;

-- ----------------------------
-- View structure for vw_listar_usuario_perfil
-- ----------------------------
DROP VIEW IF EXISTS `vw_listar_usuario_perfil`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `vw_listar_usuario_perfil` AS select `ta_usuarios`.`id_usua` AS `id_usua`,aes_decrypt(`ta_usuarios`.`rut_usua`,'0000') AS `rut_usua`,aes_decrypt(`ta_usuarios`.`dv_usua`,'0000') AS `dv_usua`,aes_decrypt(`ta_usuarios`.`password_usua`,'0000') AS `password_usua`,aes_decrypt(`ta_usuarios`.`email_usua`,'0000') AS `email_usua`,`ta_usuarios`.`estado_usua` AS `estado_usua`,`sys_ta_perfil`.`nombre_perfil` AS `nombre_perfil`,`ta_usuario_perfiles`.`perfil_id_perfil` AS `perfil_id_perfil`,`ta_usuario_perfiles`.`estado_usuario_perfil` AS `estado_usuario_perfil` from ((`ta_usuarios` join `ta_usuario_perfiles` on((`ta_usuarios`.`id_usua` = `ta_usuario_perfiles`.`usuarios_id_usuario`))) join `sys_ta_perfil` on((`sys_ta_perfil`.`id_perfil` = `ta_usuario_perfiles`.`perfil_id_perfil`)));

-- ----------------------------
-- View structure for vw_listar_usuarios
-- ----------------------------
DROP VIEW IF EXISTS `vw_listar_usuarios`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `vw_listar_usuarios` AS select `ta_usuarios`.`id_usua` AS `id_usua`,convert(aes_decrypt(`ta_usuarios`.`rut_usua`,'0000') using utf8) AS `rut_usua`,convert(aes_decrypt(`ta_usuarios`.`dv_usua`,'0000') using utf8) AS `dv_usua`,convert(aes_decrypt(`ta_usuarios`.`password_usua`,'0000') using utf8) AS `password_usua`,convert(aes_decrypt(`ta_usuarios`.`nombres_usua`,'0000') using utf8) AS `nombres`,convert(aes_decrypt(`ta_usuarios`.`apPaterno_usua`,'0000') using utf8) AS `ap_paterno`,convert(aes_decrypt(`ta_usuarios`.`apMaterno_usua`,'0000') using utf8) AS `ap_materno`,convert(aes_decrypt(`ta_usuarios`.`email_usua`,'0000') using utf8) AS `email_usua`,`ta_usuarios`.`estado_usua` AS `estado_usua`,(case when (`ta_usuarios`.`estado_usua` = 1) then 'ACTIVO' else 'INACTIVO' end) AS `estado_usuario`,`ta_usuario_perfiles`.`perfil_id_perfil` AS `perfil_id_perfil`,`sys_ta_perfil`.`nombre_perfil` AS `nombre_perfil`,`ta_usuario_perfiles`.`id_usuario_perfil` AS `id_usuario_perfil` from ((`ta_usuarios` left join `ta_usuario_perfiles` on(((`ta_usuarios`.`id_usua` = `ta_usuario_perfiles`.`usuarios_id_usuario`) and (`ta_usuario_perfiles`.`estado_usuario_perfil` = 1)))) left join `sys_ta_perfil` on((`ta_usuario_perfiles`.`perfil_id_perfil` = `sys_ta_perfil`.`id_perfil`)));

-- ----------------------------
-- View structure for vw_nombre_usuario_perfil
-- ----------------------------
DROP VIEW IF EXISTS `vw_nombre_usuario_perfil`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `vw_nombre_usuario_perfil` AS select `sys_ta_perfil`.`id_perfil` AS `id_perfil`,`sys_ta_perfil`.`nombre_perfil` AS `nombre_perfil`,`sys_ta_perfil`.`estado_perfil` AS `estado_perfil`,`ta_usuarios`.`id_usua` AS `id_usua`,aes_decrypt(`ta_usuarios`.`rut_usua`,'0000') AS `rut_usua`,aes_decrypt(`ta_usuarios`.`dv_usua`,'0000') AS `dv_usua` from ((`ta_usuarios` join `sys_ta_perfil`) join `ta_usuario_perfiles`) where ((`ta_usuarios`.`id_usua` = `ta_usuario_perfiles`.`usuarios_id_usuario`) and (`ta_usuario_perfiles`.`perfil_id_perfil` = `sys_ta_perfil`.`id_perfil`) and (`ta_usuario_perfiles`.`estado_usuario_perfil` = 1));

-- ----------------------------
-- Procedure structure for spr_ingresoVehiculo_insert
-- ----------------------------
DROP PROCEDURE IF EXISTS `spr_ingresoVehiculo_insert`;
delimiter ;;
CREATE PROCEDURE `db_controlestacionamiento`.`spr_ingresoVehiculo_insert`(IN param_idCentroOperacion INT
								 ,IN param_fechaEvento DATE
								 ,IN param_horaEvento TIME
								 ,IN param_patente varchar(50)
								
								 ,in param_rut varchar(15)
								 ,in param_ip varchar(15)
								
								 ,OUT id INT)
BEGIN
	-- DECLARE consultaSqlBitacora TEXT;
	
	SET id=0;
	
	INSERT INTO ta_ingreso_vehiculo(
					fecha_ingreso
					,hora_ingreso
					,id_centro_operacion
					,patente_ingreso
					,fecha_hora_creacion
					,fecha_hora_ultima_modificacion
					,estado_ingreso
					)
			      
			VALUES(
			       param_fechaEvento
			      ,param_horaEvento
			      ,param_idCentroOperacion
			      ,param_patente
			      ,NOW()
			      ,null
			      ,1
			      );
			      
	          
	SET id = (SELECT LAST_INSERT_ID());
	
    END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for spr_listar_ingresos
-- ----------------------------
DROP PROCEDURE IF EXISTS `spr_listar_ingresos`;
delimiter ;;
CREATE PROCEDURE `db_controlestacionamiento`.`spr_listar_ingresos`(in param_fecha DATE,
							  in param_id_usuario_perfil INT,
								in param_id_centro_operacion INT)
BEGIN
	
   DECLARE id_perfil INT;
  
   SELECT perfil_id_perfil 
   into id_perfil
   from ta_usuario_perfiles 
   where id_usuario_perfil = param_id_usuario_perfil;
   
   
   /* PERFIL DE ADMINISTRADOR */
   IF(id_perfil = 1)THEN	
      SELECT * 
      FROM vw_listar_ingresos AS vw, ta_usuario_centro_operacion AS ta
      WHERE ta.usuario_id_usuario_perfil = param_id_usuario_perfil
           AND vw.id_centro_operacion = ta.centro_operacion_id_centro_operacion 
           AND ta.estado_usuario_centro_operacion = 1
           AND vw.fecha_ingreso = param_fecha
					 AND vw.id_centro_operacion = param_id_centro_operacion
      ORDER BY vw.id_ingreso DESC;
   END IF;
   
   /* PERFIL DE USUARIO */
  IF(id_perfil = 2)THEN	
      SELECT * 
      FROM vw_listar_ingresos AS vw, ta_usuario_centro_operacion AS ta
      WHERE ta.usuario_id_usuario_perfil = param_id_usuario_perfil
           AND vw.id_centro_operacion = ta.centro_operacion_id_centro_operacion 
           AND ta.estado_usuario_centro_operacion = 1
           AND vw.fecha_ingreso = param_fecha
					 AND vw.id_centro_operacion = param_id_centro_operacion
      ORDER BY vw.id_ingreso DESC;
   END IF;
	 
	 
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for spr_listar_usuarios
-- ----------------------------
DROP PROCEDURE IF EXISTS `spr_listar_usuarios`;
delimiter ;;
CREATE PROCEDURE `db_controlestacionamiento`.`spr_listar_usuarios`(in param_filtroEstado int)
BEGIN
if param_filtroEstado = 3 then
   SELECT * FROM vw_listar_usuarios; 
ELSE
   SELECT * FROM vw_listar_usuarios WHERE estado_usua = param_filtroEstado; 
END IF;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for spr_login_usuario
-- ----------------------------
DROP PROCEDURE IF EXISTS `spr_login_usuario`;
delimiter ;;
CREATE PROCEDURE `db_controlestacionamiento`.`spr_login_usuario`(IN rut varchar(30),
							 in dv char(1),
							 IN passw CHAR(30),
							 IN ip varCHAR(45),
							 OUT id_usuario INT,
							 OUT nombre_perfil CHAR(30),
							 OUT id_usuario_perfil INT,
							 OUT id_perfil INT,
							 
							 /*
							 OUT id_centro_operacion INT,
							 OUT nombre_centro_operacion varchar(45),
							 */
							 
							 OUT nombres_usua varchar(50),
							 out apPaterno_usua varchar(50),
							 out apMaterno_usua varchar(50),
							 OUT estado_usuario INT)
BEGIN
	 DECLARE consultaSqlBitacora TEXT;
         SET id_usuario=0;
         
         SELECT 
          AES_DECRYPT(ta_usuarios.rut_usua,'0000')
         ,AES_DECRYPT(ta_usuarios.password_usua,'0000')
         ,ta_usuarios.id_usua
         ,sys_ta_perfil.nombre_perfil
         ,ta_usuario_perfiles.id_usuario_perfil
         ,ta_usuario_perfiles.perfil_id_perfil
         -- ,ta_usuarios.id_centro_operacion
	 -- ,ta_centro_operacion.nombre_centro_operacion
	 
	 
	 /*
	 ,ta_usuario_perfiles.centro_operacion_id_centro_operacion as id_centro_operacion
	 ,case 
	     when ta_usuario_perfiles.centro_operacion_id_centro_operacion in(1,2,3,4,5,6) then concat('NIVEL: ',ta_centro_operacion.nombre_centro_operacion)
	     ELSE CONCAT('NRO. FILE: ',ta_centro_operacion.nombre_centro_operacion)
	  end as nombre_centro_operacion
	 */
	 
	 
	 ,AES_DECRYPT(ta_usuarios.nombres_usua,'0000')
	 ,AES_DECRYPT(ta_usuarios.apPaterno_usua,'0000')
	 ,AES_DECRYPT(ta_usuarios.apMaterno_usua,'0000')
	 
	 ,ta_usuarios.estado_usua
	 
         -- INTO rut,passw,id_usuario, nombre_perfil, id_tipo_perfil, id_centro_operacion, nombre_centro_operacion, nombres_usua, apPaterno_usua, apMaterno_usua, estado_usuario
         
         INTO rut, passw, id_usuario, nombre_perfil, id_usuario_perfil, id_perfil, nombres_usua, apPaterno_usua, apMaterno_usua, estado_usuario
         
         FROM ta_usuarios
         
         INNER JOIN ta_usuario_perfiles ON (ta_usuarios.id_usua = ta_usuario_perfiles.usuarios_id_usuario) 
         INNER JOIN sys_ta_perfil ON ta_usuario_perfiles.perfil_id_perfil = sys_ta_perfil.id_perfil
         
         
         /*
         INNER JOIN ta_centro_operacion 
	 ON (ta_usuario_perfiles.centro_operacion_id_centro_operacion = ta_centro_operacion.id_centro_operacion)
         */
         
         
         WHERE STRCMP(TRIM(LEADING '0' FROM AES_DECRYPT(ta_usuarios.rut_usua,'0000')), rut) = 0          
            -- STRCMP(Convert(Int, AES_DECRYPT(ta_usuarios.rut_usua,'0000')), rut) = 0 
	 AND STRCMP(AES_DECRYPT(ta_usuarios.password_usua,'0000'), passw) = 0
	 AND ta_usuario_perfiles.estado_usuario_perfil = 1;
	 
	 
	 
	 
	 
	 
	 
	 
	IF id_usuario > 0 THEN
	
		SET consultaSqlBitacora = CONCAT("USER: ",rut,"");
								
		
		
		INSERT INTO ta_bitacora( rut_usuario_bitacora
					,dv_usuario_bitacora
					,date_time_bitacora
					,evento_etapa_bitacora
					,descripcion_bitacora
					,sql_bitacora
					,ips_acceso_bitacora
					,marca_bitacora
					,estado_bitacora
					,id_centro_operacion)
			
		VALUES(	rut
			,dv
			,NOW()
			,'INICIO SESION'
			,'INGRESO AL SISTEMA'
			,consultaSqlBitacora 
			,ip
			,NULL	
			,1
			,id_centro_operacion
			);
		
		
	END IF;
	
    END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for spr_usuario_buscar
-- ----------------------------
DROP PROCEDURE IF EXISTS `spr_usuario_buscar`;
delimiter ;;
CREATE PROCEDURE `db_controlestacionamiento`.`spr_usuario_buscar`(IN id_usuario INT,
							IN rut_usuario VARCHAR(15),
                                                        IN email_usuario VARCHAR(50))
BEGIN
if (id_usuario = 0) then
   SELECT * FROM vw_listar_usuarios WHERE `rut_usua` = rut_usuario OR `email_usua` = email_usuario;
else
   SELECT * FROM vw_listar_usuarios WHERE `id_usua` = id_usuario;
end if;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for spr_usuario_cambioclave
-- ----------------------------
DROP PROCEDURE IF EXISTS `spr_usuario_cambioclave`;
delimiter ;;
CREATE PROCEDURE `db_controlestacionamiento`.`spr_usuario_cambioclave`(IN id_usuario int,
							       IN pass VARCHAR(30),
							       in ip varchar(30),
							       -- in id_centro_operacion int,
							       OUT existe INT)
BEGIN
	DECLARE consultaSqlBitacora TEXT;
	declare rut varchar(15);
	DECLARE dv VARCHAR(1);
	
	SET existe=0;
	SET rut="";
	set dv="";
	
	UPDATE ta_usuarios
	SET ta_usuarios.password_usua = AES_ENCRYPT(pass,'0000')		    
	WHERE ta_usuarios.id_usua = id_usuario;
	
	
	SELECT AES_DECRYPT(rut_usua,'0000'), AES_DECRYPT(dv_usua,'0000')
        INTO rut, dv
        FROM ta_usuarios
        WHERE ta_usuarios.id_usua = id_usuario;
	
	SET consultaSqlBitacora = CONCAT("CAMBIO CONTRASEÑA: ",rut,"");
	
	
	
	
	INSERT INTO ta_bitacora(rut_usuario_bitacora
			       ,dv_usuario_bitacora
			       ,date_time_bitacora
			       ,evento_etapa_bitacora
			       ,descripcion_bitacora
			       ,sql_bitacora
			       ,ips_acceso_bitacora
			       ,marca_bitacora
			       ,estado_bitacora
			       ,id_centro_operacion)
			
	VALUES(rut
	      ,dv
	      ,NOW()
	      ,'CAMBIO DE CLAVE'
	      ,'USUARIO HACE CAMBIO DE CONTRASEÑA'
	      ,consultaSqlBitacora 
	      ,ip
	      ,NULL	
              ,1
	      ,null);
		
    END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for spr_usuario_consultar
-- ----------------------------
DROP PROCEDURE IF EXISTS `spr_usuario_consultar`;
delimiter ;;
CREATE PROCEDURE `db_controlestacionamiento`.`spr_usuario_consultar`(IN rut CHAR(12))
BEGIN
SELECT * FROM vw_listar_usuarios WHERE `rut_usua` = rut;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for spr_usuario_delete
-- ----------------------------
DROP PROCEDURE IF EXISTS `spr_usuario_delete`;
delimiter ;;
CREATE PROCEDURE `db_controlestacionamiento`.`spr_usuario_delete`(IN param_idUsuario VARCHAR(12)
							 ,in param_estado int)
BEGIN
	if(param_estado = 0) then
		UPDATE ta_usuarios
		SET estado_usua = 0
		   
		WHERE ta_usuarios.id_usua = param_idUsuario;
	else
		UPDATE ta_usuarios
		SET estado_usua = 1
		   
		WHERE ta_usuarios.id_usua = param_idUsuario;
	end if;
		
    END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for spr_usuario_insert
-- ----------------------------
DROP PROCEDURE IF EXISTS `spr_usuario_insert`;
delimiter ;;
CREATE PROCEDURE `db_controlestacionamiento`.`spr_usuario_insert`(IN param_rut VARCHAR(12),
							  IN param_dv VARCHAR(1),
							  
							  IN param_nombres_usua VARCHAR(50),
							  IN param_apPaterno_usua VARCHAR(30),
							  IN param_apMaterno_usua VARCHAR(30),
							  
							  IN param_email_usua VARCHAR(50),
							  IN param_password_usua VARCHAR(50),
							  
							  IN param_ip VARCHAR(15),
							  
							  OUT id INT)
BEGIN	
	DECLARE consultaSqlBitacora TEXT;
	SET id=0;
	
	INSERT INTO ta_usuarios(rut_usua,
				 dv_usua,
				 nombres_usua,
				 apPaterno_usua,
				 apMaterno_usua,
				 email_usua,
				 password_usua,
				 create_date_time_usuario,
				 estado_usua)
		VALUES(AES_ENCRYPT(param_rut,'0000'), 
		       AES_ENCRYPT(param_dv,'0000'),
		       AES_ENCRYPT(param_nombres_usua,'0000'),
		       AES_ENCRYPT(param_apPaterno_usua,'0000'),
		       AES_ENCRYPT(param_apMaterno_usua,'0000'),
		       AES_ENCRYPT(param_email_usua, '0000'),
		       AES_ENCRYPT(param_password_usua, '0000'),
		       NOW(),
		       1);
		       
		       
	SET id = (SELECT LAST_INSERT_ID());
	
	
    END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for spr_usuario_listar
-- ----------------------------
DROP PROCEDURE IF EXISTS `spr_usuario_listar`;
delimiter ;;
CREATE PROCEDURE `db_controlestacionamiento`.`spr_usuario_listar`()
BEGIN
	SELECT * FROM vw_listar_usuarios WHERE `estado_usua` IN (1,2); 
    END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for spr_usuario_perfiles_insert
-- ----------------------------
DROP PROCEDURE IF EXISTS `spr_usuario_perfiles_insert`;
delimiter ;;
CREATE PROCEDURE `db_controlestacionamiento`.`spr_usuario_perfiles_insert`(IN param_usuarios_id_usuario VARCHAR(12),
                              IN param_perfil_id_perfil INT(5),
                              IN param_fecha_habilitacion DATE,
                              IN param_fecha_deshabilitacion DATE,
                              IN param_estado_usuario_perfil INT(1),
                             
                              OUT id INT)
BEGIN  
    DECLARE consultaSqlBitacora TEXT;
    SET id=0;
   
    INSERT INTO ta_usuario_perfiles(usuarios_id_usuario,
                 perfil_id_perfil,
                 fecha_habilitacion,
                 fecha_deshabilitacion,
                 estado_usuario_perfil)
        VALUES(param_usuarios_id_usuario,
               param_perfil_id_perfil,
               NULL,
               NULL,
               1);
   
    SET id = (SELECT LAST_INSERT_ID());
   
    END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for spr_usuario_update
-- ----------------------------
DROP PROCEDURE IF EXISTS `spr_usuario_update`;
delimiter ;;
CREATE PROCEDURE `db_controlestacionamiento`.`spr_usuario_update`(IN param_idUsuario VARCHAR(12),
	
							  in param_Nombres varchar(50),
							  in param_ApellidoPaterno varchar(50),
							  in param_ApellidoMaterno varchar(50),							  
							  IN param_Mail VARCHAR(50),
							  in param_Password varchar(50),
							  IN param_idPerfil int,
							  in param_idUsuarioPerfil int)
BEGIN
	UPDATE ta_usuarios
	SET ta_usuarios.nombres_usua = AES_ENCRYPT(param_Nombres,'0000'),
	    ta_usuarios.apPaterno_usua = aes_encrypt(param_ApellidoPaterno,'0000'),
	    ta_usuarios.apMaterno_usua = AES_ENCRYPT(param_ApellidoMaterno,'0000'),
	    ta_usuarios.password_usua = AES_ENCRYPT(param_Password,'0000'),
	    ta_usuarios.email_usua = AES_ENCRYPT(param_Mail,'0000')
	WHERE ta_usuarios.id_usua = param_idUsuario;
	
	
	update ta_usuario_perfiles
	set perfil_id_perfil = param_idPerfil
	where ta_usuario_perfiles.id_usuario_perfil = param_idUsuarioPerfil;
	
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
