import student from "../model/studentModel.js";


//for insert 
export const createstudent = async (req,resp)=>{
    try {
        const studentData = new student(req.body);
        const savaData = await studentData.save();
        resp.status(200).json({msg:"Student Added Sucessfully"});
        

    } catch (error) {
        resp.status(500).json({error : error});
    }
}



//for fecth(find)
export const getAllstudent = async (req,resp)=>{
    try {
        const studentData = await student.find();
        resp.status(200).json(studentData);
    } catch (error) {
        resp.status(500).json({error : error}); 
    }
}




//for get one STUDENT
export const getOnestudent = async (req,resp)=>{
    try {
        const id = req.params.id;
        const studentExist = await student.findById(id);
        resp.status(200).json(studentExist);

    } catch (error) {
        resp.status(500).json({error : error}); 
    }
}





//for update
export const updateStudent = async (req,resp)=>{
    try {
        const id = req.params.id;
        const studentExist = await student.findById(id);

        
        //update
        const updateData = await student.findByIdAndUpdate(id, req.body, {new:true})
        resp.status(200).json({msg:"Student Updated"});

    } catch (error) {
        resp.status(500).json({error : error}); 
    }
}



// for delete
export const removeStudent = async (req,resp)=>{
    try {
        const id = req.params.id;
        //const studentExist = await student.findById(id);

        
        //delete
         await student.findByIdAndDelete(id);
         resp.status(200).json({msg : "Student Deleted Sucessfully"});

    } catch (error) {
        resp.status(500).json({error : error}); 
    }
}
   
