// Controller para Classificação Tributária
import { ClassTribRepository } from "../repository/classTribRepository.js";

class ClassTribController {
  constructor() {
    this.repository = new ClassTribRepository();
  }

  async getAll(req, res) {
    try {
      // Busca todos os dados do repository (tmp_classTrib)
      const data = await this.repository.findAll({});
      res.json(data);
    } catch (err) {
      res.status(500).json({
        message: "Erro ao buscar classificações tributárias.",
        error: err.message,
      });
    }
  }
}

const classTribController = new ClassTribController();
export { classTribController };
