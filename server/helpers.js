const intToBoolean = (int) => {
    return int === 0 ? false : true;
}

const booleanToInt = (boolean) => {
    return boolean === true ? 1 : 0;
}

const projectToBody = (project) => {
    const result = {
        ...project,
        completed: intToBoolean(project.completed)
    }

    if (project.task && project.task.length > 0) {
        result.task = project.task.map(task => ({
        ...task,
        completed: intToBoolean(task.completed),
        }));
    }
    
    return result;
}

const taskToBody = (task) => {
    return {
        ...task,
        completed: intToBoolean(task.completed)
    }
}

module.exports = {
    intToBoolean,
    booleanToInt,
    projectToBody,
    taskToBody,
};
