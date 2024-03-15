import { Request, Response } from "express";
import { Materia } from "../models";
import { v4 as uuidv4 } from 'uuid';

export const getAllMaterias = async( req:Request, res:Response ) => {

  const materias = await Materia.findAll();

  res.status(200).json({
    ok: true,
    results: materias
  })
}



export const postMateria = async( req:Request, res:Response ) => {

  const { name } = req.body;

  const uid = uuidv4();

  const newMateria = await Materia.create({ id: uid, name });

  res.status(200).json({
    ok: true,
    results: newMateria
  })
}
