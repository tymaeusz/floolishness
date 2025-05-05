 // Motivos genéricos de cancelamento
    let motivosCancelamento = [];

    // Carrega os motivos via fetch
    async function carregarMotivos() {
    try {
        const resposta = await fetch('https://raw.githubusercontent.com/tymaeusz/floolishness/main/data.json');
        if (!resposta.ok) throw new Error("Erro ao carregar motivos.");
        motivosCancelamento = await resposta.json();
    } catch (erro) {
        console.error("Erro ao buscar motivos de cancelamento:", erro);
        motivosCancelamento = ["motivo desconhecido (falha na carga de dados)."];
    }
    }

    // Garante que o fetch ocorre antes de tudo
    carregarMotivos();



    // Mensagem especial para tymaeus
    const CANCELAMENTO_TYMAEUS = `
  <span class="erro-assustador">
    ERRO FATAL: tymaeus foi cancelado(a) por ser uma calamidade arcana de nível desconhecido. 
    

        <div class="hero-container">
      <div class="environment"></div>
      <span class="hero glitch layers" data-text=" Ocultamento falhou. O vazio está te observando."><span> Ocultamento falhou. O vazio está te observando.</span></span>
    </div>

    
  </span>
`;

  
    function cancelar() {
      const campoNome = document.getElementById("nome");
      const resultadoElemento = document.getElementById("resultado");
  
      try {
        const nomeUsuario = campoNome.value.trim().toLowerCase();
  
        if (!nomeUsuario) {
          resultadoElemento.innerHTML = "";
          return;
        }
  
        if (nomeUsuario === "tymaeus") {
          resultadoElemento.innerHTML = CANCELAMENTO_TYMAEUS;
          return;
        }
  
        const motivoAleatorio = obterMotivoAleatorio(motivosCancelamento);
        resultadoElemento.innerHTML = `
          <strong>${nomeUsuario}</strong> foi cancelado(a) por: <strong>${motivoAleatorio}</strong>`;
          
      } catch (erro) {
        console.error("Erro ao gerar cancelamento:", erro);
        resultadoElemento.innerHTML = `
          <span class="erro-assustador">
            Ocorreu um erro inesperado. O sistema de cancelamento foi comprometido.
          </span>`;
      }
    }
  
    function obterMotivoAleatorio(lista) {
      const indice = Math.floor(Math.random() * lista.length);
      return lista[indice];
    }