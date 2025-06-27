// import {sumar, restar} from "./funciones.js" 
import {calculadora} from "./funciones.js"
// const fs = require('node:fs')
import fs from "node:fs"
// const express = require("express")
import express from "express"

const app = express()

fs.writeFileSync("test.txt", "Hoy es viernes", "utf-8")

console.log(calculadora(1, 2, "sumar"));
console.log(calculadora(1, 2, "restar"));