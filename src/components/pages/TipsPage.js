import React from "react";
import Typist from "react-typist";
import PropTypes from "prop-types";
import { Row, Col, Button } from "react-materialize";
import Slogan from "../../components/utils/Slogan";
import MapBr from "../../components/utils/Br";
import "../../css/TipsPage.css";

import dicasCapa from "../../img/Background/dicas-background.jpg";

const reps = [
  {
    id: 1,
    name: "string",
    state: "santacatarina"
  },
  {
    id: 2,
    name: "olar",
    state: "parana"
  }
];

function byState(state) {
  return rep => rep.state === state;
}

class TipsPage extends React.Component {
  static defaultProps = {
    messages: {
      title: "Olá, selecione o estado para filtrar os representantes:",
      empty: "Nenhum representante neste estado."
    }
  };
  state = {
    typing: true,
    active: null,
    filtered: []
  };
  done = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true });
    });
  };

  handleSelect = (e, where) => {
    this.setState(state => ({
      active: state.active === where ? null : where,
      filtered: state.active === where ? [] : reps.filter(byState(where))
    }));
  };

  render() {
    const { messages } = this.props;
    const { filtered, active } = this.state;
    return (
      <div>
        <Col s={10} m={12}>
          <Slogan title={"GOOMEC"} image={dicasCapa} />
        </Col>
        <Row>
          <Col offset="s1 m1 l1" s={10} m={5} l={5}>
            <MapBr onClick={this.handleSelect} active={active} />

            {active && !filtered.length && <p>{messages.empty}</p>}

            {filtered.map(rep => (
              <div key={rep.name}>
                {rep.name} -{rep.state}
              </div>
            ))}
          </Col>
          <Col
            className="sub-slogan center-align"
            offset="s1 m1 l1"
            s={10}
            m={5}
            l={5}
          >
            <h2>
              AUMENTE SEU PODER DE VENDAS, CONHEÇA A MAIOR PLATAFORMA DE
              ACELERAÇÃO DE NEGÓCIO
              <br />
              <span style={{ color: "red" }}>DO BRASIL</span>
              <br />
              SOLUÇÕES INTELIGENTES <br />
              <div>
                {/* onTypingDone={this.done} Para loop */}
                {this.state.typing ? (
                  <Typist>
                    <span>
                      TRAZEM OPORTUNIDADES: <br />
                    </span>

                    <span style={{ color: "red" }}>PARA MECÂNICO</span>
                    <br />
                    <Typist.Delay ms={3000} />
                    <span style={{ color: "red" }}>PARA O COMERCIANTE</span>
                    <br />
                    <Typist.Delay ms={3000} />
                    <span style={{ color: "red" }}>PARA A AUTO-LOJA</span>
                  </Typist>
                ) : (
                  ""
                )}
              </div>
            </h2>
          </Col>
        </Row>
      </div>
    );
  }
}

TipsPage.propTypes = {
  messages: PropTypes.string.isRequired
};

export default TipsPage;
