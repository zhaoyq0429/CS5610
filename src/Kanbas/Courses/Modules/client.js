import axios from "axios";
import { MODULES_URL, COURSES_URL} from "../service";

export const addModule = async (courseId, module) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/modules`,
        module
    );
    return response.data;
};

export const findModulesForCourse = async (courseId) => {
    const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
    return response.data;
};

export const updateModule = async (moduleId, module) => {
    const response = await axios.put(`${MODULES_URL}/${moduleId}`, module);
    return response.data;
};

export const deleteModule = async (moduleId) => {
    const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
    return response.data;
};