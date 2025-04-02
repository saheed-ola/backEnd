  // create/post operation
  export const createVendor = async(req, res) => {
    try{
         const {body} = req
         const vendor =new vendorModel(body)
         await vendor.save()
         return res.status(201).json({message: "user created successfully", vendor: vendor})
         
       } catch(error){
         return res.status(500).json({ error: error.message})
       }
 }