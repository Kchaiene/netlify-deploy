



export default async function (req, res){
  try {
    const {} = req.query;
    res.status(200).json({message:"Lambda Api Request is Success!!"})
  } catch (e) {
    res.status(500).json({message:"Error ==> Lambda Api"})
  }
};







