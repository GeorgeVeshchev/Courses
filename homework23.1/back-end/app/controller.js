import { Router } from "express";
import { TodoService } from "./service.js";


const todoRouter = Router();

const service = new TodoService(); 


todoRouter.get('/', async (req, res) => {
     try {
       const todos = await service.getTodos();
       res.status(200).json(todos); 
     } catch (error) {
       console.error('Ошибка при получении задач:', error);
       res.status(500).json({ error: 'Произошла ошибка при получении задач' });
     }
   });


todoRouter.get("/todos", async ( req , res ) => {
   try {
     console.log(TodoService.getTodos);
        const todos = await service.getTodos();
        console.log(todos);
        res.json(todos);
   }catch(e){
     console.log(e);
    res.status(500).json({error:"Can't get todos"});
   }
});

todoRouter.get("/todos/:id", async ( req , res ) => {
    try {
         const todos = await service.getTodos(req.params.id);
         res.json(todos);
    }catch(e){
     res.status(500).json({error: `Can't get todos with id: '${req.params.id}'`});
    }
 });

todoRouter.post("/todos" , async ( req , res ) => {
    try {
          console.log('here', req.body)
         const resp = await service.createTodo(req.body);
         res.json(resp);
    }catch(e){
     res.status(500).json({error: `Can't create todo with id: '${req.body.id}'`});
    }
 });

todoRouter.put("/todos/:id" , async ( req , res ) => {
    try {
         const resp = await service.updateTodo(req.params.id , req.body);
         res.json(resp);
    }catch(e){
     res.status(500).json({error: `Can't update todo with id: '${req.params.id}'`});
    }
 });

export { todoRouter };