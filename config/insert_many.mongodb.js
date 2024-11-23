const database = "BD3_ATV4_GEOVANNA"

const collection = "BD3_ATV4_CHAT"

use(database)

db.getCollection(collection).insertMany(
    [
        {
            "message": "Henry, você conseguiu implementar aquela mecânica de coleta no jogo para o TCC?",
            "hourSent": "20:08",
            "dateSent": "2024-11-23",
            "sender": "Geovanna",
            "senderNumber": "11987654321"
        },
        {
            "message": "Sim, consegui! Agora o personagem coleta os itens e eles aparecem no inventário. Ficou bem fluido.",
            "hourSent": "20:11",
            "dateSent": "2024-11-23",
            "sender": "Henry",
            "senderNumber": "11912345678"
        },
        {
            "message": "Que bom! Já dá pra gravar essa parte pra apresentação?",
            "hourSent": "20:12",
            "dateSent": "2024-11-23",
            "sender": "Bruno",
            "senderNumber": "11998765432"
        },
        {
            "message": "Ainda não, Bruno. A parte do combate tá com problema na IA dos inimigos. Eles ficam parados às vezes.",
            "hourSent": "20:14",
            "dateSent": "2024-11-23",
            "sender": "Henry",
            "senderNumber": "11912345678"
        },
        {
            "message": "Posso ajudar nisso amanhã. Eu já vi algo parecido em outro projeto.",
            "hourSent": "20:14",
            "dateSent": "2024-11-23",
            "sender": "João",
            "senderNumber": "11965478901"
        },
        {
            "message": "Seria ótimo, João! Preciso que os inimigos fiquem mais dinâmicos. Do jeito que tá, parece um bug.",
            "hourSent": "20:15",
            "dateSent": "2024-11-23",
            "sender": "Henry",
            "senderNumber": "11912345678"
        },
        {
            "message": "E sobre as fases, Geovanna? Já terminou a segunda fase ou ainda falta algo?",
            "hourSent": "20:20",
            "dateSent": "2024-11-23",
            "sender": "Daniel",
            "senderNumber": "11956789012"
        },
        {
            "message": "Tá quase pronta, Dani! Só falta adicionar alguns detalhes visuais e os obstáculos finais.",
            "hourSent": "20:21",
            "dateSent": "2024-11-23",
            "sender": "Geovanna",
            "senderNumber": "11987654321"
        },
        {
            "message": "Legal! Se precisar de ajuda com os efeitos visuais, posso criar algo rápido no Photoshop.",
            "hourSent": "20:21",
            "dateSent": "2024-11-23",
            "sender": "José Ricardo",
            "senderNumber": "11943216578"
        },
        {
            "message": "Ótimo! Assim podemos terminar a parte visual mais rápido.",
            "hourSent": "20:23",
            "dateSent": "2024-11-23",
            "sender": "Geovanna",
            "senderNumber": "11987654321"
        },
        {
            "message": "E a música do jogo? Já temos algo definido ou ainda tá no improviso?",
            "hourSent": "20:25",
            "dateSent": "2024-11-23",
            "sender": "Bruno",
            "senderNumber": "11998765432"
        },
        {
            "message": "Eu tava pensando nisso! Posso compor algo simples, mas precisamos definir o estilo.",
            "hourSent": "20:25",
            "dateSent": "2024-11-23",
            "sender": "Daniel",
            "senderNumber": "11956789012"
        },
        {
            "message": "Acho que algo mais aventureiro combinaria, com um toque de suspense nas fases difíceis.",
            "hourSent": "20:26",
            "dateSent": "2024-11-23",
            "sender": "João",
            "senderNumber": "11965478901"
        },
        {
            "message": "Boa ideia! Vou trabalhar nisso amanhã e mostro pra vocês no próximo encontro.",
            "hourSent": "20:28",
            "dateSent": "2024-11-23",
            "sender": "Daniel",
            "senderNumber": "11956789012"
        },
        {
            "message": "Tá ficando tudo alinhado! Já dá pra ver nosso jogo tomando forma.",
            "hourSent": "20:30",
            "dateSent": "2024-11-23",
            "sender": "João",
            "senderNumber": "11965478901"
        },
        {
            "message": "Verdade! Depois que tudo estiver pronto, a gente merece uma rodada de pizza kkkkkkk.",
            "hourSent": "20:31",
            "dateSent": "2024-11-23",
            "sender": "Bruno",
            "senderNumber": "11998765432"
        }
    ]    
)