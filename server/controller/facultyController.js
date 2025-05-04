import faculty from "../model/facultyModel.js";


//for insert 
export const createfaculty = async (req,resp)=>{
    try {
        const facultyData = new faculty(req.body);
        const savaData = await facultyData.save();
        resp.status(200).json({msg:"Faculty Added Sucessfully"});
        

    } catch (error) {
        resp.status(500).json({error : error});
    }
}



//for fecth(find)
export const getAllfaculty = async (req,resp)=>{
    try {
        const facultyData = await faculty.find();
        resp.status(200).json(facultyData);
    } catch (error) {
        resp.status(500).json({error : error}); 
    }
}




//for get one STUDENT
export const getOnefaculty = async (req,resp)=>{
    try {
        const id = req.params.id;
        const facultyExist = await faculty.findById(id);
        resp.status(200).json(facultyExist);

    } catch (error) {
        resp.status(500).json({error : error}); 
    }
}





//for update
export const updatefaculty = async (req,resp)=>{
    try {
        const id = req.params.id;
        const facultyExist = await faculty.findById(id);

        
        //update
        const updateData = await faculty.findByIdAndUpdate(id, req.body, {new:true})
        resp.status(200).json({msg:"Faculty Updated"});

    } catch (error) {
        resp.status(500).json({error : error}); 
    }
}



// for delete
export const removefaculty = async (req,resp)=>{
    try {
        const id = req.params.id;
        //const courseExist = await student.findById(id);

        
        //delete
         await faculty.findByIdAndDelete(id);
         resp.status(200).json({msg : "Faculty Deleted Sucessfully"});

    } catch (error) {
        resp.status(500).json({error : error}); 
    }
}
   