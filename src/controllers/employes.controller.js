import { response } from "express";
import { pool } from "../db.js"

export const getemployes = async (req, res) => {
    try {
        const [rows] = await pool.query(`select * from employee`)
        res.json(rows);
    } catch (error) {
        res.status(500).json({
            message: "error consulta"
        })
    }
};

export const CreateEmployee = async (req, res) => {
    const { name, salary } = req.body;

    try {
        const [rows] = await pool.query(`insert into employee (name,salary) values (?,?)`, [name, salary]);

        res.send({ rows });
    } catch (error) {
        res.status(500).json({
            message: "error"
        })
    }
};

export const GetEmployeeById = async (req, res) => {

    const id = req.params.id

    try {
        const [rows] = await pool.query(`select * from employee where id = ?`, [id])

        if (rows.length <= 0) {
            return res.status(404).json({
                message: `employee not found`
            })
        } else {
            res.json(rows);
        }
    } catch (error) {
        res.status(500).json({
            message: "error"
        })
    }
}

export const DeleteEmployee = async (req, res) => {

    try {
        const [rows] = await pool.query(`delete from employee where id = ?`, [req.params.id]);

        // console.log(rows.affectedRows);

        if (rows.affectedRows <= 0) {
            return res.status(404).json({
                message: "employee not found"
            })
        }

        res.status(204).json({
            message: "employee delete"
        });
    } catch (error) {
        res.status(500).json({
            message: "error"
        })
    }
}

export const UpdateEmployee = async (req, res) => {

    const id = req.params.id;
    const { name, salary } = req.body;

    try {
        const [rows] = await pool.query(`UPDATE employee SET name = ifnull(?, name),
         salary = ifnull(?,salary) WHERE id = ?;`, [name, salary, id]);

        if (rows.affectedRows <= 0) {
            return res.status(404).json({
                message: "employee not found"
            })
        }

        res.status(204).json({
            message: "employee updated"
        });
    } catch (error) {
        res.status(500).json({
            message: "error"
        })
    }
}