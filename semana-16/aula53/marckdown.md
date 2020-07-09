#### Exercicio 01

a. O Raw retorna todas as respota da conexão do banco de dados.

#### Exercicio 02

a. 
const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};
updateActor('001', 600000)

b. 
const deleteActor = async (id: string): Promise<any> => {
  await connection("Actor")
    .delete()
    .where("id", id);
};
deleteActor('003')

c.
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender});
    
    console.log( result[0].average)
    return result[0].average
};
avgSalary('male')

#### Exercicio 03

a. Porque ele envia uma requisição peço params e será um id.
b. Ele requisição responde com status de sucesso ou error.
c. 
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors(
      req.query.gender as string
    );
    res.status(200).send({quantity: count})
  } catch (err) {
    res.status(400).send({
      message: err.message
    });
  }
});

#### Exercicio 04

a.
app.post("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Successo!",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

b.
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});