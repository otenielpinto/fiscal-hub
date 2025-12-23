import { Repository } from "./baseRepository.js";

class ClassTribRepository extends Repository {
  constructor(id_tenant = null) {
    super("tmp_classTrib", id_tenant);
  }

  // Usa findAll herdado do Repository para buscar dados reais do MongoDB
}

export { ClassTribRepository };
