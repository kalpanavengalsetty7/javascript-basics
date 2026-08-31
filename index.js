const express=require('express');
const app=express();
const PORT=3000;
app.use(express.json());
let items=[
    {id:1,name:'Item 1',description:'This is item 1'},
    {id:2,name:'Item 2',description:'This is item 2'},
    {id:3,name:'Item 3',description:'This is item 3'}
];
app.post('/items',(req,res)=>{
    const{name,description}=req.body;
    const newItem={
        id: items.length+1,
        name,
        description
    };
    items.push(newItem);
    res.status(201).json(newItem);
});
app.get('/items',(req,res)=>{
    res.json(items);
});
app.get('/items/:id',(req,res)=>{
    const itemId=parseInt(req.params.id);
    const item=items.find(i=>i.id===itemId);
    if(!item){
        return res.status(404).json({message:'Item not found'});
    }
    res.json(item);
});
app.put('/items/:id',(req,res)=>{
    const itemId=parseInt(req.params.id);
    const{name,description}=req.body;
    const itemIndex = items.findIndex(i => i.id === itemId);
    if (itemIndex === -1) {
        return res.status(404).json({message: "Item not found"});
    }
    items[itemIndex]={id:itemId,name,description};
    res.json(items[itemIndex]);
});
app.delete(('/items/:id',(req,res)=>{
const itemId=parseInt(req.params.id);
  const itemIndex = items.findIndex(i => i.id === itemId);
    if (itemIndex === -1) {
        return res.status(404).json({message: "Item not found"});
    }
  const deletedItem = items.splice(itemIndex, 1);
  res.json(deletedItem);
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});