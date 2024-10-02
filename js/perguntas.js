export const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com dois mendigos brigando por um pão que estava casualmente no chão. O que você faz?",
        alternativas: [
            {
                texto: "Pego o pão para mim.",
                afirmacao: [
                    "Agora os dois mendigos não terão que brigar pelo o que comer.",
                    "Você ganhou um pão e resolveu a discussão entre os dois mendigos, agora ambos vão vir unidos para cima de você, corra."
                ],
                proxima: 1,
            },
            {
                texto: "Vou embora.",
                afirmacao: [
                    "Os dois mendigos duelaram até o fim, menos um mendigo faminto no mundo e mais um satisfeito após comer o pão.",
                    "Após ir embora os mendingos continuaram até que se cansaram e dividiram o pão voluntariamente."
                ],
                proxima: 2,
            },
        ]
    },
    {
        enunciado: "Continuando a caminhada de volta para casa após você atravessar o bairro onde prefeito da cidade vive, você se depara com o bairro esquecido pelo prefeito. Não há asfalto, iluminação, apenas uma trilha submersa em um rio (embora não haja rios pela área, essa água parou aí de algum modo)...",
        alternativas: [
            {
                texto: "Atravessar mesmo assim (fazendo Parkour)",
                afirmacao: [
                    "Atravessando o bairro que sequer foi inaugurado com um nome, você pula sobre as tábuas que foram usadas para cobrir a água, quando estava para sair você acidentalmente pisa numa poça de água que pela escuridão não viu, instantaneamente você sente a má energia da poça, corra para um UPA próximo (boa sorte)",
                    "Fazendo Parkour nas casinhas do bairro esquecido, você pisa numa telha solta e cai dentro da casinha. Lá estava o homem do qual você chama de pai com sua segunda familia, após o choque você recebe alguns trocados para se calar, dinheiro que pode ser usado para investir em organizações de cunho social.",
                    "Ante mesmo de conseguir correr para se desviar da água, devido a escuridão e a rua com buracos, você tropeça e cai, deixando cair alguns trocados que em breve alguém que vive ali pode encontrar, abrindo portas para um futuro brihante a essa pessoa que pode usar o dinheiro para melhorar de vida ou então gastar com pinga."
                ],
                proxima: 3,
            },
            {
                texto: "Reportar a situação para o prefeito.",
                afirmacao: [
                    "Vendo a situação e como aquilo podia prejudicar os moradores, você reporta ao prefeito que acaba por ignorar o pedido, inconformado você abre uma abertura contra o mesmo e no final consegue ceder a casa do prefeito para os moradores daquele bairro. A desigualdade pela cidade cai para 0,001% (sendo o prefeito).",
                    "Após reportar de maneira sensata a situação ao prefeito, o bairro passa por uma transforção onde todos os moradores são retirados de suas casa e por fim apartamentos são feitos para acomodar mais pessoas, mas eles não foram feito exatamente para os antigos moradores viverem (parabéns, acabou com familias)",
                    "Depois de reportar, o prefeito concordou em restaurar o bairro e agora além de estar iluminado e asfaltado, o bairro tem um nome."
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Um chat com IA pode ser uma boa alternativa para realizar tarefas do dia a dia e foi pensando nisso que uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: [
                    "Conseguiu utilizar a IA para buscar informações úteis.",
                    "Percebeu que a IA pode ajudar a encontrar informações úteis na internet de forma mais rápida e direcionada.",
                    "Percebeu que a IA consegue explicar termos complicados de forma simplificada e isso ajudou muito suas pesquisas sobre assuntos complexos."
                ],
                proxima: 5,
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: [
                    "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho.",
                    "Achou que era muito mais fácil procurar por respostas utilizando alguns meios mais tradicionais mesmo que levasse mais tempo.",
                    "Sentiu um pouco de medo de quais dados pessoais seus a IA poderia utilizar e por isso prefere fazer suas coisas com pouca intromissão da tecnologia."
                ],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Ferramentas de busca que utilizam IA podem facilitar muito nosso processo de busca por informações. Agora imagine que você precisa participar de um debate sobre o quanto a IA impacta no trabalho do futuro. Qual posicionamento tomar?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: [
                    "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA.",
                    "Participa ativamente do desenvolvimento de soluções criativas e na melhoria de processos em IA."
                ],
                proxima: 5,
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: [
                    "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética.",
                    "Criou grupos de ética voltado para IA e busca ativamente reduzir as desigualdades geradas pela automação."
                ],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: [
                    "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes.",
                    "Ainda acha que os meios de desenho tradicionais são mais eficazes para a criatividade, por isso vem estimulando pessoas em suas redes sociais a fazer pintura em aquarela."
                ],
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: [
                    "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!",
                    "Compartilhou artes em redes sociais como forma de ensinar como se comunicar através da arte.",
                    "Percebeu que muitas pessoas têm dificuldade em expressar suas ideias desenhando e acha que a IA é capaz de empoderar essas pessoas a tirarem ideias do papel."
                ],
            },
        ]
    }
];