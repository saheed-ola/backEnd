 import vendorModel from "../models/vendorModel.js"
 
 // create/post operation
  export const createVendor = async(req, res) => {
    try{
         const {body} = req
         const vendor =new vendorModel(body)
         await vendor.save()
         return res.status(201).json({message: "vendor created successfully", vendor: vendor})
         
       } catch(error){
         return res.status(500).json({ error: error.message})
       }
 }

  
// READ/GET ALL OPERATION
export const getVendor = async(req, res)=>{

  try{
    const vendors = await vendorModel.find()
    if(vendors.length === 0){
    return  res.status(404).json({message: "No vendors found"})
    }
  return res.status(200).json({vendors: vendors, message: "vendors fetched successfully" })

  }catch(error){
    return res.status(500).json({'error fetching vendors': error.message})
  }
}

// READ/GET SINGLE OPERATION
export const getSingleVendor =  async(req, res)=> {
  try{

    const {id} = req.params
    const vendor = await vendorModel.findById(id)
    if(!vendor){
      return res.status(404).json({message: "vendor not found"})
    }
    return res.status(200).json({message: "vendor found successfully", vendor: vendor} )
  }catch(error){
    return res.status(500).json({error: error.message})
  }
}