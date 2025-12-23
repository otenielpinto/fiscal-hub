// Controller para NCM/NBS Classificação Tributária
import { NcmNbsCclasstribRepository } from "../repository/ncmNbsCclasstribRepository.js";

class NcmNbsCclasstribController {
  constructor() {
    this.repository = new NcmNbsCclasstribRepository();
  }

  async getAll(req, res) {
    try {
      // Busca todos os dados do repository (tmp_ncm_nbs_cclasstrib)
      const data = await this.repository.findAll({});
      res.json(data);
    } catch (err) {
      res.status(500).json({
        message: "Erro ao buscar classificações NCM/NBS.",
        error: err.message,
      });
    }
  }
}

const ncmNbsCclasstribController = new NcmNbsCclasstribController();
export { ncmNbsCclasstribController };
