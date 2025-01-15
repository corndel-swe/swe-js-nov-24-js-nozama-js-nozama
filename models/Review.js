import db from '../db/index.js'

class Review {
  static async findByProductId(id) {
    const query = 'SELECT * FROM Reviews WHERE productId = ?'
    const results = await db.raw(query, [id])
    return results
  }
}

export default Review;
