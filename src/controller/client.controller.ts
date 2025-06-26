import { Request, Response } from "express";
import { Client } from "../entities/client.entity";

class ClientController {
  constructor() {}

  getAll = async (req: Request, res: Response) => {
    try {
      const clients = await Client.find();
      if (!clients) throw new Error("No data found");
      res.status(200).json(clients);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json(error.message);
      }
    }
  };
  getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const client = await Client.findOneBy({ id_client: Number(id) });
      if (!client) throw new Error("Client no found");
      res.status(200).json(client);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json(error.message);
      }
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const { name, surename, email } = req.body;
      //req.body;
      const client = await Client.save({ name, surename, email });

      res.status(201).json(client);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json(error.message);
      }
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, surename, email } = req.body;
      const clientfound = await Client.findOneBy({ id_client: Number(id) });
      if (!clientfound) throw new Error("Client no found");

      const clientUpdate = await Client.update(id, { name, surename, email });
      if (!clientUpdate) throw new Error("Client was not updated");

      res.status(200).json({ message: "client updated successfully " + id });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json(error.message);
      }
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const clientfound = await Client.findOneBy({ id_client: Number(id) });
      if (!clientfound) throw new Error("Client no found");
      const client = await Client.delete(id);

      res.status(200).json("the user was deleted");
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json(error.message);
      }
    }
  };
  changeStatus = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const clientfound = await Client.findOneBy({ id_client: Number(id) });
      //console.log(userfound);
      if (!clientfound) throw new Error("Client no found");

      const clienteUpdate = await Client.update(id, {
        active: !clientfound.active,
      });
      if (clientfound.active) {
        res.status(200).json("the client was desactived");
      } else {
        res.status(200).json("the client was actived");
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json(error.message);
      }
    }
  };
}

export default new ClientController();
