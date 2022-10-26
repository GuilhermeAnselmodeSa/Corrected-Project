//Insere um registro no banco
exports.create = async ({ nome }) => {
  return pool.query(`INSERT INTO contato SET ?`, { nome });
}

//Le um registro do banco
exports.read = async (data) => {
  return pool.query(`SELECT * FROM contato WHERE id=?`, [data.id]);
}

//Atualzia um registro no banco
exports.update = async (data) => {
  return pool.query(
    `UPDATE contato SET nome=? WHERE id=${pool.escape(data.id)}`,
    [data.nome]
  );
}

//Deleta um registro do banco
exports.delete = async (data) => {
  return pool.query(`DELETE FROM contato WHERE id=?`, [data.id]);
}