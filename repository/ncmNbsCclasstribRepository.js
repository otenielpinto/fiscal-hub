import { Repository } from "./baseRepository.js";

class NcmNbsCclasstribRepository extends Repository {
  constructor(id_tenant = null) {
    super("tmp_ncm_nbs_cclasstrib", id_tenant);
  }
  // Usa findAll herdado do Repository para buscar dados reais do MongoDB
}

export { NcmNbsCclasstribRepository };
