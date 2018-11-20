/* eslint-disable*/
import React from "react";
import ReactGA from "react-ga";
import { Col, Row } from "react-materialize";
import ProductItem from "../pages/products/ProductItem";

import kmcExpert from "../../img/Cards/KMC-3D-EXPERT-1.png";
import kmcEfficient from "../../img/Cards/KMC-3D-EFFICIENT-1.png";
import kmcCompact from "../../img/Cards/KMC-3D-COMPACT-1.png";

import kmc8000 from "../../img/Cards/KMC-CCD-8000-1.png";
import kmc6000 from "../../img/Cards/KMC-CCD-6000-1.png";
import kmc4000 from "../../img/Cards/KMC-CCD-4000-1.png";

import kmcFlexFull from "../../img/Cards/KMC-FLEX-FULL-1.png";
import kmcFlexStd from "../../img/Cards/KMC-FLEX-STD-1.png";

import kmcRampaHidrlHD20 from "../../img/Cards/KMC-RAMPA-20-HD.png";
import kmcRampaHidrlHD from "../../img/Cards/KMC-HD.png";

import kmcRampa10P from "../../img/Cards/KMC-RAMPA-10P.png";
import kmcRampa12PEB from "../../img/Cards/KMC-RAMPA-12P-EB.png";
import kmcRampa13P from "../../img/Cards/KMC-RAMPA-13P.png";

import kmcR4000ER from "../../img/Cards/KMC-R4000-ER.png";
import kmcR2500ER from "../../img/Cards/KMC-R2500-ER.png";

import kmcR3500TS from "../../img/Cards/KMC-R3500TS.png";
import kmcR3500TE from "../../img/Cards/KMC-R3500TE.png";
import kmcR4000P from "../../img/Cards/KMC-R4000P.png";
import kmcR4000E from "../../img/Cards/KMC-R4000E.png";
import kmcR4000S from "../../img/Cards/KMC-R4000S.png";
import kmcR4000D from "../../img/Cards/KMC-R4000D.png";
import kmcR3000D from "../../img/Cards/KMC-R3000D.png";

import kmcBal4050r from "../../img/Cards/KMC-BAL-4050R.png";
import kmcBal9000r from "../../img/Cards/KMC-9000R.png";
import kmcBal3000r from "../../img/Cards/KMC-3000R.png";
import kmcBal2100r from "../../img/Cards/KMC-2100R.png";
import kmcBal1800r from "../../img/Cards/KMC-1800R.png";

import kmcDes2100rUltra from "../../img/Cards/KMC-2100R-ULTRA-HIGH-PERFORMANCE-BLINDADOS.png";
import kmcDes1500rUltra from "../../img/Cards/KMC-1500R-ULTRA-HIGH-PERFORMANCE.png";
import kmcDes1500r from "../../img/Cards/KMC-1500R-HIGH-PERFORMANCE.png";
import kmcDes1200r from "../../img/Cards/KMC-1200R.png";
import kmcDes960r from "../../img/Cards/KMC-960R.png";
import kmcDes906r from "../../img/Cards/KMC-906R.png";
import kmcDes3030pm from "../../img/Cards/KMC-3030PM.png";

import kmcAcsMacaco from "../../img/Cards/KMC-MACACO-PNEUMATICO.png";
import kmcAcsPratoDianteiro from "../../img/Cards/KMC-PRATOS-DIANTEIROS.png";
import kmcAcsPratoTraseiro from "../../img/Cards/KMC-PRATOS-TRASEIROS.png";

import kmc18p from "../../img/Cards/KMC-BASE-18P.png";

import kmcDefFullCC from "../../img/Cards/KMC-DEFINITY-FLEX-II-FULL-PESADA-CC.png";
import kmcDefFlexSTD from "../../img/Cards/KMC-DEFINITY-FLEX-II-STD-PESADA-CC.png";

import kmcPesada3090Truck from "../../img/Cards/KMC-3090-TRUCK.png";

import kmcPesada3900Truck from "../../img/Cards/KMC-3900T.png";

export default class ProductsPageContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      kmc3d: [
        {
          title: "KMC 3D EXPERT",
          img: kmcExpert,
          modal: "kmc-3d-expert-view",
          content:
            "Toda a tecnologia dos alinhadores 3D KMC pelo melhor preço! O alinhador KMC 3D Compact é ideal para instalação em locais com pouco espaço como valetas."
        },
        {
          title: "KMC 3D EFFICIENT",
          img: kmcEfficient,
          modal: "kmc-3d-efficient-view",
          content:
            "Desenvolvido no Brasil, com tecnologia e mão de obra 100% nacionais, o alinhador KMC 3D Efficient é o modelo ideal para você que precisa de uma máquina completa e com excelente custo benefício."
        },
        {
          title: "KMC 3D COMPACT",
          img: kmcCompact,
          modal: "kmc-3d-compact-view",
          content:
            "Toda a tecnologia dos alinhadores 3D KMC pelo melhor preço! O alinhador KMC 3D Compact é ideal para instalação em locais com pouco espaço como valetas."
        }
      ],
      kmcccd: [
        {
          title: "KMC CCD 8000 WIRELESS",
          img: kmc8000,
          modal: "kmc-8000-wifi-view",
          content:
            "8 sensores CCD iRed de alta resolução, 4 Cabeças de medição, tecnologia WLAN 2.4 GHz, Função ZOOM, Checklist, ajuste com rodas elevadas e informática completa fazem do KMC 8000 WIRELESS o melhor alinhador computadorizado do mercado."
        },
        {
          title: "KMC CCD 6000 WIRELESS",
          img: kmc6000,
          modal: "kmc-6000-wifi-view",
          content:
            "Leitura de todos os parâmetros em tempo real, comunicação simultânea entre os sensores tornando a operação muito mais rápida e intuitiva.6 sensores CCD iRed de alta resolução, 4 cabeças de medição, tecnologia WLAN 2.4 GHz, Função ZOOM, Checklist, ajuste com rodas elevadas e informática completa."
        },
        {
          title: "KMC CCD 4000",
          img: kmc4000,
          modal: "kmc-4000-view",
          content:
            "4 sensores CCD iRed de alta resolução, 2 cabeças de medição, Função ZOOM, Checklist, ajuste com rodas elevadas e informática completa. Permite UPGRADE para as linhas KMC 6000 e KMC 8000"
        }
      ],
      kmcflex: [
        {
          title: "KMC DEFINITY FLEX II FULL",
          img: kmcFlexFull,
          modal: "kmc-flex-full-view",
          content:
            "O primeiro e único alinhador FLEX do Brasil, equipamento de alinhamento híbrido (computadorizado e digital) para a medição de ambos os eixos (dianteiro e traseiro). Facilidade de uso com ou sem computador."
        },
        {
          title: "KMC DEFINITY FLEX II STD",
          img: kmcFlexStd,
          modal: "kmc-flex-standard-view",
          content:
            "O primeiro e único alinhador FLEX do Brasil, equipamento de alinhamento híbrido (computadorizado e digital) para a medição de ambos os eixos (dianteiro e traseiro). Facilidade de uso com ou sem computador."
        },
        {
          title: "KMC 18P FLEX",
          img: kmcFlexStd,
          modal: "kmc-18p-flex-view",
          content:
            "Com o 18P FLEX, você pode alinhar veículos diretamente em um elevador automotivo. Solução ideal para oficinas mecânicas, com fácil manuseio otimiza espaço e processo de alinhamento."
        }
      ],
      rampahidrl: [
        {
          title: "KMC 20 HD",
          img: kmcRampaHidrlHD20,
          modal: "kmc-20hd-view",
          content:
            "A KMC 20HD é a rampa de alinhamento mais completa do mercado. Maximiza a produtividade e, ao mesmo tempo, ocupa pouco espaço."
        },
        {
          title: "KMC HD",
          img: kmcRampaHidrlHD,
          modal: "kmc-hd-view",
          content:
            "A KMC HD é a rampa de alinhamento completa e fácil de instalar. Maximiza a produtividade e, ao mesmo tempo, ocupa pouco espaço."
        }
      ],
      rampapneuma: [
        {
          title: "KMC RAMPA 10P",
          img: kmcRampa10P,
          modal: "kmc-10p-view",
          content:
            "A Rampa de Alinhamento KMC 10P oferece o melhor desempenho e segurança em sua categoria. Atende veículos com até 4,80m entre eixos e 4500 kg."
        },
        {
          title: "KMC RAMPA 12P-EB",
          img: kmcRampa12PEB,
          modal: "kmc-12p-view",
          content:
            "A Rampa de Alinhamento KMC 12P-EB oferece o melhor desempenho e segurança em sua categoria. Atende veículos com até 4,76m entre eixos e 4500 kg."
        },
        {
          title: "KMC RAMPA 13P",
          img: kmcRampa13P,
          modal: "kmc-13p-view",
          content:
            "A Rampa de Alinhamento KMC 13P oferece o melhor desempenho e segurança em sua categoria. Atende veículos com até 3,90m entre eixos e 4000 kg."
        }
      ],
      elevadoreseletromec: [
        {
          title: "KMC R4000-ER",
          img: kmcR4000ER,
          modal: "kmc-r-4000-view",
          content:
            "Alta tecnologia e absoluta segurança. Perfeito para a elevação de veículos com chassi longo (como caminhonetes), carros e utilitários de até 4 toneladas."
        },
        {
          title: "KMC R2500-ER",
          img: kmcR2500ER,
          modal: "kmc-r-2500-view",
          content:
            "Alta tecnologia e absoluta segurança. Perfeito para a elevação de veículos com chassi longo (como caminhonetes), carros e utilitários de até 2.5 toneladas."
        }
      ],
      elevadoreshidlr: [
        {
          title: "KMC R3500TS",
          img: kmcR3500TS,
          modal: "kmc-r-3500-ts-view",
          content:
            "Os elevadores pantográficos KMC R3500TS apresentam inúmeras vantagens como a otimização do espaço, instalação descomplicada e maior segurança. Ideal para carros e utilitários de até 3,5 toneladas."
        },
        {
          title: "KMC R3500TE",
          img: kmcR3500TE,
          modal: "kmc-r-3500-te-view",
          content:
            "Os elevadores pantográficos KMC R3500TE apresentam inúmeras vantagens como a otimização do espaço, instalação descomplicada e maior segurança. Ideal para carros e utilitários de até 3,5 toneladas."
        },
        {
          title: "KMC R4000P",
          img: kmcR4000P,
          modal: "kmc-r-4000p-view",
          content:
            "O elevador de coluna hidráulico KMC R4000P com pórtico fixo é perfeito para concessionárias, e grandes oficinas. Ideal para carros e utilitários de até 4 toneladas."
        },
        {
          title: "KMC R4000E",
          img: kmcR4000E,
          modal: "kmc-r-4000e-view",
          content:
            "O elevador de coluna hidráulico KMC R4000E foi desenvolvido para você que busca o melhor em elevadores de coluna. Ideal para carros e utilitários de até 4 toneladas."
        },
        {
          title: "KMC R4000S",
          img: kmcR4000S,
          modal: "kmc-r-4000s-view",
          content:
            "O elevador de coluna hidráulico KMC R4000S é o equipamento indicado para você que busca o melhor desempenho com baixíssimo investimento. Ideal para carros e utilitários de até 4 toneladas."
        },
        {
          title: "KMC R4000D",
          img: kmcR4000D,
          modal: "kmc-r-4000d-view",
          content:
            "O elevador de coluna hidráulico KMC R4000D é o equipamento indicado para você que busca o melhor desempenho com baixíssimo investimento. Ideal para carros e utilitários de até 4 toneladas."
        },
        {
          title: "KMC R3000D",
          img: kmcR3000D,
          modal: "kmc-r-3000d-view",
          content:
            "O O elevador de coluna hidráulico KMC R3000D é o equipamento indicado para você que busca o melhor desempenho com baixíssimo investimento. Ideal para carros e utilitários de até 3 toneladas."
        }
      ],
      balanceadoras: [
        {
          title: "KMC 4050R VÍDEO",
          img: kmcBal4050r,
          modal: "kmc-r-4050-view",
          content:
            "Balanceamento estático e dinâmico em rodas de automóveis, caminhonetes e utilitários leves, com sistemas de diagnóstico e calibração automáticos."
        },
        {
          title: "KMC 9000R",
          img: kmcBal9000r,
          modal: "kmc-9000-r-view",
          content:
            "Balanceamento estático e dinâmico em rodas de automóveis, caminhonetes e utilitários leves."
        },
        {
          title: "KMC 3000R",
          img: kmcBal3000r,
          modal: "kmc-3000-r-view",
          content:
            "Balanceamento estático e dinâmico em rodas de automóveis, perfeito para caminhonetes e utilitários leves."
        },
        {
          title: "KMC 2100R",
          img: kmcBal2100r,
          modal: "kmc-2100-r-view",
          content:
            "Balanceamento estático e dinâmico em rodas de automóveis, muito usado em caminhonetes e utilitários leves."
        },
        {
          title: "KMC 1800R",
          img: kmcBal1800r,
          modal: "kmc-1800-r-view",
          content:
            "Balanceamento estático e dinâmico em rodas de automóveis, usado em caminhonetes e utilitários leves."
        }
      ],
      desmontadoras: [
        {
          title: "KMC 2100R ULTRA HIGH PERFORMANCE BLINDADOS",
          img: kmcDes2100rUltra,
          modal: "kmc-r-2100-view",
          content:
            "Máquina completa com recursos para a operação com pneus de perfil baixo, inclusive pneus blindados."
        },
        {
          title: "KMC 1500R ULTRA HIGH PERFORMANCE",
          img: kmcDes1500rUltra,
          modal: "kmc-r-1500-ultra-view",
          content:
            "Máquina completa com recursos para a operação com pneus de perfil baixo, inclusive pneus blindados."
        },
        {
          title: "KMC 1500R HIGH PERFORMANCE",
          img: kmcDes1500r,
          modal: "kmc-r-1500-view",
          content:
            "Máquina completa com recursos para a operação com pneus de perfil baixo, inclusive pneus blindados."
        },
        {
          title: "KMC 1200R",
          img: kmcDes1200r,
          modal: "kmc-r-1200-view",
          content:
            "Montadora/desmontadora apta para aros grandes, até 26”. 02 colunas com dispositivos auxiliares pneumáticos, coluna vertical articulável pneumaticamente e cabeçote Automático"
        },
        {
          title: "KMC 960R",
          img: kmcDes960r,
          modal: "kmc-r-960-view",
          content:
            "Maquina completa com recursos para a operação com pneus de perfil baixo."
        },
        {
          title: "KMC 906R",
          img: kmcDes906r,
          modal: "kmc-r-906-view",
          content:
            "Maquina completa com recursos para a operação com pneus de perfil baixo."
        },
        {
          title: "KMC 3030PM",
          img: kmcDes3030pm,
          modal: "kmc-r-3030-view",
          content:
            "Equipamento auxiliar devendo operar em conjunto com as desmontadoras KMC 906 ou similar."
        }
      ],
      acessorios: [
        {
          title: "KMC MACACO PNEUMÁTICO",
          img: kmcAcsMacaco,
          modal: "kmc-macaoo-pneumatico-view",
          content: "Acessório original para Rampas KMC"
        },
        {
          title: "KMC PRATOS DIANTEIROS",
          img: kmcAcsPratoDianteiro,
          modal: "kmc-acessorio-pratos-dianteiro-view",
          content:
            "Possui duas travas entre base e prato, montados com esferas de nylon, aplicável em Rampa ou Valeta"
        },
        {
          title: "KMC PRATOS TRASEIROS",
          img: kmcAcsPratoTraseiro,
          modal: "kmc-acessorio-pratos-traseiro-view",
          content:
            "Possui duas travas entre base e prato, montados com esferas de nylon, aplicável em Rampa ou Valeta"
        }
      ],
      baseAlinhamento: [
        {
          title: "KMC 18p",
          img: kmc18p,
          modal: "kmc-18p-view",
          content:
            "Alinhamento sem necessidade de rampa ou valeta! Solução ideal para Oficinas Mecânicas, com fácil manuseio, otimiza espaço e o processo de alinhamento."
        }
      ],
      pesadaAlinhadores: [
        {
          title: "KMC DEFINITY FLEX II FULL PESADA CC",
          img: kmcDefFullCC,
          modal: "kmc-flex-pesada-view",
          content:
            "O primeiro e único alinhador FLEX do Brasil, equipamento de alinhamento híbrido (computadorizado e digital) para a medição de ambos os eixos (dianteiro e traseiro). Facilidade de uso com ou sem computador. Alinhamento em: ONIBUS - CAMINHÃO - CARRETA"
        },
        {
          title: "KMC DEFINITY FLEX II STD PESADA CC",
          img: kmcDefFlexSTD,
          modal: "kmc-flex-std-pesada-view",
          content:
            "O primeiro e único alinhador FLEX do Brasil, equipamento de alinhamento híbrido (computadorizado e digital) para a medição de ambos os eixos (dianteiro e traseiro). Facilidade de uso com ou sem computador. Alinhamento em: ONIBUS - CAMINHÃO - CARRETA"
        },
        {
          title: "KMC DEFINITY FLEX II STD PESADA SC",
          img: kmcDefFlexSTD,
          modal: "kmc-flex-pesada-sem-carreta-view",
          content:
            "O primeiro e único alinhador FLEX do Brasil, equipamento de alinhamento híbrido (computadorizado e digital) para a medição de ambos os eixos (dianteiro e traseiro). Facilidade de uso com ou sem computador. Alinhamento em: ONIBUS - CAMINHÃO (s/ reboque)"
        }
      ],
      pesadaBalanceadoras: [
        {
          title: "KMC 3090 TRUCK",
          img: kmcPesada3090Truck,
          modal: "kmc-3090-truck-view",
          content:
            "Balanceamento estático e dinâmico em rodas de veículos da linha pesada. Acionamento motorizado com baixa rotação, programas de balanceamento com todas as possibilidades de aplicação de contrapesos (07 combinações possíveis), auto calibração efetuada pelo próprio operador. Alinhamento em: ONIBUS - CAMINHÃO - CARRETA"
        }
      ],
      pesadaDesmontadoras: [
        {
          title: "KMC 3900 TRUCK",
          img: kmcPesada3900Truck,
          modal: "kmc-3900-truck-view",
          content: "Aplicável em pneus com ou sem câmara"
        }
      ]
    };
  }

  render() {
    const { id } = this.props.match.params;
    ReactGA.pageview(`/produtos/${id}`);
    return (
      <div>
        <Row>
          <Col offset="" s={12} m={12} l={12}>
            <h1>{id}</h1>
            {id === "KMC 3D" ? <ProductItem itens={this.state.kmc3d} /> : ""}
            {id === "KMC CCD" ? <ProductItem itens={this.state.kmcccd} /> : ""}
            {id === "KMC FLEX" ? (
              <ProductItem itens={this.state.kmcflex} />
            ) : (
              ""
            )}
            {id === "Rampas Hidráulicas" ? (
              <ProductItem itens={this.state.rampahidrl} />
            ) : (
              ""
            )}
            {id === "Rampas Pneumáticas" ? (
              <ProductItem itens={this.state.rampapneuma} />
            ) : (
              ""
            )}
            {id === "Elevadores Eletromecânicos" ? (
              <ProductItem itens={this.state.elevadoreseletromec} />
            ) : (
              ""
            )}
            {id === "Elevadores Hidráulicos" ? (
              <ProductItem itens={this.state.elevadoreshidlr} />
            ) : (
              ""
            )}
            {id === "Balanceadoras" ? (
              <ProductItem itens={this.state.balanceadoras} />
            ) : (
              ""
            )}
            {id === "Desmontadoras" ? (
              <ProductItem itens={this.state.desmontadoras} />
            ) : (
              ""
            )}
            {id === "Acessórios" ? (
              <ProductItem itens={this.state.acessorios} />
            ) : (
              ""
            )}
            {id === "Base-Alinhamento" ? (
              <ProductItem itens={this.state.baseAlinhamento} />
            ) : (
              ""
            )}
            {id === "Linha Pesada - Alinhadores" ? (
              <ProductItem itens={this.state.pesadaAlinhadores} />
            ) : (
              ""
            )}
            {id === "Linha Pesada - Balanceadoras" ? (
              <ProductItem itens={this.state.pesadaBalanceadoras} />
            ) : (
              ""
            )}
            {id === "Linha Pesada - Desmontadoras" ? (
              <ProductItem itens={this.state.pesadaDesmontadoras} />
            ) : (
              ""
            )}
          </Col>
        </Row>
      </div>
    );
  }
}
