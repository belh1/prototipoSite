import React, { useState, useEffect, useMemo } from "react";
import "../estilo/ajuda.css";
import duvida from "../img/duvida.png";
import imgDominio from "../img/pDominio.jpeg";
import problema1 from "../img/problema1.png";
import problema2 from "../img/problema2.png";
import problema3 from "../img/problema3.png";
import net from "../img/conectado.png";
import snet from "../img/desconectado.png";
const Ajuda = () => {
  //categorias hardware, Chamados, Rede.
  const perguntasFrequentes = useMemo(() => [

    //perguntas e respostas 
    {
      pergunta: "O que é o CNS?",
      resposta: (
        <>
          O Cartão Nacional de Saúde (CNS), popularmente conhecido como Cartão SUS, é o documento de identificação do usuário do SUS. 
          Este registro contém as informações dos indivíduos, como: dados pessoais (nome, nome da mãe, data de nascimento, etc), contatos (telefones, endereço, e-mails) e documentos (CPF, RG, Certidões, etc). 
          Atualmente, o número do CNS é utilizado nos sistemas informatizados de saúde que demandam identificação dos indivíduos, sejam usuários, operadores ou profissionais de saúde. Dessa forma, o CNS possibilita a criação do histórico de atendimento de cada cidadão no Sistema Único de Saúde (SUS), por meio do acesso às Bases de Dados dos sistema de atenção básica, sistema hospitalar, sistema de dispensação de medicamentos, etc.
          <br />
          <a href="https://datasus.saude.gov.br/cartao-nacional-de-saude/" target="_blank" rel="noopener noreferrer"style={{ color: "#007bff" }}>Saiba mais</a>
        </>
      ),
      index: 1,
      categoria: "CNS",
    },
    {
      pergunta: " Liberação de acesso ao CNS",
      resposta:(
        <ul>
        <li> Para Operadores/Administradores do sistema:</li>
        <li>- Para conseguir acesso, os operadores precisam de perfil e acesso de máquina aprovado. Essa aprovação é realizada pelo administrador do sistema (coordenador/a da unidade). Para cada computador que o operador pretende utilizar é necessário um acesso de máquina aprovado. </li>
        <li>- Os administradores também precisam de acesso aprovado em cada computador que precise usar o sistema, mas a aprovação do pedido é automática.</li>
      </ul>
      ),
      index: 2,
      categoria: "CNS",
     
    },
    {
      pergunta: "Problema 1: Módulo de segurança não identificado na página inicial:",
      resposta:" Neste caso entre em contato com o suporte (042 91452300) para reinstalação do módulo de segurança.",
      index: 3,
      categoria: "CNS",
      imagemResposta: problema1,
     
    },
    {
      pergunta: "Problema 2: Erro de autenticação externa:",
      resposta: (
        <ul>
        <li>- Neste caso confira se o número de CNES da sua UBS foi digitado corretamente; </li> 
        <li>- Tente realizar um pedido de acesso de máquina e solicite ao seu coordenador/a a aprovação no sistema;</li>
        <li>- Caso o problema permaneça, ou tenha dificuldades em realizar o processo, entre em contato com o Suporte (042 91452300).</li>
        </ul>
      ),
      index: 4,
      categoria: "CNS",
      imagemResposta: problema2,
     
    },
    {
      pergunta: "Problema 3: Erro de acesso (Após digitar dados de acesso):",
      resposta:" Atualizar a página clicando na tecla F5, ou ícone de atualização do navegador.",
      index: 5,
      categoria: "CNS",
      imagemResposta: problema3,
     
    },
    {
      pergunta: "O que é CNES?",
      resposta: (
        <>
           O Cadastro Nacional de Estabelecimentos de Saúde (CNES) é o sistema de informação oficial de cadastramento de informações de todos os estabelecimentos de saúde no país, independentemente de sua natureza jurídica ou de integrarem o Sistema Único de Saúde (SUS). Trata-se do cadastro oficial do Ministério da Saúde (MS) no tocante à realidade da capacidade instalada e mão-de-obra assistencial de saúde no Brasil em estabelecimentos de saúde públicos ou privados, com convênio SUS ou não.
          <br />
          <a href="https://wiki.saude.gov.br/cnes/index.php/P%C3%A1gina_principal " target="_blank" rel="noopener noreferrer"style={{ color: "#007bff" }}>Saiba mais</a>
        </>
      ),
      index: 6,
      categoria: "CNES",
    },
    {
      pergunta: "Para que serve?",
      resposta:" Em termos práticos, o CNES é utilizado pelo governo federal para a verificação e distribuição de verbas para os municípios e estados. Todos os procedimentos realizados nos estabelecimentos de saúde pública municipal geram procedimentos, quando realizamos a exportação ao governo federal, este realiza a conferência de dados do estabelecimento e profissionais com base nas informações do CNES. Assim, para que o município receba a verba federal dos procedimentos realizados é necessário que o profissional de saúde esteja cadastrado no CNES na unidade em que trabalha e por essa razão apenas liberamos o acesso ao Prontuário Eletrônico (Fast Medic) após regularização do CNES. ",
      index: 7,
      categoria: "CNES",   
    },
    {
      pergunta: "Vinculação de Servidores Novos",
      resposta:" Para inclusão no CNES, no caso de servidores novos é necessário o preenchimento das fichas 20 e 21, com anexo dos seguintes documentos: RG, CPF, comprovante de residência, cartão SUS e carteira do conselho (Quando for o caso). Em caso de dúvidas entre em contato via whatsapp: 42 9109-9622 ou 42 9145-2300",
      index: 8,
      categoria: "CNES",   
    },
    {
      pergunta: "Vinculação de Servidores Antigos",
      resposta:"Para servidores antigos, em caso de transferência, horário estendido, plantão, mutirão, etc., é necessário que o responsável pelo estabelecimento (coordenador/a) encaminhe um memorando indicando nome completo, CPF, tipo de alteração (transferência, horário estendido, plantão, mutirão, etc) do servidor para o seguinte centro de custos: SMS-CNES. Em caso de dúvidas entre em contato via whatsapp: 42 9109-9622 ou 42 9145-2300",
      index: 14,
      categoria: "CNES",   
    },
    {
      pergunta: "Como abrir um chamado",
      resposta: " Para abrir um chamado, entre em contato conosco através do nosso suporte.",
      index: 9,
      categoria: "Chamados",
    },
    {
      pergunta: "Se o computador estiver com um problema de tela preta, siga os seguintes passos:",
      resposta: (
        <ul>
          <li>- Desligue o computador e remova o cabo de rede.</li>
          <li>- Ligue o computador sem o cabo de rede.</li>
          <li>- Acesse o computador com seu usuário.</li>
          <li>- Após entrar e aparecer a área de trabalho, conecte novamente o cabo de rede azul.</li>
        </ul>
      ),
      index: 10,
      categoria: "Equipamentos",
      imagemResposta: imgDominio
    },
    
    {
      pergunta: "Caso sua impressora não esteja ligando, verifique:",
      resposta: (
        <ul>
          <li>- Se todos os cabos estão conectados.</li>
          <li>- A impressora possui uma chave interruptor atrás, verifique se ela está ligada a partir dela, no caso, ativo no risco.</li>
          <li>- Verifique se o cabo de rede está conectado e se está piscando, caso não esteja mesmo ligado, veja para abrir um chamado no GLPI.</li>
        </ul>
      ),
      index: 11,
      categoria: "Equipamentos",
    },
    {
      pergunta: "Computador não conecta na internet",

      resposta: (
        <ul>
          <li>- Caso o seu computador não esteja acessando os sites, verifique primeiramente se é somente nele ou se há outros computadores na unidade sem internet também.</li>
          <li>- Caso todos os computadores da unidade estejam desconectados, clique no botão do WhatsApp ao lado e envie uma mensagem ao DITIS informando que a unidade está sem internet para que a empresa fornecedora de internet seja contatada.</li>
          <li>- Caso seja somente em seu computador que não conseguindo acessar os sites, verifique se ele está conectado na internet.</li>
        </ul>
      ),
      index: 13,
      categoria: "Rede",

    },

    {
      pergunta: "Conectado",

      resposta: (
        <ul>
          <li>1. Icone conectado com cabo de rede</li>
          <li>2. Icone conectado com o wifi</li>
        </ul>
      ),
      index: 15,
      categoria: "Rede",
      imagemResposta: net,
      
    },

    {
      pergunta: "Desconectado",

      resposta: (
        <ul>
          <li>- Caso o computador esteja DESCONECTADO, verifique se o cabo de rede (cabo azul) que fica conectado atrás do computador está com led aceso/piscando nas duas pontas. Caso esteja apagado, efetue a abertura de chamado para suporte técnico presencial.</li>
        </ul>
      ),
      index: 16,
      categoria: "Rede",
      imagemResposta: snet,
      
    },
  ], []);

  const [categoriaSelecionada, setCategoriaSelecionada] = useState([]);
  const [perguntasFiltradas, setPerguntasFiltradas] = useState([]);
  const [mostrarResposta, setMostrarResposta] = useState({});

  useEffect(() => {
    const perguntasFiltradas = perguntasFrequentes.filter(
      (pergunta) => pergunta.categoria === categoriaSelecionada
    );
    setPerguntasFiltradas(perguntasFiltradas);

    // Se a categoria selecionada for "Chamados", abrir automaticamente a resposta para a pergunta "Como abrir um chamado"
    if (categoriaSelecionada === "Chamados") {
      const abrirRespostaAutomaticamente = {};
      const perguntaAbrirAutomaticamente = perguntasFiltradas.find(
        (pergunta) => pergunta.pergunta === "Como abrir um chamado"
      );
      abrirRespostaAutomaticamente[perguntaAbrirAutomaticamente.index] = true;
      setMostrarResposta(abrirRespostaAutomaticamente);
    }
  }, [categoriaSelecionada, perguntasFrequentes]);

  const alternarResposta = (index) => {
    setMostrarResposta({
      ...mostrarResposta,
      [index]: !mostrarResposta[index],
    });
  };

  //secao
  return (
    <section id="ajuda">
      <div className="PerguntaF_container">
        <div className="perguntas__top">
          <h2 className="sectionP__title">Perguntas Frequentes</h2>
          <p1>Encontre respostas para suas dúvidas mais frequentes abaixo:</p1>
          <div className="categoria-buttons">
            <button onClick={() => setCategoriaSelecionada("Rede")}>
              Rede
            </button>
            <button onClick={() => setCategoriaSelecionada("Equipamentos")}>
              Equipamentos
            </button>
            <button onClick={() => setCategoriaSelecionada("CNS")}>
              Cartão SUS
            </button>
            <button onClick={() => setCategoriaSelecionada("CNES")}>
              CNES
            </button>
            <button
              id="chamados"
              onClick={() => setCategoriaSelecionada("Chamados")}
            >
              Chamados
            </button>
          </div>
        </div>
        <div className="perguntas__lista">
          {perguntasFiltradas.map((pergunta) => (
            <div key={pergunta.index} className="pergunta">
              <div
                className="pergunta__titulo"
                onClick={() => alternarResposta(pergunta.index)}
              >
                <img
                  src={duvida}
                  alt="Ponto de Interrogação"
                  className="duvida"
                />
                <h3>{pergunta.pergunta}</h3>
                <span>{mostrarResposta[pergunta.index] ? "-" : "+"}</span>
              </div>
              {mostrarResposta[pergunta.index] && (
                <div>
                  {pergunta.imagemResposta && (
                    <img src={pergunta.imagemResposta} alt="Resposta" />
                  )}
                  <p className="pergunta__resposta">{pergunta.resposta}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ajuda;
