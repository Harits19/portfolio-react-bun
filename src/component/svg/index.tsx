import Github from "./assets/github-icon.svg?react";
import DarkMode from "./assets/dark-mode-icon.svg?react";
import LightMode from "./assets/light-mode-icon.svg?react";
import Location from "./assets/location-icon.svg?react";
import Instagram from "./assets/instagram-icon.svg?react";
import Linkedin from "./assets/linkedin-icon.svg?react";

import ExpressJs from "./assets/expressjs-icon.svg?react";
import Flutter from "./assets/flutter-icon.svg?react";
import Gcp from "./assets/gcp-icon.svg?react";
import Git from "./assets/git-icon.svg?react";
import Golang from "./assets/golang-icon.svg?react";
import MongoDb from "./assets/mongodb-icon.svg?react";
import MySql from "./assets/mysql-icon.svg?react";
import NextJs from "./assets/nextjs-icon.svg?react";
import Link from "./assets/link-icon.svg?react";


const Icons = {
  Link,
  Github,
  DarkMode,
  LightMode,
  Location,
  Instagram,
  Linkedin,
  ExpressJs,
  Flutter,
  Gcp,
  Git,
  Golang,
  MongoDb,
  MySql,
  NextJs
};

export type IconType = keyof typeof Icons;

export default Icons;
