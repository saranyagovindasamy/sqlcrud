async function update(id,programmingLanguage){
    const result = await conn.query(
        `update programming_languages SET name = "${programmingLanguage.name}" WHERE id=${id}`)

    let message = 'Error in updating programming language';

    if(result.affectedRows){
        message = 'Programming language updated successfully'
    }
    return {message};
}
export default update;