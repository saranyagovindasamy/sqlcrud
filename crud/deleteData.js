async function deleteData(id){
    const result = await conn.query(
        `delete from progrmming_language where id=${id}`
    );
    let message = "Error in deleting programming language";

    if(result.affectedRows){
        message='Programming language deleted successfully';
    }
    return {message};
}
export default deleteData;