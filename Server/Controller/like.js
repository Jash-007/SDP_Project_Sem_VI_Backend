const recutermodel=require('../Models/recutermodel');
exports.like =async function(req,res){
    try {
      // const item= await recutermodel.findById(req.body._id);
      //   await recutermodel.findOneAndUpdate({_id:req.body.id},{
      //     $set:{
      //       like:parseInt(item.like)+1,
      //       $push:{
      //         likearray:req.body.user_id,
      //       }
      //     }
      //   });
      const q = await recutermodel.findOne({ _id: req.body.id});
      var like=parseInt(q.like);
      like+=1;
      let gf= await recutermodel.updateOne({_id: req.body.id}, {"like":like});
      
    
        // item.likes++;
        
        return res.status(201).json(item);
        

      } catch (err) {
        console.error(err.message);
        res.status(201).send('Server error');
      }
}
exports.dislike =async function(req,res){
    try {
       
        const q = await recutermodel.findOne({ _id: req.body.id});
        var dislike=parseInt(q.dislike);
        dislike+=1;
        let gf= await recutermodel.updateOne({_id: req.body.id}, {"dislike":dislike});
        
      
          // item.likes++;
          
          return res.status(201).json(item);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
}