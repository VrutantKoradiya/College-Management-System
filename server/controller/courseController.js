import course from "../model/courseModel.js";


//for insert 
export const createcourse = async (req, resp) => {
    try {
        const courseData = new course(req.body);
        const savaData = await courseData.save();
        resp.status(200).json({ msg: "Course Added Sucessfully" });


    } catch (error) {
        resp.status(500).json({ error: error });
    }
}



//for fecth(find)
export const getAllcourse = async (req, resp) => {
    try {
        const courseData = await course.find();
        resp.status(200).json(courseData);
    } catch (error) {
        resp.status(500).json({ error: error });
    }
}




//for get one STUDENT
export const getOnecourse = async (req, resp) => {
    try {
        const id = req.params.id;
        const courseExist = await course.findById(id);
        resp.status(200).json(courseExist);

    } catch (error) {
        resp.status(500).json({ error: error });
    }
}





//for update
export const updatecourse = async (req, resp) => {
    try {
        const id = req.params.id;
        const courseExist = await course.findById(id);


        //update
        const updateData = await course.findByIdAndUpdate(id, req.body, { new: true })
        resp.status(200).json({ msg: "Course Updated" });

    } catch (error) {
        resp.status(500).json({ error: error });
    }
}



// for delete
export const removecourse = async (req, resp) => {
    try {
        const id = req.params.id;
        //const courseExist = await student.findById(id);


        //delete
        await course.findByIdAndDelete(id);
        resp.status(200).json({ msg: "Course Deleted Sucessfully" });

    } catch (error) {
        resp.status(500).json({ error: error });
    }
}
