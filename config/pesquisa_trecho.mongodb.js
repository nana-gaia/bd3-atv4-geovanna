const database = "BD3_ATV4_GEOVANNA"

const collection = "BD3_ATV4_CHAT"

use(database)

db.getCollection(collection).find(
    {"message": /jogo/}
)