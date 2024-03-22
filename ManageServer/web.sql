/*
 Navicat Premium Data Transfer

 Source Server         : Mysql
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : web

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 30/11/2022 20:17:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '学生姓名',
  `regNum` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '学号，主键',
  `major` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '专业班级',
  `homeworkScore` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '作业得分，用斜杠/分别表示每次的作业分数',
  `finalDesignScore` tinyint UNSIGNED NULL DEFAULT 0 COMMENT '期末项目得分',
  `absence` tinyint UNSIGNED NULL DEFAULT 0 COMMENT '缺勤次数',
  `isEliteMenber` tinyint UNSIGNED NULL DEFAULT 0 COMMENT '是否精英训练营成员',
  PRIMARY KEY (`regNum`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('Mary', '201910420002', 'Test', '100/0/70', 0, 3, 1);
INSERT INTO `student` VALUES ('李天忆', '202110411103 ', '计科(本)21-1', '90', 0, 0, 0);
INSERT INTO `student` VALUES ('张磊', '202110411104 ', '计科(本)21-1', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('耿瑞霞', '202110411108 ', '计科(本)21-1', '92', 0, 0, 0);
INSERT INTO `student` VALUES ('罗坚元', '202110411117 ', '计科(本)21-1', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('陈赢', '202110411118 ', '计科(本)21-1', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('代诗敏', '202110411212 ', '计科(本)21-2', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('陈俊宏', '202110411214 ', '计科(本)21-2', '74', 0, 0, 0);
INSERT INTO `student` VALUES ('胡芃睿', '202110411302 ', '计科(本)21-3', '68', 0, 0, 0);
INSERT INTO `student` VALUES ('向孝荣', '202110411313 ', '计科(本)21-3', '66', 0, 0, 0);
INSERT INTO `student` VALUES ('李梦佳', '202110411410 ', '计科(本)21-4', '92/90', 0, 0, 0);
INSERT INTO `student` VALUES ('李帮健', '202110411420 ', '计科(本)21-4', '94/75/91', 0, 0, 0);
INSERT INTO `student` VALUES ('丁代林', '202110414104 ', '软件(本)21-1', '92', 0, 0, 0);
INSERT INTO `student` VALUES ('刘艺', '202110414110 ', '软件(本)21-1', '88', 0, 0, 0);
INSERT INTO `student` VALUES ('王泽涛', '202110414120 ', '软件(本)21-1', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('刘少勋', '202110414207 ', '软件(本)21-2', '81', 0, 0, 0);
INSERT INTO `student` VALUES ('顾秦', '202110414311 ', '软件(本)21-3', '62', 0, 0, 0);
INSERT INTO `student` VALUES ('滕梦蕊', '202110414401 ', '软件(本)21-4', '69/88', 0, 0, 0);
INSERT INTO `student` VALUES ('曾妍', '202110414406 ', '软件(本)21-4', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('邹鹏', '202110414410 ', '软件(本)21-4', '69', 0, 0, 0);
INSERT INTO `student` VALUES ('莫思佳', '202110414415 ', '软件(本)21-4', '89', 0, 0, 0);
INSERT INTO `student` VALUES ('何庆', '202110420107 ', '网络(本)21-1', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('鲜雨甜', '202110420109 ', '网络(本)21-1', '68', 0, 0, 0);
INSERT INTO `student` VALUES ('杜颖', '202110420112 ', '网络(本)21-1', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('牟雅洁', '202110420120 ', '网络(本)21-1', '67', 0, 0, 0);
INSERT INTO `student` VALUES ('陈国强', '202110420121 ', '网络(本)21-1', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('黎松林', '202110420124 ', '网络(本)21-1', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('金恩露', '202110420125 ', '网络(本)21-1', '62', 0, 0, 0);
INSERT INTO `student` VALUES ('谢小康', '202110420127 ', '网络(本)21-1', '79', 0, 0, 0);
INSERT INTO `student` VALUES ('李思乐', '202110420128 ', '网络(本)21-1', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('张耀丹', '202110420129 ', '网络(本)21-1', '69', 0, 0, 0);
INSERT INTO `student` VALUES ('张莉', '202110420210 ', '网络(本)21-2', '64', 0, 0, 0);
INSERT INTO `student` VALUES ('李双全', '202110420212 ', '网络(本)21-2', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('唐璟', '202110420220 ', '网络(本)21-2', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('何凯', '202110420221 ', '网络(本)21-2', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('汪枭翔', '202110420228 ', '网络(本)21-2', '69', 0, 0, 0);
INSERT INTO `student` VALUES ('石上', '202110420229 ', '网络(本)21-2', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('严婧怡', '202110422119 ', '物联(本)21-1', '68', 0, 0, 0);
INSERT INTO `student` VALUES ('张凯虹', '202110422130 ', '物联(本)21-1', '69', 0, 0, 0);
INSERT INTO `student` VALUES ('李昭雯', '202110422131 ', '物联(本)21-1', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('肖岩', '202110422204 ', '物联(本)21-2', '80', 0, 0, 0);
INSERT INTO `student` VALUES ('陈宇欣', '202110422205 ', '物联(本)21-2', '87', 0, 0, 0);
INSERT INTO `student` VALUES ('周奕萌', '202110422211 ', '物联(本)21-2', '89', 0, 0, 0);
INSERT INTO `student` VALUES ('李斐扬', '202110422213 ', '物联(本)21-2', '69', 0, 0, 0);
INSERT INTO `student` VALUES ('杜林祥', '202110422214 ', '物联(本)21-2', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('余琴', '202110422221 ', '物联(本)21-2', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('唐洁', '202110422224 ', '物联(本)21-2', '68', 0, 0, 0);
INSERT INTO `student` VALUES ('王作舟', '202110430209 ', '大数据(本)21-2', '0', 0, 0, 0);
INSERT INTO `student` VALUES ('彭小叶', '202110430214 ', '大数据(本)21-2', '89', 0, 0, 0);
INSERT INTO `student` VALUES ('沙阿只', '202110430228 ', '大数据(本)21-2', '88', 0, 0, 0);

SET FOREIGN_KEY_CHECKS = 1;
