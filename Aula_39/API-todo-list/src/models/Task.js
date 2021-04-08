module.exports = (sequelize, DataType) => {
    const Task = sequelize.define('Task', {
        title: DataType.STRING,
        description: DataType.STRING,
        done: DataType.BOOLEAN,
        deleted: DataType.BOOLEAN,
        createdAt: DataType.DATE,
        updatedAt: DataType.DATE
    },{
        tableName: 'tasks',
        timestamps: false
    })

    return Task;
}